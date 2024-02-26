import { Component } from "./Component.js";
import { Input } from "./Input.js";
import { Form } from "./Form.js";
import { Label } from "./Label.js";

const titleChoice = String(prompt("Digite o título da página"));
const subtitleChoice = String(prompt("Digite o subtítulo da página"));

const title = new Component("h1", "body", { textContent: titleChoice });
title.render();

// title.tag = "h3"; redefinir o title
// title.build().render();

const subtitle = new Component("h2", "body", { textContent: subtitleChoice });
subtitle.render();

const form = new Form("body");

const label = new Label("Nome: ", form, { htmlForm: "nameInput" });

const input = new Input(form, { id: "nameInput", name: "name" });

form.render();
label.render();

form.addChildren(input);

form.addChildren(
  new Component("br"),
  new Component("br"),
  new Label("Data de nascimento: ", form, { htmlForm: "birthdayInput" }),
  new Input(form, { id: "birthdayinput", html: "birthday", type: "date" })
);
