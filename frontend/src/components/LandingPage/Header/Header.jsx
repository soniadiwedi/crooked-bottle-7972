import React, { useState } from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";


const Header = () => {

  return (
    <div className="header">
      <div className="header_logo">
       <Link to="/"><img src={logo} alt="logo"></img></Link> 
      </div>
      <div className="header_search">
        <input type="text" placeholder="Search for products, brands and more" />
        <SearchIcon />
      </div>

      <div className="header_login">
        <Menu>
          <MenuButton _hover={"curser:pointer "}>
           <Link to="/login">Login</Link>
            {/* <LoginDialog/> */}
          </MenuButton> 
          <MenuList color={"black"} fontSize={"small"}>
            <MenuList>New customer? <span></span><Link to="/signup">Sign Up</Link></MenuList>
           
            <MenuItem>My Profile</MenuItem>
            <MenuItem>YouKart Plus Zone</MenuItem>
            <MenuItem>Orders</MenuItem>
            <MenuItem>Whishlist</MenuItem>
            <MenuItem>Rewards</MenuItem>
            <MenuItem>Gift Cards</MenuItem>
          </MenuList>
        </Menu>
        {/* <button>Log in</button> */}
      </div>
      <div className="header_admin">
        <Link to="/admin">
          <p>Become A Seller</p>
        </Link>
      </div>
      <div className="header_more">
        <Menu>
          <MenuButton _hover={"curser:pointer "}>More</MenuButton>
          <MenuList color={"black"} fontSize={"small"}>
            <MenuItem>Notification Prefrences</MenuItem>
            <MenuItem>24x7 Customer Care</MenuItem>
            <MenuItem>Advertise</MenuItem>
            <MenuItem>Download</MenuItem>
          </MenuList>
        </Menu>
        <ExpandMoreIcon />
      </div>
      <div className="header_cart">
        <Link to="/cart">
       <ShoppingCartIcon />  <span>Cart</span> 
          
        </Link>
      </div>
      <div className="admin_page" >
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
};

export default Header;
