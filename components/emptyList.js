import { View, Text, Image } from "react-native";
import React from "react";

export default function emptyList({ message }) {
  return (
    <View className="flex justify-center items-center my-5 space-y-3">
      <Image
        source={require("../assets/empty.png")}
        className="w-36 h-36 shadow"
      />
      <Text className="font-bold text-gray-400">
        {message || "Data is not found"}
      </Text>
    </View>
  );
}
