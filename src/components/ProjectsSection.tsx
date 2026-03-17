import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

// 이미지
import snipvault_img from "../assets/snipvault.png";
import marksphere_img_1 from "../assets/MarkSphere.png";
import markshpere_img_2 from "../assets/MarkSphere2.png";
import meetcarrier_img from "../assets/MeetCarrier.png";
import omeb_img from "../assets/일심동책.png";
import webti_img_1 from "../assets/webti.png";
import webti_img_2 from "../assets/webti2.png";

interface Project {
  id: string;
  title: string;
  image1: string;
  image2: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "SnipVault",
    image1: snipvault_img,
    image2: "",
    description:
      "UI 컴포넌트를 저장하고 실시간 프리뷰로 확인할 수 있는 UI 아카이빙 플랫폼",
    problem:
      "UI 컴포넌트를 재사용하거나 공유하기 어려워 개발 효율이 떨어지고, 코드 변경 결과를 즉시 확인하기 어려운 문제",
    solution:
      "UI 컴포넌트를 중앙에서 관리할 수 있는 아카이빙 구조를 설계하고, Sandpack 기반 실시간 코드 실행 및 Preview 환경을 구축했습니다.",
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "MongoDB",
      "Sandpack",
    ],
    github: "https://github.com/dsky03/SnipVault",
    live: "https://snipvault-hazel.vercel.app/",
  },
  {
    id: "02",
    title: "MarkSphere",
    image1: marksphere_img_1,
    image2: markshpere_img_2,
    description: "워크스페이스 기반 북마크 관리 및 지도 시각화 서비스",
    problem:
      "맛집이나 여행지처럼 위치가 중요한 북마크를 리스트로만 관리하면 어디에 있는지 한눈에 파악하기 어려운 문제",
    solution:
      "Kakao Map API를 활용해 북마크를 지도 위에 시각화하고, 커스텀 클러스터와 오버레이를 적용해 밀집된 데이터를 효율적으로 표현했습니다.",
    techStack: ["React", "TypeScript", "Redux", "Tailwind CSS", "vite"],
    github: "https://github.com/Social-Bookmarking/Front",
    live: "https://marksphere.link/",
  },
  {
    id: "03",
    title: "MeetCarrier",
    image1: meetcarrier_img,
    image2: "",
    description: "콘텐츠-협업 필터링 기반 단계적 친구 매칭 플랫폼",
    problem:
      "기존 매칭 서비스는 가벼운 연결에 그쳐 사용자 간 관계가 깊어지기 어렵고, 신뢰 기반의 만남으로 이어지기 어려운 문제",
    solution:
      "콘텐츠·협업 필터링을 결합한 매칭 방식을 설계하고, WebSocket 기반 실시간 매칭 구조를 구현했습니다. 또한 설문 → 채팅 → 만남으로 이어지는 단계적 만남 프로세스를 상태 기반 UI로 구성했습니다.",
    techStack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "WebSocket",
      "Python",
    ],
    github: "https://github.com/MeetCarrier/MeetCarrier-Front",
  },
  {
    id: "04",
    title: "OMEB",
    image1: omeb_img,
    image2: "",
    description: "감정 기록 도서 추천 플랫폼",
    problem:
      "사용자의 감정을 기반으로 콘텐츠를 추천해주는 경험을 제공하고자 기획한 프로젝트",
    solution:
      "감정 텍스트를 AI로 분석해 도서를 추천하고, 입력부터 결과까지 자연스럽게 이어지는 UI 흐름을 구현했습니다.",
    techStack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/LikeLion12th-OMEB/OMEB_FrontEnd",
  },
  {
    id: "05",
    title: "Webti",
    image1: webti_img_1,
    image2: webti_img_2,
    description: "MBTI처럼 웹개발자 성향 테스트 서버",
    problem:
      "다른 분야에서는 성향에 따른 직업 추천 서비스가 있는 것처럼, 웹 개발자도 성향에 맞는 역할을 추천해주면 어떨까라는 아이디어에서 시작",
    solution:
      "사용자의 응답을 기반으로 개발자 성향을 분석하고, 그에 맞는 역할을 추천하는 테스트를 구현했습니다. 또한 Chart.js를 활용해 결과를 시각화하여 사용자에게 직관적으로 전달했습니다.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/team-meot-ppo/webti-frontend",
  },
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="projects" className="min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-4xl">
        <div className="font-mono text-xs text-muted-foreground/50 mb-2">
          // section_03
        </div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-16">
          Projects<span className="text-accent">.</span>
        </h2>

        <div className="space-y-0">
          {projects.map((project) => {
            return (
              <div key={project.id} className="border-t border-[#333333]">
                <button
                  className="w-full py-8 text-left group"
                  onClick={() =>
                    setActiveProject(
                      activeProject === project.id ? null : project.id,
                    )
                  }
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-mono text-xs text-muted-foreground/40">
                      {project.id}
                    </span>
                    <div className="flex-1">
                      <h3
                        className={`font-mono text-xl md:text-2xl font-bold transition-colors ${
                          activeProject === project.id
                            ? "text-accent"
                            : "text-foreground"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.description}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground/40 group-hover:text-accent transition-colors">
                      {activeProject === project.id ? "[-]" : "[+]"}
                    </span>
                  </div>
                </button>
                {activeProject === project.id && (
                  <AnimatePresence>
                    <motion.div
                      className="pb-8 pl-8 md:pl-16"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="mb-4 overflow-hidden rounded border border-[#333333]">
                        <img
                          src={project.image1}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      {project.image2 && (
                        <div className="mb-4 overflow-hidden rounded border border-[#333333]">
                          <img
                            src={project.image2}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      )}
                      <div className="border-l border-accent/30 pl-6 space-y-4 font-mono text-sm">
                        <div>
                          <span className="text-accent text-xs">
                            // problem
                          </span>
                          <p className="text-muted-foreground mt-1">
                            {project.problem}
                          </p>
                        </div>
                        <div>
                          <span className="text-accent text-xs">
                            // solution
                          </span>
                          <p className="text-muted-foreground mt-1">
                            {project.solution}
                          </p>
                        </div>
                        <div>
                          <span className="text-accent text-xs">// tech</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.techStack.map((tech) => {
                              return (
                                <span
                                  key={tech}
                                  className="border border-#[333333] px-2 py-0.5 text-xs text-muted-foreground"
                                >
                                  {tech}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                        <div className="flex gap-4 pt-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors"
                            >
                              <Github className="w-3 h-3" />
                              source
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              live
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            );
          })}
          <div className="border-t border-[#333333]" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
