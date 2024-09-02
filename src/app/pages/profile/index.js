import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import useStyles from "./stylesheet";
import ProfileCard from "../../components/profilecard/ProfileCard";
import axios from "axios";

const Profile = () =>{
    
    const {theme} = useTheme();
    const classes = useStyles({theme});
    const {language} = useLanguage();

    return <div className={classes.container}>
        <div className={classes.profileCard}>
            <img src={"/assest/images/userpp.jpg"} alt="Profile" className={classes.profileImage} />
            <div>
            <div className={classes.name}>AD-SOYAD</div>
            <div className={classes.username}>KULLANICI ADI</div>    
            </div>
            <div className={classes.btndiv}>
              <button className={classes.logoutbtn}>{language.translations.logout}</button>
            </div>
        </div>
        <div className={classes.textcard}>
            <ProfileCard  text='"İnsanlar şehir gibiydi. Bazı kötü yönleri var diye bütün şehirden nefret etmezdiniz. Sevmediğiniz yanları, birkaç tane tehlikeli ara sokağı ve mahallesi olabilirdi ama bir şehri yaşanır kılan şey iyi yönleriydi."' bookimg="/assest/images/kitap.jpeg" bookname="Gece Yarısı Kütüphanesi"
            />  
        </div>
    </div>;

};

export default Profile;