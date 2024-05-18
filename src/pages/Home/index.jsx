import { useEffect, useState } from "react";
import { Container } from "./styles";
import { Produtos } from "../../components/Produtos";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Carrinho } from "../../components/Carrinho";
import { formatCurrency } from "../../utils/formatCurrency";

export default function Home() {
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
  }, [api]);

  return (
    <Container>
      <Carrinho />
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
                  brand={produto.photo}
                  name={produto.name}
                  price={formatCurrency(produto.price, 'BRL')}
                  description={produto.description}
                />
              ))}
        </div>
      </div>
    </Container>
  );
}
