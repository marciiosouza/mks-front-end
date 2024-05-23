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
      <section>
        <div className="info-products">
          <img
            src={brand}
            alt="Imagem do Produto"
            className="cart-item-image"
          />
          <h2 className="cart-item-title">{name}</h2>
        </div>

        <div className="quant-item">
          <p>Qtd:</p>
          <div className="quantity-controls">
            <button onClick={handleDecrement}>-</button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="quant-input"
            />
            <button onClick={handleIncrement}>+</button>
          </div>
        </div>
        <h3 className="cart-item-price">
          {formatCurrency(price * quantity, "BRL")}
        </h3>
      </section>
      <div className="btn-close">
        <IoCloseCircle
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItem}
        />
      </div>
    </Container>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
