import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const alerts = [
  {
    severity: "HIGH RISK",
    severityColor: "text-red-900 dark:text-red-100",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    borderColor: "border-red-200 dark:border-red-800",
    dotColor: "bg-red-500",
    time: "2 min ago",
    title: "Flash Loan Attack Detected — ETH Pool",
    description: "Large flash loan detected targeting UniswapV3 ETH/USDC pool. Potential arbitrage or exploit attempt.",
    metadata: ["Network: Ethereum", "Tx: 0x1a2b...3c4d"]
  },
  {
    severity: "MEDIUM RISK",
    severityColor: "text-yellow-900 dark:text-yellow-100",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    dotColor: "bg-yellow-500",
    time: "5 min ago",
    title: "Whale moved 5,000 ETH into Uniswap",
    description: "Large ETH transfer detected from known whale wallet to Uniswap V3. Potential market impact expected.",
    metadata: ["Network: Ethereum", "Amount: 5,000 ETH"]
  },
  {
    severity: "MEDIUM RISK",
    severityColor: "text-orange-900 dark:text-orange-100",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    dotColor: "bg-orange-500",
    time: "8 min ago",
    title: "NFT Floor Sweep Detected — Azuki Collection",
    description: "Coordinated buying activity detected across multiple Azuki NFTs. 47 items purchased in 3 minutes.",
    metadata: ["Network: Ethereum", "Items: 47 NFTs"]
  },
  {
    severity: "INFO",
    severityColor: "text-blue-900 dark:text-blue-100",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    dotColor: "bg-blue-500",
    time: "12 min ago",
    title: "Large DEX Trade — WBTC/ETH Pair",
    description: "Significant trade detected on Uniswap V3 WBTC/ETH pair. Price impact: 0.3%",
    metadata: ["Network: Ethereum", "Volume: $2.3M"]
  },
  {
    severity: "LOW RISK",
    severityColor: "text-green-900 dark:text-green-100",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
    dotColor: "bg-green-500",
    time: "15 min ago",
    title: "Smart Money Activity — DeFi Yield Farming",
    description: "Known profitable wallet started farming on new Curve pool. Historical success rate: 89%",
    metadata: ["Network: Ethereum", "Pool: CRV/ETH"]
  }
];

export default function LiveAlerts() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="alerts" className="py-20 bg-gray-50 dark:bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-space font-bold text-3xl lg:text-5xl mb-6" data-testid="alerts-title">
            Live Threat Intelligence Feed
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="alerts-subtitle">
            See ChainSage in action with real-time threat detection across multiple blockchain networks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white dark:bg-cyber-gray border border-gray-200 dark:border-gray-700" data-testid="alerts-feed">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-space font-semibold text-xl" data-testid="alerts-feed-title">
                  Recent Alerts
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400" data-testid="live-indicator">Live</span>
                </div>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-start space-x-4 p-4 ${alert.bgColor} rounded-xl border ${alert.borderColor}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    data-testid={`alert-${index}`}
                  >
                    <div className={`w-3 h-3 ${alert.dotColor} rounded-full mt-2 flex-shrink-0`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-semibold ${alert.severityColor}`} data-testid={`alert-severity-${index}`}>
                          {alert.severity}
                        </span>
                        <span className="text-xs opacity-70" data-testid={`alert-time-${index}`}>
                          {alert.time}
                        </span>
                      </div>
                      <p className="mb-2 font-medium" data-testid={`alert-title-${index}`}>
                        {alert.title}
                      </p>
                      <p className="text-xs opacity-80 mb-2" data-testid={`alert-description-${index}`}>
                        {alert.description}
                      </p>
                      <div className="flex items-center space-x-4 text-xs opacity-70">
                        {alert.metadata.map((meta, metaIndex) => (
                          <span key={metaIndex} data-testid={`alert-meta-${index}-${metaIndex}`}>
                            {meta}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={scrollToWaitlist}
                  className="inline-flex items-center space-x-2 text-cyber-green hover:text-cyber-cyan transition-colors"
                  data-testid="get-access-link"
                >
                  <span>Get access to live alerts</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
