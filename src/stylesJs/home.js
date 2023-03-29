import styled from "@emotion/styled";
export const Div = styled.div`
  cursor: pointer;
  margin-bottom: 0.7rem;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
export const CardComponent = styled.div`
  cursor: pointer;
  height: auto;
  margin-bottom: 0.7rem;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 8px #ccc;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const ReadMore = styled.span`
  transition: font-weight 0.2s ease;
  font-weight: ${(props) => (props.hover === true ? "500" : "400")};
`;
export const Ellipsis = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: 400;
  color: #737373;
  max-width: 300px;
`;
export const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #737373;
`;
export const CommentId = styled.span`
  color: #2e2e2e;
  font-size: 16px;
`;
export const FooterText = styled.div`
  color: #2e2e2e;
  font-size: 16px;
`;
export const InputBox = styled.div`
width: ${props=>props.hover?'50%':'30%'};
box-shadow: 0px 0px 7px #ccc;
margin: auto;
transition: width 0.5s ease;
border-radius: 20px;
padding: 10px;
display: flex;
align-items: center;
@media screen and (max-width: 700px) {
    width:${props=>props.hover?'100%':'80%'};
  }
`
export const Input = styled.input`
width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
  ::placeholder {
    font-size: 15px;
  }

`;
