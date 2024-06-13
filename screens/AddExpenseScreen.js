import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/screenWrapper";
import { Colors } from "../theme";
import BackButton from "../components/backButton";
import { useNavigation } from "@react-navigation/native";
import { categories } from "../constants/index";

export default function AddExpenseScreen() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const navigation = useNavigation();

  const handleAddExpense = () => {
    if (title && amount && category) {
      Alert.alert(
        "Expense Added",
        "Your expense has been successfully added!",
        [{ text: "OK", onPress: () => navigation.goBack() }]
      );
    } else {
      // Show error
      // You can implement error handling logic here if necessary
    }
  };

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className='className="relative mt-5"'>
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>
            <Text className={`${Colors.heading} text-xl font-bold text-center`}>
              Add Expense
            </Text>
          </View>
          <View>
            <Image
              className="h-72 w-72"
              source={require("../assets/expenseBanner.png")}
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${Colors.heading} text-lg font-bold`}>
              For What?
            </Text>
            <TextInput
              value={title}
              onChangeText={(value) => setTitle(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${Colors.heading} text-lg font-bold`}>
              How Much?
            </Text>
            <TextInput
              value={amount}
              onChangeText={(value) => setAmount(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
          </View>
          <View className="space-x-2 mx-2">
            <Text className="text-lg font-bold">Category</Text>
            <View className=" flex-row flex-wrap items-center">
              {categories.map((cat) => {
                let bgColor = "bg-white";
                if (cat.value === category) bgColor = "bg-green-500";

                return (
                  <TouchableOpacity
                    onPress={() => setCategory(cat.value)}
                    key={cat.value}
                    className={`rounded-full ${bgColor} px-4 p-3 mb-2 mr-2`}
                  >
                    <Text>{cat.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleAddExpense}
            style={{ backgroundColor: Colors.button }}
            className="my-6 rounded-full p-3 shadow-sm mx-2"
          >
            <Text className="text-center text-white font-bold text-lg">
              Add Expense
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
