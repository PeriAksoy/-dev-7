import React from "react";
import useStyles from "./stylesheet";
import SwitcherTheme from "../../Switchers/switcherTheme";
import SwitcherLanguage from "../../Switchers/switcherLanguage";
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from "../../context/LanguageContext";
import Button from "../button/Button";
import { Link } from "react-router-dom";


function Header2() {
  const {theme} = useTheme(); 
  const {language} = useLanguage();
  const classes = useStyles({theme});

  return (
    <div className={classes.container}>
      <div className={classes.context}>
        <div className={classes.logocontainer}>
        <img src="/assest/images/logo.png" className={classes.logo} alt="Logo" />
        </div>  
        <div className={classes.switchers}>
        <SwitcherTheme/> 
        <SwitcherLanguage/>  
        </div>
      </div>    
      <div></div>
      <div className={classes.buttons}>
        <Link to ={"Home"} style={{ textDecoration: "none" }}>
        <Button title={language.translations.home} variant="header"/> 
        </Link>
        <Link to ={"Profile"} style={{ textDecoration: "none" }}>
        <Button title={language.translations.profile} variant="header"/> 
        </Link>
        <Link to ={"Books"} style={{ textDecoration: "none" }}>
        <Button title={language.translations.bookcase} variant="header"/> 
        </Link>
        <Link to ={"Favourites"} style={{ textDecoration: "none" }}>
        <Button title={language.translations.favorites} variant="header"/> 
        </Link>
        </div>
    </div>
  );
}

export default Header2;
