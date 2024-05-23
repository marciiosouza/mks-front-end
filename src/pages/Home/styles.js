import styled from "styled-components";

export const Container = styled.div`
.page {

}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 22px;

  margin: 116px auto;
  max-width: 1024px;
  width: 100%;
}
`