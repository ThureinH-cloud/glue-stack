import { Link, useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Profile() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>profile</Text>
      {/* <Button
        title="Profile"
        onPress={() =>
          router.navigate({
            pathname: "/profile",
            params: {
              info: 1,
            },
          })
        }
      ></Button> */}
      <Link href={"/profile/112"}> Go to profile</Link>
      <Link href={"/login"} replace>
        {" "}
        Logout{" "}
      </Link>
      <Button title="Logout" onPress={() => router.replace("/login")} />
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
