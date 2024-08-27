import React from "react";
import useStyle from "./stylesheet";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import Button from "../button/Button";

const ProfileCard = ({
    text,
    bookimg,
    bookname,

  })=> {
    const {theme} = useTheme();
    const classes = useStyle({theme});
    const {language} = useLanguage();
  
  return(
  <div className={classes.container}>
    <div className={classes.textcontainer}>
      {text}
      <div className={classes.buttons}>
      <Button title={language.translations.edit} variant="edit"/>
      <Button title={language.translations.delete} variant="edit"/>
      </div>
    </div> 
    <div className={classes.book}>
      <div className={classes.bookcontainer}>
      <img src={bookimg} alt="book" className={classes.bookImage}/>
      </div>
      <div className={classes.bookname}>{bookname}</div> 
    </div>  
  </div>
  )
  }
  
export default ProfileCard;