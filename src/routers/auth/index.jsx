
import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
   


import Login from "../../pages/auth/login";

const AuthStack = createStackNavigator();


export const AuthStackScreen = () => (
  <AuthStack.Navigator
  screenOptions={{
    headerShown: false,
    gestureEnabled: true,
    cardOverlayEnabled: true,
  }}
  >
  
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    />

  
  </AuthStack.Navigator>
);
