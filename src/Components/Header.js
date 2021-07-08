import React, { useEffect } from 'react';
import '../styles/index.css';
import {Howl, Howler} from 'howler';
import '../styles/home.css';
import logo from "../img/logo.png"
const Header = () => {

    return(
      <>
        <div className="gnb_bg1">
        <img src={logo} className="logo"/>


          </div>
      </>
    )
  }

export default Header;