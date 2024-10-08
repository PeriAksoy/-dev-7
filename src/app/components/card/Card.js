import React from "react";
import useStyle from "./stylesheet";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import Button from "../button/Button";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext';
import axios from "axios";

const Card = ({
  children,
  text,
  pp,
  username,
  bookimg,
  bookname,
  showbtn = false,
  showIcon = false,
  onDelete,
}) => {
  const { theme } = useTheme();
  const classes = useStyle({ theme });
  const {language} = useLanguage();
  const {loggedIn} = useAuth();

  const DeleteCard = ()=>{
    if(onDelete){
      onDelete();
    }
  }

//Favorilere ekleme

  const addtofavorites = async () =>{
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const cardData = {
      userId,
      bookname,
      text,
    };
    // console.log(bookname);
    await axios.post("http://localhost:3001/favorites",cardData,{
      headers:{
        "Authorization":`Bearer ${token}`
      }
    });
    alert("Favorilere eklendi");
  }


  return (
    <div className={classes.container}>
      <div className={classes.cardContainer}>
        <img src={pp} alt="Profile" className={classes.profileImage} />
        <div className={classes.cardcontent}>
          {username}
          <div className={classes.textcontainer}>{text}</div>
          {showbtn && <Button title={language.translations.removefavorites} variant="remove" onClick={DeleteCard}/>}
          {loggedIn && showIcon && <Button title={language.translations.addtofavorites} onClick = {addtofavorites} variant="addfav" icon={faStar} />}
        </div>
        <div className={classes.bookcontainer}>
          <div className={classes.bookImgContainer}>
            <img src={bookimg} alt="book" className={classes.bookImage} />
          </div>
          {bookname}
        </div>
    </div> 
  </div>
  )
}

export default Card;
