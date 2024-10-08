import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  
  emailadress: yup.string().email("Geçerli E-mail adresi girin")
  .required("Bu alanın doldurulması zorunlu"),
  
  password: yup.string()
  .required("Şifre alanı zorunlu")
  .min(6,"Şifre en az 6 karakter olmalı"),

});
