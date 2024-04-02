export default function Layout({ children }) {
  return (
    <section className="w-full p-10 bg-zinc-900">
      <p className="mb-4">Área Administrativa / Inscritos</p>
      {children}
    </section>
  );
}
