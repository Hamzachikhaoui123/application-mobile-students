import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../pages/home/home";



const HomeStack = createStackNavigator();


export const HomeStackScreen = () => {
  const { colors } = useTheme();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
      }}
    >
      
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};
