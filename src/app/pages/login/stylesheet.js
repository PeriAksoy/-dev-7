import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container:{
        backgroundColor: ({ theme }) => theme.colors.background,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        height: "100vh",
        width: '100%',
    },
    loginCard:{
        backgroundColor: ({ theme }) => theme.colors.cardwhite,
        justifyContent:"center",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        borderRadius:"30px",
        textAlign:"left",
        display:"flex",
        padding:"40px",
        height:"500px",
        width:"450px",
        gap:"25px",
    },
    input :{
        borderRadius:"5px",
        textAlign:"start",
        height:"50px",
        width:"300px",
    },
    inputError:{
        fontSize:"13px",
        height:"2px",
        color:"red",
    },
    label:{
        textAlign:"left",
        display:"block",
        width:"300px"
    }
});

export default useStyles;