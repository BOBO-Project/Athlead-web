import { useTranslation } from "react-i18next";

const useTranslate = (enJSON, indoJSON) => {
  const { t, i18n } = useTranslation();

  const translate = (key) => {
    return t(key, {
      defaultValue: i18n.language === "en-US" ? enJSON[key] : indoJSON[key],
    });
  };

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en-US" ? "id-ID" : "en-US");
  };

  return {
    translate,
    changeLanguage,
    language: i18n.language,
  };
};

export default useTranslate;
