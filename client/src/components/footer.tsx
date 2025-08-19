import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-cyber-dark py-16 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyber-green to-cyber-cyan rounded-lg flex items-center justify-center">
                <Shield className="text-cyber-black text-sm" />
              </div>
              <span className="font-space font-bold text-xl" data-testid="footer-brand">ChainSage</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md" data-testid="footer-description">
              Your 24/7 on-chain security analyst. Real-time threat intelligence powered by 0G Network.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-cyber-green hover:text-cyber-black transition-colors" data-testid="social-twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-cyber-green hover:text-cyber-black transition-colors" data-testid="social-discord">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.942 6.478c-1.267-.584-2.634-1.016-4.077-1.263a.074.074 0 00-.079.037c-.176.315-.371.725-.508 1.048-1.54-.23-3.065-.23-4.573 0-.137-.33-.339-.733-.516-1.048a.077.077 0 00-.079-.037 13.201 13.201 0 00-4.077 1.263.07.07 0 00-.032.027C.533 9.046-.319 11.533.099 13.974a.08.08 0 00.031.055 13.31 13.31 0 004.001 2.024.077.077 0 00.084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.106 8.746 8.746 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.197.372.291a.077.077 0 01-.006.127 8.203 8.203 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 13.266 13.266 0 004.001-2.024.077.077 0 00.032-.054c.5-2.823-.838-5.276-3.549-7.449a.061.061 0 00-.031-.027zM6.678 12.6c-1.183 0-2.158-1.085-2.158-2.419 0-1.333.956-2.419 2.158-2.419 1.21 0 2.176 1.096 2.158 2.42 0 1.333-.956 2.418-2.158 2.418zm6.644 0c-1.183 0-2.158-1.085-2.158-2.419 0-1.333.955-2.419 2.158-2.419 1.21 0 2.176 1.096 2.158 2.42 0 1.333-.946 2.418-2.158 2.418z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-cyber-green hover:text-cyber-black transition-colors" data-testid="social-github">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4" data-testid="footer-product-title">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-cyber-green transition-colors" data-testid="footer-link-features">Features</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-cyber-green transition-colors" data-testid="footer-link-docs">Docs</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-cyber-green transition-colors" data-testid="footer-link-api">API</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-cyber-green transition-colors" data-testid="footer-link-pricing">Pricing</a></li>
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4" data-testid="footer-company-title">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-cyber-green transition-colors" data-testid="footer-link-privacy">Privacy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-cyber-green transition-colors" data-testid="footer-link-terms">Terms</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-cyber-green transition-colors" data-testid="footer-link-contact">Contact</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-cyber-green transition-colors" data-testid="footer-link-support">Support</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0" data-testid="footer-copyright">
            © 2024 ChainSage. Built on 0G Network. All rights reserved.
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-500" data-testid="footer-powered-by">
            Powered by <span className="text-cyber-green">0G Network</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
