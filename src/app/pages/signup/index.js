import { useLanguage } from '../../context/LanguageContext';
import { signupSchema } from '../../schemas/signupSchema';
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import useStyles from './stylesheet';
import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';

const Signup = () => {

const {theme}= useTheme();
const classes = useStyles({theme});
const {language} = useLanguage();
const {login} = useAuth();
const nav=useNavigate();

const {values,errors,handleChange,handleSubmit,handleBlur,touched}= useFormik({
  initialValues:{
    passwordConfirm:'',
    emailadress:'',
    dateofbirth:'',
    namesurname:'',
    username:'',
    password:'',
  },
  validationSchema : signupSchema,
  validateOnChange:false,
  validateOnBlur:true,

  onSubmit:(values) =>{

    axios.post("http://localhost:3001/user/Signup",values)
      .then(response=>{
        console.log("kayıt başarılı:",response.data);

        if(response.data.token){
          console.log("Başarılı");
          localStorage.setItem("token",response.data.token);
          login(response.data.token);
        }
        nav("/");
        console.log(response.data);
      })
      .catch(error=>{
        // console.log(error); 
        alert(error.response.data.message);
        console.error("kayıt başarısız",error);
      });
      
  },

});

return <div className={classes.container}>

  <form className={classes.signCard} onSubmit={handleSubmit}>
 
    { /* NAMESURNAME */ }

    <label className={classes.label}>{language.translations.namesurname}</label>
    <input className={classes.input} 
      type='text'
      id="namesurname"
      value={values.namesurname}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={language.translations.namesurname}
    />
    {touched.namesurname && errors.namesurname && <p className={classes.inputError}>{errors.namesurname}</p>}

    {/* USERNAME */}

    <label className={classes.label}>{language.translations.username}</label>
    <input className={classes.input} 
      type='text' 
      id="username"
      value={values.username}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={language.translations.username}
    />
    {touched.username && errors.username && <p className={classes.inputError}>{errors.username}</p>}
    
    {/* E-MAİL ADRESS  */}

    <label className={classes.label}>{language.translations.emailadress}</label>
    <input className={classes.input} 
      type='text'
      id="emailadress"
      value={values.emailadress}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={language.translations.emailadress}
    />
    {touched.emailadress && errors.emailadress && <p className={classes.inputError}>{errors.emailadress}</p>}

    {/* PASSWORD  */}

    <label className={classes.label}>{language.translations.password}</label>
    <input className={classes.input} 
      type="password" 
      id="password"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={language.translations.password} 
    />
    {touched.password && errors.password && <p className={classes.inputError}>{errors.password}</p>}

    {/* PASSWORDConfirm */}

    <label className={classes.label}>{language.translations.passwordConfirm}</label>
    <input className={classes.input} 
      type="password" 
      id="passwordConfirm"
      value={values.passwordConfirm}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={language.translations.passwordConfirm} 
    />
    {touched.passwordConfirm && errors.passwordConfirm && <p className={classes.inputError}>{errors.passwordConfirm}</p>}

    {/* DATEOFBİRTH */}

    <label className={classes.label}>{language.translations.dateofbirth}</label>
    <input className={classes.input} 
      type="date" 
      id="dateofbirth"
      value={values.dateofbirth}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={language.translations.dateofbirth} 
    />
    {touched.dateofbirth && errors.dateofbirth && <p className={classes.inputError}>{errors.dateofbirth}</p>}

    <Button type="submit" title={language.translations.signup} variant="header" />

  </form>
</div>
};

export default Signup;