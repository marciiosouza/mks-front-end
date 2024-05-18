import { Container } from "./styles";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext"
import { formatCurrency } from "../../utils/formatCurrency";
import { IoCloseCircle } from "react-icons/io5";

export const CartItem = ({ data }) => {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, brand, name, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id)
    setCartItems(updatedItems)
  }

  return (
    <Container>
      <div className="cart-item-content">
        <img 
        src={brand} 
        alt="Imagem do Produto" 
        className="cart-item-image" />
        
        <h2 className="cart-item-title">{name}</h2>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button 
        type="button" 
        className="button__remove-item"
        onClick={ handleRemoveItem }>
          {" "}
          <IoCloseCircle />
        </button>
      </div>
    </Container>
  );
};

CartItem.propTypes = {
  data: PropTypes.object
}.isRequired
