import React from 'react';
import { useTheme } from "../../context/ThemeContext";
import useStyles from './stylesheet';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';


const Signup = () => {

const {theme}= useTheme();
const classes = useStyles({theme});
const {language} = useLanguage();

return <div>
  <div className={classes.container}>
  <div className={classes.signCard}>
    {language.translations.namesurname}
    <input className={classes.input} type='text' placeholder={language.translations.namesurname}/>
    {language.translations.username}
    <input className={classes.input} type='text' placeholder={language.translations.username}/>
    {language.translations.emailadress}
    <input className={classes.input} type='text' placeholder={language.translations.emailadress} />
    {language.translations.password}
    <input className={classes.input} type="password" placeholder={language.translations.password} />
    {language.translations.dateofbirth}
    <input className={classes.input} type="date" placeholder={language.translations.dateofbirth} />
    <Link to={"/"} style={{ textDecoration: "none" }}>
    <Button title={language.translations.signup} variant="header"/> 
    </Link>
  </div>
  </div>
  
  </div>
};

export default Signup;