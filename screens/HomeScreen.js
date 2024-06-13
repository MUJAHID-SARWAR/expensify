import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import ScreenWrapper from "../components/screenWrapper";
import { Colors } from "../theme";
import randomImage from "../assets/randomimage";
import EmptyList from "../components/emptyList";
import { useNavigation } from "@react-navigation/native";
// import { signOut } from "firebase/auth";
// import { auth } from "../config/firebase";

const item = [
  {
    id: 1,
    place: "Gujrat",
    country: "Pakistan",
  },
  {
    id: 2,
    place: "London-Eye",
    country: "England",
  },
  {
    id: 3,
    place: "Washington dc",
    country: "America",
  },
  {
    id: 4,
    place: "New York",
    country: "America",
  },
  {
    id: 5,
    place: "Delhi",
    country: "India",
  },
  {
    id: 6,
    place: "Tokyo",
    country: "Japan",
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const [showWelcomeAlert, setShowWelcomeAlert] = useState(false);

  // const handleLogout = () => {
  //   signOut(auth);
  //   navigation.navigate("Welcome");
  // };

  useEffect(() => {
    // Show the welcome alert when the component mounts
    setShowWelcomeAlert(true);
  }, []);

  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${Colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        {/* <TouchableOpacity
          onPress={handleLogout}
          className="p-2 px-3 bg-white border border-gray-200 rounded-full"
        >
          <Text className={Colors.heading}>Logout</Text>
        </TouchableOpacity> */}
      </View>
      <View className="flex-row items-center justify-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image source={require("../assets/banner.png")} className="w-60 h-60" />
      </View>
      <View className="px-4 space-y-1">
        <View className="flex-row justify-between items-center">
          <Text className={`${Colors.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddTrip")}
            className="p-2 px-3 bg-white border border-gray-200 rounded-full"
          >
            <Text className={Colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 430 }}>
          <FlatList
            data={item}
            numColumns={2}
            ListEmptyComponent={
              <EmptyList message={`You haven't recorded any trips yet`} />
            }
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            className="mx-1"
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("TripExpenses", { ...item })
                  }
                  className="bg-white p-1 rounded-2xl mb-1 shadow-sm"
                >
                  <View>
                    <Image source={randomImage()} className="w-36 h-36 mb-0" />
                    <Text className={`${Colors.heading} font-bold `}>
                      {item.place}
                    </Text>
                    <Text className={`${Colors.heading} text-sm `}>
                      {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      {showWelcomeAlert &&
        Alert.alert(
          "Welcome!",
          "Thank you for signing up. Enjoy using Expensify!",
          [{ text: "OK", onPress: () => setShowWelcomeAlert(false) }]
        )}
    </ScreenWrapper>
  );
}
