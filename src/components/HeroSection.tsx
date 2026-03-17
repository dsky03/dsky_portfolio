import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col justify-center px-6 snap-start md:px-16"
    >
      <div className="max-w-3xl">
        <p className="font-mono text-sm text-accent mb-4">// 안녕하세요</p>
        <h1 className="font-mono text-4xl md:text-7xl font-bold text-foreground leading-tight mb-6">
          김동천
          <motion.span
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 0.5, 1],
            }}
            className="text-accent ml-1"
          >
            _
          </motion.span>
        </h1>
        <h2 className="font-mono text-xl md:text-2xl text-muted-foreground mb-8">
          Frontend Developer
        </h2>
        <div className="font-mono text-sm text-muted-foreground space-y-1">
          <p>
            <span className="text-accent">const</span>{" "}
            <span className="text-foreground">focus</span> = [
          </p>
          <p className="pl-4">"React", "TypeScript", "Web Performance"</p>
          <p>];</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
