import React, { useState } from "react";
import logo from "../assets/Netflix_Logo_RGB.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ cart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div className="nav_bar" style={styles.navBar}>
      <Link to="/" className="brand">
        <img src={logo} alt="Logo" style={styles.logo} />
      </Link>
      <form className="search_bar" onSubmit={submitHandler} style={styles.form}>
        <FaSearch className="search" style={styles.searchIcon} />
        <input
          style={styles.input}
          type="text"
          placeholder="Search Product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Link
        to={`/cart`}
        className="cart mx-3"
        style={styles.cart}
      >
        <button type="button" className="btn btn-primary position-relative">
          <FaShoppingCart style={styles.cartIcon} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cart.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </Link>
    </div>
  );
};

const styles = {
  navBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#141414",
  },
  logo: {
    width: "150px",
  },
  form: {
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    fontSize: "1.2rem",
    color: "white",
  },
  input: {
    borderRadius: "5px",
    width: "20rem",
    padding: "5px 10px",
    backgroundColor: "transparent",
    border: "2px solid tan",
    color: "white",
    marginLeft: "10px",
  },
  cart: {
    display: "flex",
    alignItems: "center",
  },
  cartIcon: {
    fontSize: "1.5rem",
  },
};

export default Navbar;
