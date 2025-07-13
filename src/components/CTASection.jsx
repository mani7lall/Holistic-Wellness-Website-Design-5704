import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiPhone, FiMail, FiMapPin, FiClock, FiCheck, FiArrowRight } = FiIcons;

const CTASection = () => {
  const consultationBenefits = [
    'Comprehensive health assessment',
    'Personalized wellness roadmap',
    'Expert practitioner consultation',
    'No obligation or pressure'
  ];

  const contactMethods = [
    {
      icon: FiPhone,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      description: 'Speak directly with our wellness coordinators'
    },
    {
      icon: FiMail,
      title: 'Email Us',
      info: 'hello@hebewellness.com',
      description: 'Get detailed information about our services'
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      info: '123 Wellness Ave, Health City',
      description: 'Tour our state-of-the-art wellness center'
    },
    {
      icon: FiClock,
      title: 'Hours',
      info: 'Mon-Fri: 8AM-7PM, Sat: 9AM-5PM',
      description: 'Flexible scheduling to fit your lifestyle'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-bold font-playfair text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your Journey to
            <span className="block text-emerald-200">
              Optimal Health Starts Here
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Take the first step towards transforming your health naturally. 
            Book your complimentary consultation today and discover how our 
            holistic approach can help you achieve lasting wellness.
          </motion.p>

          {/* Main CTA Card */}
          <motion.div
            className="bg-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Benefits */}
              <div className="text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
                  Free 30-Minute Consultation
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  During your complimentary consultation, our expert practitioners will:
                </p>
                
                <div className="space-y-4 mb-8">
                  {consultationBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                        <SafeIcon icon={FiCheck} className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-emerald-50 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <SafeIcon icon={FiCalendar} className="w-6 h-6 text-emerald-600" />
                    <span className="font-semibold text-gray-900">Available Today</span>
                  </div>
                  <p className="text-gray-600">
                    Same-day appointments available for urgent wellness needs
                  </p>
                </div>
              </div>

              {/* Right Side - Booking Form */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center font-playfair">
                  Book Your Free Consultation
                </h4>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all">
                    <option>Preferred Service Area</option>
                    <option>Nutritional Therapy</option>
                    <option>Functional Medicine</option>
                    <option>Mind-Body Wellness</option>
                    <option>Energy Healing</option>
                    <option>Herbal Medicine</option>
                    <option>Detoxification</option>
                  </select>
                  
                  <textarea
                    placeholder="Tell us about your health goals or concerns (optional)"
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-medium text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Schedule Free Consultation</span>
                    <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <SafeIcon icon={method.icon} className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 font-playfair">{method.title}</h3>
              <p className="text-emerald-100 font-medium mb-2">{method.info}</p>
              <p className="text-emerald-200 text-sm">{method.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-playfair">
              Need Immediate Support?
            </h3>
            <p className="text-emerald-100 mb-6">
              Our wellness coordinators are available 24/7 for urgent health consultations 
              and emergency wellness support.
            </p>
            <motion.button
              className="bg-white text-emerald-600 px-8 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Emergency Line: (555) 999-HEAL
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;