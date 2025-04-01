import React from "react";
import { motion } from "framer-motion";
import CardTemplate from "../components/CardTemplate";

const templates = [
  {
    type: "birthday",
    imageUrl: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d",
    title: "Birthday Celebration",
    description:
      "Create magical birthday cards with animated effects and personalized messages.",
  },
  {
    type: "anniversary",
    imageUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
    title: "Anniversary Love",
    description:
      "Celebrate special moments with elegant anniversary cards and romantic designs.",
  },
  {
    type: "event",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    title: "Special Event",
    description:
      "Design stunning cards for any occasion with customizable templates and themes.",
  },
  {
    type: "custom",
    imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176",
    title: "Custom Design",
    description:
      "Create your own unique card by selecting event type, images, and customizing every detail.",
  },
];

const Home = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-purple-600 to-pink-600 text-white py-20 sm:py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 sm:px-6 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Create Magical Gift Cards
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Customize and share beautiful animated gift cards for any occasion
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-purple-50 transition-colors"
            onClick={() => (window.location.href = "/edit/custom")}
          >
            Start Creating Now
          </motion.button>
        </motion.div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">
            Choose Your Template
          </h2>
          <p className="text-center text-gray-600 text-base sm:text-lg mb-8 sm:mb-12">
            Select a template to start creating your personalized gift card
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <motion.div whileHover={{ y: -10 }} className="p-6">
              <div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl font-bold text-purple-600">
                  1
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Choose Template
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Select from our beautiful collection of templates
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="p-6">
              <div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl font-bold text-purple-600">
                  2
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Customize
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Add your personal touch with text and images
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="p-6">
              <div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl font-bold text-purple-600">
                  3
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Share
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Share your creation via email or social media
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
