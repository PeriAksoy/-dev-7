import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import React, { useEffect, useState } from "react";
import useStyles from "./stylesheet"; 
import axios from "axios";

const Modal = ({ isOpen, card, onClose, onSave, children, profileModal = false }) => {
  const { theme } = useTheme(); 
  const classes = useStyles({ theme });
  const { language } = useLanguage(); 

  const [inputValue, setInputValue] = useState(card ? "" : "");
  const [bookName, setBookName] = useState(card ? card.book : "");
  const [authorName,setAuthorName]=useState("");

  useEffect(() => {
      if(isOpen){
        if (card) {
        setInputValue(card.text);
        setBookName(card.book);
        }else{//seçili kart yoksa içi boş
          setInputValue("");
          setBookName("");
        }
      }
  }, [isOpen,card]);

  if (isOpen === false) return null;

  const clickControl = (e) => {
    if (e.target === e.currentTarget) {
      setInputValue("");
      setBookName("");
      onClose();
    }
  };

  //Alıntı kayıt ve edit

  const saveQuotation = async () => {
    try {
      const token = localStorage.getItem("token");
      let response;
      if (card) { //Edit işlemi
        response = await axios.put(`http://localhost:3001/quotation/${card.id}`, {
          text: inputValue,
          book: bookName,
        });
      } 
      else {  //Alıntı veritabanına kayıt
        response = await axios.post("http://localhost:3001/quotation", {
          text: inputValue,
          book: bookName,
        }, {
          headers: {
            "Authorization": `Bearer ${token}`
          },
        });
      }
      onSave(response.data);
      setBookName("");
      setAuthorName("");
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  //Kitap kayıt
  const SaveBook = async () =>{
    try{
      const token = localStorage.getItem("token");
      const response = await axios.post("http://localhost:3001/books",{
        bookname:bookName,
        author:authorName,
      },{
        headers: {
          "Authorization": `Bearer ${token}`
        },
      })
      onSave(response.data);
      setBookName("");
      setAuthorName("");
      onClose();
    }catch(err){
      console.error(err);
    };
  }

  return (
    <div className={classes.overlay} onClick={clickControl}>
      <div className={classes.content}>
        {profileModal === true ? (
          <>
            <label>Alıntı girin:</label>
            <input
              type="text"
              className={classes.quotation}
              value={inputValue}
              placeholder="Enter text"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <label>Kitap adı girin:</label>
            <input
              type="text"
              className={classes.book}
              value={bookName}
              placeholder="Enter book name"
              onChange={(e) => setBookName(e.target.value)}
            />
            <button onClick={saveQuotation} className={classes.addbutton}>
              {language.translations.add}
            </button>
          </>
        ) : (
          <>
            <h1>{language.translations.enterthenameofthebook}</h1>
            <input
            className={classes.bookname}
            type="text"
            value={bookName}
            onChange={(e)=>setBookName(e.target.value)} />
            <h1>{language.translations.enterthenameoftheauthor}</h1>
            <input className={classes.author}
            type="text"
            value={authorName}
            onChange={(e)=>setAuthorName(e.target.value)}/>
            <div className={classes.button}>
              <button onClick={SaveBook} className={classes.addbutton}>{language.translations.add}</button>
            </div>
          </>
        )}
        <button className={classes.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
