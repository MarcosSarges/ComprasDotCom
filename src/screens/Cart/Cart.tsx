import React, { useEffect } from "react";
import * as S from "./styles";
import useHeader from "@store/useHeader";
import { FlatList, Text } from "react-native";
import useCart from "@store/useCart";

const Cart: React.FC = () => {
  const { items } = useCart();

  return (
    <S.Container>
      <FlatList
        data={items}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </S.Container>
  );
};

export default Cart;
