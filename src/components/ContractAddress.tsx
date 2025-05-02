import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, CheckCircle } from 'lucide-react';

interface ContractAddressProps {
  address: string;
}

export function ContractAddress({ address }: ContractAddressProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div
      className="relative max-w-3xl mx-auto" // Increased width by 25%
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={copyToClipboard}
        className="w-full glass-panel p-8 rounded-lg backdrop-blur-md 
                 bg-gradient-to-r from-purple-500/20 via-green-500/20 to-blue-500/20
                 border-2 border-white/30 shadow-xl
                 group relative overflow-hidden
                 transition-all duration-300 ease-out
                 hover:shadow-2xl hover:scale-[1.02]
                 active:scale-[0.98]"
        style={{ 
          minHeight: "calc(120% * var(--base-height))", // Increased height by 20%
          textShadow: '0 1px 2px rgba(0,0,0,0.1)' 
        }}
      >
        {/* Pulsing glow effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(74, 222, 128, 0)',
              '0 0 20px 4px rgba(74, 222, 128, 0.3)',
              '0 0 0 0 rgba(74, 222, 128, 0)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Gradient animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-green-500/20 to-blue-500/20"
          animate={{
            x: ["0%", "100%", "0%"],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="relative flex items-center justify-between gap-6">
          <div className="flex-1">
            <div className="text-base font-comic font-semibold text-gray-700 mb-2">
              Contract Address
            </div>
            <div className="font-mono text-xl sm:text-2xl font-bold text-gray-800 break-all tracking-wide">
              {address}
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <AnimatePresence>
              {copied ? (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  className="text-green-500"
                >
                  <CheckCircle className="w-8 h-8" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-600 group-hover:text-gray-800 transition-colors"
                >
                  <Copy className="w-8 h-8" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-0 right-0 m-3 px-4 py-2 bg-green-500 text-white text-base rounded-full font-comic font-semibold shadow-lg"
            >
              Copied!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional decorative elements */}
        <motion.div
          className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-r from-green-400/30 to-blue-500/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </button>
    </motion.div>
  );
}