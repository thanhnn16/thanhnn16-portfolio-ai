'use client'

import { NextIntlClientProvider } from 'next-intl';
import { useMessages, useLocale } from 'next-intl';

export function NextIntlClientProviderWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const messages = useMessages();
  const locale = useLocale();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
} 