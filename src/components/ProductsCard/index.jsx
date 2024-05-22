import { useContext } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Container } from "./styles";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AppContext } from "../../context/AppContext";
import { formatCurrency } from "../../utils/formatCurrency";

export const ProductsCard = ({ brand, name, price, description }) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    const newItem = { brand, name, price, description };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <Container>
      <div className="produtos">
        {brand ? <img src={brand} alt={name} /> : <Skeleton />}
        <div className="produtos__titulo">
          <h2>{name || <Skeleton />}</h2>
          <span>{price ? formatCurrency(price, "BRL") : <Skeleton />}</span>
        </div>
        <p>{description || <Skeleton />}</p>
      </div>
      <button onClick={handleAddCart}>
        <RiShoppingBag3Line size={20} />
        Comprar
      </button>
    </Container>
  );
};

