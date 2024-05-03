import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import bag from "../../assets/icons/shopping-bag.svg"

export const Produtos = (props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="produtos">
        <img src={props.photo || <Skeleton />} alt="" />
        <div className="produtos__titulo">
          <h2>{props.title || <Skeleton />}</h2>
          <span>{props.preco || <Skeleton />}</span>
        </div>
        <p>{props.description || <Skeleton />}</p>
      </div>
      <button onClick={() => navigate("/produtos")}>
        <img className="bag" src={bag} alt="" />
        Comprar
        </button>
    </Container>
  );
};

Produtos.propTypes = {
  photo: PropTypes.string,
  title: PropTypes.string,
  preco: PropTypes.string,
  description: PropTypes.string,
};
