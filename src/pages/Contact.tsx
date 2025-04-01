import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";

const inputClasses =
  "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm sm:text-base px-4 py-2";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
            Have questions or suggestions? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Your message..."
                    className={`${inputClasses} resize-none`}
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 sm:py-3 px-4 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg p-6 sm:p-8"
              >
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Email
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        support@giftwave.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Phone
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Address
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        123 Gift Street
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg p-6 sm:p-8"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-4">
                  Additional Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span className="text-sm sm:text-base text-gray-600">
                      Business Hours: Mon-Fri, 9AM-6PM PST
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <span className="text-sm sm:text-base text-gray-600">
                      Available Worldwide
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
