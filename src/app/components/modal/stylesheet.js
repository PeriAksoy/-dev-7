import { createUseStyles } from "react-jss";
import { clickEvent } from "../../themes/helpers";


const useStyle = createUseStyles({
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        display: "flex",
        height: "100%",
        width: "100%",
        zIndex: 1,
        left: 0,
        top: 0,
      },
      content: {
        backgroundColor:({theme}) => theme.colors.modalcard,
        padding: "30px 70px 30px 70px",
        justifyContent:"center",
        flexDirection:"column",
        position: "relative",
        borderRadius: "8px",
        maxWidth: "500px",
        height:"400px",
        display:"flex",
        width: "100%",
        color:"white",
        gap:"40px",
      },
      closeButton: {
        background: "transparent",
        position: "absolute",
        cursor: "pointer",
        fontSize: "50px",
        border: "none",
        right: "10px",
        color:"white",
        top: "10px",
      },
      input:{
        border: "0px solid #FFFFFF",
        borderRadius:"8px",
        height:"40px",
        width:"400px",
      },
      addbutton:{
        backgroundColor:({theme}) => theme.colors.addbutton,
        border: "0px solid #FFFFFF",
        fontWeight:"bolder",
        borderRadius:"5px",
        height:"40px",
        width:"70px",
        ...clickEvent(),
      },
      button:{
        justifyContent:"flex-end",
        display:"flex",
      },

});

export default useStyle;