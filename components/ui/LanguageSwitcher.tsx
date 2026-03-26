"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "id" | "en") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center rounded-full border border-outline-variant/30 overflow-hidden text-xs font-bold tracking-wider">
      <button
        onClick={() => switchLocale("id")}
        className={`px-3 py-1.5 transition-all cursor-pointer ${
          locale === "id"
            ? "bg-primary/20 text-primary"
            : "text-neutral-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white"
        }`}
      >
        ID
      </button>
      <div className="w-[1px] h-4 bg-outline-variant/30" />
      <button
        onClick={() => switchLocale("en")}
        className={`px-3 py-1.5 transition-all cursor-pointer ${
          locale === "en"
            ? "bg-primary/20 text-primary"
            : "text-neutral-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
