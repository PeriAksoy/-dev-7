import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
    container:{
        backgroundColor: ({ theme }) => theme.colors.background,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        height: "800px",
        width: '100%',
    },
    signCard:{
        backgroundColor: ({ theme }) => theme.colors.cardwhite,
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:"30px",
        textAlign:"left",
        height:"600px",
        display:"flex",
        width:"450px",
        gap:"15px",
        padding:"20px"
    },
    input :{
        borderRadius:"5px",
        textAlign:"start",
        height:"50px",
        width:"300px",
    }
     
});

export default useStyles;