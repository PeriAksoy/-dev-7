import { createUseStyles } from "react-jss";
import {clickEvent} from "../../themes/helpers"



const useStyle =  createUseStyles ({
    container:{
        display:"flex",
        flexDirection:"column",
    },
    header:{
        backgroundColor:({theme}) => theme.colors.btn,
        border: "0px solid #FFFFFF",
        padding:"0.5 rem 0.2 rem",
        justifyContent:"center",
        textDecoration:"none",
        borderRadius:"10px",
        alignItems:"center",
        textAlign:"center",
        display:"flex",
        height:"50px",
        width:"150px",
        ...clickEvent(),
        "& span":{
            fontSize:"20px",
            color:"white",
        },
    }
},
{name:"Component-Button"}
);

export default useStyle;