import styled from "styled-components";

export const Container = styled.div`
padding: 29px 65px;
background:  ${({ theme }) => theme.COLORS.BLUE};
color:  ${({ theme }) => theme.COLORS.BACKGROUND};

z-index: 1;
position: fixed;
top: 0;
width: 100%;

@media screen and (max-width: 938px) {
  
  padding: 12px 24px;

  }

.brand {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

span {
  font-weight: bold;
  font-size: 40px;
}

h1 {
  display: flex;
  align-items: center;
  gap: 8px; 
  font-weight: 300;
}

.cart-produtcs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 90px;
  height: 45px;

  color:  ${({ theme }) => theme.COLORS.DARK};
  background-color:  ${({ theme }) => theme.COLORS.BACKGROUND};

  border-radius: 8px;
  border: none;
}

#button--cart {
  border: none;
  cursor: pointer;
}
`