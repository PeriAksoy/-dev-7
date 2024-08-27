
import React from "react";
import useStyles from "./stylesheet"; 
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";

const Modal = ({ isOpen, onClose, children }) => {

  const { theme } = useTheme(); 
  const classes = useStyles({ theme });
  const {language} = useLanguage(); 

  if (isOpen === false) return null;

  const clickControl = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={classes.overlay} onClick={clickControl}>
      <div className={classes.content}>
        <button className={classes.closeButton} onClick={onClose}>
          &times;
        </button>
        <h1>{language.translations.enterthenameofthebook}</h1>
        <input className = {classes.input}type="text"></input>
        <div className={classes.button}>
        <button className={classes.addbutton}>{language.translations.add}</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
