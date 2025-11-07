import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return PROJECTS;
    return PROJECTS.filter((p) =>
      (p.title + " " + p.description + " " + p.tags.join(" "))
        .toLowerCase()
        .includes(s)
    );
  }, [q]);

  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-100">
            Projetos
          </h1>
          <p className="text-slate-400 text-sm">
            Meus primeiros experimentos com React.
          </p>
        </div>
        <input
          className="w-56 border border-slate-700 bg-slate-900 text-slate-100 rounded px-3 py-2"
          placeholder="Buscar..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      {list.length === 0 ? (
        <p className="text-slate-300">Nenhum projeto localizado.</p>
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
