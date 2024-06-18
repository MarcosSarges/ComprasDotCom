import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "@screens/Home";
import Cart from "@screens/Cart";

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootRouter: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default RootRouter;
