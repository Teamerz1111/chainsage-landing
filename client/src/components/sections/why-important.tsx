import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Shield, ArrowDown } from "lucide-react";

export default function WhyImportant() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-space font-bold text-3xl lg:text-5xl mb-6" data-testid="why-important-title">
            Speed is Everything in DeFi
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="why-important-subtitle">
            On-chain markets move at breakneck speed—one exploit can cause millions in losses within minutes. Manual monitoring misses subtle patterns like liquidity drains, flash loans, or coordinated attacks.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Problem vs Solution */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800" data-testid="without-chainsage-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <AlertTriangle className="text-white text-sm" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-red-900 dark:text-red-100" data-testid="without-title">
                        Without ChainSage
                      </h3>
                      <ul className="space-y-2 text-red-800 dark:text-red-200">
                        <li data-testid="without-feature-1">• Exploits happen faster than human detection</li>
                        <li data-testid="without-feature-2">• Manual monitoring misses subtle patterns</li>
                        <li data-testid="without-feature-3">• Losses occur before you can react</li>
                        <li data-testid="without-feature-4">• No early warning system for threats</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Arrow */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ArrowDown className="text-3xl text-gray-400 dark:text-gray-600 mx-auto" />
              <p className="text-gray-500 dark:text-gray-400 mt-2" data-testid="transform-text">Transform your security</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800" data-testid="with-chainsage-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyber-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="text-cyber-black text-sm" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-green-900 dark:text-green-100" data-testid="with-title">
                        With ChainSage
                      </h3>
                      <ul className="space-y-2 text-green-800 dark:text-green-200">
                        <li data-testid="with-feature-1">• Real-time threat detection and alerts</li>
                        <li data-testid="with-feature-2">• AI-powered pattern recognition</li>
                        <li data-testid="with-feature-3">• Prevention through early warnings</li>
                        <li data-testid="with-feature-4">• 24/7 automated security monitoring</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right: Timeline Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-cyber-gray dark:to-cyber-dark border border-gray-200 dark:border-gray-700 relative overflow-hidden" data-testid="timeline-card">
              <CardContent className="p-8">
                <div className="relative z-10">
                  <h3 className="font-space font-semibold text-xl mb-6 text-center" data-testid="timeline-title">
                    Threat Detection Timeline
                  </h3>

                  {/* Timeline */}
                  <div className="space-y-6">
                    <motion.div
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-4 h-4 bg-cyber-green rounded-full animate-pulse"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium" data-testid="timeline-step-1-time">00:00:01</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400" data-testid="timeline-step-1-text">
                          Suspicious transaction detected
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-4 h-4 bg-cyber-cyan rounded-full animate-pulse"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium" data-testid="timeline-step-2-time">00:00:03</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400" data-testid="timeline-step-2-text">
                          Pattern analysis complete
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium" data-testid="timeline-step-3-time">00:00:05</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400" data-testid="timeline-step-3-text">
                          Alert sent to users
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-4 opacity-50"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 0.5, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium line-through" data-testid="timeline-step-4-time">00:05:00</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 line-through" data-testid="timeline-step-4-text">
                          Exploit would have succeeded
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-8 h-8 border border-cyber-green rounded animate-spin-slow"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border border-cyber-cyan rounded animate-spin-slow"></div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
