import { Container } from "./styles";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { IoCloseCircle } from "react-icons/io5";

export const CartItem = ({ data }) => {
  const { cartItems, setCartItems, updateItemQuantity } =
    useContext(AppContext);
  const { id, brand, name, price, quantity } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    updateItemQuantity(id, newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = quantity > 1 ? quantity - 1 : 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container>
      <div className="cart-item-content">
        <img src={brand} alt="Imagem do Produto" className="cart-item-image" />
        <h2 className="cart-item-title">{name}</h2>
        <div className="quant-item">
          <p>Qtd:</p>

          <div className="quantity-controls">
            <button onClick={handleDecrement}>-</button>
            <input
              type="number"
              value={quantity}
              readOnly
              style={{ width: "40px", textAlign: "center" }}
            />
            <button onClick={handleIncrement}>+</button>
          </div>
        </div>
        <h3 className="cart-item-price">
          {formatCurrency(price * quantity, "BRL")}
        </h3>
        <button
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItem}
        >
          <IoCloseCircle />
        </button>
      </div>
    </Container>
  );
};

CartItem.propTypes = {
  data: PropTypes.object.isRequired,
};
