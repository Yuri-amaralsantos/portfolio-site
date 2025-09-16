const Header = () => {
  return (
    <header className="relative w-full h-[500px] bg-[#0a0c0f] overflow-hidden border border-black flex items-center justify-center">
      <div
        className="absolute top-0 right-0 w-full h-full bg-cover opacity-60 bg-center pointer-events-none z-0"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      />

      <div className="relative z-10 text-white  flex flex-col justify-center md:text-left pl-2 max-w-5xl">
        <h2 className="text-5xl font-bold text-center">
          Desenvolvedor Fullstack
        </h2>
        <p className=" text-xl text-center leading-snug">
          Transformando ideias em código e código em soluções.
        </p>

        <div className="flex justify-center">
          <a
            href="mailto:yuri.a.santos12@gmail.com"
            className="inline-block mt-6 rounded bg-white text-black px-4 py-2 font-bold border border-white transition duration-300 hover:bg-black hover:text-white"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
