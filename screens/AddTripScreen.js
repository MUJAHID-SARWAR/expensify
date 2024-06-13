import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import ScreenWrapper from "../components/screenWrapper";
import { Colors } from "../theme";
import BackButton from "../components/backButton";
import { useNavigation } from "@react-navigation/native";

export default function AddTripScreen() {
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");
  const [showError, setShowError] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  const navigation = useNavigation();

  const handleTrip = () => {
    if (place && country) {
      Alert.alert("Trip Added", "Your trip has been successfully added!", [
        { text: "OK", onPress: () => navigation.navigate("Home") },
      ]);
    } else {
      // Show error
      setShowError(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    if (showError) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [showError]);

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className='className="relative mt-5"'>
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>
            <Text className={`${Colors.heading} text-xl font-bold text-center`}>
              Add Trip
            </Text>
          </View>

          <View>
            <Image className="h-72 w-72" source={require("../assets/4.png")} />
          </View>

          <View className="space-y-2 mx-2">
            <Text className={`${Colors.heading} text-lg font-bold`}>
              Where On Earth?
            </Text>
            <TextInput
              value={place}
              onChangeText={(value) => setPlace(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${Colors.heading} text-lg font-bold`}>
              Which Country
            </Text>
            <TextInput
              value={country}
              onChangeText={(value) => setCountry(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleTrip}
            style={{ backgroundColor: Colors.button }}
            className="my-6 rounded-full p-3 shadow-sm mx-2"
          >
            <Text className="text-center text-white font-bold text-lg">
              Add Trip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {showError && (
        <Animated.View
          style={{
            ...styles.alertContainer,
            opacity: fadeAnim,
          }}
        >
          <View style={styles.alert}>
            <Text style={styles.alertMessage}>
              Please fill in both Place and Country fields.
            </Text>
          </View>
        </Animated.View>
      )}
    </ScreenWrapper>
  );
}

const styles = {
  alertContainer: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    zIndex: 9999,
    alignItems: "center",
    opacity: 0,
  },
  alert: {
    padding: 16,
    backgroundColor: "#FF4444",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  alertMessage: {
    color: "#FFF",
    fontWeight: "bold",
  },
};
