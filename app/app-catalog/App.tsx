import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Updates from "expo-updates";
import Routes from "./src/routes";

export default function App() {
  async function checkupdates() {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  }

  React.useEffect(() => {
    checkupdates();
  }, []);
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
