import { use} from 'i18next'
import React, {useEffect} from "react";
import { useTranslation } from 'react-i18next'

const languages= [
    { code: 'en', lang: 'English'},
    { code: 'fr', lang: 'Français'},
    ]

const LanguageSwitcher = () => {
  const {i18n} = useTranslation()

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  // function to switch the language
  const switchLanguage=(lng: string) => {
    // changeLanguage() is a function that changes the language of the application, it is imported from i18next
    i18n.changeLanguage(lng)
  } //todo: cont from here

  return (
    <div className="button-container">
      {
        // map through the languages array and return a button for each language
        languages.map((lng) => {
          return (
            <button 
            className={lng.code === i18n.language ? "selected" : ""}
            key={lng.code} 
            onClick={() => switchLanguage(lng.code)}>
              {lng.lang}
            </button>
          )
        }
      )}
      </div>
  )
}

export default LanguageSwitcher