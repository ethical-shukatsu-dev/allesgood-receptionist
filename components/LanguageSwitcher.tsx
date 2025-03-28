'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Language } from '@/lib/i18n'

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Select
        value={language}
        onValueChange={(value: Language) => setLanguage(value)}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder={t.langSwitcher.label} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ja">{t.langSwitcher.options.ja}</SelectItem>
          <SelectItem value="en">{t.langSwitcher.options.en}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
} 