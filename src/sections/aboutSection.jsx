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

const skillsData = {
  frontend: [FaReact, FaVuejs, SiTailwindcss, SiNextdotjs, FaAngular],
  backend: [FaNodeJs, SiSpring, SiFlask, AiOutlineDotNet, DiDjango],
  linguagens: [SiTypescript, FaPython, SiPhp, TbBrandCSharp],
  database: [DiMongodb, DiMysql, DiPostgresql],
  outros: [FaDocker],
};

const AboutSection = () => {
  const orderedSections = ["backend", "frontend", "linguagens", "database"];

  console.log("ok");

  const renderSection = (key) => {
    const skills = skillsData[key] || [];
    const title =
      key === "linguagens"
        ? "Linguagens"
        : key.charAt(0).toUpperCase() + key.slice(1);

    return (
      <div
        key={key}
        className="p-3 rounded-md bg-transparent flex flex-col items-start"
      >
        <h4 className="text-sm font-semibold text-white  mb-4 capitalize">
          {title}
        </h4>

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
    <section className="flex justify-center text-black my-4 py-24 px-4">
      <div className="flex flex-col gap-4 w-full max-w-[1000px]">
        <div className="w-full grid grid-cols-[1fr_2fr] gap-6">
          <div className="text-left flex flex-col gap-4">
            <div className="w-[160px] h-[160px] rounded-full overflow-hidden mx-auto mb-4">
              <img
                src="/photo.jpg"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl text-white font-bold mb-2 pl-2">
                Habilidades
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {orderedSections.map(renderSection)}
              </div>

              {skillsData.outros && skillsData.outros.length > 0 && (
                <div className="mt-4 p-2">
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Outros
                  </h4>
                  <div className="flex gap-3">
                    {skillsData.outros.map((Icon, i) => (
                      <div
                        key={`outros-${i}`}
                        className="w-12 flex flex-col items-center"
                      >
                        <Icon className="text-white text-2xl" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full h-full mx-auto text-white px-3 md:px-6 rounded ">
            <div>
              <h2 className="text-4xl font-bold text-left mb-6 px-2">
                Sobre mim
              </h2>
              <p className="text-justify leading-relaxed">
                Olá, meu nome é <strong>Yuri Amaral Santos</strong>, tenho 25
                anos e sou natural do Rio de Janeiro. Sou desenvolvedor{" "}
                <strong>Full Stack</strong> com foco em{" "}
                <strong>.NET (C# / ASP.NET Core)</strong> e{" "}
                <strong>TypeScript (React.js, Next.js, Node.js/Nest.js)</strong>
                . Possuo experiência no desenvolvimento de{" "}
                <strong>APIs REST</strong>, aplicações corporativas e soluções
                web/mobile responsivas, incluindo autenticação de usuários,
                integrações com bancos de dados relacionais e comunicação em
                tempo real via <strong>WebSockets (Socket.io)</strong>.
              </p>
            </div>

            <div className="text-white text-left ">
              <h3 className="text-2xl pl-2 font-bold text-left mb-2">
                Formação
              </h3>
              <div className="flex flex-col gap-2 text-left">
                <p>
                  <strong>Ciências contabeis</strong> (2017-2021): Curso
                  concluído, registro no conselho em andamento
                </p>

                <p>
                  <strong>Análise e desenvolvimento de sistemas</strong>
                  (2022-2024): Curso concluído
                </p>
              </div>
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-semibold pl-2 mb-2">Experiências</h3>
              <div className="flex flex-col ">
                <p>
                  <strong>Hooney Plus</strong> (junho de 2025-atualmente):
                  Desenvolvedor Fullstack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
