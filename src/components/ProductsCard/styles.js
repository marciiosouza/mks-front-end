import styled from "styled-components";

export const Container = styled.div`
.produtos {
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  width: 100%;
  height: 264px;

  padding: 0 14px;
  border-radius: 8px 8px 0 0;
  box-shadow: 2px 1px 8px 2px  ${({ theme }) => theme.COLORS.SHADOW};

}

.produtos img {
  padding: 18px 0 0 0;
  margin: auto;
}

img {
  width: 110px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;  
  gap: 12px;

  margin-bottom: 10px;
}

.produtos__titulo{

 

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;

  margin: 14px 0 8px 0;
}

span {
  display: flex;
  align-items: center;

  height: 26px;
  
  font-weight: bold;

  padding: 4px 8px;
  border-radius: 5px;

  color:  ${({ theme }) => theme.COLORS.BACKGROUND};
  background-color:  ${({ theme }) => theme.COLORS.GRAY_700};
}

p {
  margin: 0 0 18px 0;
  font-weight: 300;
  color:  ${({ theme }) => theme.COLORS.GRAY_800};
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 100%;
  padding: 9px 0;


  border-radius: 0 0 8px 8px;
  border: none;

  font-style: normal;
  font-weight: 600;

  text-transform: uppercase;

  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  background-color: ${({ theme }) => theme.COLORS.BLUE};

  cursor: pointer;
}

button .bag {
  width: 18px;
}

.skeleton-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 264px;
  padding: 0 14px;
  border-radius: 8px;
  box-shadow: 2px 1px 8px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.skeleton-image {
  width: 100%;
  height: 200px;
  border-radius: 8px 8px 0 0;
}

.skeleton-title {
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 14px 0 8px 0;
}

.skeleton-title > * {
  width: 50%;
}

.skeleton-description {
  width: 90%;
  height: 50px;
  margin-bottom: 12px;
  border-radius: 5px;
}

.skeleton-button {
  width: 100%;
  height: 40px;
  border-radius: 0 0 8px 8px;
}

`