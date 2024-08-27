import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import useStyles from "./stylesheet";
import Button from "../../components/button/Button";
import Modal from "../../components/modal/Modal";
import { useState } from "react";

const Books = () => {
    
    const {theme} = useTheme();
    const classes = useStyles({theme});
    const {language} = useLanguage();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return <div className={classes.container}>
        <div className={classes.bookcontainer}>
            <img src="/assest/images/kitap.jpeg" alt = "book" className={classes.bookImage}/>
            <div className={classes.bookname}><p>Gece Yarısı Kütüphanesi</p><p>MATT HAIG</p></div>
            <div className={classes.button}>
            <Button title={language.translations.removebookcase}variant="remove"/>
            </div>
        </div>
        <div className={classes.bookcontainer}>
            <img src="/assest/images/kitap.jpeg" alt ="book" className={classes.bookImage}/>
            <div className={classes.bookname}><p>Gece Yarısı Kütüphanesi</p><p>MATT HAIG</p></div>
            <div className={classes.button}>
            <Button title={language.translations.removebookcase}variant="remove"/>
            </div>
        </div>
        <div className={classes.bookcontainer}>
            <img src="/assest/images/kitap.jpeg" alt = "book" className={classes.bookImage}/>
            <div className={classes.bookname}><p>Gece Yarısı Kütüphanesi</p><p>MATT HAIG</p></div>
            <div className={classes.button}>
            <Button title={language.translations.removebookcase}variant="remove"/>
            </div>
        </div>
        <div className={classes.bookcontainer}>
            <img src="/assest/images/kitap.jpeg" alt="book" className={classes.bookImage}/>
            <div className={classes.bookname}><p>Gece Yarısı Kütüphanesi</p><p>MATT HAIG</p></div>
            <div className={classes.button}>
            <Button title={language.translations.removebookcase}variant="remove"/>
            </div>
        </div>
        <button className={classes.addbutton} onClick={openModal}>+</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}/>
    </div>;
};

export default Books;