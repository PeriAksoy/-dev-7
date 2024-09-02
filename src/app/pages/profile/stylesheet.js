import { createUseStyles } from "react-jss";
import { clickEvent } from "../../themes/helpers";
const useStyles = createUseStyles({

    container:{
        backgroundColor: ({ theme }) => theme.colors.background,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh", 
        flexWrap: "wrap",
        display: "flex",
        width: "100%",
        gap: "30px", 
    },
    profileCard:{
        backgroundColor:({theme}) => theme.colors.profilecard,
        borderRadius:"10px",
        alignItems:"center",
        height:"300px",
        width:"1500px",
        display:"flex",
        gap:"50px",
    },
    profileImage: {
        borderRadius: "50%", 
        objectFit: "cover",  
        marginLeft:"40px",
        height: "200px",
        width: "200px", 
    },
    username:{
        color: ({ theme }) => theme.colors.cardtext,
        marginTop:"30px"
    },
    name:{
        color: ({ theme }) => theme.colors.cardtext,
    },
    btndiv:{
        display:"flex",
        justifyContent:"flex-end",
        width:"1500px",
        marginRight:"50px",
        marginTop:"100px"
    },
    logoutbtn:{
        border: "0px solid #FFFFFF",
        backgroundColor:"#8E1416",
        borderRadius:"10px",
        fontWeight:"bold",
        fontSize:"15px",
        height:"40px",
        width:"100px",
        color:"white",
        ...clickEvent(),
    }

});

export  default useStyles;

