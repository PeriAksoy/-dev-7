import { createUseStyles } from "react-jss";


const useStyle = createUseStyles({
    container:{
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        display:"flex",
        flexWrap:"wrap",
    },
    cardContainer:{
        backgroundColor:({theme})=> theme.colors.card,
        color: ({ theme }) => theme.colors.cardtext,
        alignItems:"center",
        borderRadius:"10px",
        justifyContent:"center",
        height:"300px",
        display:"flex",
        width:"100%",
        padding:"30px",
        gap:"40px",
        "& span":{
            marginBottom:"50px",
            fontSize:"20px",
            color:"white",
        },
        marginTop:"50px",
    },
    cardcontent:{
        flexDirection:"column",
        display:"flex",
    },
    profileImage: {
        borderRadius: "50%", 
        objectFit:"cover",  
        height: "100px",
        width: "100px", 
    },
    textcontainer:{
        color:({theme})=> theme.colors.cardtext,
        alignItems:"center",
        marginBottom:"30px",
        maxWidth:"1000px",
        marginTop:"15px",
        fontSize:"15px",
        display:"flex",
        height:"auto",
    },
    bookImage: {
        objectFit:"cover",
        height:"auto",
        width:"100px", 
    },
    bookImgContainer:{
        justifyContent:"flex-end",
        alignItems:"flex-end",
        display:"flex",
        height:"40px",
        width:"100px",
    },
    bookcontainer:{
        color:({theme})=> theme.colors.cardtext,
        textTransform:"uppercase",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        textAlign:"center",
        marginTop:"20px",
        fontSize:"20px",
        display:"flex",
        gap:"30px",
    },
   
});

export default useStyle;