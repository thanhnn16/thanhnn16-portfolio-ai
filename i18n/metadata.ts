import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

/**
 * Helper function to generate metadata for pages with i18n support
 * 
 * @param params The route params containing the locale
 * @param namespace The translation namespace for page metadata
 */
export async function generateMetadata(
  params: { locale: string },
  namespace: string
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace });

  return {
    title: t('title'),
    description: t('description'),
  };
}

/**
 * Helper function to generate dynamic metadata for content pages with i18n support
 * 
 * @param params The route params containing the locale and dynamic params
 * @param namespace The translation namespace for page metadata
 * @param getPageData A function to fetch the page data based on the params
 */
export async function generateDynamicMetadata<T>(
  params: { locale: string, [key: string]: string },
  namespace: string,
  getPageData: (params: { locale: string, [key: string]: string }) => Promise<T>,
  formatTitle: (data: T, t: any) => string,
  formatDescription: (data: T, t: any) => string,
): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace });
  const data = await getPageData(params);

  return {
    title: formatTitle(data, t),
    description: formatDescription(data, t),
  };
}
