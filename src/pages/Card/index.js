import React from "react";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

import { Container, ProductTable, Total } from "./styles";

function Card() {
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
        <tbody>
          <td></td>
          <td>
            <strong>Tênis</strong>
            <span>R$129,90</span>
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
        </tbody>
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

export default Card;
