import { Container } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { CartItem } from "../CartItem";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { IoCloseCircle } from "react-icons/io5";

export const Carrinho = () => {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cartItems]);

  return (
    <Container>
      <section className={`cart ${isCartVisible ? "cart--active" : ""}`}>
        <div className="carrinho">
          <div className="shop-cart">
            <h1 className="carrinho-title">Carrinho de Compras</h1>
            <IoCloseCircle
              className="cart-produtcs-shop"
              onClick={() => setIsCartVisible(!isCartVisible)}
            />
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} data={cartItem} />
            ))
          ) : (
            <p className="empty-cart-message">Seu carrinho está vazio</p>
          )}
        </div>
        <div className="total-cart-item">
          <h2>Total: </h2>
          <h2>{formatCurrency(totalPrice, "BRL")}</h2>
        </div>
      </section>
      <button type="button" className="button-finalizar">
        Finalizar Compra
      </button>
    </Container>
  );
};
