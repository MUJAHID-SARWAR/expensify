import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/screenWrapper";
import { Colors } from "../theme";
import BackButton from "../components/backButton";
import { useNavigation } from "@react-navigation/native";
import { ToastAndroid } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (email && password) {
      // navigation.goBack();
      // navigation.navigate("Home");

      await signInWithEmailAndPassword(auth, email, password);
    } else {
      ToastAndroid.show("Email and Password are required!", ToastAndroid.LONG);
    }
  };
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className='className="relative "'>
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>

            <Text className={`${Colors.heading} text-xl font-bold text-center`}>
              Sign In
            </Text>
          </View>

          <View>
            <Image
              className="h-80 w-80"
              source={require("../assets/login.png")}
            />
          </View>

          <View className="space-y-2 mx-2">
            <Text className={`${Colors.heading} text-lg font-bold`}>Email</Text>
            <TextInput
              value={email}
              onChangeText={(value) => setEmail(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${Colors.heading} text-lg font-bold`}>
              Password
            </Text>
            <TextInput
              value={password}
              secureTextEntry
              onChangeText={(value) => setPassword(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <TouchableOpacity className=" flex-row justify-end">
              <Text>Forget Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{ backgroundColor: Colors.button }}
            className="my-6 rounded-full p-3 shadow-sm mx-2"
          >
            <Text className="text-center text-white font-bold text-lg">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
