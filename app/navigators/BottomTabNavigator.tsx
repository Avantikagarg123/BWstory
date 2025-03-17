import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen } from "app/screens/ProfileScreen";
import { DiscoverScreen } from "app/screens";
import { Icon } from "app/components";

export type BottomTabParamList = {
  Welcome: undefined;
  Profile: undefined;
  Discover: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: "compass" | "user" = "compass"; // Default fallback icon
          if (route.name === "Discover") {
            iconName = "compass";
          } else if (route.name === "Profile") {
            iconName = "user";
          }
          return <Icon icon={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#0B2B26", // Active tab color
        tabBarInactiveTintColor: "gray", // Inactive tab color
      })}
    >
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
