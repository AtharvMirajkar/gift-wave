import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setSelectedEvent, setSelectedImage, setImageUrl } from '../store/giftCardSlice';

interface EventOption {
  type: string;
  title: string;
  images: Array<{
    url: string;
    alt: string;
  }>;
}

const eventOptions: EventOption[] = [
  {
    type: 'graduation',
    title: 'Graduation',
    images: [
      { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1', alt: 'Graduation celebration' },
      { url: 'https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78', alt: 'Graduation cap' },
      { url: 'https://images.unsplash.com/photo-1627556704302-624286467c65', alt: 'Graduation ceremony' },
    ]
  },
  {
    type: 'wedding',
    title: 'Wedding',
    images: [
      { url: 'https://images.unsplash.com/photo-1519741497674-611481863552', alt: 'Wedding rings' },
      { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc', alt: 'Wedding ceremony' },
      { url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed', alt: 'Wedding flowers' },
    ]
  },
  {
    type: 'newBaby',
    title: 'New Baby',
    images: [
      { url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba', alt: 'Baby feet' },
      { url: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9', alt: 'Baby toys' },
      { url: 'https://images.unsplash.com/photo-1630304565858-642d53fa18ff', alt: 'Baby smile' },
    ]
  },
  {
    type: 'housewarming',
    title: 'Housewarming',
    images: [
      { url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa', alt: 'Modern home' },
      { url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858', alt: 'Living room' },
      { url: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4', alt: 'House keys' },
    ]
  },
  {
    type: 'birthday',
    title: 'Birthday',
    images: [
      { url: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d', alt: 'Birthday cake' },
      { url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d', alt: 'Birthday balloons' },
      { url: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3', alt: 'Birthday party' },
    ]
  },
  {
    type: 'anniversary',
    title: 'Anniversary',
    images: [
      { url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b', alt: 'Anniversary celebration' },
      { url: 'https://images.unsplash.com/photo-1518599807935-37015b9cefcb', alt: 'Romantic dinner' },
      { url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2', alt: 'Love hearts' },
    ]
  },
  {
    type: 'congratulations',
    title: 'Congratulations',
    images: [
      { url: 'https://images.unsplash.com/photo-1531686264889-56fdcabd163f', alt: 'Success celebration' },
      { url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176', alt: 'Achievement' },
      { url: 'https://images.unsplash.com/photo-1586473219010-2ffc57b0d282', alt: 'Celebration' },
    ]
  },
  {
    type: 'getWell',
    title: 'Get Well',
    images: [
      { url: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66', alt: 'Flowers' },
      { url: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a', alt: 'Peaceful scene' },
      { url: 'https://images.unsplash.com/photo-1517241034903-9a4c3ab12f00', alt: 'Healing' },
    ]
  }
];

const EventSelector: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedEventType, setSelectedEventType] = React.useState<string>('');

  const handleEventSelect = (eventType: string) => {
    setSelectedEventType(eventType);
    dispatch(setSelectedEvent(eventType));
  };

  const handleImageSelect = (imageUrl: string) => {
    dispatch(setSelectedImage(imageUrl));
    dispatch(setImageUrl(imageUrl));
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Select Event Type</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {eventOptions.map((event) => (
            <motion.button
              key={event.type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleEventSelect(event.type)}
              className={`p-4 rounded-lg text-center transition-colors ${
                selectedEventType === event.type
                  ? 'bg-purple-600 text-white'
                  : 'bg-white hover:bg-purple-50'
              }`}
            >
              {event.title}
            </motion.button>
          ))}
        </div>
      </div>

      {selectedEventType && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-semibold mb-4">Choose an Image</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {eventOptions
              .find((event) => event.type === selectedEventType)
              ?.images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer relative rounded-lg overflow-hidden"
                  onClick={() => handleImageSelect(image.url)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity" />
                </motion.div>
              ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EventSelector;