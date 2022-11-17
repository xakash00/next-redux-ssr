import Link from "next/link";
import React from "react";
import {
  ChildDiv,
  Header,
  LogoutBtn,
  NavBtn,
  Sidebar,
} from "../../stylesJs/header";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { BsJustify } from "react-icons/bs";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
const HeaderLayout = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const cookie = new Cookies();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isCookieExist = cookie.get("isLogin");

  const _logout = () => {
    cookie.remove("isLogin", { path: "/" });
    router.push("/signup");
    handleClose();
  };

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        setSidebar(false);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
    <>
      <Header>
        {!mobile && (
          <nav className="navbar fixed-top">
            <div className="container-fluid">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
                    alt="Logo"
                    width="30"
                    height="24"
                    className="d-inline-block align-text-top me-2"
                  />
                  <span>Next-Redux</span>
                </a>
              </Link>
              <div className="d-flex align-items-center justify-content-between">
                <Link href="/">
                  <div className="me-5">Home</div>
                </Link>
                {isCookieExist && (
                  <button className="btn" onClick={_logout}>
                    Signout
                  </button>
                )}
                {!isCookieExist && (
                  <Link href="/signup">
                    <button className="btn">Signup</button>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        )}
        {mobile && (
          <nav className="navbar fixed-top">
            <div className="container-fluid">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
                    alt="Logo"
                    width="30"
                    height="24"
                    className="d-inline-block align-text-top me-2"
                  />
                  <span>Next-Redux</span>
                </a>
              </Link>
              <div className="ms-auto">
                <button className="btn" onClick={() => setSidebar(!sidebar)}>
                  <BsJustify size="1.5rem" />
                </button>
              </div>
            </div>
          </nav>
        )}
        <Sidebar sidebar={sidebar === true ? "0%" : "-100%"}>
          <ul
            onClick={() => setSidebar(false)}
            className="list-group list-group-flush"
          >
            <li className="list-group-item">
              <Link href="/">
                <div className="text-center">Home</div>
              </Link>
            </li>
            <li className="list-group-item">
              {isCookieExist && (
                <div className="text-center" onClick={_logout}>
                  Signout
                </div>
              )}
              {!isCookieExist && (
                <Link href="/signup">
                  <div className="text-center">Signup</div>
                </Link>
              )}
            </li>
          </ul>
        </Sidebar>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
          animation={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>Signout</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <LogoutBtn variant="secondary" onClick={handleClose}>
              No
            </LogoutBtn>
            <LogoutBtn variant="primary" onClick={_logout}>
              Yes
            </LogoutBtn>
          </Modal.Footer>
        </Modal>
      </Header>
      <ChildDiv className="">{children}</ChildDiv>
    </>
  );
};

export default HeaderLayout;

// https://www.omdbapi.com/?s=iron&page=2&apikey=b5ac6ea2

const offCanvasStyle = {
  width: "18rem",
};
