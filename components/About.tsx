import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMicrosoftsharepoint,
  SiMicrosoft,
  SiGit,
  SiDocker,
  SiAzuredevops,
  SiAmazon,
} from 'react-icons/si';

const About = () => {
  const { t } = useLanguage();

  const technologies = {
    languages: [
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
    ],
    frontend: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    ],
    backend: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
    ],
    microsoft: [
      { name: 'SharePoint', icon: <SiMicrosoftsharepoint /> },
      { name: 'Office 365', icon: <SiMicrosoft /> },
    ],
    cloud: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Azure DevOps', icon: <SiAzuredevops /> },
      { name: 'AWS', icon: <SiAmazon /> },
    ],
  };

  const experienceItems = (t('about.experience.items') || []) as Array<{
    year: string;
    role: string;
    company: string;
    description: string;
  }>;

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{t('about.journey.title')}</h3>
            <p className="text-gray-600">{t('about.journey.description')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{t('about.experience.title')}</h3>
            <div className="space-y-4">
              {experienceItems.map((item, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <p className="text-gray-500">{item.year}</p>
                  <h4 className="font-semibold">{item.role}</h4>
                  <p className="text-primary">{item.company}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            {t('about.technologies.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category} className="text-center">
                <h4 className="font-semibold mb-4">
                  {t(`about.technologies.${category}`)}
                </h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {techs.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center hover:text-primary transition-colors"
                      title={tech.name}
                    >
                      <div className="text-2xl mb-1">{tech.icon}</div>
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
