import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../theme";

export default function ExpenseCard({ item }) {
  return (
    <View className="flex-row justify-between items-center p-3 px-5 mb-3 bg-slate-300 rounded-xl">
      <View>
        <Text className={`${Colors.heading} font-bold`}>{item.title}</Text>
        <Text className={`${Colors.heading} font-xs`}>{item.category}</Text>
      </View>
      <View>
        <Text>${item.amount}</Text>
      </View>
    </View>
  );
}
