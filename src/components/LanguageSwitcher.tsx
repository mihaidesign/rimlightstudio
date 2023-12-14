import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {

  const { i18n: { changeLanguage, language } } = useTranslation();

  const handleChangeLanguage = (newLanguage: "en" | "ro") => {
    changeLanguage(newLanguage);
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`font-bold font-display ${language === "en" ? "text-ivory" : "text-gold"}`}
        onClick={() => handleChangeLanguage("en")}>
        en
      </button>
      <button
        className={`font-bold font-display ${language === "ro" ? "text-ivory" : "text-gold"}`}
        onClick={() => handleChangeLanguage("ro")}>
        ro
      </button>
    </div>
  );
};

export default LanguageSwitcher;