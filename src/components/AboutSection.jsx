import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiShield, FiUsers, FiAward, FiTrendingUp, FiCheck } = FiIcons;

const AboutSection = () => {
  const values = [
    {
      icon: FiHeart,
      title: 'Compassionate Care',
      description: 'Every treatment plan is crafted with deep understanding and empathy for your unique health journey.'
    },
    {
      icon: FiShield,
      title: 'Evidence-Based',
      description: 'Our methods are grounded in scientific research and validated by years of successful outcomes.'
    },
    {
      icon: FiUsers,
      title: 'Holistic Approach',
      description: 'We treat the whole person - mind, body, and spirit - for comprehensive wellness transformation.'
    },
    {
      icon: FiAward,
      title: 'Expert Practitioners',
      description: 'Our team consists of certified professionals with decades of combined experience in natural health.'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '5000+', label: 'Success Stories' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Natural Therapies' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-6">
            Your Trusted Partner in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Natural Wellness
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            For over 15 years, Hebe has been at the forefront of holistic healthcare, 
            combining ancient wisdom with modern science to deliver transformative wellness solutions.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 font-playfair">
                Pioneering Natural Healthcare Excellence
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to revolutionize healthcare through natural means, 
                Hebe has grown to become a leading authority in holistic wellness. Our 
                evidence-based approach combines traditional healing practices with 
                cutting-edge research to deliver results that last.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that true health comes from addressing the root causes, not 
                just symptoms. Our comprehensive methodology has helped thousands achieve 
                optimal wellness and maintain vibrant health naturally.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                'Certified by leading natural health organizations',
                'Personalized treatment plans for every individual',
                'Integration of mind, body, and spirit wellness',
                'Ongoing support throughout your health journey'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                    <SafeIcon icon={FiCheck} className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-700 text-lg">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Learn Our Story</span>
              <SafeIcon icon={FiTrendingUp} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Holistic wellness practice"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              
              {/* Floating Achievement Card */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {achievements.slice(0, 2).map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-emerald-600 font-playfair">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-gray-600">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <SafeIcon icon={value.icon} className="w-8 h-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;