import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-semibold text-slate-100">
        Página não encontrada
      </h2>
      <Link
        to="/"
        className="px-4 py-2 rounded border border-slate-700 hover:bg-slate-800"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
