import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/header/Header";
import Navigation from "./navigations";
import useStyles from "./stylesheet";

function App() {
  useStyles();
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
         <Header/>
          <Navigation />  
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
