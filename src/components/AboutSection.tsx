const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col justify-center px-6 md:px-16 py-20 snap-start"
    >
      <div className="max-w-3xl">
        <div className="font-mono text-xs text-muted-foreground/50 mb-2">
          // section_02
        </div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-12">
          About<span className="text-accent">.</span>
        </h2>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p className="relative pl-4">
            사용자 경험을 먼저 고민하는 프론트엔드 개발자입니다. <br />
            복잡한 기능을 단순하고 직관적인 UI로 풀어내는 과정에 큰 흥미를
            느낍니다.
          </p>
          <p className="relative pl-4">
            React 기반의 웹을 주로 개발합니다. <br />
            UI 흐름과 디테일을 고민하는 과정을 좋아합니다. <br />
            더 나은 사용자 경험을 위해 지속적으로 개선하고 배우고 있습니다.
            <br />
          </p>
        </div>

        {/* 경험 적어야 됨 */}
        <div className="mt-16 font-mono text-sm">
          <div className="text-accent mb-4">$ cat experience.log</div>

          <div className="space-y-6 border-l border-[#333333] pl-6">
            <div className="relative">
              <div className="absolute -left-6.25 top-1 h-2 w-2 rounded-full bg-accent" />
              <p className="text-foreground font-medium">정보처리기사</p>
              <p className="text-muted-foreground/60 text-xs mt-1">
                2025.03 - 2025.09
              </p>
              <p className="text-muted-foreground text-xs mt-2"></p>
            </div>
            <div className="relative">
              <div className="absolute -left-6.25 top-1 h-2 w-2 rounded-full bg-accent" />
              <p className="text-foreground font-medium">
                한국정보기술학회 대학생논문경진대회 (동상)
              </p>
              <p className="text-muted-foreground/60 text-xs mt-1">
                2025.03 - 2025.11
              </p>
              <p className="text-muted-foreground text-xs mt-2">
                MeetCarrier 개발 및 발표 · 콘텐츠·협업 필터링 기반 매칭 시스템
                설계
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-6.25 top-1 h-2 w-2 rounded-full bg-accent" />
              <p className="text-foreground font-medium">금오공과대학교</p>
              <p className="text-muted-foreground/60 text-xs mt-1">
                2020.03 - 2026.02
              </p>
              <p className="text-muted-foreground text-xs mt-2">
                컴퓨터공학과 전공 · 학점 4.22
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-6.25 top-1 h-2 w-2 rounded-full bg-accent" />
              <p className="text-foreground font-medium">멋쟁이사자처럼</p>
              <p className="text-muted-foreground/60 text-xs mt-1">
                2024.03 — 2024.12
              </p>
              <p className="text-muted-foreground text-xs mt-2">
                개발 동아리 및 교내·교외 해커톤을 통해 웹 개발과 협업 경험 축적
              </p>
            </div>
          </div>
        </div>

        {/* 기술 스택 */}
        <div className="mt-16 font-mono text-sm">
          <div className="text-accent mb-4">$ ls tech_stack</div>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "JavaScript",
              "TypeScript",
              "Next.js",
              "Tailwind CSS",
              "Vite",
              "Redux",
              "React Query",
              "MongoDB",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="border border-border px-3 py-1 text-xs text-muted-foreground hover:border-accent hover:text-accent transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
