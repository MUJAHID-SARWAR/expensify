import { View, StatusBar } from "react-native";
import React from "react";

export default function ScreenWrapper({ children }) {
  let statusBarHeight = StatusBar.currentHeight || 30; // Use 30 as default height
  return <View style={{ paddingTop: statusBarHeight }}>{children}</View>;
}
