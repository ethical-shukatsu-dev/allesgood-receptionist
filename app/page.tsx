'use client'

import GuestForm from "@/components/GuestForm";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center p-4 min-h-screen">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary">
          {t.homePage.welcome}
        </h1>
        <p className="mt-2 text-gray-600">{t.homePage.subtitle}</p>
      </header>

      <GuestForm />

      <footer className="mt-8 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} BaseMe Inc. All Rights Reserved.
      </footer>
    </div>
  );
}
