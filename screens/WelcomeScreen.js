import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ScreenWrapper from "../components/screenWrapper";
import { Colors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View className="h-full flex justify-around">
        <View className="flex-row items-center mt-1">
          <Image
            source={require("../assets/welcome.gif")}
            className="h-96 w-96 shadow"
          />
        </View>
        <View>
          <Text
            className={`${Colors.heading} text-center font-bold text-3xl mb-10  `}
          >
            Expensify
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            className="shadow p-3 rounded-full mb-5"
            style={{ backgroundColor: Colors.button }}
          >
            <Text className="text-center text-lg text-white font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            className="shadow p-3 rounded-full"
            style={{ backgroundColor: Colors.button }}
          >
            <Text className="text-center text-lg text-white font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
