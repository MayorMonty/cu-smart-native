import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { NativeBaseProvider } from "native-base";
import theme from "./theme/theme";

console.log(process.env.DEV);

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigator />
    </NativeBaseProvider>
  );
};

export default App;
