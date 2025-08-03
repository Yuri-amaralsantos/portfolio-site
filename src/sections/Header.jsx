const Header = () => {
  return (
    <header className="relative w-full bg-[#0a0c0f] overflow-hidden border border-black">
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center opacity-50 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/pankaj-patel-u2Ru4QBXA5Q-unsplash.jpg')",
        }}
      />

      <div className="relative z-10 text-white pl-36 py-12 max-w-5xl">
        <h1 className="text-5xl font-bold mb-2">Yuri Amaral Santos</h1>
        <p className="text-2xl font-light mb-6">Desenvolvedor e Designer</p>
        <h2 className="text-cyan-200 text-3xl font-medium leading-snug">
          Transformando ideias em código, <br />e código em soluções.
        </h2>

        <a
          href="mailto:yuri.a.santos12@gmail.com"
          className="inline-block mt-6 bg-white text-black px-4 py-2 rounded font-bold border border-white transition duration-300 hover:bg-black hover:text-white"
        >
          Entre em contato
        </a>
      </div>
    </header>
  );
};

export default Header;
