import { Container } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { CartItem } from "../CartItem";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Carrinho = () => {
  const { cartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0)
  return (
    <Container>
      <div className="carrinho">
        <h1>Carrinho de Compras</h1>
      </div>
      { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
      
        <span>{formatCurrency(totalPrice, 'BRL')}</span>
      

      {/* <button type="button" className="button-finalizar">
        Finalizar Compra
      </button> */}
    </Container>
  );
};


