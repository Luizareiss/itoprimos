let jogadores = [];
let numeros = {};

const temas = [
  "Pessoas famosas que você gostaria de ser",
  "Coisas que dão medo",
  "Coisas que você gostaria de fotografar",
  "Esportes mais conhecidos",
  "Itens do dia a dia que poderiam ser boas armas",
  "Poderes especiais que você gostaria de ter",
  "Desculpas para faltar no trabalho",
  "Sabores de sorvete",
  "Pessoas que sobreviveriam a um ataque zumbi",
  "Coisas que você gostaria de fazer ao aposentar",
  "Pessoas que você sairia no soco",
  "Coisas que desejava quando era criança",
  "Melhores temas de aniversário",
  "Tipos de rolê",
  "Motivo para pedir divórcio",
  "Pense como um aluno do ensino médio: o que é legal?",
  "Presente de aniversário",
  "Melhor destino para passar a lua de mel",
  "Coisas fofinhas",
  "Pessoas que ganhariam o BBB",
  "Frases estranhas ditas por uma criança de 5 anos",
  "Algo que você gostaria de achar enterrado em um parque",
  "Melhores bebidas alcoólicas",
  "Itens úteis para quando estiver perdido no deserto",
  "Evento que você visitaria se tivesse uma máquina do tempo",
  "Coisas que te surpreenderiam se saísse do seu corpo",
  "Coisas que te surpreenderiam se fossem ditas por um professor",
  "Melhores comidas salgadas",
  "Lugares para 1° date",
  "Melhores comidas doces",
  "Respostas para a pergunta: pai/mãe, de onde vem os bebês?",
  "Melhores filmes de animação",
  "Ações que exigem coragem",
  "Piores lugares para terminar um namoro",
  "Um único prato para comer no seu último dia de vida",
  "Última coisa para fazer no seu último dia de vida",
  "Personagens fictícios que dão raiva",
  "Frases para se dizer em uma entrevista de emprego",
  "Emprego dos sonhos",
  "Rolês de BH"
];

function atualizarLista() {
  const lista = document.getElementById("listaJogadores");
  lista.innerHTML = "";

  jogadores.forEach(nome => {
    const li = document.createElement("li");
    li.innerText = nome;
    lista.appendChild(li);
  });
}

function adicionarJogador() {
  const input = document.getElementById("novoJogador");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome");
    return;
  }

  if (jogadores.includes(nome)) {
    alert("Jogador já existe");
    return;
  }

  jogadores.push(nome);
  input.value = "";
  atualizarLista();
}

function sortearNumeros() {
  if (jogadores.length === 0) {
    alert("Nenhum jogador adicionado");
    return;
  }

  let disponiveis = [];
  for (let i = 1; i <= 100; i++) {
    disponiveis.push(i);
  }

  numeros = {};

  jogadores.forEach(nome => {
    const index = Math.floor(Math.random() * disponiveis.length);
    numeros[nome] = disponiveis[index];
    disponiveis.splice(index, 1);
  });

  document.getElementById("status").innerText =
    "Números sorteados com sucesso!";
}

function revelarNumero() {
  const nome = document.getElementById("nomeRevelar").value.trim();
  const resultado = document.getElementById("resultado");

  if (!numeros[nome]) {
    resultado.innerText = "Nome não encontrado ou sorteio não realizado";
    return;
  }

  resultado.innerText = `Seu número é: ${numeros[nome]}`;

  setTimeout(() => {
    resultado.innerText = "";
  }, 3000);
}

function sortearTema() {
  const tema = temas[Math.floor(Math.random() * temas.length)];
  document.getElementById("temaSorteado").innerText = tema;
}

function verRanking() {
  const ranking = document.getElementById("ranking");
  ranking.innerHTML = "";

  if (Object.keys(numeros).length === 0) {
    alert("Faça o sorteio antes de ver o ranking");
    return;
  }

  const ordenado = Object.entries(numeros)
    .sort((a, b) => b[1] - a[1]);

  ordenado.forEach(([nome, numero], index) => {
    const li = document.createElement("li");
    li.innerText = `${index + 1}º — ${nome}: ${numero}`;
    ranking.appendChild(li);
  });
}

function zerarTudo() {
  jogadores = [];
  numeros = {};
  atualizarLista();
  document.getElementById("ranking").innerHTML = "";
  document.getElementById("temaSorteado").innerText = "";
  document.getElementById("status").innerText = "";
  document.getElementById("resultado").innerText = "";
  alert("Tudo zerado!");
}