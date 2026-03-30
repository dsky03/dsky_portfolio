import { Mail, Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="snap-start flex min-h-screen flex-col justify-center px-6 md:px-16 py-20"
    >
      <div className="max-w-3xl">
        <div className="font-mono text-xs text-muted-foreground/50 mb-2">
          // section_04
        </div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-12">
          Contact<span className="text-accent">.</span>
        </h2>
        <div className="font-mono text-sm space-y-2 text-muted-foreground mb-12">
          <p>
            <span className="text-accent">{">"}</span> 좋은 서비스를 함께
            만들어보고 싶습니다.
          </p>
          <p>
            <span className="text-accent">{">"}</span> 편하게 연락 주세요.
          </p>
        </div>
        <div className="space-y-4">
          <motion.a
            href="mailto:dsky03@naver.com"
            target="_blank"
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group flex items-center gap-4 py-3 border-b border-[#333333] hover:border-accent transition-colors"
          >
            <Mail className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            <span className="font-mono text-sm text-muted-foreground group-hover:text-accent transition-colors">
              dsky03@naver.com
            </span>
          </motion.a>
          <motion.a
            href="https://github.com/dsky03"
            target="_blank"
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group flex items-center gap-4 py-3 border-b border-[#333333] hover:border-accent transition-colors"
          >
            <Github className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            <span className="font-mono text-sm text-muted-foreground group-hover:text-accent transition-colors">
              github.com/dsky03
            </span>
          </motion.a>

          <motion.a
            href="https://www.notion.so/Dsky-0bce1e462a4242228557975c7852f2a3"
            target="_blank"
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group flex items-center gap-4 py-3 border-b border-[#333333] hover:border-accent transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            <span className="font-mono text-sm text-muted-foreground group-hover:text-accent transition-colors">
              notion/dsky03
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
