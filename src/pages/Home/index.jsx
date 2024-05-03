import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Produtos } from "../../components/Produtos";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Carrinho } from "../../components/Carrinho";

export default function Home() {
  // const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = import.meta.env.VITE_API_MKS;


  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data.products);
        setLoading(false);
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  return (
    <Container>
      <Carrinho/>
      <div className="page">
        <div className="card-container">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div key={index}>
                  <Skeleton height={200} />
                  <Skeleton />
                  <Skeleton width="80%" />
                </div>
              ))
            : produtos.map((produto) => (
                <Produtos
                  key={produto.id}
                  photo={produto.photo}
                  title={produto.name}
                  preco={produto.price}
                  description={produto.description}
                />
              ))}
        </div>
      </div>
    </Container>
  );
}
