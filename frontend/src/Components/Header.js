import React from "react";

const Header = () => {
  return (
    <>
      <div className="container-xl my-5 header">
        <div className="row d-flex justify-content-center">
          <ul className="header-list">
            <li>Home</li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
