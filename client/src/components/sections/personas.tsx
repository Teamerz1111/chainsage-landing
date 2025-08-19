import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Palette, Shield, Building } from "lucide-react";

const personas = [
  {
    icon: TrendingUp,
    gradient: "from-cyber-green to-cyber-cyan",
    title: "DeFi Traders & Investors",
    description: "Detect risks early and protect your portfolio from flash loan attacks and market manipulation.",
    features: [
      "Portfolio risk monitoring",
      "Exploit detection",
      "Smart money tracking"
    ]
  },
  {
    icon: Palette,
    gradient: "from-cyber-cyan to-cyber-purple",
    title: "NFT Collectors & Founders",
    description: "Early warnings for scams, rug pulls, and suspicious floor sweeping activities.",
    features: [
      "Floor sweep detection",
      "Rug pull warnings",
      "Collection analytics"
    ]
  },
  {
    icon: Shield,
    gradient: "from-cyber-purple to-cyber-green",
    title: "Security Analysts",
    description: "Actionable intelligence without manual blockchain data digging and analysis.",
    features: [
      "Automated threat detection",
      "Risk scoring",
      "Investigation tools"
    ]
  },
  {
    icon: Building,
    gradient: "from-cyber-green to-cyber-purple",
    title: "Institutions & DAOs",
    description: "Automated monitoring for treasury funds and institutional-grade security protocols.",
    features: [
      "Treasury monitoring",
      "Compliance tracking",
      "Multi-sig security"
    ]
  }
];

export default function Personas() {
  return (
    <section id="personas" className="py-20 bg-gray-50 dark:bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-space font-bold text-3xl lg:text-5xl mb-6" data-testid="personas-title">
            Built for Security-First Professionals
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="personas-subtitle">
            Whether you're trading millions or protecting community funds, ChainSage gives you the intelligence edge you need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full bg-white dark:bg-cyber-gray border border-gray-200 dark:border-gray-700 hover:border-cyber-green dark:hover:border-cyber-green transition-all duration-300" data-testid={`persona-card-${index}`}>
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${persona.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <persona.icon className="text-cyber-black text-xl" />
                  </div>
                  <h3 className="font-space font-semibold text-xl mb-3" data-testid={`persona-title-${index}`}>
                    {persona.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4" data-testid={`persona-description-${index}`}>
                    {persona.description}
                  </p>
                  <ul className="text-sm space-y-2 text-gray-500 dark:text-gray-500">
                    {persona.features.map((feature, featureIndex) => (
                      <li key={featureIndex} data-testid={`persona-feature-${index}-${featureIndex}`}>
                        • {feature}
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
