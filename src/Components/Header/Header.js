import React from "react";
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <div className="header">
        <nav className="link">
          <CustomLink className="project-name" to="/">
            SPORTS
          </CustomLink>
          <CustomLink to="/"></CustomLink>
          {/* <CustomLink to="/home">HOME</CustomLink> */}
          <CustomLink to="/CheckOut">CheckOut</CustomLink>
          <CustomLink to="/blogs">Blogs</CustomLink>
          <CustomLink to="/about">About Me</CustomLink>
          <CustomLink to="/logIn">LogIn</CustomLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
