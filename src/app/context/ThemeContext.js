import { useState,useContext,createContext, useEffect } from "react";
import light from "../themes/variants/light";
import dark from "../themes/variants/dark";


const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme,setTheme] = useState(localStorage.getItem("theme") === "dark" ? dark : light);

    useEffect ( ()=>{
     localStorage.setItem("theme",theme.key);
    },[theme]);
    
    const toggleTheme = () => {
      setTheme(theme.key === "light" ? dark : light);
    };

    const values = {
      theme,
      toggleTheme
    };

    return (
      <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);
