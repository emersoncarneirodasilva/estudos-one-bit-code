// OBS: Só servirá conectando com um banco de dados
// import mysql from "mysql2/promise";

// Simulando dados vindo do banco
const rows = [
  { email: "fulando@email.com" },
  { id: 1 },
  { createdAt: "02/04/2024" },
  { email: "fulando2@email.com" },
  { id: 2 },
  { createdAt: "02/04/2024" },
  { email: "fulando3@email.com" },
  { id: 3 },
  { createdAt: "02/04/2024" },
  { email: "fulando4@email.com" },
  { id: 4 },
  { createdAt: "02/04/2024" },
  { email: "fulando5@email.com" },
  { id: 5 },
  { createdAt: "02/04/2024" },
  { email: "fulando6@email.com" },
  { id: 6 },
  { createdAt: "02/04/2024" },
  { email: "fulando7@email.com" },
  { id: 7 },
  { createdAt: "02/04/2024" },
  { email: "fulando8@email.com" },
  { id: 8 },
  { createdAt: "02/04/2024" },
  { email: "fulando9@email.com" },
  { id: 9 },
  { createdAt: "02/04/2024" },
];

export const metadata = {
  title: "Inscritos | Admin",
};

export default async function Subscribers() {
  // OBS: A partir do Next 13, não precisa chamar as funções getServeSideProps e getStaticProps

  // OBS: Chamada dos dados vindos do banco
  // const db = await mysql.createConnection(
  //   "mysql://nextjs:nextjs@localhost:3306/nextjs_tutorial"
  // );
  // const [rows] = await db.query("SELECT * FROM Subscribers;");
  // db.end();

  return (
    <main>
      <h1 className="mb-8 text-2xl font-bold">Lista de inscritos</h1>
      <table className="w-full text-center">
        <thead className="border-b-[1px]">
          <tr className="[&>*]:py-4">
            <th>ID</th>
            <th>Email</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((subscriber) => (
            <tr key={subscriber.id} className="[&>*]:p-4">
              <td>{subscriber.id}</td>
              <td className="text-left">{subscriber.email}</td>
              <td>{subscriber.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
