import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "@screens/Home";
import Header from "./components/Header";
import Cart from "@screens/Cart";

const Stack = createStackNavigator();

const RootRouter: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default RootRouter;
