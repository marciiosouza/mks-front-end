import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 20px;
  position: relative;

  width: 397px;
  height: 95px;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.DARK};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  box-shadow: -2px 2px 10px 0px ${({ theme }) => theme.COLORS.SHADOW};

  .info-products {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .cart-item-image {
    width: 48px;
    height: 57px;
  }

  .cart-item-title {
    width: 113px;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    margin-right: 10px;
  }

  .quant-item {
    margin-right: 18px;
  }

  .quant-item p {
    margin: 4px 0;
  }

  .quantity-controls {
    display: flex;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .quantity-controls input {
    width: 26px;
    margin: auto;
    border-left: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    border-top: none;
    border-bottom: none;
    text-align: center;
    padding: 0 1px;
  }

  .quantity-controls button {
    border: none;
    background: none;
    padding: 5px 10px;
    cursor: pointer;
  }

  .cart-item-price {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    margin: auto;
  }

  .btn-close {
    position: absolute;
    top: -6px;
    right: -7px;
  }

  .button__remove-item {
    font-size: 25px;
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.DARK};
  }
`
