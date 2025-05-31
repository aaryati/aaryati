import React from 'react';
import AnnouncementBanner from '@/components/sections/AnnouncementBanner';
import HeroSection from '@/components/sections/HeroSection';
import StatisticsSection from '@/components/sections/StatisticsSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import FeatureHighlight from '@/components/sections/FeatureHighlight';
import TechnicalFeatureSection from '@/components/sections/TechnicalFeatureSection';
import CallToAction from '@/components/sections/CallToAction';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Aaryati Technologies - Mulesoft to Spring Boot Conversion</title>
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <AnnouncementBanner />
        <HeroSection />
        <StatisticsSection />
        <WhyChooseUsSection />
        <FeatureHighlight />
        <TechnicalFeatureSection />
        <CallToAction />
      </motion.div>
    </>
  );
};

export default Home;
