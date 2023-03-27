import { useEffect, useState } from "react";
import {
  Dflex,
  Header,
  Heading,
  ListItem,
  Margin,
  NavbarBrand,
  Sidebar,
  Toggle,
} from "../../stylesJs/header";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Logo from "../../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  closeSidebar,
  toggleSidebar,
} from "../../redux/actions/openSidebarAction";
import Image from "next/image";

const Headerlayout = ({ children }) => {
  const [offset, setOffset] = useState();
  const state = useSelector((store) => store.toggleReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let scroll = window.scrollY;
      setOffset(scroll);
    });
    return window.removeEventListener("scroll", () => {});
  }, []);
  const Menu = [
    {
      path: "/",
      Label: "Home",
    },
  ];

  return (
    <div className="lead">
      <Header
        className="navbar navbar-expand-lg"
        height={offset > 100 ? "0.5rem" : "1.2rem"}
        bgColor={offset > 100 ? "#f5f5f5" : "#fff"}
      >
        <Heading
          onClick={() => dispatch(closeSidebar())}
          scale={offset > 100 ? "0.8" : "1.1"}
        >
          <Link href={{ pathname: "/" }}>
            <Dflex>
              <Image src={Logo} width={25} height={25} />
              <NavbarBrand>Next-Redux</NavbarBrand>
            </Dflex>
          </Link>
        </Heading>
        <Toggle
          className="btn"
          size={offset > 100 ? "20" : "25"}
          rounded
          onClick={() => dispatch(toggleSidebar())}
        >
          <GiHamburgerMenu />
        </Toggle>
      </Header>

      <Margin />
      {children}
      <Sidebar
        bgColor={offset > 100 ? "#f5f5f5" : "#fff"}
        sidebar={state.isOpen === true ? "0%" : "-100%"}
      >
        <ul
          onClick={() => dispatch(toggleSidebar())}
          className="list-unstyled text-center"
        >
          {Menu.map((item, index) => {
            return (
              <Link key={index} href={item.path}>
                <ListItem>{item.Label}</ListItem>
              </Link>
            );
          })}
        </ul>
      </Sidebar>
    </div>
  );
};
export default Headerlayout;
