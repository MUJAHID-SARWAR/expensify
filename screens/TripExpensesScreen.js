import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import ScreenWrapper from "../components/screenWrapper";
import { Colors } from "../theme";
// import randomImage from "../assets/randomimage";
import EmptyList from "../components/emptyList";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/backButton";
import ExpenseCard from "../components/expenseCard";

const items = [
  {
    id: 1,
    title: "ate sandwhich",
    amount: 4,
    category: "food",
  },
  {
    id: 2,
    title: "bought a jacket",
    amount: 30,
    category: "shopping",
  },
  {
    id: 3,
    title: "watched a move",
    amount: 500,
    category: "entertainment",
  },
];

export default function TripExpensesScreen(props) {
  const { id, place, country } = props.route.params;
  const navigation = useNavigation();

  return (
    <ScreenWrapper className="flex-1">
      <View className="px-4">
        <View className='className ="relative mt-5"'>
          <View className="absolute top-0 left-0">
            <BackButton />
          </View>
          <View>
            <Text className={`${Colors.heading} text-xl font-bold text-center`}>
              {place}
            </Text>
            <Text className={`${Colors.heading} text-xs text-center`}>
              {country}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center justify-center rounded-xl  mb-4">
          <Image source={require("../assets/7.png")} className="w-80 h-80" />
        </View>
        <View className="space-y-1">
          <View className="flex-row justify-between items-center">
            <Text className={`${Colors.heading} font-bold text-xl`}>
              Expenses
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddExpense")}
              className="p-2 px-3 bg-white border border-gray-200 rounded-full"
            >
              <Text className={Colors.heading}>Add Expense</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 430 }}>
            <FlatList
              data={items}
              ListEmptyComponent={
                <EmptyList message={`You haven't recorded any expenses yet`} />
              }
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              className="mx-1"
              renderItem={({ item }) => {
                return <ExpenseCard item={item} />;
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
