import { useTheme } from "../../context/ThemeContext";
import Card from "../../components/card/Card";
import useStyles from "./stylesheet";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import React from "react";

const Favorites = () =>{

    const {theme} = useTheme();
    const classes = useStyles({theme});
    const [cards,setCards] = useState([]);
    const [refresh,setRefresh]=useState(false);
    
    //Favorileri getir 

    useEffect (()=>{
      const getFavorites = async ()=>{
        const token = localStorage.getItem("token");
  
          const response = await axios.get("http://localhost:3001/favorites",{
            headers:{
              "Authorization":`Bearer ${token}`
            }
          })
          console.log(response.data);
          setCards(response.data);
        }
      
      getFavorites();
    },[refresh]);

    //Favorilerden çıkar
    
    const DeleteCard = async (id) =>{
        await axios.delete(`http://localhost:3001/favorites/${id}`);
        setRefresh(prev => !prev);
    };

    return <div className={classes.container}>
        <div className={classes.cards}>
        {cards.map((card) => (
        <Card 
            key={card.id} 
            pp="/assest/images/userpp.jpg" 
            username={`User :${card.username}`}  
            text={card.text} 
            bookimg="/assest/images/kitap.jpeg" 
            bookname={card.book} 
            showbtn="true"
            onDelete={()=>{
                DeleteCard (card.id)  
            }}
        />
       ))}
        </div>
    </div>;
};

export default Favorites;