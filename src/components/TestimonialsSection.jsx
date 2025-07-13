import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiChevronLeft, FiChevronRight, FiQuote } = FiIcons;

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Marketing Executive',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b3fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      quote: 'Hebe transformed my life completely. After struggling with chronic fatigue for years, their holistic approach gave me my energy back. The personalized nutrition plan and stress management techniques have been life-changing.',
      results: 'Energy levels increased by 300%',
      condition: 'Chronic Fatigue Syndrome'
    },
    {
      name: 'Michael Chen',
      title: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      quote: 'The functional medicine approach at Hebe uncovered root causes that traditional medicine missed. Dr. Chen\'s expertise in gut health helped me overcome digestive issues I\'d had for over a decade.',
      results: 'Digestive symptoms eliminated',
      condition: 'IBS & Food Sensitivities'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Yoga Instructor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      quote: 'The mind-body wellness program exceeded all my expectations. The combination of meditation, breathwork, and energy healing has brought such peace and clarity to my life. I feel more balanced than ever.',
      results: 'Anxiety reduced by 80%',
      condition: 'Anxiety & Stress'
    },
    {
      name: 'David Thompson',
      title: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      quote: 'Hebe\'s detoxification program was exactly what I needed. The gentle approach and ongoing support made all the difference. I lost 30 pounds and feel 20 years younger. Best investment in my health ever.',
      results: 'Lost 30 lbs, improved vitality',
      condition: 'Metabolic Dysfunction'
    },
    {
      name: 'Lisa Park',
      title: 'Teacher',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      quote: 'The herbal medicine treatments helped me balance my hormones naturally. After years of unsuccessful conventional treatments, Hebe\'s approach finally gave me the results I was looking for.',
      results: 'Hormones balanced naturally',
      condition: 'Hormonal Imbalance'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const stats = [
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5000+', label: 'Success Stories' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '95%', label: 'Recommend Us' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-emerald-50">
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
            Real Stories of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how our holistic approach has helped thousands achieve 
            optimal health and transform their lives naturally.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600 font-playfair mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-96 lg:h-auto">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
                  
                  {/* Quote Icon */}
                  <motion.div
                    className="absolute top-8 left-8 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <SafeIcon icon={FiQuote} className="w-8 h-8 text-emerald-600" />
                  </motion.div>

                  {/* Results Badge */}
                  <motion.div
                    className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="text-sm text-gray-600 mb-1">Treatment Results</div>
                    <div className="font-bold text-emerald-600">{testimonials[currentTestimonial].results}</div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Stars */}
                    <div className="flex space-x-1 mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="border-t border-gray-200 pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 font-playfair">
                            {testimonials[currentTestimonial].name}
                          </h4>
                          <p className="text-gray-600">{testimonials[currentTestimonial].title}</p>
                          <p className="text-sm text-emerald-600 font-medium mt-1">
                            Treated for: {testimonials[currentTestimonial].condition}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-emerald-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">
            Ready to Write Your Own Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands who have transformed their health naturally. 
            Start your journey with a complimentary consultation.
          </p>
          <motion.button
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Your Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;