import React from "react";
import {
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaAngular,
  FaPython,
  FaDocker,
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

type SkillCategory =
  | "frontend"
  | "backend"
  | "linguagens"
  | "database"
  | "outros";

type SkillsData = Record<
  SkillCategory,
  React.ComponentType<{ className?: string }>[]
>;

const skillsData: SkillsData = {
  frontend: [FaReact, FaVuejs, SiTailwindcss, SiNextdotjs, FaAngular],
  backend: [FaNodeJs, SiSpring, SiFlask, AiOutlineDotNet, DiDjango],
  linguagens: [SiTypescript, FaPython, SiPhp, TbBrandCSharp],
  database: [DiMongodb, DiMysql, DiPostgresql],
  outros: [FaDocker],
};

const AboutSection: React.FC = () => {
  const orderedSections: SkillCategory[] = [
    "backend",
    "frontend",
    "linguagens",
    "database",
  ];

  const renderSection = (key: SkillCategory) => {
    const skills = skillsData[key] || [];
    const title =
      key === "linguagens"
        ? "Linguagens"
        : key.charAt(0).toUpperCase() + key.slice(1);

    return (
      <div
        key={key}
        className="p-3 rounded-md bg-transparent flex flex-col items-start border border-gray-500 rounded-xl"
      >
        <h4 className=" font-semibold text-white mb-4 capitalize">{title}</h4>
        <div className="flex flex-wrap gap-3">
          {skills.map((Icon, i) => (
            <div
              key={`${key}-${i}`}
              className="w-12 flex flex-col items-center text-center"
            >
              <Icon className="text-white text-2xl hover:scale-110 transition-transform duration-200" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="flex flex-col gap-10 justify-center  text-black my-4 py-24 px-4">
      <div className="flex flex-col gap-10 py-10 w-full h-full mx-auto text-white px-3 md:px-6 border border-gray-500 rounded-xl max-w-[1000px]">
        <div className="w-[140px] h-[140px] overflow-hidden rounded-full mx-auto mb-4 ">
          <img
            src="/photo.jpg"
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-left mb-1 px-2">Sobre mim</h2>
          <hr className="mb-3" />
          <p className="text-justify leading-snug mb-2">
            Olá, meu nome é <strong>Yuri Amaral Santos</strong>, tenho 25 anos e
            sou natural do Rio de Janeiro. Sou desenvolvedor{" "}
            <strong>Full Stack</strong> com foco em{" "}
            <strong>.NET (C# / ASP.NET Core)</strong> e{" "}
            <strong>TypeScript (React.js, Next.js, Node.js/Nest.js)</strong>.
          </p>
          <p className="text-justify leading-snug">
            Possuo experiência no desenvolvimento de <strong>APIs REST</strong>,
            aplicações corporativas e soluções web/mobile responsivas, incluindo
            autenticação de usuários, integrações com bancos de dados
            relacionais e comunicação em tempo real via{" "}
            <strong>WebSockets (Socket.io)</strong>.
          </p>
        </div>

        <div className="text-white text-left">
          <h3 className="text-2xl pl-2 font-bold text-left mb-2">Formação</h3>
          <hr className="mb-2" />
          <div className="flex flex-col gap-2 text-left leading-snug">
            <p>
              <strong>Ciências contabeis</strong> (2017-2021): Curso concluído,
              registro no conselho em andamento
            </p>
            <p>
              <strong>Análise e desenvolvimento de sistemas</strong>{" "}
              (2022-2024): Curso concluído
            </p>
          </div>
        </div>

        <div className="text-white">
          <h3 className="text-2xl font-bold pl-2 mb-2">Experiências</h3>
          <hr className="mb-2" />
          <div className="flex flex-col">
            <p>
              <strong>Hooney Plus</strong> (junho de 2025-atualmente):
              Desenvolvedor Fullstack
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-10 w-full h-full mx-auto text-white px-3 md:px-6 border border-gray-500 rounded-xl max-w-[1000px]">
        <div>
          <h2 className="text-4xl text-center text-white font-bold mt-4 mb-6 ">
            Habilidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {orderedSections.map(renderSection)}
          </div>
          {skillsData.outros.length > 0 && (
            <div className="mt-4 p-3 border border-gray-500 rounded-xl">
              <h4 className="font-semibold text-white mb-2">Outros</h4>
              <div className="flex gap-3">
                {skillsData.outros.map((Icon, i) => (
                  <div
                    key={`outros-${i}`}
                    className="w-24 flex flex-col items-center"
                  >
                    <Icon className="text-white text-2xl" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
