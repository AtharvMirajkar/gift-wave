import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Share2, Upload, X, Download, Palette, RotateCcw, MessageSquare } from 'lucide-react';
import { toPng } from 'html-to-image';
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
  setPrimaryColor,
  setSecondaryColor,
  setTextColor,
  resetColors,
} from '../store/giftCardSlice';

const predefinedMessages = {
  graduation: [
    "Congratulations on your graduation! Your hard work and dedication have paid off. Here's to your bright future ahead! 🎓",
    "As you graduate, remember that this is just the beginning of your amazing journey. Wishing you success in all your future endeavors! 🌟",
    "Your graduation is a testament to your perseverance and determination. May your future be filled with endless possibilities! 🎊"
  ],
  wedding: [
    "Wishing you a lifetime of love, laughter, and happiness together. Congratulations on your special day! 💑",
    "May your love story continue to grow more beautiful with each passing day. Here's to a wonderful journey ahead! 💍",
    "Celebrating your love and the beautiful beginning of your new life together. Congratulations! 💝"
  ],
  newBaby: [
    "Welcome to the world, little one! Congratulations on your precious bundle of joy! 👶",
    "Wishing your family endless love, joy, and precious moments with your new arrival! 🍼",
    "Congratulations on your new baby! May your home be filled with endless cuddles and sweet giggles! 🎀"
  ],
  housewarming: [
    "Congratulations on your new home! May it be filled with love, laughter, and countless happy memories! 🏠",
    "Here's to new beginnings in your beautiful new home. Wishing you many years of happiness here! 🔑",
    "May your new home be blessed with warmth, love, and wonderful moments to cherish! 🌟"
  ],
  birthday: [
    "Happy Birthday! May your day be filled with joy, laughter, and unforgettable moments! 🎂",
    "Wishing you a fantastic birthday celebration filled with all the things that make you smile! 🎈",
    "Here's to another year of amazing adventures and beautiful memories. Happy Birthday! 🎉"
  ],
  anniversary: [
    "Happy Anniversary! Celebrating the beautiful love story you continue to write together! 💑",
    "Wishing you both a day filled with sweet memories and dreams for the future ahead! 💕",
    "Here's to another year of sharing love, laughter, and life's precious moments! 💝"
  ],
  congratulations: [
    "Congratulations on your amazing achievement! Your hard work and dedication truly paid off! 🌟",
    "Here's to celebrating your success and all the wonderful accomplishments ahead! 🎉",
    "You did it! Wishing you continued success in all your future endeavors! 🏆"
  ],
  getWell: [
    "Sending you warm wishes and positive thoughts for a speedy recovery! 🌸",
    "Get well soon! May each day bring you renewed strength and better health! 💐",
    "Thinking of you and hoping you're feeling better with each passing day! ❤️"
  ]
};

const GiftCardCustomizer = () => {
  const dispatch = useDispatch();
  const {
    template,
    customText,
    recipientName,
    senderName,
    imageUrl,
    primaryColor,
    secondaryColor,
    textColor,
    selectedEvent,
  } = useSelector((state: RootState) => state.giftCard);
  const [showShare, setShowShare] = useState(false);
  const [cardImageUrl, setCardImageUrl] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showPredefinedMessages, setShowPredefinedMessages] = useState(false);

  useEffect(() => {
    return () => {
      if (cardImageUrl) {
        URL.revokeObjectURL(cardImageUrl);
      }
    };
  }, [cardImageUrl]);

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageLoading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          dispatch(setImageUrl(reader.result as string));
          setImageLoading(false);
        };
        img.src = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }, [dispatch]);

  const captureCard = async () => {
    const cardElement = document.querySelector('.gift-card-preview');
    if (cardElement) {
      try {
        const dataUrl = await toPng(cardElement as HTMLElement, {
          quality: 0.95,
          backgroundColor: 'white'
        });
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        if (cardImageUrl) {
          URL.revokeObjectURL(cardImageUrl);
        }
        setCardImageUrl(objectUrl);
        return objectUrl;
      } catch (error) {
        console.error('Error capturing card:', error);
        return null;
      }
    }
    return null;
  };

  const handleShare = async () => {
    await captureCard();
    setShowShare(true);
  };

  const downloadCard = async () => {
    const imageUrl = await captureCard();
    if (imageUrl) {
      const link = document.createElement('a');
      link.download = `gift-card-${template}.png`;
      link.href = imageUrl;
      link.click();
    }
  };

  const handleResetColors = () => {
    dispatch(resetColors());
  };

  const handleSelectMessage = (message: string) => {
    dispatch(setCustomText(message));
    setShowPredefinedMessages(false);
  };

  const shareTitle = `A special gift card for ${recipientName || 'you'}!`;
  const shareUrl = cardImageUrl || window.location.origin;

  const inputClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 px-4 py-3";

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
                className="w-full rounded-lg"
                style={{ maxHeight: '400px', objectFit: 'contain' }}
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
                <span className="mt-2 block text-sm text-gray-600">
                  {imageLoading ? 'Processing...' : 'Upload an image'}
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={imageLoading}
                />
              </label>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Recipient's Name</label>
            <input
              type="text"
              value={recipientName}
              onChange={(e) => dispatch(setRecipientName(e.target.value))}
              className={inputClasses}
              placeholder="Enter recipient's name"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
            <div className="relative">
              <textarea
                value={customText}
                onChange={(e) => dispatch(setCustomText(e.target.value))}
                rows={4}
                className={`${inputClasses} resize-none`}
                placeholder="Write your message here..."
              />
              {selectedEvent && predefinedMessages[selectedEvent as keyof typeof predefinedMessages] && (
                <button
                  onClick={() => setShowPredefinedMessages(!showPredefinedMessages)}
                  className="absolute top-2 right-2 p-2 text-gray-500 hover:text-purple-600 transition-colors"
                  title="Use predefined message"
                >
                  <MessageSquare size={20} />
                </button>
              )}
            </div>
            {showPredefinedMessages && selectedEvent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200"
              >
                <div className="p-2">
                  {predefinedMessages[selectedEvent as keyof typeof predefinedMessages]?.map((message, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.01 }}
                      onClick={() => handleSelectMessage(message)}
                      className="w-full text-left p-3 hover:bg-purple-50 rounded-md transition-colors text-sm"
                    >
                      {message}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              value={senderName}
              onChange={(e) => dispatch(setSenderName(e.target.value))}
              className={inputClasses}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="flex items-center space-x-2 text-sm font-medium text-gray-700"
            >
              <Palette size={16} />
              <span>{showColorPicker ? 'Hide Color Options' : 'Customize Colors'}</span>
            </button>
            
            {showColorPicker && (
              <div className="mt-6 space-y-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium text-gray-700">Color Customization</h3>
                  <button
                    onClick={handleResetColors}
                    className="flex items-center space-x-1 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <RotateCcw size={14} />
                    <span>Reset Colors</span>
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Color
                  </label>
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => dispatch(setPrimaryColor(e.target.value))}
                    className="block w-full h-10 rounded-md cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Secondary Color
                  </label>
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => dispatch(setSecondaryColor(e.target.value))}
                    className="block w-full h-10 rounded-md cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Text Color
                  </label>
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => dispatch(setTextColor(e.target.value))}
                    className="block w-full h-10 rounded-md cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadCard}
            className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </motion.button>
        </div>

        {showShare && cardImageUrl && (
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