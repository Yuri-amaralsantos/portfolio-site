const AboutPage = () => {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Sobre mim */}
      <section className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">Sobre mim</h2>
        <p className="text-justify leading-relaxed max-w-2xl">
          Olá, meu nome é <strong>Yuri Amaral Santos</strong>, sou natural do
          Rio de Janeiro e me formei em Análise e Desenvolvimento de Sistemas
          pela Universidade Estácio de Sá (UNESA).
          <span className="block h-2" />
          Sou desenvolvedor e designer, com grande paixão por criar soluções
          inovadoras e funcionais. Minha principal ferramenta de design é o
          Figma.
          <span className="block h-2" />
          No desenvolvimento, sou especializado em JavaScript, Python e Java, e
          utilizo os frameworks Vue.js e React para front-end. Tenho experiência
          em desenvolvimento de aplicativos móveis com Dart e Flutter.
          <span className="block h-2" />
          Além disso, possuo experiência na criação de jogos com Unity, no
          desenvolvimento de bancos de dados e no gerenciamento de serviços de
          nuvem, sempre buscando aprimorar minhas habilidades e entregar
          resultados de qualidade.
        </p>
      </section>

      {/* Experiências */}
      <section className="mb-20">
        <h3 className="text-2xl font-semibold text-center mt-8 mb-4">
          Experiências
        </h3>
        <ul className="list-disc list-inside max-w-2xl mx-auto text-left">
          <li>
            <strong>PlanoBTech</strong> (2024-atualmente): Desenvolvedor
          </li>
        </ul>
      </section>
    </main>
  );
};

export default AboutPage;
