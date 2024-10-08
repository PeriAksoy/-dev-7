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
        marginTop:"50px",
        height:"300px",
        display:"flex",
        width:"80%",
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
        justifyContent:"flex-end",
        marginRight:"50px",
        marginTop:"100px",
        display:"flex",
        width:"1500px",
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
    },
    textCards:{
        flexDirection:"column",
        flexWrap:"wrap",
        display:"flex",
        width:"70%",

    },
    userInfo:{
        flexDirection:"column",
        fontWeight:"bold",
        display:"flex",
        gap:"15px",

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

