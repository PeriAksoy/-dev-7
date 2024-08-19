import React from "react";
import useStyles from "./stylesheet";
import SwitcherTheme from "../../Switchers/switcherTheme";
import SwitcherLanguage from "../../Switchers/switcherLanguage";
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from "../../context/LanguageContext";
import Button from "../button/Button";
import { Link } from "react-router-dom";


function Header() {
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
        <Link to={"Signup"} style={{ textDecoration: "none" }}>
        <Button title={language.translations.signup} variant="header"/>
        </Link>
        <Link to ={"Login"} style={{ textDecoration: "none" }}>
        <Button title={language.translations.login} variant="header"/> 
        </Link>
        </div>
    </div>
  );
}

export default Header;
