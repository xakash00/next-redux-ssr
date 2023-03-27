import styled from "@emotion/styled";

export const Header = styled.nav`
  transition: padding 0.25s ease-in-out;
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.height};
  position: fixed;
  margin: auto;
  width: 100%;
  top: 0;
  box-shadow: 0px 0px 7px #ccc;
  z-index: 99999;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
`;
export const Heading = styled.div`
  transition: transform 0.25s ease-in-out;
  transform: scale(${(props) => props.scale});
  font-size: 25px;
  font-weight: 600;
  margin-left: 3rem;
`;
export const Dflex = styled.div`
display: flex;
align-items: center;
`
export const NavbarBrand =styled.div`
font-size: 18px;
margin-left: 0.3em;
`
export const ListItem = styled.li`
  color: #000;
  font-style: Arial, Helvetica, sans-serif;
  padding: 0.5rem;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;
export const Margin = styled.div`
  height: 6rem;
`;
export const Toggle = styled.div`
  font-size: ${(props) => props.size};
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
  height: 100%;
  background-color: ${(props) => props.bgColor};
  height: 100rem;
  position: fixed;
  right: ${(props) => props.sidebar};
  transition: all 0.4s;
  z-index: 99999;
  padding: 5rem;
  top: 3.4rem;
  text-decoration: none !important;
`;
