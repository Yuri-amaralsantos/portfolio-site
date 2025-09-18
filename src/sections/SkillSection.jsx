import {
  FaNodeJs,
  FaFigma,
  FaReact,
  FaVuejs,
  FaAngular,
  FaLaravel,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpring,
  SiFlask,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { DiMongodb, DiMysql, DiPostgresql } from "react-icons/di";

const skillsData = {
  principais: [
    { icon: FaReact, label: "React", color: "text-cyan-500" },
    { icon: FaVuejs, label: "Vue.js", color: "text-green-600" },
    { icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
    { icon: SiTypescript, label: "TypeScript", color: "text-blue-600" },
  ],
  frameworks: [
    { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-sky-400" },
    { icon: SiNextdotjs, label: "Next.js", color: "text-black" },
    { icon: FaAngular, label: "Angular", color: "text-red-600" },
    { icon: FaLaravel, label: "Laravel", color: "text-red-500" },
    { icon: SiSpring, label: "Spring", color: "text-green-700" },
    { icon: SiFlask, label: "Flask", color: "text-gray-700" },
  ],
  bancos: [
    { icon: DiMongodb, label: "MongoDB", color: "text-green-800" },
    { icon: DiMysql, label: "MySQL", color: "text-blue-700" },
    { icon: DiPostgresql, label: "PostgreSQL", color: "text-blue-800" },
  ],
  outras: [
    { icon: FaFigma, label: "Figma", color: "text-purple-600" },
    { icon: FaGolang, label: "GoLang", color: "text-blue-500" },
  ],
};

const SkillSection = () => {
  return (
    <main className="px-8 md:px-48 py-12 mx-auto text-center">
      <h2 className="text-4xl text-white font-bold mb-12">Habilidades</h2>

      <div className="bg-white">
        {Object.entries(skillsData).map(([section, skills]) => (
          <section key={section} className="mb-8 bg-white">
            <h3 className="text-lg text-black font-semibold mb-6 capitalize">
              {section === "principais"
                ? "Principais Tecnologias"
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </h3>

            <div className="flex flex-wrap justify-center gap-8 max-w-[900px] mx-auto  bg-white p-2 rounded">
              {skills.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="w-[120px] flex flex-col items-center"
                >
                  <Icon
                    className={`${color} text-2xl hover:scale-110 transition-transform duration-300`}
                    aria-label={label}
                    title={label}
                  />
                  <span className="mt-2 text-sm font-medium text-black">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default SkillSection;
