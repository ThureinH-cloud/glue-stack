import { Link, Stack } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";

export default function Login() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SafeAreaView>
        <Text>Login</Text>
      </SafeAreaView>
      <Link href={"/profile"}>Profile</Link>
    </>
  );
}
