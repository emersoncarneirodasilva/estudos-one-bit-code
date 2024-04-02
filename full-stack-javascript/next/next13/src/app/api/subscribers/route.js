import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Olá, mundo", status: 200 });
}

export async function POST() {
  return NextResponse.json({ message: "Olá, mundo!" });
}

// OBS: Exemplo com banco de dados (back-end)
// Só funcionará conectando com banco de dados
// export async function POST(request) {
//   const body = await request.json();

//   try {
//     const connection = await mysql.createConnection(
//       "mysql://nextjs:nextjs@localhost:3306/nextjs_tutorial"
//     );
//     await connection.query("INSERT INTO Subscribers (email) VALUES (?)", [
//       body.email,
//     ]);
//     connection.end();
//     return NextResponse.json({ created: true });
//   } catch (error) {
//     return NextResponse.json(
//       { created: false, error: error.message },
//       { status: 400 }
//     );
//   }
// }
