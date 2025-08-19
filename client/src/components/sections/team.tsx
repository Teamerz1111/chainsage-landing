import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Former Head of Security at ConsenSys. 8+ years in blockchain security and threat intelligence. Previously built security tools used by Fortune 500 companies.",
    expertise: ["Blockchain Security", "Threat Intelligence", "Team Leadership"],
    initials: "AC",
    gradient: "from-cyber-green to-cyber-cyan",
    linkedin: "#",
    github: "#",
    twitter: "#"
  },
  {
    name: "Sarah Rodriguez",
    role: "CTO & Co-Founder", 
    bio: "Ex-Staff Engineer at Chainlink. PhD in Computer Science from MIT. Expert in distributed systems and real-time data processing at scale.",
    expertise: ["Distributed Systems", "Real-time Processing", "0G Network"],
    initials: "SR",
    gradient: "from-cyber-cyan to-cyber-purple",
    linkedin: "#",
    github: "#",
    twitter: "#"
  },
  {
    name: "Marcus Johnson",
    role: "Head of Research",
    bio: "Former Security Researcher at Trail of Bits. Discovered 50+ critical vulnerabilities in DeFi protocols. Published researcher in blockchain security.",
    expertise: ["Vulnerability Research", "DeFi Security", "Smart Contract Auditing"],
    initials: "MJ",
    gradient: "from-cyber-purple to-cyber-green",
    linkedin: "#",
    github: "#",
    twitter: "#"
  },
  {
    name: "Emily Zhang",
    role: "Head of Product",
    bio: "Former Product Manager at Compound Labs. 6+ years in DeFi product development. Expert in user experience and threat detection workflows.",
    expertise: ["Product Strategy", "DeFi UX", "User Research"],
    initials: "EZ",
    gradient: "from-cyber-green to-cyber-cyan",
    linkedin: "#",
    github: "#",
    twitter: "#"
  },
  {
    name: "David Kim",
    role: "Lead AI Engineer",
    bio: "Ex-Senior ML Engineer at Palantir. Specialized in anomaly detection and pattern recognition for financial systems. Stanford CS graduate.",
    expertise: ["Machine Learning", "Anomaly Detection", "Pattern Recognition"],
    initials: "DK",
    gradient: "from-cyber-cyan to-cyber-purple",
    linkedin: "#",
    github: "#",
    twitter: "#"
  },
  {
    name: "Lisa Parker",
    role: "Head of Partnerships",
    bio: "Former BD Director at Polygon. 7+ years in blockchain partnerships and ecosystem development. Built relationships with 200+ DeFi protocols.",
    expertise: ["Business Development", "Partnership Strategy", "Ecosystem Growth"],
    initials: "LP",
    gradient: "from-cyber-purple to-cyber-green",
    linkedin: "#",
    github: "#",
    twitter: "#"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-space font-bold text-3xl lg:text-5xl mb-6" data-testid="team-title">
            Meet the Team Behind ChainSage
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="team-subtitle">
            World-class experts in blockchain security, AI, and distributed systems working together to protect the DeFi ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full bg-white dark:bg-cyber-gray border border-gray-200 dark:border-gray-700 hover:border-cyber-green dark:hover:border-cyber-green transition-all duration-300 group hover:shadow-2xl" data-testid={`team-card-${index}`}>
                <CardContent className="p-6">
                  {/* Avatar and Social Links */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-xl flex items-center justify-center text-cyber-black font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                      {member.initials}
                    </div>
                    <div className="flex space-x-2">
                      <a 
                        href={member.linkedin} 
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-cyber-green hover:text-cyber-black transition-colors"
                        data-testid={`linkedin-${index}`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href={member.github} 
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-cyber-green hover:text-cyber-black transition-colors"
                        data-testid={`github-${index}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                        href={member.twitter} 
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-cyber-green hover:text-cyber-black transition-colors"
                        data-testid={`twitter-${index}`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Name and Role */}
                  <h3 className="font-space font-semibold text-xl mb-1" data-testid={`team-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-cyber-green font-medium mb-3" data-testid={`team-role-${index}`}>
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed" data-testid={`team-bio-${index}`}>
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-cyber-green hover:text-cyber-black text-xs"
                        data-testid={`team-skill-${index}-${skillIndex}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Company Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="company-stat-experience">
              <div className="text-3xl font-bold font-space text-cyber-green mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Years Combined Experience</div>
            </div>
            <div className="text-center" data-testid="company-stat-vulnerabilities">
              <div className="text-3xl font-bold font-space text-cyber-cyan mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Vulnerabilities Discovered</div>
            </div>
            <div className="text-center" data-testid="company-stat-protocols">
              <div className="text-3xl font-bold font-space text-cyber-green mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Protocols Secured</div>
            </div>
            <div className="text-center" data-testid="company-stat-funding">
              <div className="text-3xl font-bold font-space text-cyber-cyan mb-2">$10M+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Funding Raised</div>
            </div>
          </div>
        </motion.div>

        {/* Advisory Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-space font-semibold text-2xl mb-8" data-testid="advisory-title">
            Backed by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-500 dark:text-gray-400 font-medium" data-testid="advisor-1">
              Former Ethereum Foundation
            </div>
            <div className="text-gray-500 dark:text-gray-400 font-medium" data-testid="advisor-2">
              Ex-Coinbase Security
            </div>
            <div className="text-gray-500 dark:text-gray-400 font-medium" data-testid="advisor-3">
              Andreessen Horowitz
            </div>
            <div className="text-gray-500 dark:text-gray-400 font-medium" data-testid="advisor-4">
              0G Network Core Team
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}