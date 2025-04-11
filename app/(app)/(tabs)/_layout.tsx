import { IconSymbol } from "@/components/ui/IconSymbol";
import { Tabs } from "expo-router";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(settings)"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <IconSymbol name="gearshape.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(product)"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol name="map.circle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            // <IconSymbol name="person.fill" color={color} />
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
