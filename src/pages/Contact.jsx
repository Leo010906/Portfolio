import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  function onSubmit(e) {
    e.preventDefault();
    alert(
      `Nome: ${form.nome}\nEmail: ${form.email}\nMensagem: ${form.mensagem}`
    );
    setForm({ nome: "", email: "", mensagem: "" });
  }

  return (
    <section className="max-w-xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-100 mb-2">
        Contato
      </h2>
      <p className="text-slate-400 mb-4">
        Pode mandar mensagem. Eu respondo :)
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-slate-300">Nome</label>
          <input
            required
            className="w-full border border-slate-700 bg-slate-900 text-slate-100 rounded px-3 py-2"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-slate-300">Email</label>
          <input
            type="email"
            required
            className="w-full border border-slate-700 bg-slate-900 text-slate-100 rounded px-3 py-2"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-slate-300">Mensagem</label>
          <textarea
            required
            className="w-full border border-slate-700 bg-slate-900 text-slate-100 rounded px-3 py-2 min-h-[120px]"
            value={form.mensagem}
            onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-cyan-600 text-white hover:bg-cyan-700"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
