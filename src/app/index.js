import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/header/Header";
import useStyles from "./stylesheet";
import Navigation from "./navigations";

function App() {
  useStyles();
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header/>
        <Navigation />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
