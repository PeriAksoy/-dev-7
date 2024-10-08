import { useLanguage } from '../../context/LanguageContext';
import { loginSchema } from '../../schemas/loginSchema';
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import useStyles from './stylesheet';
import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';

const Login = () => {

  const {theme}= useTheme();
  const classes = useStyles({theme});
  const {language} = useLanguage();
  const {login} = useAuth();
  const nav=useNavigate();
  
  const {values,errors,handleChange,handleSubmit,handleBlur,touched}= useFormik({
    initialValues:{
      emailadress:'',
      password:'',
      username:'',
    },
    validationSchema : loginSchema,
    validateOnChange:false,
    validateOnBlur:true,
    
    onSubmit:(values) =>{
      axios.post("http://localhost:3001/user/Login",values)
      .then(response=>{
        if(response.data.token){ 
          console.log("Giriş başarılı",response.data);
          localStorage.setItem("token",response.data.token); 
          login(response.data);
          nav("/");
        }
      })
      .catch(error=>{
        console.log(error);
        alert(error.response.data.message);
        console.error("Giriş başarısız",error);
      });
    },
    
  });
  
  return <div className={classes.container}>
  <form className={classes.loginCard} onSubmit={handleSubmit}>
  
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

  <Button type="submit" title={language.translations.login} variant="header" />
  </form>
</div>
};

export default Login;