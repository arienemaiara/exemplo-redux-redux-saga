import React from "react";
import { MdShoppingBasket } from "react-icons/md";

import { Container, Cart } from "./styles";

function Header() {
  return (
    <Container>
      <div></div>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default Header;
