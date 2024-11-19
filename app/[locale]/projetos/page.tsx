import { Projects } from '@/components/sections/projects';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string }
};

export default async function ProjectsPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations('projects');
  const projectTranslations = {
    title: t('title'),
    subtitle: t('subtitle'),
    viewDetails: t('viewDetails')
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="pt-20">
        <Projects 
          translations={projectTranslations}
          locale={locale}
        />
      </div>
    </main>
  );
}
