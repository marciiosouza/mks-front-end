import { Container } from "../../components/Header/styles"
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from '../../context/AppContext'

export const Header = () => {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);
  return (
    <Container>
      <div className="brand">
        <h1>
          <span>MKS</span> Sistemas
        </h1>

        <section>
          <button
            className="cart-produtcs"
            onClick={() => setIsCartVisible(!isCartVisible)}
          >
            <FaShoppingCart />
            <p>{cartItems.length}</p>
          </button>
        </section>
      </div>
    </Container>
  );
}