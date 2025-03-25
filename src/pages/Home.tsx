import React from 'react';
import { motion } from 'framer-motion';
import CardTemplate from '../components/CardTemplate';

const templates = [
  {
    type: 'birthday',
    imageUrl: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d',
    title: 'Birthday Celebration',
    description: 'Create magical birthday cards with animated effects and personalized messages.'
  },
  {
    type: 'anniversary',
    imageUrl: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b',
    title: 'Anniversary Love',
    description: 'Celebrate special moments with elegant anniversary cards and romantic designs.'
  },
  {
    type: 'event',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    title: 'Special Event',
    description: 'Design stunning cards for any occasion with customizable templates and themes.'
  },
  {
    type: 'custom',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176',
    title: 'Custom Design',
    description: 'Create your own unique card by selecting event type, images, and customizing every detail.'
  }
];

const Home = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-purple-600 to-pink-600 text-white py-40">
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
          <h2 className="text-3xl font-bold text-center mb-4">Choose Your Template</h2>
          <p className="text-center text-gray-600 mb-12">Select a template to start creating your personalized gift card</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((template) => (
              <CardTemplate
                key={template.type}
                type={template.type}
                imageUrl={template.imageUrl}
                title={template.title}
                description={template.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Choose Template</h3>
              <p className="text-gray-600">Select from our beautiful collection of templates</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customize</h3>
              <p className="text-gray-600">Add your personal touch with text and images</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Share</h3>
              <p className="text-gray-600">Share your creation via email or social media</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;