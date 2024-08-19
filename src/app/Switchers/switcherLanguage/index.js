import { useLanguage } from '../../context/LanguageContext';

function SwitcherLanguage () {
    const { language, toggleLanguage } = useLanguage();
    return(
    <div>
        <img
        onClick={toggleLanguage}
        style={{ cursor: "pointer", width: "40px", height: "25px" , borderRadius:"8px" }}
        alt=""
        src={language.code === "en" ? "./assest/images/en.png" : "./assest/images/tr.png"}
        />
    </div>
    );
}
export default SwitcherLanguage;