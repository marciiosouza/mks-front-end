import styled from "styled-components";

export const Container = styled.div`

display: flex;
gap: 12px;



.cart-item-content {
  display: flex;
  align-items: center;
  gap: 14px;

  width: 100%;

  /* width: 100%;
  max-width: 448px; */
  padding: 19px 24px;

  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.DARK};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
}

.cart-item-image {
  width: 46px;
}

.cart-item-title {
  font-size: 14px;
  font-weight: 500;
}

.cart-item-price {
  font-weight: 700;
  font-size: 14px;
}

.button__remove-item {
  font-size: 16px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.DARK};
}
`