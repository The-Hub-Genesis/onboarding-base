import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from "./screens/LoginScreen";
import Navigator from "./navigate/NavigationStack";

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (setIsFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return <Navigator />;
  } else {
    return <LoginScreen />;
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
