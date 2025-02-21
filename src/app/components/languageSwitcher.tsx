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
    <button 
      onClick={switchLocale} 
      className="p-2 border rounded flex flex-row items-center gap-2 hover:bg-gray-100 transition"
    >
      <img 
        src={currentLocale === "en" ? "/flags/es.png" : "/flags/gb.png"} 
        alt={currentLocale === "en" ? "Español" : "English"} 
        className="w-6 h-4 object-cover"
      />
      {currentLocale === "en" ? "🇪🇸" : "🇬🇧"}
    </button>
  );
};

export default LanguageSwitcher;