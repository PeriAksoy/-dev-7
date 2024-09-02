import { createUseStyles } from "react-jss";
import { clickEvent } from "../../themes/helpers";

const useStyles = createUseStyles({

    container:{
        backgroundColor: ({ theme }) => theme.colors.background,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        minHeight: "100vh", 
        flexWrap: "wrap",
        display: "flex",
        width: "100%",
        gap: "30px", 
    },
    bookcontainer:{
        backgroundColor:({theme}) => theme.colors.cardwhite,
        alignItems:"center",
        borderRadius:"30px",
        display:"flex",
        padding:"30px" 
    },
    bookImage: {
        objectFit:"cover",
        padding:"50px",
        height: "auto",
        width:"100px",

    },
    bookname:{
        textTransform:"uppercase",
        flexDirection:"column",
        fontWeight:"bolder",
        fontSize:"20px",
        display:"flex",
        color:"black",
        gap:"20px"
    },
    button:{
        marginTop:"200px",
        marginRight:"10px"
    },
    addbutton:{
        backgroundColor :({theme}) => theme.colors.addbutton,
        border: "0px solid #FFFFFF",
        borderRadius:"50%",
        position:"fixed",
        fontSize:"40px",
        height:"80px",
        bottom:"50px",
        right:"50px",
        width:"80px",
        ...clickEvent(),
    }

});

export  default useStyles;

