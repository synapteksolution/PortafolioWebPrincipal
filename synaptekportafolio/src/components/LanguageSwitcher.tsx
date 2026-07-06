import { useLanguage } from '../i18n/LanguageContext'

interface LanguageSwitcherProps {
  className?: string
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage()

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={() => setLang('es')}
        className={`text-xs font-bold tracking-wider transition-colors ${
          lang === 'es' ? 'text-[var(--ochre)]' : 'text-gray-500 hover:text-white'
        }`}
      >
        ES
      </button>
      <span className="text-gray-700 text-xs">|</span>
      <button
        onClick={() => setLang('en')}
        className={`text-xs font-bold tracking-wider transition-colors ${
          lang === 'en' ? 'text-[var(--ochre)]' : 'text-gray-500 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  )
}
