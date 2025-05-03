import { useCount } from "@/provider/countContext";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Explore() {
  const { count, increase, decrease } = useCount();
  return (
    <View style={styles.container}>
      <Text>explore</Text>
      <Link href={"/111"}>Product </Link>
      <Text>{count}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text onPress={increase}>+</Text>
        <Text onPress={decrease}>-</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
