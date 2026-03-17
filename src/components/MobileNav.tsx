import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface MobileNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const MobileNav = ({ activeSection, onNavigate }: MobileNavProps) => {
  const [isOpen, setIOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 md:hidden">
      <div className="flex items-center justify-between bg-background/95 backdrop-blur-sm border-b border-[#333333] px-4 py-3">
        <span className="font-mono text-xs text-muted-foreground">
          <span className="text-accent">~/</span>portfolio
        </span>
        <button
          onClick={() => setIOpen(!isOpen)}
          className="font-mono text-sm text-accent"
        >
          {isOpen ? "[close]" : "[menu]"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-background/95 backdrop-blur-sm border-b border-[#333333] px-4 py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="space-y-2">
              {sections.map((section) => {
                return (
                  <li key={section.id}>
                    <button
                      onClick={() => {
                        onNavigate(section.id);
                        setIOpen(false);
                      }}
                      className={`font-mono text-sm ${
                        activeSection === section.id
                          ? "text-accent"
                          : "text-muted-foreground"
                      }`}
                    >
                      {activeSection === section.id ? "> " : "  "}
                      {section.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
