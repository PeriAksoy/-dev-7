import { createContext, useState, useContext, useEffect } from "react";
import en from "../locales/variants/en.json";
import tr from "../locales/variants/tr.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

    const initialLanguage = localStorage.getItem("language") === "en" ? en : tr;
    const [language, setLanguage] = useState(initialLanguage);

    useEffect(() => {
      localStorage.setItem("language", language.code || "en");
    }, [language]);

    const toggleLanguage = () => {
      setLanguage(language.code === "en" ? tr : en);
    };
    
    const values = {
      language,
      toggleLanguage,
    };

    return (
      <LanguageContext.Provider value={values}>
        {children}
      </LanguageContext.Provider>
    );
    
};

export const useLanguage = () => useContext(LanguageContext);
