import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RoadmapBlockProps {
  quarter: string;
  title: string;
  items: Array<{
    title: string;
    description: string;
    emoji?: string;
  }>;
  isFirst?: boolean;
  isLast?: boolean;
}

export function RoadmapBlock({ 
  quarter,
  title, 
  items,
  isFirst, 
  isLast 
}: RoadmapBlockProps) {
  const blockRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(blockRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const createParticles = () => {
    if (!blockRef.current) return;
    
    const particles = Array.from({ length: 5 }).map((_, i) => {
      const particle = document.createElement('div');
      particle.className = 'particle animate-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      blockRef.current?.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 3000);
    });
  };

  return (
    <div ref={blockRef} className="relative" onMouseEnter={createParticles}>
      {!isFirst && (
        <div className="roadmap-connector">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full w-full origin-left bg-gradient-to-r from-green-400 to-blue-500"
          />
        </div>
      )}
      
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-panel p-6 rounded-xl relative overflow-hidden group transform-gpu hover:scale-[1.02] transition-all duration-300"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        
        <div className="space-y-4 relative z-10">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="text-sm font-comic text-green-600 mb-1">{quarter}</div>
            <h3 className="text-2xl font-bangers mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">{title}</h3>
          </motion.div>
          
          <div className="space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="font-comic group/item"
              >
                <h4 className="text-lg font-bangers mb-2 flex items-center gap-2 transform-gpu group-hover/item:translate-x-2 transition-transform duration-300">
                  <span className="text-green-600">{item.title}</span>
                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                    }}
                  >
                    {item.emoji}
                  </motion.span>
                </h4>
                <p className="text-gray-700 pl-4 border-l-2 border-green-400/30 group-hover/item:border-green-400 transition-colors duration-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}