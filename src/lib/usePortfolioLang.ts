import { useState, useEffect } from "react";

export type Language = "id" | "en";

export function usePortfolioLang(): Language {
  // Always initialize to 'id' so SSR and client initial hydration render the exact same DOM tree!
  const [lang, setLang] = useState<Language>("id");

  useEffect(() => {
    const updateFromDOM = () => {
      const current = document.documentElement.getAttribute("data-lang") as Language;
      if (current === "id" || current === "en") {
        setLang(current);
      }
    };

    updateFromDOM();

    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ lang: Language }>;
      if (customEvent.detail?.lang) {
        setLang(customEvent.detail.lang);
      } else {
        updateFromDOM();
      }
    };

    window.addEventListener("lang-change", handleLangChange);
    return () => {
      window.removeEventListener("lang-change", handleLangChange);
    };
  }, []);

  return lang;
}
