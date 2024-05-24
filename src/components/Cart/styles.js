import styled from "styled-components";

export const Container = styled.div`


section {
  display: flex;
  justify-content: space-between;
}

.cart{
  display: flex;
  flex-direction: column;
  gap: 12px;

  transform: translate(110%, 0);
  transition: all 400ms ease;

  flex-grow: 1;
  overflow: auto;

  width: 100%;
  max-width: 448px;
  height: 100vh;

  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  position: fixed;
  top: 0;
  right: 0;
  
  /* padding: 46px  20px 20px; */
}

.cart--active {
  transform: translate(0, 0);
}

.carrinho {
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 46px 20px;
}

.shop-cart {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0 60px 0;
}

.carrinho-title {
  font-size: 28px;
  max-width: 180px;
}

.cart-produtcs-shop {
  width: 38px;
  height: 38px;
  color:  ${({ theme }) => theme.COLORS.DARK};
}

.total-cart-item {
  display: flex;
  justify-content: space-between;

  padding: 0 20px 42px;
}

.button-finalizar {
  cursor: pointer;
  width: 100%;
  padding: 40px 0;

  font-size: 22px;
  font-weight: 700;

  border: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  background-color: ${({ theme }) => theme.COLORS.DARK};
}

.my-toast {
  padding: 16px;
}
`