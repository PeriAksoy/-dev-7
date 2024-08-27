import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import useStyles from "./stylesheet";
import Card from "../../components/card/Card";

const Favorites = () =>{
    
    const {theme} = useTheme();
    const classes = useStyles({theme});
    const {language} = useLanguage();

    return <div className={classes.container}>
        <div className={classes.cards}>
        <Card pp="/assest/images/userpp.jpg" username="kullanici" text='"İnsanlar şehir gibiydi. Bazı kötü yönleri var diye bütün şehirden nefret etmezdiniz. Sevmediğiniz yanları, birkaç tane tehlikeli ara sokağı ve mahallesi olabilirdi ama bir şehri yaşanır kılan şey iyi yönleriydi."' bookimg="/assest/images/kitap.jpeg" bookname="Gece Yarısı Kütüphanesi" showbtn={true}/>   

        <Card pp="/assest/images/userpp.jpg" username="kullanici" text='"İnsanlar şehir gibiydi. Bazı kötü yönleri var diye bütün şehirden nefret etmezdiniz. Sevmediğiniz yanları, birkaç tane tehlikeli ara sokağı ve mahallesi olabilirdi ama bir şehri yaşanır kılan şey iyi yönleriydi."' bookimg="/assest/images/kitap.jpeg" bookname="Gece Yarısı Kütüphanesi" showbtn={true}/>   
        </div>
    </div>;
};

export default Favorites;