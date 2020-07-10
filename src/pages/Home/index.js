import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MdAddShoppingCart } from "react-icons/md";

import { formatPrice } from "../../util/format";
import api from "../../services/api";

import { ProductList } from "./styles";

import * as CartActions from "../../store/modules/cart/actions";

const Home = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const buscarProdutos = async () => {
      const response = await api.get("/products");
      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    };

    buscarProdutos();
  }, []);

  const handleAddProduct = (product) => {
    const { addToCart } = props;

    addToCart(product);
  };

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
