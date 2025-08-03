import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0a0c0f] text-white mt-12">
      <div className="container mx-auto px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#" className="text-3xl font-bold hover:text-blue-400">
          Yuri Amaral Santos
        </a>
        <div className="text-center md:text-right">
          <div className="mt-4 space-y-1">
            <h3>
              <a
                href="mailto:yuri.a.santos12@gmail.com"
                className="hover:text-blue-400"
              >
                yuri.a.santos12@gmail.com
              </a>
            </h3>
            <h3>
              <a
                href="mailto:yuriasantos@hotmail.com.br"
                className="hover:text-blue-400"
              >
                yuriasantos@hotmail.com.br
              </a>
            </h3>
          </div>

          <div className="mt-6 flex justify-center md:justify-end space-x-6 text-gray-300">
            <a
              href="https://www.linkedin.com/in/yuri-amaral-santos-17264a25b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/Yuri-amaralsantos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://wa.me/21986026955"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-center py-4 text-gray-400 text-sm">
        &copy; 2025 Yuri Amaral Santos. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
