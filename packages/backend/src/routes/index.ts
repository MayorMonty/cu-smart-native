import auth from "./auth"
import feedback from "./feedback"
import data from "./data"
import takeout from "./takeout"

import app, { logger } from "../main"
import winston from "winston"
import expressWinston from "express-winston"
import express from "express"
import { join } from "path"

// Setup logging 
app.use(expressWinston.logger({
    winstonInstance: logger,
  }));

// Static files
app.use(express.static(
    join(__dirname, "../../../frontend/web-build")
));

// Routers
app.use(auth);
app.use(feedback);
app.use(data);
app.use(takeout);

// Default handlers
app.use((req, res) => {
    res.status(404).json({
        "status": "error",
        "error_message": "Could not find route specified"
    });
});

// Error handling 
app.use(expressWinston.errorLogger({
  winstonInstance: logger,
  }));