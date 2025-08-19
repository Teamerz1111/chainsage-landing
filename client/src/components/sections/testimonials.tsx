import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We caught a liquidity rug before the price collapsed—thanks to ChainSage. The real-time alerts saved our fund millions.",
    author: "Alex Johnson",
    role: "DeFi Fund Manager",
    initials: "AJ",
    gradient: "from-cyber-green to-cyber-cyan"
  },
  {
    quote: "ChainSage's whale tracking helped me time my exit perfectly. I sold before the major dump that wiped out 40% of the market.",
    author: "Maria Chen",
    role: "Professional Trader",
    initials: "MC",
    gradient: "from-cyber-cyan to-cyber-purple"
  },
  {
    quote: "As a security analyst, ChainSage gives me the intel I need without spending hours digging through blockchain data. Game changer.",
    author: "David Rodriguez",
    role: "Blockchain Security Analyst",
    initials: "DR",
    gradient: "from-cyber-purple to-cyber-green"
  }
];

const stats = [
  {
    value: "$50M+",
    label: "Protected Assets",
    color: "text-cyber-green"
  },
  {
    value: "99.9%",
    label: "Uptime",
    color: "text-cyber-cyan"
  },
  {
    value: "< 5s",
    label: "Alert Latency",
    color: "text-cyber-green"
  },
  {
    value: "15+",
    label: "Supported Chains",
    color: "text-cyber-cyan"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-space font-bold text-3xl lg:text-5xl mb-6" data-testid="testimonials-title">
            Trusted by Security-First Professionals
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="testimonials-subtitle">
            Join leading traders, analysts, and institutions who rely on ChainSage for threat intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-cyber-gray border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 h-full" data-testid={`testimonial-${index}`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-cyber-green">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" data-testid={`star-${index}-${i}`} />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-600 dark:text-gray-300 mb-6" data-testid={`testimonial-quote-${index}`}>
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-cyber-black font-bold`} data-testid={`testimonial-avatar-${index}`}>
                      {testimonial.initials}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold" data-testid={`testimonial-author-${index}`}>
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400" data-testid={`testimonial-role-${index}`}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} data-testid={`stat-${index}`}>
              <div className={`text-3xl font-bold font-space ${stat.color} mb-2`} data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
