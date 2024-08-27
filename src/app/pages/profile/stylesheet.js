import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({

    container:{
        backgroundColor: ({ theme }) => theme.colors.background,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "30px", 
        width: "100%",
        minHeight: "100vh", 
    },
    profileCard:{
        backgroundColor:({theme}) => theme.colors.profilecard,
        height:"300px",
        width:"1500px",
        display:"flex",
        alignItems:"center",
        gap:"50px",
        borderRadius:"10px"
    },
    profileImage: {
        width: '200px', 
        height: '200px',
        borderRadius: '50%', 
        objectFit: 'cover',  
        marginLeft:"40px"
    },
    username:{
        color: ({ theme }) => theme.colors.cardtext,
        marginTop:"30px"
    },
    name:{
        color: ({ theme }) => theme.colors.cardtext,
    }

});

export  default useStyles;

