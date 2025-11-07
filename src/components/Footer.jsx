import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">© 2025 Leandro</p>
        <div className="flex items-center gap-4 text-xl">
          <a
            className="hover:text-cyan-400"
            href="mailto:seuemail@exemplo.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            className="hover:text-cyan-400"
            href="https://github.com/Leo010906"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            className="hover:text-cyan-400"
            href="https://www.linkedin.com/in/leandrosimoneli"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
