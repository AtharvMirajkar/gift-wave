import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Share2, Upload, X } from 'lucide-react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';
import { RootState } from '../store/store';
import {
  setCustomText,
  setRecipientName,
  setSenderName,
  setImageUrl,
} from '../store/giftCardSlice';

const GiftCardCustomizer = () => {
  const dispatch = useDispatch();
  const { template, customText, recipientName, senderName, imageUrl } = useSelector(
    (state: RootState) => state.giftCard
  );
  const [showShare, setShowShare] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setImageUrl(reader.result as string));
      };
      reader.readAsDataURL(file);
    }
  };

  const shareUrl = window.location.href;
  const shareTitle = `Gift Card for ${recipientName}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto"
    >
      <div className="space-y-6">
        <div className="relative">
          {imageUrl ? (
            <div className="relative">
              <img
                src={imageUrl}
                alt="Custom gift card"
                className="w-full h-64 object-cover rounded-lg"
              />
              <button
                onClick={() => dispatch(setImageUrl(''))}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <label className="cursor-pointer block">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <span className="mt-2 block text-sm text-gray-600">Upload an image</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Recipient's Name</label>
            <input
              type="text"
              value={recipientName}
              onChange={(e) => dispatch(setRecipientName(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder="Enter recipient's name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              value={customText}
              onChange={(e) => dispatch(setCustomText(e.target.value))}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder="Write your message here..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              value={senderName}
              onChange={(e) => dispatch(setSenderName(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder="Enter your name"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowShare(!showShare)}
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </motion.button>
        </div>

        {showShare && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex space-x-4 justify-center pt-4"
          >
            <FacebookShareButton url={shareUrl} quote={shareTitle}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={shareTitle}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton url={shareUrl} title={shareTitle}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <EmailShareButton url={shareUrl} subject={shareTitle}>
              <EmailIcon size={32} round />
            </EmailShareButton>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default GiftCardCustomizer;