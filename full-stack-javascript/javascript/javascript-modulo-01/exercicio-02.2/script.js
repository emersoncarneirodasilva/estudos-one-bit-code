// nome do personagem
// nome do poder (ATK)
// valor do poder (ATK)
// quantidade de vida (HP)
// valor da defesa (DEF)
// possui escudo?

// Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo,
// o dano causado será igual a diferença entre o ataque e a defesa.

// Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo,
// o dano causado será igual a metade da diferença entre o ataque e a defesa.

// Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

// Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos
// de vida do personagem defensor e exibir na tela a quantidade de dano e as informações
// atualizadas de ambos os personagens.

const warrior1 = prompt("Digite o nome do primeiro guerreiro:");
const hp1 = Number(prompt("Digite a quantidade de vida ele possui:"));
const atkName1 = prompt("Digite o nome do seu ataque:");
const atk1 = Number(prompt("Digite o valor de seu ataque:"));
const def1 = Number(prompt("Digite o valor de sua defesa:"));
const shield1 = prompt('O guerreiro possui escudo? (Responda: "Sim" ou "Não")');

const warrior2 = prompt("Digite o nome do segundo guerreiro:");
const hp2 = Number(prompt("Digite a quantidade de vida ele possui:"));
const atkName2 = prompt("Digite o nome do seu ataque:");
const atk2 = Number(prompt("Digite o valor de seu ataque:"));
const def2 = Number(prompt("Digite o valor de sua defesa:"));
const shield2 = prompt('O guerreiro possui escudo? (Responda: "Sim" ou "Não")');

// Danos do Primeiro Guerreiro no Segundo Guerreiro
const damage1 = atk1 > def2 ? atk1 - def2 : 0;

if (shield2 === "sim" || shield2 === "Sim" || shield2 === "SIM") {
  damageTotal1 = damage1 / 2;
} else {
  damageTotal1 = damage1;
}

// Danos do Segundo Guerreiro no Primeiro Guerreiro
const damage2 = atk2 > def1 ? atk2 - def1 : 0;

if (shield1 === "sim" || shield1 === "Sim" || shield1 === "SIM") {
  damageTotal2 = damage2 / 2;
} else {
  damageTotal2 = damage2;
}

// Resultados do ataque do Primeiro Guerreiro x Segundo Guerreiro
const hpTotal2 = hp2 - damageTotal1 <= 0 ? 0 : hp2 - damageTotal1;

// Resultados do ataque do Segundo Guerreiro x Primeiro Guerreiro
const hpTotal1 = hp1 - damageTotal2 <= 0 ? 0 : hp1 - damageTotal2;

alert(
  "O ataque " +
    atkName1 +
    " do guerreiro " +
    warrior1 +
    " causou " +
    damageTotal1 +
    " de dano," +
    " deixando o guerreiro " +
    warrior2 +
    " com " +
    hpTotal2 +
    " de HP" +
    "\n\n" +
    "O ataque " +
    atkName2 +
    " do guerreiro " +
    warrior2 +
    " causou " +
    damageTotal2 +
    " de dano," +
    " deixando o guerreiro " +
    warrior1 +
    " com " +
    hpTotal1 +
    " de HP"
);

console.log(
  "O ataque",
  atkName1,
  "do guerreiro",
  warrior1,
  "causou",
  damageTotal1,
  "de dano",
  "deixando o guerreiro",
  warrior2,
  "com",
  hpTotal2,
  "de HP"
);

console.log(
  "O ataque",
  atkName2,
  "do guerreiro",
  warrior2,
  "causou",
  damageTotal2,
  "de dano",
  "deixando o guerreiro",
  warrior1,
  "com",
  hpTotal1,
  "de HP"
);
