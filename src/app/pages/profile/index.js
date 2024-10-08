import ProfileCard from "../../components/profilecard/ProfileCard";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import Modal from "../../components/modal/Modal";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import useStyles from "./stylesheet";
import { useEffect } from "react";
import axios from "axios";

const Profile = () =>{
    
    const {theme} = useTheme();
    const classes = useStyles({theme});
    const {language} = useLanguage();
    const {logout} = useAuth();
    const nav = useNavigate();
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [refresh,setRefresh]= useState(false);
    const [selectedCard,setSelectedCard] = useState(null);

    const openModal = () => {
        setSelectedCard(null); 
        setIsModalOpen(true); 
     };
    const closeModal = () => setIsModalOpen(false);

    const Logout = async()=>{
        logout();
        nav("/Login");
    }

    const [profile,setProfile]=useState(null);
    const [cards,setCards] = useState([]);

    //Profil bilgilerini getir

    useEffect(()=>{
        const getProfile = async ()=>{
            const token = localStorage.getItem("token");
            const profileResponse = await axios.get("http://localhost:3001/user/getMyProfile",{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            });
            setProfile(profileResponse.data);
        }
      getProfile();
    },[])
    
    //Card bilgilerini getir

    useEffect(()=>{
        const getQuotation = async ()=>{
            const token = localStorage.getItem("token");
            const quotationResponse = await axios.get("http://localhost:3001/quotation",{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            });
            console.log("yanıt",quotationResponse.data);
            setCards(quotationResponse.data);
            console.log("cards dizisi:",quotationResponse.data);
        }
        getQuotation();
    },[refresh]);

    //Card kaydetme

    const SaveCard = (newcard) =>{
        setCards([...cards,newcard]);
        setRefresh(prev => !prev);
        setSelectedCard(null);
        closeModal();
    };

    //Card silme

    const DeleteCard = async (id) =>{
        await axios.delete(`http://localhost:3001/quotation/${id}`)
        setRefresh(prev => !prev);
    };

    //Alıntı edit

    const EditCard = async (card) =>{
        setIsModalOpen(true);
        setSelectedCard(card); //modal içine card bilgileri
    };

    return <div className={classes.container}>
        <div className={classes.profileCard}>
            <img src={"/assest/images/userpp.jpg"} alt="Profile" className={classes.profileImage} />       
                <div className={classes.userInfo}>
                {profile ? (
                <>
                 <h1>{profile.namesurname} </h1>
                 <h1>@{profile.username}</h1>
                </>
            ):(
                <p>Loading...</p>
            )}
                </div>
            <div className={classes.btndiv}>
              <button onClick={Logout} className={classes.logoutbtn}>{language.translations.logout}</button>
            </div>
        </div>
        <div className={classes.textCards}>
            {cards.map((card)=>(
                <ProfileCard 
                key={card.id}
                text={card.text}
                bookname={card.book}
                bookimg="/assest/images/kitap.jpeg"
                onDelete={()=>{
                    DeleteCard (card.id)  
                }}
                onEdit={()=>{
                    EditCard (card)
                }}
                />
            ))}
        </div>
        <button className={classes.addbutton} onClick={openModal}>+</button>
        <Modal isOpen={isModalOpen} card={selectedCard} onClose={closeModal} onSave={SaveCard} profileModal={true}/>
    </div>;
};

export default Profile;