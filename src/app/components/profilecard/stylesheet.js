import { createUseStyles } from "react-jss";


const useStyle= createUseStyles({

    container:{
        backgroundColor:({theme})=> theme.colors.profilecard,
        justifyContent: "flex-start",
        alignItems:"center",
        borderRadius:"10px",
        height:"300px",
        display:"flex",
        margin:"20px",
        width:"90%",
        gap:"30px",
        "& span":{
            marginBottom:"50px",
            fontSize:"20px",
            color:"white",
        },
    },
    textcontainer:{
        fontSize:"15px",
        color:({theme})=> theme.colors.cardtext,
        flexDirection:"column",
        marginBottom:"30px",
        maxWidth:"1000px",
        marginTop:"15px",
        padding:"30px",
        display:"flex",
        height:"auto",
    },
    bookImage: {
        width:"100px", 
        height: "auto",
        objectFit: 'cover',
    },
    bookcontainer:{
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
    },
    bookname:{
        color:({theme})=> theme.colors.cardtext,
        textTransform:"uppercase",
        marginTop:"20px",
        fontSize:"20px",
    },
    book:{
        justifyContent:"space between",
        flexDirection:"column",
        alignItems:"center",
        textAlign:"center",
        display:"flex",
        width:"100%",
    },
    buttons:{
        display:"flex",
        flexDirection:"row",
        gap:"10px",
        marginTop:"30px"
    }

});

export default useStyle;