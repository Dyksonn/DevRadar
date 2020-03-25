import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultStyles}>
        <Stack.Screen name="Main" component={Main} options={stylesMain} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={stylesProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const defaultStyles = {
  headerStyle: {
    backgroundColor: "#7D40E7"
  },
  headerTintColor: "#FFF",
  headerTitleAlign: "center"
};
const stylesMain = {
  title: "DevRadar"
};
const stylesProfile = {
  title: "Perfil no Github"
};

export default Routes;
