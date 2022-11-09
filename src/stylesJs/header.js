import styled from "@emotion/styled";

export const Header = styled.div`
  box-shadow: 0px 0px 7px #ccc;
  padding: 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  background-color: #fff;
`;

export const ChildDiv = styled.div`
  margin-top: 5rem;
`;
export const CommentDiv = styled.div`
  width: 80%;
  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;

export const LogoutBtn = styled.button`
  border: 1px solid #ccc;
  border-radius: 4px;
  background: none;
  width: 5rem;
`;
export const NavBtn = styled.button`
  border: none;
  border-radius: 4px;
  background: none;
  width: 5rem;
`;
export const Sidebar = styled.div`
  width: 100%;
  background-color: #fff;
  height: 100rem;
  position: fixed;
  left: ${(props) => props.sidebar};
  transition: all 0.4s;
  z-index: 999;
  padding: 5rem;
`;
