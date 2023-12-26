import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {

  const { i18n: { changeLanguage, language } } = useTranslation();

  const handleChangeLanguage = (newLanguage: "en" | "ro") => {
    changeLanguage(newLanguage);
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`font-bold font-display w-10 h-10 border 
        hover:bg-gray-100 dark:hover:bg-golden/20 rounded-md
        transition-all duration-100 ease-in
        ${language === "en"
            ? "text-golden-text border-golden-text"
            : "text-golden-text border-grey-light dark:border-grey-dark"}`}
        onClick={() => handleChangeLanguage("en")}>
        en
      </button>
      <button
        className={`font-bold font-display w-10 h-10 border 
        hover:bg-gray-100 dark:hover:bg-golden/20 rounded-md
        transition-all duration-100 ease-in
        ${language === "ro"
            ? "text-golden-text border-golden-text"
            : "text-golden-text border-grey-light dark:border-grey-dark"}`}
        onClick={() => handleChangeLanguage("ro")}>
        ro
      </button>
    </div>
  );
};

export default LanguageSwitcher;