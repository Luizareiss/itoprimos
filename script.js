let jogadores = [];
let numeros = {};

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

function verRanking() {
  const ranking = document.getElementById("ranking");
  ranking.innerHTML = "";

  if (Object.keys(numeros).length === 0) {
    alert("Faça o sorteio antes de ver o ranking");
    return;
  }

  const ordenado = Object.entries(numeros)
    .sort((a, b) => b[1] - a[1]); // 👈 MAIOR → MENOR

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
  document.getElementById("status").innerText = "";
  document.getElementById("resultado").innerText = "";
  alert("Tudo zerado!");
}