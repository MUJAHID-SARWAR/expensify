import React from "react";
import { TouchableOpacity } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { Colors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="bg-blue-100 rounded-full h-8 w-8 "
    >
      <ChevronLeftIcon size="30" color={Colors.button} />
    </TouchableOpacity>
  );
}
