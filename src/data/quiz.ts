// Each answer corresponds to the chapter at the same index. No personal data is saved.
export const quizQuestions = [
  {
    question: "Qual tema destas páginas mais desperta sua curiosidade?",
    answers: [
      "A infância que continua em nós",
      "Amizades que mudam com o tempo",
      "O que deixamos para depois",
      "O significado das palavras de amor",
      "A possibilidade de perdoar",
      "As lembranças de uma vida",
      "As pequenas cenas do cotidiano",
    ],
  },
  {
    question: "Em qual destas cenas você gostaria de demorar um pouco?",
    answers: [
      "Abrir uma caixa de brinquedos",
      "Reencontrar um amigo",
      "Conversar sem olhar o relógio",
      "Ouvir uma declaração e pensar no que ela significa",
      "Retomar uma conversa interrompida",
      "Folhear um álbum de fotografias",
      "Observar o movimento de uma praça",
    ],
  },
  {
    question: "Que pergunta você levaria para a leitura?",
    answers: [
      "O que da minha infância ainda vive em mim?",
      "Como cuidar de uma amizade que mudou?",
      "A quem quero dedicar mais tempo?",
      "O que existe além de dizer eu te amo?",
      "É possível reconstruir um laço?",
      "Quais momentos eu gostaria de revisitar?",
      "O que não percebo quando estou com pressa?",
    ],
  },
  {
    question: "Que tipo de relação mais chama sua atenção em uma história?",
    answers: [
      "A relação com quem fomos",
      "O vínculo entre amigos",
      "A presença de quem deixamos esperando",
      "As relações amorosas",
      "Os vínculos depois de uma ruptura",
      "A companhia construída ao longo dos anos",
      "Os encontros entre pessoas no dia a dia",
    ],
  },
  {
    question: "Qual gesto você escolheria para uma pausa hoje?",
    answers: [
      "Rever um objeto da infância",
      "Mandar uma mensagem a um amigo",
      "Reservar tempo para alguém",
      "Pensar nas palavras que digo",
      "Refletir sobre uma reconciliação",
      "Revisitar uma lembrança querida",
      "Sentar e observar a vida ao redor",
    ],
  },
  {
    question: "Que reflexão você gostaria de guardar ao fechar o livro?",
    answers: [
      "Crescer sem perder tudo o que fomos",
      "Dar espaço às mudanças de uma amizade",
      "Estar mais presente",
      "Encontrar sinceridade no amor",
      "Entender os caminhos do perdão",
      "Cuidar das nossas memórias",
      "Enxergar humanidade nos pequenos gestos",
    ],
  },
];

export function recommendChapter(answers: number[]): number {
  if (
    answers.length !== 6 ||
    answers.some((answer) => !Number.isInteger(answer) || answer < 0 || answer > 6)
  ) {
    throw new Error("Responda às seis perguntas.");
  }
  const scores = Array<number>(7).fill(0);
  answers.forEach((answer) => scores[answer]++);
  const highest = Math.max(...scores);
  // A tie follows the most recent preference among the tied themes.
  return [...answers].reverse().find((answer) => scores[answer] === highest)!;
}
