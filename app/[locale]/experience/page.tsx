'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const experiences = [
  {
    titleKey: 'webDev',
    descriptionKey: 'webDevDesc',
    features: [
      'responsiveDesign',
      'seoOptimization',
      'apiIntegration',
      'performanceAccess',
    ],
    price: 'webDevPrice',
    highlight: false,
  },
  {
    titleKey: 'fullstack',
    descriptionKey: 'fullstackDesc',
    features: [
      'frontendBackend',
      'database',
      'security',
      'scalability',
    ],
    price: 'fullstackPrice',
    highlight: true,
  },
  {
    titleKey: 'consulting',
    descriptionKey: 'consultingDesc',
    features: [
      'architecture',
      'codeReview',
      'bestPractices',
      'mentoring',
    ],
    price: 'consultingPrice',
    highlight: false,
  },
];

export default function ExperiencePage() {
  const t = useTranslations('experience');

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1 py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                {t('title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('subtitle')}
              </p>
            </div>

            {/* Experiences Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`p-6 space-y-6 relative overflow-hidden ${
                    experience.highlight ? 'border-primary' : ''
                  }`}>
                    {experience.highlight && (
                      <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl">
                        {t('popular')}
                      </div>
                    )}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{t(`experiences.${experience.titleKey}`)}</h3>
                      <p className="text-muted-foreground">{t(`experiences.${experience.descriptionKey}`)}</p>
                    </div>

                    <ul className="space-y-3">
                      {experience.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span className="text-sm">{t(`features.${feature}`)}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-4">
                      <p className="text-lg font-bold">{t(`prices.${experience.price}`)}</p>
                      <Button className="w-full group" variant={experience.highlight ? 'default' : 'outline'}>
                        {t('requestQuote')}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* FAQ Section */}
            <section className="space-y-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center">{t('faq.title')}</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-semibold">{t('faq.process.question')}</h3>
                  <p className="text-muted-foreground mt-2">
                    {t('faq.process.answer')}
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold">{t('faq.timeline.question')}</h3>
                  <p className="text-muted-foreground mt-2">
                    {t('faq.timeline.answer')}
                  </p>
                </Card>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
