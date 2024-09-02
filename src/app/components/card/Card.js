import React from "react";
import useStyle from "./stylesheet";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext';

const Card = ({
  children,
  text,
  pp,
  username,
  bookimg,
  bookname,
  showbtn = false,
  showIcon = false,
}) => {
  const { theme } = useTheme();
  const classes = useStyle({ theme });
  const {language} = useLanguage();
  const {loggedIn} = useAuth();


  return (
    <div className={classes.container}>
      <div className={classes.cardContainer}>
        <img src={pp} alt="Profile" className={classes.profileImage} />
        <div className={classes.cardcontent}>
          {username}
          <div className={classes.textcontainer}>{text}</div>
          {showbtn && <Button title={language.translations.removefavorites} variant="remove"/>}
          {loggedIn && showIcon && <Button title={language.translations.addtofavorites} variant="addfav" icon={faStar}/>}
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
