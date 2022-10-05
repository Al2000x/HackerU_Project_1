import React from "react";
import "../../css_work/Navbar.css";
import MiddleLinks from "./MiddleLinks";
import { useSelector } from "react-redux";
import { Navbar } from "react-bootstrap";
import RightSideNav from "./RightSideNav";
import LeftSideNav from "./LeftSide";

const TopNav = () => {
  const selectTheme = useSelector((state) => state.theme);
  return (
    <Navbar
      bg="light"
      expand="lg"
      className={
        selectTheme.dark
          ? "navbar navbar-expand-lg p-3 navbar-bg navbar-dark d-flex"
          : "navbar navbar-expand-lg p-3 navbar-bg navbar-light d-flex"
      }
    >
      <LeftSideNav />
      <div className="flex-grow-1"></div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <MiddleLinks />

        <div className="flex-grow-1 spacer"></div>
        <RightSideNav />
      </Navbar.Collapse>
    </Navbar>
  );
};
export default TopNav;
