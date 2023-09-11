import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const Nav = styled.nav`
    .navbar-list {
      display: flex;
    }
  `;

  return (
    <>
      <nav>
        <div class="logo">
          <a href="/html/index.html">
            <img src="/img/Orive Logo.png" alt="logo" />
          </a>
        </div>

        <div class="toggle">
          <a href="#">
            <ion-icon name="menu-outline"></ion-icon>
          </a>
        </div>
        <ul class="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
