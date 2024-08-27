import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({

    container:{
        backgroundColor: ({ theme }) => theme.colors.background,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh", 
        overflowY: "auto", 
        display: "flex",
        width: "100%",
    },
    cards:{
        flexDirection:"column",
        flexWrap:"wrap",
        display:"flex",
        gap:"50px",
    }
    

});

export  default useStyles;

