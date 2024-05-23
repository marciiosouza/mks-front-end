import styled from "styled-components";

export const Container = styled.div`

section {
  display: flex;
  justify-content: space-between;
}

.shop-cart {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0 60px 0;
}

.cart-produtcs-shop {
  width: 38px;
  height: 38px;
  color:  ${({ theme }) => theme.COLORS.DARK};
}

.carrinho-title {
  font-size: 28px;
  max-width: 180px;
}

.carrinho {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cart{
  display: flex;
  flex-direction: column;
 
  transform: translate(110%, 0);
  transition: all 400ms ease;

  flex-grow: 1;
  overflow: auto;

  gap: 12px;

  width: 100%;
  max-width: 448px;
  height: 100vh;

  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  position: fixed;
  top: 0;
  right: 0;
  
  padding: 46px  20px 20px;
}

.cart--active {
  transform: translate(0, 0);
}

.resumo-compras {
  width: 100%;
  max-width: 448px;
  height: 95px;
  
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.DARK};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
}

.resumo-container {
  display: flex;
  align-items: center;
  gap: 22px;

  padding: 19px 24px;
}

.resumo-container h2 {
  font-size: 14px;
  font-weight: 500;
}

.resumo-compras span {
  font-weight: 700;
  font-size: 14px;
}

.resumo-compras img {
  width: 46px;
}

.total-cart-item {
  display: flex;
  justify-content: space-between;

  padding: 22px 0;
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

`