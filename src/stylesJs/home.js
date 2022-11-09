import styled from "@emotion/styled";
export const Div = styled.div`
  cursor: pointer;
  margin-bottom: 0.7rem;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
export const Input = styled.input`
  width: 50%;
  margin: auto;
  border: none;
  box-shadow: 0px 0px 7px #ccc;
  padding: 0.5rem;
  border-radius: 8px;
  &:focus {
    outline: 0.5px solid #ccc;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
