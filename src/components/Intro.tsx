import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface IntroProps {
  onComplete: () => void;
}

const INTRO_EXIT_DELAY = 600;
const PROMPT_DELAY = 400;
const TYPE_DELAY = 80;

const Intro = ({ onComplete }: IntroProps) => {
  const [displayText, setDisplayText] = useState("");
  const [showEnterPrompt, setShowEnterPrompt] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const exitTimeoutRef = useRef<number | null>(null);
  const fullName = "developer@portfolio:~$ ";
  const nameText = "Kim_DongCheon";

  const finishIntro = () => {
    if (!showEnterPrompt || isExiting) return;

    setIsExiting(true);
    // 퇴장 애니메이션 때문에 <- 80초 뒤에 실행
    exitTimeoutRef.current = window.setTimeout(() => {
      onComplete();
    }, INTRO_EXIT_DELAY);
  };

  useEffect(() => {
    let promptIndex = 0;
    let nameIndex = 0;

    const promptInterval = window.setInterval(() => {
      if (promptIndex < fullName.length) {
        promptIndex += 1;
        setDisplayText(fullName.slice(0, promptIndex));
        return;
      }

      window.clearInterval(promptInterval);

      const nameInterval = window.setInterval(() => {
        if (nameIndex < nameText.length) {
          nameIndex += 1;
          setDisplayText(fullName + nameText.slice(0, nameIndex));
          return;
        }

        window.clearInterval(nameInterval);
        window.setTimeout(() => setShowEnterPrompt(true), PROMPT_DELAY);
      }, TYPE_DELAY);
    }, TYPE_DELAY);

    return () => {
      window.clearInterval(promptInterval);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        finishIntro();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showEnterPrompt, isExiting]);

  useEffect(() => {
    //  언마운트할 때 clearTimout
    return () => {
      if (exitTimeoutRef.current !== null) {
        window.clearTimeout(exitTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-all duration-500 ${
        isExiting ? "opacity-0 scale-95" : "opacity-100"
      }`}
      onClick={finishIntro}
    >
      <div className="font-mono p-3 text-lg md:text-3xl">
        <span className="text-accent">
          {displayText.slice(0, fullName.length)}
        </span>
        <span>{displayText.slice(fullName.length)}</span>
        <motion.span
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.5, 0.5, 1],
          }}
          className="text-accent"
        >
          _
        </motion.span>
      </div>
      {showEnterPrompt && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent">[Enter]</span> to explore
          <span className="ml-4 text-muted-foreground/50 md:inline hidden">
            // or click anywhere
          </span>
        </motion.div>
      )}
    </div>
  );
};

export default Intro;
