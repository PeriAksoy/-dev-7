import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import useStyles from "./stylesheet";
import Card from "../../components/card/Card";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import axios from "axios";


const Home = () =>{
    
    const {theme} = useTheme();
    const classes = useStyles({theme});
    const {loggedIn} = useAuth();
    const [cards,setCards] = useState([])
    
    //Alıntıları getir 

    useEffect (()=>{
      const getQuotation = async ()=>{
        const token = localStorage.getItem("token");
        if(loggedIn){
          const response = await axios.get("http://localhost:3001/quotation/all",{
            headers:{
              "Authorization":`Bearer ${token}`
            }
          })
          setCards(response.data);
        }
      }
      getQuotation();
    },[loggedIn]);

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
            showIcon="true"
        />
       ))}
      </div>
    </div>;

};

export default Home;