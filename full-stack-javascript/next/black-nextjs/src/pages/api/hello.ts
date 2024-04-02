// pages/api/hello.ts

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  timestamp: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const name = "John Doe";
  const timestamp = new Date().toLocaleString();

  res.status(200).json({ name, timestamp });
}
