import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  width: 100%;
  max-width: 448px;
  height: 100vh;

  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  position: fixed;
  top: 0;
  right: 0;
  
  padding: 100px  20px 20px;
  
  z-index: 1;
  
  .carrinho {
    padding: 0 0 22px 0;
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


  /* Estilos para os botões + e - */
button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  /* padding: 10px; */
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #0056b3;
}

button:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}

button:disabled:hover {
  background-color: #ccc;
}

.resumo-container img {
  width: 18px;

  position: relative;
  top: 0;
  right: 0;
}

.quant-btn {
  display: flex;
  gap: 10px;
}

  .button-finalizar {
    width: 100%;
    /* max-width: 330px; */
    right: 0;
    bottom: 0;

    padding: 40px 0;
    position: absolute;

    font-size: 22px;
    font-weight: 700;

    border: none;
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    background-color: ${({ theme }) => theme.COLORS.DARK};

}

.btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;


  /* margin-right: 0.5rem; */
}


`