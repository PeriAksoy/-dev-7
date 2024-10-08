import React, { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import useStyles from "./stylesheet";
import Button from "../../components/button/Button";
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import axios from "axios";

const Books = () => {
    
    const {theme} = useTheme();
    const classes = useStyles({theme});
    const {language} = useLanguage();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [books,setBooks]=useState([]);
    const [refresh,setRefresh] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const SaveBook = (newBook)=>{
        setBooks([...books,newBook]);
        console.log(newBook);
        setRefresh(prev => !prev);
        closeModal();
    }

    //Kitap bilgilerini getir 

    useEffect(()=>{
      const getBooks=async () =>{
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:3001/books",{
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            });
            setBooks(response.data);
        }
        getBooks();
    },[refresh])

    //Kitap sil

    const DeleteBook = async (id) =>{
        await axios.delete(`http://localhost:3001/books/${id}`)
        setRefresh(prev => !prev);
    }

    return <div className={classes.container}>
        {books.map((book)=>(
             <div key={book.id}className={classes.bookcontainer}>
             <img src="/assest/images/kitap.jpeg" alt = "book" className={classes.bookImage}/>
             <div className={classes.bookname}>
                <p>{book.bookname}</p>
                <p>{book.author}</p>
            </div>
             <div className={classes.button}>
             <Button title={language.translations.removebookcase} variant="remove" onClick={()=>{
                DeleteBook(book.id)}}/>
             </div>
         </div>
        ))};

        <button className={classes.addbutton} onClick={openModal}>+</button>
        <Modal isOpen={isModalOpen} onClose={closeModal} onSave={SaveBook}/>
    </div>;
};

export default Books;