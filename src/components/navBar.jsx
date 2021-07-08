import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>Logo</h1>
      <ul className="nav-links">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/posts">
          <li>Post</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
