import React from "react";
import { connect } from "react-redux";

import { MdShoppingBasket } from "react-icons/md";

import { Container, Cart } from "./styles";

function Header({ cartSize }) {
  return (
    <Container>
      <div></div>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length, //.cart é o nome do reducer
}))(Header);
