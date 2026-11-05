import type { Article, Author, Category, InstitutionalPage } from "../types";

export const categories: Category[] = [
  { slug: "a-atrocidade-da-semana", name: "A Atrocidade da Semana", description: "A decisão mais mal planejada dos últimos dias, dissecada até o último parafuso.", tone: "fail" },
  { slug: "insuportavelmente-questionavel", name: "Insuportavelmente Questionável", description: "Tendências, aplicativos e modismos que todo mundo ama e que são estruturalmente idiotas.", tone: "alert" },
  { slug: "o-gabarito-errado", name: "O Gabarito Errado", description: "Pegamos um sistema do dia a dia, achamos a falha e redesenhamos o projeto. Ninguém vai usar.", tone: "blueprint" },
  { slug: "cartas-a-gerencia", name: "Cartas à Gerência", description: "Reclamações formais, por escrito, endereçadas a quem nunca vai ler.", tone: "paper" },
  { slug: "antigamente-tambem-era-ruim", name: "Antigamente Também Era Ruim", description: "O antídoto contra a nostalgia: o passado também não funcionava, só era mais lento.", tone: "steel" },
];

export const authors: Author[] = [
  {
    slug: "arthur",
    name: "Arthur Bastos",
    role: "Inspetor de qualidade aposentado",
    bio: "Passou 37 anos reprovando peças numa fábrica de autopeças e agora reprova o resto do mundo. Carrega uma caderneta de não conformidades e acredita que tudo tem uma especificação; o problema é que ninguém lê.",
    fictional: true,
  },
  {
    slug: "nico",
    name: "Nico Ferraz",
    role: "Locutor de rádio AM aposentado",
    bio: "Comandou por 30 anos o \"Corujão do Nico\" na madrugada do rádio AM. Não quer consertar o mundo: quer saber quem assinou. Tem um cachorro chamado Gerente para sempre poder falar com a gerência.",
    fictional: true,
  },
];

export const articles: Article[] = [
  {
    slug: "item-inesperado-autoatendimento-supermercado",
    title: "Item inesperado: como o autoatendimento me transformou em funcionário sem salário",
    subtitle: "O supermercado demitiu o caixa e contratou você. Você só não foi avisado.",
    excerpt: "Passei quarenta minutos operando um caixa de supermercado sem treinamento, sem salário e sem banquinho. E a máquina ainda reclamou da minha banana.",
    category: "insuportavelmente-questionavel",
    author: "nico",
    publishedAt: "2026-11-03",
    keywords: ["autoatendimento", "supermercado", "caixa", "tecnologia"],
    featured: true,
    coverLabel: "ITEM INESPERADO",
    blueprint: "Se o cliente faz o trabalho do caixa, o cliente merece o desconto do caixa. Ou, no mínimo, o banquinho.",
    faq: [
      { q: "O autoatendimento é sempre ruim?", a: "Não. Para quem leva três itens e tem pressa, pode ser ótimo. O problema é quando ele vira a única opção e o sistema trata cada cliente como suspeito." },
      { q: "Por que a balança acusa \"item inesperado\"?", a: "Em geral, a área de embalagem compara o peso esperado do produto com o peso colocado na sacola. Qualquer diferença fora da tolerância trava a compra até alguém liberar." },
    ],
    content: `Ontem eu fui demitido de um emprego que eu nunca tive. Explico.

Entrei no supermercado para comprar quatro coisas: pão, café, sabão e uma banana. Uma. Eu sou um homem de 61 anos, não preciso de cacho. Na saída, havia **um caixa humano aberto** e uma fila que começava na padaria. Do lado, oito telas brilhando, me chamando como sereia.

Fui.

## O emprego que eu não pedi

Repare no que aconteceu. A operadora de caixa — que tem treinamento, faz isso oito horas por dia e conhece o código da banana de cor — foi substituída por mim. Eu, sem treinamento, sem crachá, sem salário. E sem banquinho. **Ela tinha banquinho.** Eu fiquei em pé, segurando a banana como quem segura uma prova de crime.

O Arthur, que estava comigo e que é incapaz de passar por uma situação sem medi-la, cronometrou: eu passei os quatro itens em sete minutos e quarenta segundos. Segundo ele, uma operadora experiente faria isso em menos de um minuto. "Você é o funcionário menos produtivo da história do varejo", ele disse. Obrigado, Arthur. Pelo menos eu sou de graça.

## "Item inesperado na área de embalagem"

Aí a máquina falou comigo. Com aquela voz calma de quem nunca pegou fila: *item inesperado na área de embalagem*.

Inesperado? **Era uma banana.** A banana é a coisa mais esperada do mundo. O macaco espera a banana. A feira espera a banana. A banana é tão esperada que tem até música.

O Arthur explicou, com a paciência de quem já reprovou 2,3 milhões de peças: a balança da área de embalagem compara o peso esperado com o peso colocado. Deu doze gramas de diferença. Doze gramas! Eu disse a ele que aquilo era a minha dignidade indo embora. Pesa exatamente doze gramas. Ele anotou na caderneta.

## A moça do crachá

A tela travou e acendeu uma luzinha vermelha em cima da minha cabeça. Uma luz vermelha. Em cima de um senhor de idade. Com uma banana. Todo mundo olhou.

Veio então a moça do crachá para liberar a compra. E quem era a moça do crachá? **A mesma moça do caixa.** Ela não foi demitida: foi promovida a fiscal de velho. A empresa não eliminou o trabalho dela; ela só agora trabalha *e* eu trabalho. O único sistema da história em que se contrata um funcionário a mais e ninguém recebe a mais.

## A pergunta final

No fim, depois do cupom, a tela perguntou: "Como foi sua experiência?". Com carinhas. Verde, amarela, vermelha.

O Arthur deu a nota dele. Eu perguntei qual. Ele olhou para a tela e respondeu, sem piscar: "Item inesperado".

Eu não tenho nada contra a tecnologia. Eu fui locutor de rádio, eu vivi de tecnologia. O que eu não aceito é a tecnologia que transfere o trabalho para mim e o lucro para outro, e depois ainda quer saber se eu gostei.`,
  },
  {
    slug: "gabarito-errado-embarque-de-aviao",
    title: "O embarque de avião é o pior projeto logístico já aprovado por seres humanos",
    subtitle: "Um relatório técnico sobre filas, grupos, malas de mão e a impossibilidade de sentar.",
    excerpt: "Embarcamos aviões como quem enche uma garrafa pelo gargalo, pela ordem errada, com todo mundo carregando uma mala que não cabe. Redesenhei o processo. Ninguém vai usar.",
    category: "o-gabarito-errado",
    author: "arthur",
    publishedAt: "2026-10-28",
    keywords: ["embarque", "aviao", "aeroporto", "logistica", "filas"],
    featured: true,
    coverLabel: "EMBARQUE: ZERO",
    blueprint: "Embarque intercalado — janelas primeiro, depois meios, depois corredores, alternando fileiras — e uma regra simples: a mala de mão vai acima do seu próprio assento, não do assento mais próximo da porta.",
    faq: [
      { q: "Existe mesmo um jeito mais rápido de embarcar?", a: "Estudos e simulações acadêmicas, como os do astrofísico Jason Steffen publicados em 2008, indicam que métodos que evitam vários passageiros bloqueando o mesmo trecho do corredor tendem a ser mais rápidos que o embarque por grupos de trás para frente." },
      { q: "Por que as companhias não adotam o método ideal?", a: "Porque a ordem de embarque também é um produto: prioridades pagas, programas de fidelidade e famílias com crianças embaralham qualquer sequência teórica." },
    ],
    content: `Vamos aos dados.

Um avião de corredor único tem, digamos, trinta fileiras e seis assentos por fileira. Um corredor. Uma porta. Cento e oitenta pessoas, cada uma carregando uma mala que foi projetada para caber "na maioria das companhias" — o que, em engenharia, significa "em nenhuma".

O processo atual consiste em pegar essas cento e oitenta pessoas e empurrá-las pelo mesmo tubo, na mesma direção, ao mesmo tempo. Em qualquer fábrica isso teria um nome: **gargalo**. No aeroporto, chama-se "embarque prioritário".

## Primeiro: o projeto atual

O sistema mais comum divide os passageiros em grupos. Os grupos são chamados por um alto-falante cuja inteligibilidade, pela minha medição informal, fica abaixo de 40%. Os grupos são formados não por lógica de ocupação, mas por categoria de cartão de crédito.

O Nico, que estava comigo na última viagem, resumiu melhor do que eu: "Eles chamam a gente pela renda e não pela fileira".

## Segundo: a falha estrutural

O problema não é a quantidade de gente. É o **ponto único de falha**: o passageiro parado no corredor guardando a mala. Enquanto ele luta com o bagageiro, todos atrás dele param. Se ele está na fileira 4 e quem vem atrás está na 28, o passageiro da 28 espera por um problema que não é dele.

Agrave-se com o fenômeno da mala migratória: como o bagageiro acima do seu assento já está cheio, você guarda a mala na fileira 6 e senta na 22. Na saída, você nada contra a corrente. É um sistema que falha na entrada *e* na saída. Raro. Quase admirável.

## Terceiro: o redesenho

O redesenho não é invenção minha. Estudos e simulações acadêmicas — o mais citado é o do astrofísico Jason Steffen, em 2008 — sugerem que **embarcar de forma intercalada**, de modo que vários passageiros guardem as malas ao mesmo tempo em trechos diferentes do corredor, é mais rápido do que embarcar por blocos de trás para frente.

A versão simplificada, que até o Nico consegue seguir:

1. Assentos da janela primeiro, depois os do meio, depois os do corredor.
2. Dentro de cada etapa, fileiras alternadas, para que ninguém fique colado em ninguém no corredor.
3. Mala de mão **acima do próprio assento**. Sem exceção. Sem "só ali rapidinho".

## Quarto: por que nunca vai acontecer

Porque a ordem de embarque é um produto. Pessoas pagam para entrar primeiro, para sentar mais cedo dentro de um tubo onde ficarão sentadas por três horas. É a única fila do mundo em que se paga para esperar mais.

Registrei na caderneta: não conformidade grau cinco. O Nico pediu para anotar também que o amendoim não vem mais. Anotei. Grau dois.`,
  },
  {
    slug: "carta-a-gerencia-tampa-do-iogurte",
    title: "Carta à gerência da tampa do iogurte",
    subtitle: "Reclamação formal, protocolada em duas vias, sobre uma embalagem que exige força, técnica e fé.",
    excerpt: "Prezada gerência: a tampa do iogurte rasgou em três partes, nenhuma delas útil, e eu terminei comendo o produto com a ponta do dedo. Segue reclamação formal.",
    category: "cartas-a-gerencia",
    author: "arthur",
    publishedAt: "2026-10-21",
    keywords: ["embalagem", "design", "iogurte", "reclamacao"],
    featured: true,
    coverLabel: "PREZADA GERÊNCIA",
    blueprint: "Uma aba de abertura maior que a ponta de um dedo adulto, um selo que descola inteiro e um teste de abertura feito por quem tem mais de 60 anos antes de aprovar a embalagem.",
    content: `À gerência responsável pela tampa do iogurte,

Escrevo para registrar formalmente uma não conformidade observada no último dia 19, às 7h42, na cozinha de minha residência.

## Descrição da ocorrência

Ao tentar abrir um pote de iogurte natural, localizei a aba de abertura. Por "aba", entenda-se uma saliência de aproximadamente dois milímetros, projetada, pelo que pude deduzir, para ser segurada por uma formiga.

Puxei com o polegar e o indicador. A tampa rasgou. Não de forma limpa: rasgou em **três partes**, nenhuma delas destacável, todas firmemente coladas à borda. Uma delas, a maior, permaneceu sobre o iogurte como uma lona sobre um telhado em obra.

## Tentativas de mitigação

1. Tentei uma faca. A faca furou a tampa e espirrou iogurte na minha camisa, que estava passada.
2. Tentei uma colher. A colher empurrou a tampa para dentro do iogurte.
3. Chamei o Nico. O Nico chegou, olhou o pote, disse "isso aí não abre, Arthur, isso é decorativo", abriu com os dentes e comeu metade.

## Análise da falha

O problema não é o iogurte. O iogurte está dentro da especificação. O problema é que alguém aprovou uma embalagem testando-a com mãos de 25 anos, em laboratório, com o pote parado na mesa e a luz certa. Ninguém testou às 7h42, com sono, com as mãos de um senhor de 64 anos e um café esfriando ao lado.

Em controle de qualidade, chamamos isso de **teste fora das condições de uso**. É o equivalente a aprovar um guarda-chuva num dia de sol.

## Solicitação

Solicito, respeitosamente, que a próxima versão da tampa seja testada por alguém que já tenha aberto um pote sem querer. Fico à disposição para participar do teste. Levo minha própria camisa reserva.

Atenciosamente,

**Arthur Bastos**
Inspetor de qualidade (aposentado, mas não em espírito)

*P.S. do Nico: o iogurte estava bom.*`,
  },
  {
    slug: "antigamente-tambem-era-ruim-orelhao-e-fila-do-banco",
    title: "Antigamente também era ruim: o orelhão, a ficha e a tarde inteira na fila do banco",
    subtitle: "Antes que alguém diga que \"no meu tempo era melhor\", vamos aos fatos. Não era.",
    excerpt: "Tem gente com saudade de um tempo em que pagar uma conta levava uma tarde e ligar para casa exigia ficha, sorte e um orelhão que não estivesse quebrado. Nós lembramos. Não temos saudade.",
    category: "antigamente-tambem-era-ruim",
    author: "nico",
    publishedAt: "2026-10-14",
    keywords: ["nostalgia", "orelhao", "banco", "anos 80", "anos 90"],
    featured: true,
    coverLabel: "NO MEU TEMPO",
    blueprint: "Reclamar do presente sem romantizar o passado. O passado também foi para produção sem teste — só que mais devagar.",
    content: `Toda semana alguém comenta nos nossos vídeos: "no tempo de vocês as coisas funcionavam". Meu amigo, eu estava lá. **Não funcionavam.** Funcionavam *mais devagar*, o que dava a impressão de que alguém estava cuidando delas.

O Arthur pediu para eu escrever este texto porque, segundo ele, eu tenho "memória afetiva sem controle de qualidade". Ele vai revisar. Já aviso que discordo das revisões.

## O orelhão

Para ligar para casa, você precisava de três coisas: uma ficha, um orelhão funcionando e fé. A ficha você comprava na banca, que estava fechada. O orelhão funcionando ficava sempre a duas quadras do orelhão que você encontrou primeiro, que estava sem fone. E a fé era necessária porque o orelhão **comia a ficha** sem completar a ligação, e não havia a quem reclamar. Não tinha SAC. Tinha o vento.

Eu passei anos fazendo programa de madrugada no rádio. Sabe quantos ouvintes ligavam de orelhão para pedir música e caíam no meio do pedido? Eu tenho uma coleção mental de "Nico, toca aquela do…" *tu-tu-tu*. Até hoje não sei qual era.

## A fila do banco

Pagar uma conta era um compromisso. Você reservava a tarde. Levava um jornal, um sanduíche e às vezes um banquinho dobrável. O Arthur cronometrava. A pior marca dele, registrada na caderneta, foi de **três horas e onze minutos** para pagar uma conta de luz, que, quando ele chegou ao caixa, já tinha vencido.

O banco fechava às quatro. Se você chegasse às quatro e um, a porta giratória travava com você dentro, como uma metáfora.

## O formulário em três vias

Tudo tinha formulário. O formulário tinha três vias. A terceira via, a rosinha, ninguém sabia para que servia, mas era a única que pediam depois.

## Então hoje é melhor?

Não. Hoje é ruim de outro jeito. Hoje o orelhão é um aplicativo que pede atualização na hora em que você precisa dele, e a fila do banco é um robô no chat que responde "não entendi, poderia reformular?".

A diferença é que antigamente a gente sofria em pé, e hoje a gente sofre sentado, olhando para o celular. É um avanço ergonômico. O Arthur aprovou. Com ressalvas.`,
  },
];

export const pages: InstitutionalPage[] = [
  {
    slug: "sobre",
    title: "Sobre Os Saco Cheio",
    description: "Quem são Arthur e Nico, por que eles reclamam e como este site é produzido.",
    content: `**Os Saco Cheio** é um projeto de sátira, opinião e humor sobre notícias, tecnologia, comportamento e o absurdo do cotidiano. Faz parte de um ecossistema com versões em três idiomas: *The Fed Up Buddies* (inglês) e *Los Hartos* (espanhol).

## Os personagens

**Arthur Bastos** e **Nico Ferraz** são **personagens fictícios**: dois aposentados de 60 e poucos anos, amigos há 31 anos, que se conheceram numa fila do Detran. Arthur foi inspetor de controle de qualidade; Nico foi locutor de rádio AM de madrugada. Na história, os dois foram "digitalizados" pelo neto do Nico, que não aguentava mais ouvi-los reclamar no almoço de domingo.

Nos vídeos, Arthur e Nico aparecem como **avatares digitais criados com inteligência artificial**. Eles não representam nem imitam pessoas reais.

## O que publicamos

- **A Atrocidade da Semana** — decisões e acontecimentos mal planejados.
- **Insuportavelmente Questionável** — tendências e tecnologias que todo mundo ama.
- **O Gabarito Errado** — sistemas do dia a dia redesenhados (sem esperança).
- **Cartas à Gerência** — reclamações formais.
- **Antigamente Também Era Ruim** — o antídoto contra a nostalgia.

## Nossas regras

1. Zombamos de **sistemas, decisões e designs** — nunca de vítimas, minorias ou características pessoais.
2. Quando citamos um fato real, indicamos a fonte.
3. Sátira é opinião: os textos são assinados pelos personagens e refletem o ponto de vista deles.
4. Política partidária não é nossa pauta. Burocracia é.

## Quem mantém o site

O conteúdo é escrito e revisado pela equipe editorial do projeto. Responsável editorial: [INSERIR NOME DO RESPONSÁVEL EDITORIAL]. Para falar conosco, veja a página de [contato](/contato).`,
  },
  {
    slug: "contato",
    title: "Contato",
    description: "Como falar com a equipe de Os Saco Cheio — e como mandar sua carta à gerência.",
    content: `Quer mandar uma reclamação para o quadro **Cartas à Gerência**, sugerir uma pauta, apontar um erro ou falar de parcerias?

- **E-mail:** [INSERIR E-MAIL OFICIAL]

Ao escrever para nós, conte o caso com o máximo de detalhes, sem dados pessoais de terceiros. Se a sua carta for usada em um vídeo ou texto, ela poderá ser adaptada e não identificaremos você sem autorização.

Não respondemos com a velocidade de um SAC, mas, ao contrário de um SAC, nós lemos.`,
  },
  {
    slug: "politica-de-privacidade",
    title: "Política de Privacidade",
    description: "Como Os Saco Cheio trata dados pessoais e quais tecnologias estão ativas neste site.",
    content: `*Última atualização: [INSERIR DATA DE PUBLICAÇÃO]*

Esta política explica como o site **Os Saco Cheio** trata informações dos visitantes. Ela descreve apenas o que está **efetivamente ativo** no site.

## Controlador
[INSERIR NOME/RAZÃO SOCIAL DO RESPONSÁVEL], contato: [INSERIR E-MAIL OFICIAL].

## O que coletamos hoje
- **Preferência de tema (claro/escuro):** salva apenas no seu navegador (armazenamento local). Não é enviada para nós.
- **Registros técnicos do servidor:** a hospedagem pode registrar dados técnicos (como endereço IP e data de acesso) para segurança e funcionamento, conforme a política do provedor de hospedagem.
- **E-mails que você nos envia:** usados só para responder e, com sua permissão, para o quadro Cartas à Gerência.

## O que NÃO está ativo neste momento
Este site **não** usa, no momento, ferramentas de análise de audiência, pixels de publicidade nem anúncios. Se isso mudar (por exemplo, com a ativação do Google AdSense ou de ferramentas de análise), esta política será atualizada antes da ativação e, quando a lei exigir, pediremos seu consentimento.

## Seus direitos (LGPD)
Você pode solicitar acesso, correção ou exclusão dos seus dados pelo e-mail acima.

## Alterações
Atualizaremos esta página sempre que as práticas mudarem.`,
  },
  {
    slug: "termos-de-uso",
    title: "Termos de Uso",
    description: "Regras de uso do site Os Saco Cheio.",
    content: `Ao usar este site, você concorda com estes termos.

## Natureza do conteúdo
O conteúdo é **sátira e opinião**. Os textos são assinados por personagens fictícios e não devem ser lidos como aconselhamento profissional de nenhum tipo.

## Direitos
Textos, personagens, marcas e imagens pertencem a [INSERIR TITULAR DOS DIREITOS]. Citações curtas com link para a fonte são bem-vindas.

## Links externos
Podemos indicar fontes externas. Não controlamos o conteúdo desses sites.

## Contato
Dúvidas: [INSERIR E-MAIL OFICIAL].`,
  },
];
