import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Radar, Fish, Crosshair, ClipboardList, Sliders, Rocket } from "lucide-react";

const features = [
  {
    icon: Radar,
    title: "Real-time Threat Detection",
    description: "Advanced AI monitors blockchain activity 24/7, detecting exploits, rug pulls, and malicious contracts within seconds.",
    features: [
      "Flash loan attack detection",
      "Smart contract vulnerability scanning",
      "MEV bot monitoring"
    ],
    gradient: "from-cyber-green to-cyber-cyan",
    hoverColor: "hover:border-cyber-green dark:hover:border-cyber-green"
  },
  {
    icon: Fish,
    title: "Whale & Smart Money Tracking",
    description: "Follow the movements of whale wallets and smart money to identify market trends and potential opportunities.",
    features: [
      "Large transaction alerts",
      "Wallet behavior analysis",
      "Profit-taking pattern detection"
    ],
    gradient: "from-cyber-cyan to-cyber-purple",
    hoverColor: "hover:border-cyber-cyan dark:hover:border-cyber-cyan"
  },
  {
    icon: Crosshair,
    title: "Market Manipulation Radar",
    description: "Detect coordinated pump and dump schemes, wash trading, and other market manipulation tactics.",
    features: [
      "Pump and dump detection",
      "Wash trading identification",
      "Coordinated attack patterns"
    ],
    gradient: "from-cyber-purple to-cyber-green",
    hoverColor: "hover:border-cyber-purple dark:hover:border-cyber-purple"
  },
  {
    icon: ClipboardList,
    title: "Risk Scoring & Playbooks",
    description: "Automated risk assessment with actionable playbooks for different threat scenarios and response strategies.",
    features: [
      "Dynamic risk scoring",
      "Response playbooks",
      "Threat severity classification"
    ],
    gradient: "from-cyber-green to-cyber-cyan",
    hoverColor: "hover:border-cyber-green dark:hover:border-cyber-green"
  },
  {
    icon: Sliders,
    title: "Custom Rule Builder",
    description: "Create custom monitoring rules and alerts tailored to your specific portfolio, risk tolerance, and investment strategy.",
    features: [
      "Custom alert conditions",
      "Portfolio-specific rules",
      "Threshold customization"
    ],
    gradient: "from-cyber-cyan to-cyber-purple",
    hoverColor: "hover:border-cyber-cyan dark:hover:border-cyber-cyan"
  },
  {
    icon: Rocket,
    title: "0G-Powered Scalability",
    description: "Built on 0G Network for unmatched processing speed and scalability across multiple blockchain networks.",
    features: [
      "Multi-chain support",
      "Low latency processing",
      "Infinite scalability"
    ],
    gradient: "from-cyber-purple to-cyber-green",
    hoverColor: "hover:border-cyber-purple dark:hover:border-cyber-purple"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-space font-bold text-3xl lg:text-5xl mb-6" data-testid="features-title">
            Powerful Features for Complete Protection
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="features-subtitle">
            Advanced threat intelligence capabilities designed to keep you ahead of malicious actors and market manipulators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className={`h-full bg-white dark:bg-cyber-gray border border-gray-200 dark:border-gray-700 ${feature.hoverColor} transition-all duration-300 group hover:shadow-2xl`} data-testid={`feature-card-${index}`}>
                <CardContent className="p-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-cyber-black text-xl" />
                  </div>
                  <h3 className="font-space font-semibold text-xl mb-4" data-testid={`feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4" data-testid={`feature-description-${index}`}>
                    {feature.description}
                  </p>
                  <ul className="text-sm space-y-2 text-gray-500 dark:text-gray-500">
                    {feature.features.map((item, featureIndex) => (
                      <li key={featureIndex} data-testid={`feature-item-${index}-${featureIndex}`}>
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
