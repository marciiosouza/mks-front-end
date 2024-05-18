import { useContext } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Container } from "./styles";
import bag from "../../assets/icons/shopping-bag.svg";
import { AppContext } from "../../context/AppContext";
import { formatCurrency } from "../../utils/formatCurrency";

export const Produtos = (props) => {
  const { brand, name, price, description } = props;
  const { cartItems, setCartItems } = useContext(AppContext);
  

  const handleAddCart = () => {
    const newItem = { brand, name, price, description }; 
    setCartItems([...cartItems, newItem]);
  };

  return (
    <Container>
      <div className="produtos">
        <img src={brand || <Skeleton />} alt="" />{" "}
        <div className="produtos__titulo">
          <h2>{name || <Skeleton />}</h2>{" "}
          <span>{formatCurrency(price, 'BRL') || <Skeleton />}</span>{" "}
        </div>
        <p>{description || <Skeleton />}</p>{" "}
      </div>
      <button onClick={handleAddCart}>
        <img className="bag" src={bag} alt="" />
        Comprar
      </button>
      
    </Container>
  );
};

Produtos.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};
