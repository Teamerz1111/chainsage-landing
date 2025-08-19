import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Shield } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-cyber-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyber-green to-cyber-cyan rounded-lg flex items-center justify-center">
              <Shield className="text-cyber-black text-sm" />
            </div>
            <span className="font-space font-bold text-xl">ChainSage</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 dark:text-gray-300 hover:text-cyber-green transition-colors"
              data-testid="nav-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-600 dark:text-gray-300 hover:text-cyber-green transition-colors"
              data-testid="nav-how-it-works"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("alerts")}
              className="text-gray-600 dark:text-gray-300 hover:text-cyber-green transition-colors"
              data-testid="nav-alerts"
            >
              Live Alerts
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-600 dark:text-gray-300 hover:text-cyber-green transition-colors"
              data-testid="nav-team"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-600 dark:text-gray-300 hover:text-cyber-green transition-colors"
              data-testid="nav-testimonials"
            >
              Testimonials
            </button>

            {/* Theme Switcher */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border-gray-300 dark:border-gray-600"
              data-testid="theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-yellow-500" />
              ) : (
                <Moon className="h-4 w-4 text-cyber-cyan" />
              )}
            </Button>

            <Button
              onClick={() => scrollToSection("waitlist")}
              className="bg-gradient-to-r from-cyber-green to-cyber-cyan text-cyber-black hover:from-cyber-cyan hover:to-cyber-green"
              data-testid="nav-join-waitlist"
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-cyber-dark border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-cyber-green"
              data-testid="mobile-nav-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-cyber-green"
              data-testid="mobile-nav-how-it-works"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("alerts")}
              className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-cyber-green"
              data-testid="mobile-nav-alerts"
            >
              Live Alerts
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-cyber-green"
              data-testid="mobile-nav-team"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-cyber-green"
              data-testid="mobile-nav-testimonials"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection("waitlist")}
              className="w-full bg-gradient-to-r from-cyber-green to-cyber-cyan text-cyber-black hover:from-cyber-cyan hover:to-cyber-green"
              data-testid="mobile-nav-join-waitlist"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
