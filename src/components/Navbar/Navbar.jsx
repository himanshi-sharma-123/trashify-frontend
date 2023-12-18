import React, { useState } from "react";
import styles from "./Navbar.module.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import Logo from "../../images/logo1.jpg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={styles.navbar}>
      <img className={styles.image} src={Logo} alt="/" />
      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <li>
            <Link to="home" smooth={true} duration={500}>
              <a href="/">Home</a>
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              <a href="about">About</a>
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={true} duration={500}>
              <a href="gallery">Gallery</a>
            </Link>
          </li>
          <li>
            <Link to="models" smooth={true} duration={500}>
              <a href="models">Models</a>
            </Link>
          </li>

          <li>
            <Link to="contact" smooth={true} duration={500}>
              <a href="dashboard">Dashboard</a>
            </Link>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{ marginTop: "6px" }} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: "6px" }} />
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};

export default Navbar;
