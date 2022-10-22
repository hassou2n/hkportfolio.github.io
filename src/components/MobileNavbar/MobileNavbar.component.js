import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./MobileNavbar.css";

export const MobileNavbar = (props) => {
  const isOpenClass = props.open ? "mobile-nav-bar open" : "mobile-nav-bar";
  return (
    <nav className={isOpenClass}>
      <Link
        to="/"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
       About Me
      </Link>
      <Link
        to="/resume"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Resume
      </Link>
      <Link
        to="/projects"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
       Projects
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
       Contact
      </Link>
    </nav>
  );
};
MobileNavbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleMobile: PropTypes.func.isRequired,
};
