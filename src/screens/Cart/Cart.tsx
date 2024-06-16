import React, { useEffect } from "react";
import * as S from "./styles";
import useHeader from "@store/useHeader";

const Cart: React.FC = () => {
  const { setConfig, setOldConfig } = useHeader();

  useEffect(() => {
    setConfig({
      showCart: false,
      showTitle: true,
      showBack: true,
    });
    return () => {
      setOldConfig();
    };
  }, []);
  return <S.Container />;
};

export default Cart;
