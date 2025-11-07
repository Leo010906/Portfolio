import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-slate-100">
          Leandro • Portfólio
        </Link>

        <button
          className="md:hidden p-2 rounded text-slate-100 border border-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          Menu
        </button>

        <nav
          className={`absolute md:static right-4 top-16 md:top-auto ${
            open ? "block" : "hidden md:block"
          }`}
        >
          <ul className="md:flex md:gap-6 bg-slate-950 md:bg-transparent p-4 md:p-0 rounded border md:border-0 border-slate-800">
            <li>
              <Link
                className={`${
                  pathname === "/" ? "text-cyan-400" : "text-slate-100"
                } hover:underline`}
                to="/"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname.startsWith("/projects")
                    ? "text-cyan-400"
                    : "text-slate-100"
                } hover:underline`}
                to="/projects"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/contact" ? "text-cyan-400" : "text-slate-100"
                } hover:underline`}
                to="/contact"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
