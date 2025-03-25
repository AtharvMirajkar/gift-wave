import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, Sparkles, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">About GiftWave</h1>
            <p className="text-xl text-gray-600">
              Creating meaningful connections through beautiful digital gift cards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-pink-500 mr-3" />
                <h2 className="text-2xl font-semibold">Our Story</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                GiftWave was born from a simple idea: making gift-giving more personal
                and meaningful in our digital age. We believe that every occasion
                deserves a touch of creativity and warmth, even when we can't be
                there in person.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-2xl font-semibold">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We're dedicated to helping people create beautiful, personalized
                digital gift cards that capture the essence of their relationships
                and celebrations, making every moment more special and memorable.
              </p>
            </motion.div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">What Makes Us Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Gift className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Unique Designs</h3>
                <p className="text-gray-600">
                  Carefully crafted templates for every occasion
                </p>
              </div>
              <div className="text-center">
                <Sparkles className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Easy Customization</h3>
                <p className="text-gray-600">
                  Intuitive tools to personalize your cards
                </p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Made with Love</h3>
                <p className="text-gray-600">
                  Personal touch in every digital card
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Start Creating Today</h2>
            <p className="text-xl mb-8">
              Join thousands of others who make their celebrations special with GiftWave
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
              onClick={() => window.location.href = '/'}
            >
              Create Your First Card
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;