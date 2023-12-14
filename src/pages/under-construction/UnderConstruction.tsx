import { useTranslation } from "react-i18next";
import { Translation } from "../../util/translationKeys";
import LanguageSwitcher from "../../components";

const UnderConstruction = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-charcoal-grey w-full h-screen items-center justify-center flex flex-col space-y-2">
      <LanguageSwitcher />
      <h3 className='text-gold text-3xl flex'>{t(Translation.Construction.title)}</h3>
      <p className="text-ivory">{t(Translation.Construction.description)}</p>
    </div>
  );
};

export default UnderConstruction;