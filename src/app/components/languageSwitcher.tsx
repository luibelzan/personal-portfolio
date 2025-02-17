"use client";
import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Extraer el idioma actual desde la URL
  const currentLocale = pathname.split("/")[1];

  // Alternar entre inglés y español
  const switchLocale = () => {
    const newLocale = currentLocale === "en" ? "es" : "en";
    router.push(`/${newLocale}${pathname.substring(3)}`);
  };

  return (
    <button onClick={switchLocale} className="p-2 border rounded">
      {currentLocale === "en" ? "🇪🇸 Español" : "🇬🇧 English"}
    </button>
  );
};

export default LanguageSwitcher;