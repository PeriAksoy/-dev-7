import * as yup from 'yup';

export const signupSchema = yup.object().shape({

  namesurname: yup.string().required("Bu alanın doldurulması zorunlu "),
  username: yup.string().required("Bu alanın doldurulması zorunlu "),
  dateofbirth: yup.string().required("Bu alanın doldurulması zorunlu "),  
  
  emailadress: yup.string().email("Geçerli E-mail adresi girin")
  .required("Bu alanın doldurulması zorunlu"),
  
  password: yup.string()
  .required("Şifre alanı zorunlu")
  .min(6,"Şifre en az 6 karakter olmalı"),

  passwordConfirm: yup.string()
    .required("Şifre tekrarı zorunlu")
    .oneOf([yup.ref('password')], "Şifreler eşleşmiyor"),

});
