import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

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
  whatIDid: string;
  features: string[];
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
    whatIDid:
      "프론트엔드 아키텍처와 상태 관리 구조를 설계하고, 실시간 코드 실행 및 Preview 환경을 구현",
    features: [
      "Sandpack 기반 실시간 코드 실행 및 Preview 환경 구축",
      "Redux Toolkit / React Query 기반 상태 관리 및 데이터 흐름 설계",
      "Next.js API Route와 MongoDB를 활용한 CRUD 기능 구현",
      "동적 import와 코드 분리를 통한 렌더링 성능 최적화",
      "LCP 4초 → 2초 개선",
    ],
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
    whatIDid:
      "전체 UI를 구현하고 Redux 기반 상태 관리와 커서 기반 페이지네이션, 지도 시각화 기능을 구현",
    features: [
      "워크스페이스 기반 북마크 관리 UI 구현",
      "커서 기반 페이지네이션을 통한 목록 조회",
      "Kakao Map API 기반 커스텀 클러스터 및 오버레이 구현",
      "클라이언트 상태 갱신으로 불필요한 API 요청 최소화",
      "Suspense 기반 비동기 렌더링으로 초기 로딩 개선",
    ],
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
    whatIDid:
      "UI/UX를 설계하고 상태 관리 구조와 단계적 매칭 흐름, 실시간 매칭 기능을 구현",
    features: [
      "콘텐츠·협업 필터링 기반 하이브리드 매칭 구조 설계",
      "설문 → 채팅 → 만남 단계적 매칭 흐름 구현",
      "WebSocket 기반 실시간 매칭 시스템 구현",
      "심리 성향 패널티 적용으로 미스매칭률 약 30% 개선",
      "상태 기반 UI 전환 구조 설계",
    ],
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
    whatIDid: "UI 구현과 API 연동을 통해 감정 기반 도서 추천 흐름을 구현",
    features: [
      "감정 기록 및 도서 추천 데이터 처리",
      "메인 및 마이페이지 UI 구현",
      "미디어쿼리를 활용한 반응형 UI 적용",
      "해커톤 MVP 완성 및 시연",
    ],
    techStack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/LikeLion12th-OMEB/OMEB_FrontEnd",
  },
  {
    id: "05",
    title: "Webti",
    image1: webti_img_1,
    image2: webti_img_2,
    description: "웹 개발자 성향을 분석하고 유형화하는 테스트 서비스",
    whatIDid: "UI/UX를 설계하고 성향 테스트 결과를 시각화하는 기능을 구현",
    features: [
      "웹 개발자 성향 테스트 UI 구현",
      "반응형 UI 설계 (모바일/웹)",
      "Chart.js 커스터마이징을 통한 결과 시각화",
      "컴포넌트 구조 및 상태 흐름 설계 경험",
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/team-meot-ppo/webti-frontend",
  },
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    projects.forEach((project) => {
      if (project.image1) {
        const img1 = new Image();
        img1.src = project.image1;
      }

      if (project.image2) {
        const img2 = new Image();
        img2.src = project.image2;
      }
    });
  }, []);

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
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                className="border-t border-[#333333]"
                initial={{ opacity: 0, x: -48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.08,
                }}
              >
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
                            // What I did
                          </span>
                          <p className="text-muted-foreground mt-1">
                            {project.whatIDid}
                          </p>
                        </div>
                        <div>
                          <span className="text-accent text-xs">
                            // Key Features
                          </span>
                          <p className="text-muted-foreground mt-1">
                            {project.features.map((feature) => (
                              <div
                                key={feature}
                                className="leading-6 border-accent/20"
                              >
                                - {feature}
                              </div>
                            ))}
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
              </motion.div>
            );
          })}
          <div className="border-t border-[#333333]" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
