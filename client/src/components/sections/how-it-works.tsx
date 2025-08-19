import { motion } from "framer-motion";
import { Database, Brain, AlertTriangle, Bell } from "lucide-react";

const steps = [
  {
    icon: Database,
    step: 1,
    title: "Ingest Data Streams",
    description: "Continuously monitor blockchain data from multiple networks including Ethereum, BSC, Polygon, and more.",
    gradient: "from-cyber-green to-cyber-cyan"
  },
  {
    icon: Brain,
    step: 2,
    title: "0G-Powered Analysis",
    description: "Advanced AI algorithms powered by 0G Network process and analyze patterns to identify potential threats.",
    gradient: "from-cyber-cyan to-cyber-purple"
  },
  {
    icon: AlertTriangle,
    step: 3,
    title: "Detect Threats",
    description: "Identify exploits, whale movements, flash loan attacks, and market manipulation in real-time.",
    gradient: "from-cyber-purple to-cyber-green"
  },
  {
    icon: Bell,
    step: 4,
    title: "Send Alerts",
    description: "Instant notifications via Discord, Telegram, email, or API endpoints to keep you informed.",
    gradient: "from-cyber-green to-cyber-cyan"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-space font-bold text-3xl lg:text-5xl mb-6" data-testid="how-it-works-title">
            How ChainSage Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="how-it-works-subtitle">
            Our AI-powered platform processes massive blockchain data streams in real-time to detect threats before they impact your assets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              data-testid={`step-${index}`}
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="text-cyber-black text-2xl" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyber-green rounded-full flex items-center justify-center text-cyber-black font-bold text-sm" data-testid={`step-number-${index}`}>
                  {step.step}
                </div>
              </div>
              <h3 className="font-space font-semibold text-xl mb-3" data-testid={`step-title-${index}`}>
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400" data-testid={`step-description-${index}`}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <motion.div
          className="mt-16 hidden lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative" data-testid="process-flow">
            {/* Connecting lines */}
            <div className="absolute top-10 left-20 right-20 h-0.5 bg-gradient-to-r from-cyber-green via-cyber-cyan to-cyber-green"></div>

            {/* Animated dots */}
            <motion.div
              className="absolute top-9 left-20 w-2 h-2 bg-cyber-green rounded-full"
              animate={{ x: [0, 200, 400, 600] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
