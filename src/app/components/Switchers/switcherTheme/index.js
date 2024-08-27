import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../../context/ThemeContext";


function SwitcherTheme() {
  
  const { theme, toggleTheme } = useTheme();
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FontAwesomeIcon
      icon={theme.key === "light" ? faSun : faMoon}
      onClick={toggleTheme}
      style={{ cursor: "pointer", color: theme.key === "light" ? "gold" : "silver", fontSize: "30px", marginRight: "20px" }}
      />
    </div>
  );
}

export default SwitcherTheme;
