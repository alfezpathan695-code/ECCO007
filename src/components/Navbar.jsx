import React, { useContext, useState } from 'react';
import "./Navbar.css";
import logo from "../assets/logo007.jpg";
import cart from "../assets/cart.jpg";
import { Link } from "react-router-dom";
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="logo" height='50px'/>
        <p>Shopify</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => setMenu("home")}>
          <Link style={{ textDecoration:"none", color:"#626262" }} to="/">Home</Link>
          {menu === "home" && <hr />}
        </li>

        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration:"none", color:"#626262" }} to="/mens">Mens</Link>
          {menu === "mens" && <hr />}
        </li>

        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration:"none", color:"#626262" }} to="/womens">Womens</Link>
          {menu === "womens" && <hr />}
        </li>

        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration:"none", color:"#626262" }} to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className='nav-login-cart'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart} alt='cart' height='40px'/></Link>  
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div> 
    </div>
  )
}

export default Navbar;
