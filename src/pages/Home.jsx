import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100">
            Olá! Sou o Leandro e estou aprendendo React.
          </h1>
          <p className="text-slate-300">
            Curto construir páginas simples e funcionais. Aqui mostro meus
            primeiros projetos e como penso o front-end: organização, clareza e
            entrega.
          </p>
          <div className="flex gap-3">
            <Link
              to="/projects"
              className="px-4 py-2 rounded bg-cyan-600 text-white hover:bg-cyan-700"
            >
              Ver projetos
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded border border-slate-700 hover:bg-slate-800"
            >
              Falar comigo
            </Link>
          </div>
        </div>

        <img
          className="w-full rounded-xl border border-slate-800"
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
          alt="Workspace"
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-100 mb-2">
          O que estudo agora
        </h2>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>Componentes, props e estado</li>
          <li>Rotas com react-router-dom</li>
          <li>Estilização com Tailwind</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-100 mb-2">
          O que posso entregar
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-slate-800 rounded p-4 bg-slate-900/50">
            <div className="font-semibold">Páginas responsivas</div>
            <p className="text-sm text-slate-300">
              Layout simples que funciona no celular e no desktop.
            </p>
          </div>
          <div className="border border-slate-800 rounded p-4 bg-slate-900/50">
            <div className="font-semibold">Código organizado</div>
            <p className="text-sm text-slate-300">
              Pastas por páginas e componentes reutilizáveis.
            </p>
          </div>
          <div className="border border-slate-800 rounded p-4 bg-slate-900/50">
            <div className="font-semibold">Comunicação clara</div>
            <p className="text-sm text-slate-300">
              README com passos de uso e tecnologias.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
