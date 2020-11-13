import React, { Component } from "react";
import { NavHashLink } from "react-router-hash-link";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.png";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <NavHashLink smooth to="#home">
              <img src={logo} width="110px" alt="LA 16" />
            </NavHashLink>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            ><FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <NavHashLink smooth to="#home">Home</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#menu">Menu</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#about">About</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#dining">Dining</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#login">Login</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#contact">Contact</NavHashLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}