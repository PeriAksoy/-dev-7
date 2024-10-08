import { useState,createContext,useEffect,useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ( {children }) =>{

    const [user,setUser] = useState(null);
    const [loggedIn,setLoggedIn] = useState(false);

    useEffect(()=>{
      if(localStorage.getItem("user")){
        console.log("kullanıcı var");
          setUser(localStorage.getItem("user"));
          setLoggedIn(true);
      }
    },[]);

    const login = (data) =>{
        setLoggedIn(true);
        setUser(data);
        localStorage.setItem("user",JSON.stringify(data));
    };

    const logout = ()=>{
      setLoggedIn(false);
      setUser(null);
      localStorage.removeItem("user");
    }

    const values = {
        loggedIn,
        user,
        login,
        logout
    };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
};

export const useAuth = () => useContext(AuthContext);

