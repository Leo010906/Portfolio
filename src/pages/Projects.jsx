// src/pages/Projects.jsx
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  const list = PROJECTS; // simples e direto

  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-100">
          Projetos
        </h1>
        <p className="text-slate-400 text-sm">
          Meus primeiros experimentos com React.
        </p>
      </div>

      {list.length === 0 ? (
        <p className="text-slate-300">Nenhum projeto cadastrado ainda.</p>
      ) : (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <li
              key={p.id}
              className="border border-slate-800 rounded overflow-hidden bg-slate-900/60"
            >
              <Link to={`/projects/${p.id}`}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4 space-y-1">
                  <h3 className="font-semibold text-slate-100">{p.title}</h3>
                  <p className="text-sm text-slate-400">{p.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
