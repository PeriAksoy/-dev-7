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
    loginCard:{
        backgroundColor: ({ theme }) => theme.colors.cardwhite,
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        borderRadius:"30px",
        textAlign:"left",
        height:"500px",
        display:"flex",
        width:"400px",
        gap:"15px",
    },
    input :{
        borderRadius:"5px",
        textAlign:"start",
        width:"300px",
        height:"50px",
    }
     

});

export default useStyles;