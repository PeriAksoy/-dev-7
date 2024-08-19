import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    "@global":{
     "*":{
      margin:0,
      padding:0
     },
    }
 
  },{
    name:"Global"
  });
  
  export default useStyles;