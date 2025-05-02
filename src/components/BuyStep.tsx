import React from 'react';
import { motion } from 'framer-motion';

interface BuyStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export function BuyStep({ icon, title, description, index }: BuyStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative aspect-square"
    >
      <div className="glass-panel h-full rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group flex flex-col items-center justify-center text-center">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-red-500/20"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bangers text-2xl text-white">
            {index + 1}
          </div>
          
          <motion.div 
            className="text-green-600 mb-6"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.div>
          
          <h3 className="text-2xl font-bangers mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {title}
          </h3>
          
          <p className="text-gray-800 font-comic max-w-xs">
            {description}
          </p>
        </div>

        {index < 2 && (
          <motion.div
            className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 z-20"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <motion.path
                d="M8 24H40M40 24L28 12M40 24L28 36"
                stroke="#22C55E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </motion.div>
        )}

        <motion.div
          className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-r from-green-400/30 to-blue-500/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </motion.div>
  );
}