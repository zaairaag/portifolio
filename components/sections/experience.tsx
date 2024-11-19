import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaLightbulb } from 'react-icons/fa';

const Experience = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <FaCode className="text-4xl text-primary" />,
      title: t('experience.services.webDev'),
      description: t('experience.services.webDevDesc'),
      features: [
        t('experience.features.responsiveDesign'),
        t('experience.features.seoOptimization'),
        t('experience.features.apiIntegration'),
        t('experience.features.performanceAccess'),
      ],
      price: t('experience.prices.webDevPrice'),
    },
    {
      icon: <FaDatabase className="text-4xl text-primary" />,
      title: t('experience.services.fullstack'),
      description: t('experience.services.fullstackDesc'),
      features: [
        t('experience.features.frontendBackend'),
        t('experience.features.database'),
        t('experience.features.security'),
        t('experience.features.scalability'),
      ],
      price: t('experience.prices.fullstackPrice'),
      popular: true,
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary" />,
      title: t('experience.services.consulting'),
      description: t('experience.services.consultingDesc'),
      features: [
        t('experience.features.architecture'),
        t('experience.features.codeReview'),
        t('experience.features.bestPractices'),
        t('experience.features.mentoring'),
      ],
      price: t('experience.prices.consultingPrice'),
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('experience.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-card rounded-lg p-6 shadow-lg relative ${
                service.popular ? 'border-2 border-primary' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                  {t('experience.popular')}
                </div>
              )}
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-4 h-4 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-lg font-semibold text-primary">{service.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
