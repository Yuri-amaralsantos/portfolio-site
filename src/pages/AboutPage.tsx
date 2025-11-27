import React from "react";
import {
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaAngular,
  FaPython,
  FaDocker,
  FaJava,
  FaLaravel,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpring,
  SiFlask,
  SiTypescript,
  SiNextdotjs,
  SiPhp,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMongodb, DiMysql, DiPostgresql, DiDjango } from "react-icons/di";
import { AiOutlineDotNet } from "react-icons/ai";

type SkillItem = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

type SkillCategory =
  | "frontend"
  | "backend"
  | "linguagens"
  | "database"
  | "outros";

type SkillsData = Record<SkillCategory, SkillItem[]>;

const skillsData: SkillsData = {
  frontend: [
    { icon: FaReact, label: "React" },
    { icon: FaVuejs, label: "Vue.js" },
    { icon: SiTailwindcss, label: "TailwindCSS" },
    { icon: SiNextdotjs, label: "Next.js" },
    { icon: FaAngular, label: "Angular" },
  ],
  backend: [
    { icon: FaNodeJs, label: "Node.js" },
    { icon: SiSpring, label: "Spring" },
    { icon: SiFlask, label: "Flask" },
    { icon: AiOutlineDotNet, label: ".NET Core" },
    { icon: DiDjango, label: "Django" },
    { icon: FaLaravel, label: "Laravel" },
  ],
  linguagens: [
    { icon: SiTypescript, label: "TypeScript" },
    { icon: FaPython, label: "Python" },
    { icon: SiPhp, label: "PHP" },
    { icon: TbBrandCSharp, label: "C#" },
    { icon: FaJava, label: "Java" },
  ],
  database: [
    { icon: DiMongodb, label: "MongoDB" },
    { icon: DiMysql, label: "MySQL" },
    { icon: DiPostgresql, label: "PostgreSQL" },
  ],
  outros: [{ icon: FaDocker, label: "Docker" }],
};

const AboutPage: React.FC = () => {
  return (
    <section className="text-white px-6 md:px-20 py-12 flex flex-col gap-16 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden shadow-lg shadow-sky-500/20">
            <img
              src="/photo.jpg"
              alt="Foto de perfil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4">Sobre mim</h2>
          <p className="text-justify leading-relaxed mb-4 text-gray-300">
            Olá, meu nome é{" "}
            <strong className="text-sky-300">Yuri Amaral Santos</strong>, tenho
            25 anos e sou Desenvolvedor <strong>Full Stack</strong> com foco em
            <strong> React/Next</strong> e <strong>Nest/TypeScript</strong>.
          </p>
          <p className="text-justify leading-relaxed text-gray-300">
            Tenho experiência com <strong>APIs REST</strong>, aplicações
            corporativas, integrações com bancos de dados e comunicação em tempo
            real via
            <strong> WebSockets</strong>. Busco sempre aprimorar meu código e
            entregar soluções robustas.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="border border-sky-500 rounded-xl p-6 backdrop-blur-sm bg-white/5">
          <h3 className="text-2xl font-bold mb-4">Experiência</h3>

          <div className="flex flex-col gap-3">
            <div>
              <p className="text-lg">
                <strong>Hooney Plus</strong>
              </p>
              <span className="text-gray-400 text-sm">2025 - Atual</span>
              <p className="text-gray-300 text-sm">
                Desenvolvedor Fullstack trabalhando com .NET, React e
                integrações corporativas.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-sky-500 rounded-xl p-6 backdrop-blur-sm bg-white/5">
          <h3 className="text-2xl font-bold mb-4">Formação</h3>

          <p className="mb-3">
            <strong>Ciências Contábeis</strong> — Concluído
          </p>
          <p>
            <strong>Análise e Desenvolvimento de Sistemas</strong> — Concluído
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">Hard Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xl font-semibold mb-4 capitalize">
                {category === "linguagens" ? "Linguagens" : category}
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {items.map(({ icon: Icon, label }, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center p-3 rounded-lg bg-[#1b1e2d] 
                    border border-sky-500/40 hover:border-sky-300 hover:scale-105 
                    transition"
                  >
                    <Icon className="text-3xl text-sky-300 mb-2" />
                    <p className="text-xs text-gray-300">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-4xl font-bold text-center mb-8">Soft Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Comunicação",
            "Trabalho em equipe",
            "Resolução de problemas",
            "Proatividade",
            "Adaptabilidade",
            "Aprendizado rápido",
          ].map((skill, i) => (
            <div
              key={i}
              className="p-4 border border-sky-500 rounded-lg bg-white/5 backdrop-blur-sm text-center"
            >
              <p className="text-lg font-medium text-gray-200">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
