import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-cyber-black dark:via-cyber-dark dark:to-cyber-black">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-cyber-green/10 rounded-full"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-cyber-cyan/10 rounded-lg rotate-45"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-24 h-24 bg-cyber-purple/10 rounded-full"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-12 h-12 bg-cyber-green/10 rounded-lg"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="font-space font-bold text-4xl sm:text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-testid="hero-title"
          >
            Stay Ahead of{" "}
            <span className="bg-gradient-to-r from-cyber-green to-cyber-cyan bg-clip-text text-transparent">
              On-Chain Threats
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="hero-subtitle"
          >
            ChainSage processes massive blockchain data in real time to detect risks before they become losses. Your 24/7 on-chain security analyst powered by 0G Network.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={() => scrollToSection("waitlist")}
              className="bg-gradient-to-r from-cyber-green to-cyber-cyan text-cyber-black px-8 py-4 text-lg font-semibold hover:from-cyber-cyan hover:to-cyber-green transition-all duration-300 animate-glow"
              data-testid="hero-join-waitlist"
            >
              Join Waitlist
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("alerts")}
              className="border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-black px-8 py-4 text-lg font-semibold transition-all duration-300"
              data-testid="hero-see-alerts"
            >
              See Live Alerts
            </Button>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center" data-testid="stat-monitoring">
              <div className="text-2xl font-bold text-cyber-green">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Monitoring</div>
            </div>
            <div className="text-center" data-testid="stat-alerts">
              <div className="text-2xl font-bold text-cyber-cyan">Real-time</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Alerts</div>
            </div>
            <div className="text-center" data-testid="stat-powered">
              <div className="text-2xl font-bold text-cyber-green">0G</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Powered</div>
            </div>
            <div className="text-center" data-testid="stat-multichain">
              <div className="text-2xl font-bold text-cyber-cyan">Multi-chain</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
