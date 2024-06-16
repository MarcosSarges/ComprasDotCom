import React from "react";
import { Button, FlatList, ActivityIndicator } from "react-native";
import useProducts, { IProductsStore } from "@store/useProducts";
import useFetchWithStore from "@hooks/useFetchWithStore";
import ProductCard from "./components/ProductCard";
import * as S from "./styles";

const Home: React.FC = () => {
  const { products, loading, error, fetch } =
    useFetchWithStore<IProductsStore>(useProducts);

  if (loading) {
    return (
      <S.ContainerLoading>
        <ActivityIndicator size="large" />
        <S.Title>Estamos buscando os produtos</S.Title>
      </S.ContainerLoading>
    );
  } else if (error) {
    return (
      <S.ContainerLoading>
        <S.Title style={{ marginBottom: 8 }}>
          Infelizmente não foi possível carregar os produtos
        </S.Title>
        <Button onPress={fetch} title="Tentar Novamente" />
      </S.ContainerLoading>
    );
  }

  return (
    <S.Container>
      <FlatList
        numColumns={2}
        data={products}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <ProductCard {...item} />}
      />
    </S.Container>
  );
};

export default Home;
