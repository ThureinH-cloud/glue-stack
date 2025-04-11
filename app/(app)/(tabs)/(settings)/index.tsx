import { Link, useRouter } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Index</Text>
      {/* <Link href="/setting">Settings</Link> */}
      <Button
        title="Settings"
        onPress={() =>
          router.navigate({
            pathname: "/setting",
            params: {
              id: 1,
            },
          })
        }
      ></Button>
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
