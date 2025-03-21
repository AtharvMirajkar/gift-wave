import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import CardTemplate from '../components/CardTemplate';
import GiftCardCustomizer from '../components/GiftCardCustomizer';
import GiftCardPreview from '../components/GiftCardPreview';
import { RootState } from '../store/store';

const templates = [
  {
    type: 'birthday',
    imageUrl: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d',
    title: 'Birthday Celebration'
  },
  {
    type: 'anniversary',
    imageUrl: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b',
    title: 'Anniversary Love'
  },
  {
    type: 'event',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    title: 'Special Event'
  }
];

const Home = () => {
  const selectedTemplate = useSelector((state: RootState) => state.giftCard.template);

  return (
    <div>
      <section className="bg-gradient-to-b from-purple-600 to-pink-600 text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-6 text-center"
        >
          <h1 className="text-5xl font-bold mb-6">Create Magical Gift Cards</h1>
          <p className="text-xl mb-8">Customize and share beautiful animated gift cards for any occasion</p>
        </motion.div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Template</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((template) => (
              <CardTemplate
                key={template.type}
                type={template.type}
                imageUrl={template.imageUrl}
                title={template.title}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedTemplate && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Customize Your Gift Card</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <GiftCardCustomizer />
              <GiftCardPreview />
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6"
            >
              <h3 className="text-xl font-semibold mb-4">1. Choose Template</h3>
              <p className="text-gray-600">Select from our beautiful collection of templates</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6"
            >
              <h3 className="text-xl font-semibold mb-4">2. Customize</h3>
              <p className="text-gray-600">Add your personal touch with text and images</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6"
            >
              <h3 className="text-xl font-semibold mb-4">3. Share</h3>
              <p className="text-gray-600">Share your creation via email or social media</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;