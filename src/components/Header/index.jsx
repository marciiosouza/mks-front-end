import { Container } from "../../components/Header/styles"
import carrinho from "../../assets/icons/carrinho.png"

export const Header = () => {
  return (
    <Container>
      <div className="brand">
        <h1><span>MKS</span> Sistemas</h1>
        <div id="box-produtcs">
          <img src={carrinho} alt="" />
          <p>0</p>
        </div>
      </div>
    </Container>
  )
}