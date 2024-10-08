import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import Button from "../button/Button";
import useStyle from "./stylesheet";
import React from "react";

const ProfileCard = ({
    text,
    bookimg,
    bookname,
    onDelete,
    onEdit,

  })=> {
    const {theme} = useTheme();
    const classes = useStyle({theme});
    const {language} = useLanguage();

    const DeleteQutotation = () =>{
      console.log("buton çalıştı");
      if(onDelete){
        onDelete();
      }
    }
    const EditQuotation = () =>{
      if(onEdit){
        onEdit({text,bookname});
      }
    }
  
  return(
  <div className={classes.container}>
    <div className={classes.textcontainer}>
      {text}
      <div className={classes.buttons}>
      <Button title={language.translations.edit} variant="edit" onClick={EditQuotation}/>
      <Button title={language.translations.delete} variant="edit" onClick = {DeleteQutotation}/>
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