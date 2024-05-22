import { useEffect, useState } from "react";
import { Container } from "./styles";
import { ProductsCard } from "../../components/ProductsCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Carrinho } from "../../components/Carrinho";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = import.meta.env.VITE_API_MKS;

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
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
            : products.map((product) => (
                <ProductsCard
                  key={product.id}
                  brand={product.photo}
                  name={product.name}
                  price={product.price} // Passa o preço como número
                  description={product.description}
                />
              ))}
        </div>
      </div>
    </Container>
  );
}
