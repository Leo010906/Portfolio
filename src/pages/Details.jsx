import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="space-y-4">
        <p className="text-slate-300">Projeto não encontrado.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded border border-slate-700 hover:bg-slate-800"
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <article className="grid md:grid-cols-2 gap-6">
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded border border-slate-800"
      />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-100">{project.title}</h1>
        <p className="text-slate-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          {project.repo && (
            <a
              className="px-4 py-2 rounded border border-slate-700 hover:bg-slate-800"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              Repositório
            </a>
          )}
          {project.demo && (
            <a
              className="px-4 py-2 rounded bg-cyan-600 text-white hover:bg-cyan-700"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          )}
          <button
            onClick={() => navigate(-1)}
            className="ml-auto px-4 py-2 rounded border border-slate-700 hover:bg-slate-800"
          >
            Voltar
          </button>
        </div>
      </div>
    </article>
  );
}
