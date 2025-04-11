import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Info() {
  const { info } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen
        options={{
          headerBackTitle: "Profile",
          headerTitle: "Info",
        }}
      />
      <View>
        <Text>Info {info}</Text>
      </View>
    </>
  );
}
