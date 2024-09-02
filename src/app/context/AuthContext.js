import { useState,createContext,useEffect,useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ( {children }) =>{

    const [user,setUser] = useState(null);
    const [loggedIn,setLoggedIn] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem("user")){
            setUser(JSON.parse(localStorage.getItem("user")));
            setLoggedIn(true);
        }

    },[]);

    const login = (data) =>{
        setLoggedIn(true);
        setUser(data);
        localStorage.setItem("user",JSON.stringify(data));
    };

    const values = {
        loggedIn,
        user,
        login,
    };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
};

export const useAuth = () => useContext(AuthContext);


