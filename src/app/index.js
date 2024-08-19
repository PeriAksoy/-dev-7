
import Header from  "./components/header/Header";
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import useStyles from "./stylesheet";
import Navigation from "./navigations";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  useStyles();
  return <div>
    <ThemeProvider>
    <LanguageProvider>
    <Header/>
    <Navigation/> 
    </LanguageProvider>
    </ThemeProvider>
  </div>
}
export default App;
