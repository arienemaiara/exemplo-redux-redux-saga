import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

import { Container, ProductTable, Total } from "./styles";

import { formatPrice } from "../../util/format";
import * as CartActions from "../../store/modules/cart/actions";

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  const renderCartProduct = (product) => (
    <tr>
      <td>
        <img src={product.image} alt={product.title} />
      </td>
      <td>
        <strong>{product.title}</strong>
        <span>{product.priceFormatted}</span>
      </td>
      <td>
        <div>
          <button type="button">
            <MdRemoveCircleOutline
              size={20}
              color="#e55a6f"
              onClick={() => decrement(product)}
            />
          </button>
          <input type="number" readOnly value={product.amount} />
          <button type="button">
            <MdAddCircleOutline
              size={20}
              color="#e55a6f"
              onClick={() => increment(product)}
            />
          </button>
        </div>
      </td>
      <td>
        <strong>{product.subtotal}</strong>
      </td>
      <td>
        <button type="button" onClick={() => removeFromCart(product.id)}>
          <MdDelete size={20} color="#e55a6f" />
        </button>
      </td>
    </tr>
  );

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>{cart.map((product) => renderCartProduct(product))}</tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
