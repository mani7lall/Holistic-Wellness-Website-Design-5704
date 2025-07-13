import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiActivity, FiBrain, FiSun, FiLeaf, FiZap, FiArrowRight, FiClock, FiUsers, FiAward } = FiIcons;

const ServicesSection = () => {
  const services = [
    {
      icon: FiHeart,
      title: 'Nutritional Therapy',
      description: 'Personalized nutrition plans using whole foods and natural supplements to optimize your health from within.',
      features: ['Custom meal planning', 'Supplement guidance', 'Metabolic assessment', 'Ongoing support'],
      duration: '60-90 min sessions',
      clients: '1200+ served',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: FiBrain,
      title: 'Mind-Body Wellness',
      description: 'Integrative approaches combining meditation, breathwork, and cognitive techniques for mental clarity.',
      features: ['Stress management', 'Meditation training', 'Emotional balance', 'Mindfulness practices'],
      duration: '45-75 min sessions',
      clients: '800+ transformed',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: FiActivity,
      title: 'Functional Medicine',
      description: 'Root-cause analysis and treatment using advanced diagnostics and natural therapeutic protocols.',
      features: ['Comprehensive testing', 'Root cause analysis', 'Natural protocols', 'System restoration'],
      duration: '90-120 min consultations',
      clients: '2000+ healed',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: FiSun,
      title: 'Energy Healing',
      description: 'Ancient healing modalities including acupuncture, reiki, and chakra balancing for energy restoration.',
      features: ['Acupuncture therapy', 'Reiki healing', 'Chakra balancing', 'Energy assessment'],
      duration: '60-90 min sessions',
      clients: '600+ energized',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: FiLeaf,
      title: 'Herbal Medicine',
      description: 'Traditional plant-based remedies customized for your specific health needs and constitution.',
      features: ['Custom formulations', 'Organic herbs', 'Traditional wisdom', 'Modern application'],
      duration: '45-60 min consultations',
      clients: '900+ treated',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: FiZap,
      title: 'Detoxification',
      description: 'Comprehensive cleansing programs to eliminate toxins and restore optimal cellular function.',
      features: ['Gentle detox protocols', 'Liver support', 'Cellular cleansing', 'Lifestyle guidance'],
      duration: '2-4 week programs',
      clients: '1500+ cleansed',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
            Comprehensive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Wellness Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our integrated approach to natural health combines time-tested therapies 
            with modern science to address your unique wellness needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Icon */}
                <motion.div
                  className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <SafeIcon icon={service.icon} className="w-6 h-6 text-emerald-600" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiClock} className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiUsers} className="w-4 h-4" />
                    <span>{service.clients}</span>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold font-playfair mb-6">
              Not Sure Which Service is Right for You?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Book a complimentary consultation with our wellness experts to create 
              your personalized path to optimal health.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Free Consultation</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;