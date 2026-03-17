import { motion } from "motion/react";

interface SideNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const sections = [
  { id: "home", label: "Home", line: "01" },
  { id: "about", label: "About", line: "02" },
  { id: "projects", label: "Projects", line: "03" },
  { id: "contact", label: "Contact", line: "04" },
];

const SideNav = ({ activeSection, onNavigate }: SideNavProps) => {
  return (
    <nav className="fixed left-0 top-0 z-40 hidden h-screen w-50 border-r border-[#333333] bg-background/95 backdrop-blur-sm md:flex md:flex-col md:justify-between py-8 px-6">
      <div>
        <div className="font-mono text-xs text-muted-foreground mb-12">
          <span className="text-accent">~/</span>portfolio
        </div>
        <ul className="space-y-1">
          {sections.map((section) => {
            return (
              <li key={section.id}>
                <button
                  onClick={() => onNavigate(section.id)}
                  className={`group flex w-full items-center gap-3 py-2 font-mono text-sm transition-colors ${activeSection === section.id ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}
                >
                  <span className="text-xs text-muted-foreground/50">
                    {section.line}
                  </span>
                  <span>{section.label}</span>
                  {activeSection === section.id && (
                    <motion.span
                      animate={{ opacity: [1, 1, 0, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.5, 0.5, 1],
                      }}
                      className="text-accent -ml-3"
                    >
                      _
                    </motion.span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="font-mono text-xs text-muted-foreground/40">
        <p>© 2026</p>
        <p className="mt-1">v 1.0.0</p>
      </div>
    </nav>
  );
};

export default SideNav;
