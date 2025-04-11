import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";

export default function Product() {
  const { product } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
        }}
      />
      <View>
        <Text>Product</Text>
      </View>
    </>
  );
}
