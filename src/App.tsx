import React, { useState, useEffect } from 'react';
import { X, Rocket, Globe2, Wallet, ArrowUp, Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Gallery } from './components/Gallery';
import { RoadmapBlock } from './components/RoadmapBlock';
import { BuyStep } from './components/BuyStep';
import { ContractAddress } from './components/ContractAddress';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const comicImages = [
    {
      src: "https://i.ibb.co/mC48mFLt/episode-1.png",
      alt: "DogePepe Comic Episode 1",
      date: "March 15, 2024",
      caption: "The Beginning: Heroes Unite"
    },
    {
      src: "https://i.ibb.co/JwRww7Pf/episode-2.png",
      alt: "DogePepe Comic Episode 2",
      date: "March 16, 2024",
      caption: "Chapter 2: The FUD Strikes Back"
    },
    {
      src: "https://i.ibb.co/qLnCX5yc/3-episode.png",
      alt: "DogePepe Comic Episode 3",
      date: "March 17, 2024",
      caption: "Chapter 3: Rise of the Memes"
    },
    {
      src: "https://i.ibb.co/tTrssxRr/4-episode.png",
      alt: "DogePepe Comic Episode 4",
      date: "March 18, 2024",
      caption: "Chapter 4: The Market Awakens"
    },
    {
      src: "https://i.ibb.co/kg7nRRS4/episode-5.png",
      alt: "DogePepe Comic Episode 5",
      date: "March 19, 2024",
      caption: "Chapter 5: Battle for the Blockchain"
    },
    {
      src: "https://i.ibb.co/j93Pv0CF/6-episode.png",
      alt: "DogePepe Comic Episode 6",
      date: "March 20, 2024",
      caption: "Chapter 6: To The Moon!"
    }
  ];

  return (
    <div className="min-h-screen comic-bg">
      <nav className="fixed w-full backdrop-blur-md bg-white/30 border-b-4 border-green-400 z-40">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="flex items-center justify-between h-16">
            <motion.span 
              className="text-2xl font-bangers bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-transparent bg-clip-text animate-gradient-xy hover:scale-105 transition-transform duration-300 drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DogePepe Heroes
            </motion.span>
            <div className="hidden md:flex items-center space-x-6">
              {['comics', 'teaser', 'buy', 'roadmap'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-lg font-comic transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}
              <motion.a
                href="https://twitter.com/dogepepeheroes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black hover:scale-110 transition-transform duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Follow us on X (formerly Twitter)"
              >
                <X className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </nav>

      <div className="pt-24 pb-16 px-4 section-bg">
        <div className="max-w-7xl mx-auto" ref={heroRef}>
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.img 
                src="https://i.ibb.co/s9NtgdLM/image.png" 
                alt="DogePepe Heroes Logo" 
                className="h-48 w-auto"
                animate={{ y: [0, -20, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="text-center md:text-left">
                <motion.h1 
                  className="font-bangers text-gray-900 drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <motion.span 
                    className="block text-4xl md:text-5xl xl:text-6xl"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    Heroes Unite
                  </motion.span>
                  <motion.span 
                    className="block text-5xl md:text-6xl xl:text-7xl text-green-600 mt-2"
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(74, 222, 128, 0)",
                        "0 0 20px rgba(74, 222, 128, 0.5)",
                        "0 0 10px rgba(74, 222, 128, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Save The Memeiverse!
                  </motion.span>
                </motion.h1>
              </div>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-800 mb-12 max-w-3xl mx-auto font-comic text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Join the epic adventure of Doge and Pepe as they protect the crypto realm from evil forces!
          </motion.p>
          
          <ContractAddress address="8neoYcmddLUYncUsoxizzV5XyKHG2KrwVpPq3eUpump" />
        </div>
      </div>

      <section id="comics" className="py-16 px-4 section-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bangers text-center mb-12 text-gray-900">
            <span className="inline-block animate-float">DogePepe Adventures</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
            <div className="lg:col-span-2 lg:row-span-2 comic-panel aspect-square group">
              <div className="relative w-full h-full transform transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src="https://i.ibb.co/GQ0dkr7h/oblojka.png"
                  alt="DogePepe Comic Cover"
                  className="w-full h-full object-contain transition-all duration-300 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 speech-bubble w-64 transition-transform duration-300 group-hover:scale-105">
                  <p className="font-comic text-lg mb-2">The Beginning: Heroes Unite</p>
                  <p className="font-comic text-sm text-gray-600">March 15, 2024</p>
                </div>
              </div>
            </div>

            <Gallery images={comicImages} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="glass-panel rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all">
              <img
                src={comicImages[0].src}
                alt="Episode 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bangers mb-2">Episode 1: The Heroes Unite</h3>
                <p className="text-gray-800 font-comic mb-4">
                  Join DogePepe Heroes in this epic adventure as they protect the crypto universe!
                </p>
                <a 
                  href="#comics"
                  className="glass-panel px-4 py-2 rounded-lg font-comic transition-all inline-block"
                >
                  Read Now
                </a>
              </div>
            </div>
            
            <div className="glass-panel rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all">
              <img
                src="https://i.ibb.co/Kc5JLPJd/2.png"
                alt="Episode 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bangers mb-2">Episode 2: Crypto Clash: The FUD Awakens</h3>
                <p className="text-gray-800 font-comic mb-4">
                  Pepe and Doge are on the ropes as the Bear's FUD hammer threatens to crush the crypto market. With the fate of digital currencies hanging by a thread, can memes and determination turn the tide?
                </p>
                <button className="glass-panel px-4 py-2 rounded-lg font-comic transition-all opacity-75 cursor-not-allowed">
                  Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="teaser" className="py-16 px-4 section-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bangers text-center mb-12 text-gray-900">Teaser</h2>
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9EkuOqEeWQQ?si=rscIgjGptgL6rHDI"
                  title="DogePepe Heroes: The Beginning"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 bg-gradient-to-r from-purple-500/10 via-green-500/10 to-blue-500/10">
                <h3 className="text-2xl font-bangers mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  DogePepe Heroes: The Beginning
                </h3>
                <p className="text-gray-800 font-comic">
                  Watch the epic teaser of our upcoming animated series!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="buy" className="py-16 px-4 section-bg relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(74, 222, 128, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(74, 222, 128, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(74, 222, 128, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-5xl font-bangers text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How to Buy
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <BuyStep
              icon={<Wallet className="h-12 w-12" />}
              title="1. Refill your wallet with SOL"
              description="Buy Solana (SOL) on an exchange such as Binance or Coinbase. Transfer SOL to your wallet."
              index={0}
            />
            
            <BuyStep
              icon={<Globe2 className="h-12 w-12" />}
              title="2. Connect to PumpFun"
              description="Go to the PumpFun websites. Click 'Connect Wallet.'"
              index={1}
            />
            
            <BuyStep
              icon={<Rocket className="h-12 w-12" />}
              title="3. Exchange SOL for DogePepe Heroes"
              description="Copy the address of the official DogePepe Heroes contract. Paste it into PumpFun's search bar. Exchange SOL for DogePepe Heroes and confirm the exchange."
              index={2}
            />
          </div>
        </div>
      </section>

      <section id="roadmap" className="py-16 px-4 section-bg overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-5xl font-bangers text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block animate-float">What's Ahead</span>
          </motion.h2>
          
          <div className="grid gap-8 relative">
            <RoadmapBlock
              quarter="Quarter 2 - 2025"
              title="The Grand Kick-Off"
              items={[
                {
                  title: "Coin Launch Extravaganza!",
                  description: "Bam! DogePepe meme coin hits the market! Get your wallets ready and start stacking those coins like you stack memes.",
                  emoji: "🚀"
                },
                {
                  title: "First Comic Book Drop",
                  description: "The DogePepe comic book launches its first episode! Meet our epic, meme-filled heroes and embark on their ridiculous adventures.",
                  emoji: "💥"
                },
                {
                  title: "Meme Army Assemble!",
                  description: "Calling all meme-lovers! Join our meme-ification events, viral-powered social media campaigns, and epic meme battles. Let's spread the word and the memes!",
                  emoji: "🎭"
                }
              ]}
              isFirst
            />
            
            <RoadmapBlock
              quarter="Quarter 3 - 2025"
              title="Giggle and Grow"
              items={[
                {
                  title: "Animated Series Debut",
                  description: "Grab your popcorn! The DogePepe animated series drops its first episode. Watch DogePepe save the world one meme at a time.",
                  emoji: "🎬"
                },
                {
                  title: "Partners in Meme!",
                  description: "We're teaming up with meme royalty and crypto celebs. Expect wild crossovers and legendary collabs. It's meme-with-meme madness!",
                  emoji: "🤝"
                },
                {
                  title: "NFT Craze",
                  description: "Collect exclusive DogePepe NFTs—from iconic comic scenes to animated series moments. No FOMO allowed—grab them while they're hot!",
                  emoji: "🚀"
                }
              ]}
            />
            
            <RoadmapBlock
              quarter="Quarter 4 - 2025"
              title="Merch and More Absurdness!"
              items={[
                {
                  title: "Toys, Toys, Toys",
                  description: "Get your own DogePepe plastic buddies! They're here to sit on your desk, vibe on your shelves, and join your meme-induced daydreams.",
                  emoji: "🧸"
                },
                {
                  title: "Epic Comic Sequels",
                  description: "New episodes of the DogePepe comic book incoming! More giggles, more nonsense, and more action-packed meme-lore.",
                  emoji: "📚"
                },
                {
                  title: "DogePepe Universe Expansion",
                  description: "Developing cool coin features like staking and yield farming, and maybe even DogePepe-themed games! This meme universe is infinite, bruh.",
                  emoji: "🌌"
                }
              ]}
              isLast
            />
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.p 
              className="text-xl font-comic text-gray-800 max-w-3xl mx-auto glass-panel p-6 rounded-xl relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-blue-500/20 to-purple-500/20"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <span className="relative z-10">
                Stay tuned, meme lords, because the DogePepe universe is just getting started. Join us for a wild ride filled with laughs, coins, collectibles, and sheer absurdity. Keep stacking those DogePepe coins and let's meme the world together! 🚀🐶🐸
              </span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-8 md:mb-0">
              <img 
                src="https://i.ibb.co/s9NtgdLM/image.png" 
                alt="DogePepe Heroes Logo" 
                className="h-8 w-auto animate-float"
              />
              <span className="ml-2 text-2xl font-bangers">DogePepe Heroes</span>
            </div>
            <motion.a
              href="mailto:Dogepepeheroes@gmail.com"
              className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span className="font-comic">Dogepepeheroes@gmail.com</span>
            </motion.a>
          </div>
        </div>
      </footer>

      <motion.button
        className={`fixed bottom-8 right-8 p-4 rounded-full bg-green-500 text-white shadow-lg z-50 ${
          showScrollTop ? 'flex' : 'hidden'
        }`}
        onClick={scrollToTop}
        initial={{ scale: 0 }}
        animate={{ scale: showScrollTop ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}

export default App;
