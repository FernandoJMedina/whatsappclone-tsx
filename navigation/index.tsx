import { View, StyleSheet } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import Colors from "../constants/Colors";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={navScreenOpts}>
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={rootScreenOpts}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

const navScreenOpts = {
  headerStyle: {
    backgroundColor: Colors.light.tint,
    shadowOpacity: 0,
    elevation: 0,
  },
  headerTintColor: Colors.light.background,
  headerTitleAlign: "left",
  headerTitleStyle: {
    fontWeight: "bold",
  },
} as StackNavigationOptions;

const rootScreenOpts = {
  title: "WhatsApp",
  headerRight: () => (
    <View style={styles.headerRight}>
      <Octicons name='search' size={22} color='white' />
      <MaterialCommunityIcons name='dots-vertical' size={22} color='white' />
    </View>
  ),
};

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
    marginRight: 10,
  },
});
