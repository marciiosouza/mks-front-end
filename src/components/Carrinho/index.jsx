import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";
import apple from "../../assets/images/apple-watch.png";
import close from "../../assets/icons/close_cart.svg";

export const Carrinho = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrease = () => {
    setTotalItems(totalItems + 1);
    setTotalPrice(totalPrice + 399); // Adapte o valor de acordo com o seu caso
  };

  const handleDecrease = () => {
    if (totalItems > 0) {
      setTotalItems(totalItems - 1);
      setTotalPrice(totalPrice - 399); // Adapte o valor de acordo com o seu caso
    }
  };

  const handleRemove = (product) => {
    setCartItems(cartItems.filter((item) => item !== product));
    setTotalItems(totalItems - 1);
    setTotalPrice(totalPrice - product.price * product.quantity); // Ajuste para considerar a quantidade do produto
  };

  const addToCart = () => {
    const newCartItems = [
      ...cartItems,
      {
        id: cartItems.length + 1,
        name: "Apple Watch Series 4 GPS",
        price: 399,
        quantity: 1,
      },
    ];
    setCartItems(newCartItems);
    setTotalItems(totalItems + 1);
    setTotalPrice(totalPrice + 399); // Adapte o valor de acordo com o seu caso
  };

  return (
    <Container>
      <div className="carrinho">
        <h1>Carrinho de Compras</h1>
      </div>

      {cartItems.map((item) => (
        <div key={item.id} className="resumo-compras">
          <div className="resumo-container">
            <img src={apple} alt="" />
            <h2>{item.name}</h2>

            <div className="quant">
              <p>Total de Itens: {item.quantity}</p>

              <div className="quant-btn">
                <button className="btn" onClick={handleDecrease}>
                  -
                </button>
                <button className="btn" onClick={handleIncrease}>
                  +
                </button>
              </div>
            </div>
            <span>R${item.price}</span>

            <img src={close} alt="" onClick={() => handleRemove(item)} />
          </div>
        </div>
      ))}

      <div className="subtotal__carrinho">
        <span>Total: R${totalPrice.toFixed(2)}</span>
      </div>

      <button className="button-finalizar">Finalizar Compra</button>
      <button className="button-add" onClick={addToCart}>
        Adicionar ao Carrinho
      </button>
    </Container>
  );
};

Carrinho.propTypes = {
  photo: PropTypes.string,
  title: PropTypes.string,
  preco: PropTypes.string,
};
