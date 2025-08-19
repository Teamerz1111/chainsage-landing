import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Users, Shield, Zap } from "lucide-react";

export default function CTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: { name: string; email: string }) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
      setName("");
      setEmail("");
      queryClient.invalidateQueries({ queryKey: ["/api/waitlist"] });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields.",
      });
      return;
    }
    mutation.mutate({ name: name.trim(), email: email.trim() });
  };

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-cyber-green/10 to-cyber-cyan/10 dark:from-cyber-green/5 dark:to-cyber-cyan/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-space font-bold text-3xl lg:text-5xl mb-6" data-testid="cta-title">
            Be the First to Access Real-Time Threat Intelligence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto" data-testid="cta-subtitle">
            Join the private beta today and get early access to the most advanced on-chain security platform. Limited spots available.
          </p>
        </motion.div>

        {/* Waitlist Form */}
        <motion.div
          className="max-w-md mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/80 dark:bg-cyber-gray/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700" data-testid="waitlist-form-card">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="waitlist-form">
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white dark:bg-cyber-gray border-gray-300 dark:border-gray-600 focus:ring-cyber-green focus:border-cyber-green"
                  data-testid="input-name"
                />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white dark:bg-cyber-gray border-gray-300 dark:border-gray-600 focus:ring-cyber-green focus:border-cyber-green"
                  data-testid="input-email"
                />
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-gradient-to-r from-cyber-green to-cyber-cyan text-cyber-black px-8 py-4 text-lg font-semibold hover:from-cyber-cyan hover:to-cyber-green transition-all duration-300 animate-glow"
                  data-testid="button-join-beta"
                >
                  {mutation.isPending ? "Joining..." : "Join Private Beta"}
                </Button>
              </form>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4" data-testid="privacy-note">
                No spam, ever. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2" data-testid="social-proof-waitlist">
            <Users className="text-cyber-green w-4 h-4" />
            <span>1,000+ on waitlist</span>
          </div>
          <div className="flex items-center space-x-2" data-testid="social-proof-security">
            <Shield className="text-cyber-cyan w-4 h-4" />
            <span>Enterprise-grade security</span>
          </div>
          <div className="flex items-center space-x-2" data-testid="social-proof-setup">
            <Zap className="text-cyber-green w-4 h-4" />
            <span>Instant setup</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
