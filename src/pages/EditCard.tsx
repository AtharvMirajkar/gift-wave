import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import GiftCardCustomizer from '../components/GiftCardCustomizer';
import GiftCardPreview from '../components/GiftCardPreview';
import EventSelector from '../components/EventSelector';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const EditCard = () => {
  const { template } = useParams();
  const selectedTemplate = useSelector((state: RootState) => state.giftCard.template);

  if (!template || !['birthday', 'anniversary', 'event', 'custom'].includes(template)) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              {template === 'custom' ? 'Custom Card Editor' : `${template.charAt(0).toUpperCase() + template.slice(1)} Card Editor`}
            </h1>
            <p className="text-gray-600">
              {template === 'custom' 
                ? 'Create your perfect card by selecting an event type and customizing every detail'
                : `Customize your ${template} card with personal messages and images`}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
              {template === 'custom' && <EventSelector />}
              <div className="mt-8">
                <GiftCardCustomizer />
              </div>
            </div>
            <div className="order-1 lg:order-2 gift-card-preview">
              <div className="sticky top-6">
                <GiftCardPreview />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EditCard;