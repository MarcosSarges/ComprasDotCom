import React from "react";
import * as S from "./styles";
import { FlatList } from "react-native";
import useCart from "@store/useCart";
import Header from "@components/Header";
import ItemCheckOut from "./components/ItemCheckOut";
import { formatMoney } from "@helpers/moneyCalc";

const Cart: React.FC = () => {
  const { items, totalPrice, add, remove } = useCart();

  return (
    <S.Container>
      <Header title="Carrinho" showTitle showBack />
      <S.Content>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <S.Title>Carrinho vazio</S.Title>}
          data={items}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <ItemCheckOut
              {...item}
              onAdd={() => {
                add({ ...item, quantity: 1 });
              }}
              onRemove={() => {
                remove({ ...item, quantity: 1 });
              }}
            />
          )}
        />
      </S.Content>
      <S.Summary>
        <S.Title>Total: {formatMoney(totalPrice)}</S.Title>
      </S.Summary>
    </S.Container>
  );
};

export default Cart;
