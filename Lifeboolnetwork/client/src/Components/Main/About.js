import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      title: "Efficient Management",
      description: "Streamlined tracking and management of blood donations across the network",
      icon: "fa-solid fa-chart-line"
    },
    {
      title: "Donor-Recipient Connection",
      description: "Direct connection between blood donors and those in urgent need",
      icon: "fa-solid fa-handshake"
    },
    {
      title: "Real-time Updates",
      description: "Instant notifications and updates on blood shortages and requirements",
      icon: "fa-solid fa-bell"
    },
    {
      title: "Blood Bank Integration",
      description: "Comprehensive interface for blood banks to manage their operations",
      icon: "fa-solid fa-hospital"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      {/* Hero Section */}
      <div className="relative bg-red-600 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631815589966-38c9c9a6c6c9?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">About Lifeblood Network</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Connecting donors, recipients, and blood banks to save lives through efficient blood donation management
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lifeblood Network serves as a comprehensive platform for individuals to register as blood donors, 
            facilitating both blood donation requests and donations. We empower blood banks to efficiently 
            manage their stocks by overseeing pending donations, requests, scheduling blood camps, and 
            managing them effectively. Our system ensures secure authentication for users and blood banks 
            through mobile number verification, providing access to advanced functionalities.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-red-600 text-3xl mb-4">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Platform</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lifeblood Network provides a dual-interface system: a user-friendly platform for donors and 
            recipients, and a comprehensive management system for blood banks. This integrated approach 
            ensures seamless coordination between all stakeholders in the blood donation ecosystem, 
            making the process of blood donation and management more efficient and accessible.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;