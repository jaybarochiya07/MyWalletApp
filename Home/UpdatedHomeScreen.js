import React from "react";
import { View, Text } from "react-native";

export default function UpdatedHomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome, Robert</Text>
      <Text>$1200.00</Text>
      <Text>Total Earned: $5360</Text>
    </View>
  );
}