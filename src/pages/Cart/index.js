import React from "react";
import { connect } from "react-redux";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

import { Container, ProductTable, Total } from "./styles";

function Cart({ cart }) {
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
            <MdRemoveCircleOutline size={20} color="#e55a6f" />
          </button>
          <input type="number" readOnly value={1} />
          <button type="button">
            <MdAddCircleOutline size={20} color="#e55a6f" />
          </button>
        </div>
      </td>
      <td>
        <strong>R$250,00</strong>
      </td>
      <td>
        <button type="button">
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
          <strong>R$ 2000,58</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
