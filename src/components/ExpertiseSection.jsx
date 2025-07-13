import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiBookOpen, FiUsers, FiTrendingUp, FiCheck, FiStar } = FiIcons;

const ExpertiseSection = () => {
  const experts = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Founder & Lead Practitioner',
      specialties: ['Functional Medicine', 'Nutritional Therapy', 'Hormone Balance'],
      experience: '15+ years',
      certifications: ['ND', 'CNS', 'IFMCP'],
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Leading authority in integrative wellness with a passion for transforming lives through natural medicine.'
    },
    {
      name: 'Dr. Michael Torres',
      title: 'Mind-Body Specialist',
      specialties: ['Stress Management', 'Meditation', 'Energy Healing'],
      experience: '12+ years',
      certifications: ['PhD Psychology', 'RYT-500', 'Reiki Master'],
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Expert in bridging ancient wisdom with modern psychology for holistic mental wellness.'
    },
    {
      name: 'Dr. Emma Williams',
      title: 'Herbal Medicine Expert',
      specialties: ['Plant Medicine', 'Detoxification', 'Digestive Health'],
      experience: '10+ years',
      certifications: ['LAc', 'Herbalist', 'AHG'],
      image: 'https://images.unsplash.com/photo-1594824336592-4c9b4c0f4c1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Traditional herbalist combining time-tested plant medicine with modern therapeutic approaches.'
    }
  ];

  const credentials = [
    { icon: FiAward, title: 'Board Certified', description: 'All practitioners are certified by leading natural health organizations' },
    { icon: FiBookOpen, title: 'Continuous Education', description: 'Regular training in the latest wellness research and techniques' },
    { icon: FiUsers, title: 'Collaborative Care', description: 'Team-based approach ensuring comprehensive treatment plans' },
    { icon: FiTrendingUp, title: 'Proven Results', description: '98% client satisfaction rate with measurable health improvements' }
  ];

  const achievements = [
    '5000+ Lives Transformed',
    'Published Research Authors',
    'International Speaking Engagements',
    'Award-Winning Practice'
  ];

  return (
    <section id="expertise" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            Meet Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our board-certified practitioners bring decades of combined experience 
            in natural medicine, backed by rigorous training and proven results.
          </p>
        </motion.div>

        {/* Experts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Expert Image */}
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-emerald-600"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {expert.experience}
                </motion.div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold font-playfair mb-1">{expert.name}</h3>
                  <p className="text-emerald-200 font-medium">{expert.title}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {expert.bio}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Specialties</h4>
                  <div className="space-y-2">
                    {expert.specialties.map((specialty, specialtyIndex) => (
                      <div key={specialtyIndex} className="flex items-center space-x-2">
                        <SafeIcon icon={FiCheck} className="w-4 h-4 text-emerald-600" />
                        <span className="text-gray-600 text-sm">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {expert.certifications.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Consultation
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials Section */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <SafeIcon icon={credential.icon} className="w-8 h-8 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                {credential.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {credential.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Banner */}
        <motion.div
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl lg:text-4xl font-bold font-playfair mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Recognized Excellence in Natural Healthcare
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-300" />
                <span className="font-medium text-lg">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;