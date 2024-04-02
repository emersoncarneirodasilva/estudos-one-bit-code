"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Chamada do endpoint
    const response = await fetch("api/subscribers", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());

    console.log(response);

    if (response.created) {
      setEmail("");
      alert("Email cadastrado com sucesso!");
    } else {
      alert("Algo deu errado!");
    }
  };

  return (
    <form className="flex justify-center gap-4 p-4" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Seu e-mail principal"
        className="p-3 rounded bg-slate-800"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="p-3 rounded bg-sky-700">Se inscrever</button>
    </form>
  );
}
