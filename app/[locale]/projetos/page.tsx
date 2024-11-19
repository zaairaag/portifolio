import { Projects } from '@/components/sections/projects';
import { getTranslations } from 'next-intl/server';

export default async function ProjectsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('projects');
  const projectTranslations = {
    title: t('title'),
    subtitle: t('subtitle'),
    viewDetails: t('viewDetails')
  };

  return (
    <main>
      <div className="pt-20">
        <Projects 
          translations={projectTranslations}
          locale={locale}
        />
      </div>
    </main>
  );
}
