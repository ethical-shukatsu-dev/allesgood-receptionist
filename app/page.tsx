'use client'

import GuestForm from "@/components/GuestForm";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary">
          {t.homePage.welcome}
        </h1>
        <p className="mt-2 text-gray-600">{t.homePage.subtitle}</p>
      </header>

      <GuestForm />

      <footer className="mt-8 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Allesgood Inc.
      </footer>
    </div>
  );
}
