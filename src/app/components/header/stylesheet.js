
import {
    createUseStyles
} from "react-jss";


const useStyles = createUseStyles({
    container:{
        backgroundColor:({theme})=> theme.colors.header,
        justifyContent:"space-around",
        flexDirection:"row",
        alignItems:"center",
        height:"150px",
        display:"flex",
    },
    logo:{
        height:"60px",
        width:"60px"
    },
    logocontainer:{
        padding:"40px",

    },
    icon:{
        marginBottom:"30px",
        marginLeft:"50px",
    },
    context:{
        alignItems:"center",
        flexDirection:"row",
        display:"flex",
    },
    buttons : {
        flexDirection:"rox",
        display:"flex",
        gap:"30px",
       
    },
    switchers:{
        alignItems:"center",
        display:"flex",
        gap:"15px"
    }

},{
    name:"Header-Component"
});

export default useStyles;