import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function Settings() {
  const { id } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Settings",
          headerBackTitle: "Index",
        }}
      />
      <View>
        <Text>Settings {id}</Text>
      </View>
    </>
  );
}
