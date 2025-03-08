import { useLocale } from "@/hooks/use-locale";
import i18n from "@/lib/i18n";
import { useTranslation } from "react-i18next";

const FrontageSwitchLanguage = () => {
  const { t } = useTranslation();
  const [locale, setLocale] = useLocale();
  const handleSwitchLanguage = () => {
    const nextLocale = locale === "en" ? "fr" : "en";
    i18n.changeLanguage(nextLocale);
    setLocale(nextLocale);
  };

  return (
    <div
      role="button"
      className=" cursor-pointer fixed bottom-8 right-8 size-12 sm:size-14 rounded-full bg-card flex items-center justify-center text-white"
      onClick={handleSwitchLanguage}
      title={t("Click to switch language")}
    >
      {locale === "en" ? "EN" : "FR"}
    </div>
  );
};

export default FrontageSwitchLanguage;
