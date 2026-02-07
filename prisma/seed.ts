import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed expandido...");


  // Cria usuário demo
  await prisma.user.create({
    data: {
      id: "demo-user-id",
      name: "Aluno Demo",
      email: "demo@reactmaster.com",
    },
  });

  // Cria o curso
  const course = await prisma.course.create({
    data: {
      title: "React Fundamentals",
      slug: "react-fundamentals",
    },
  });

  // =====================================================
  // MÓDULO 1: Fundamentos do React e JSX
  // =====================================================
  const mod1 = await prisma.module.create({
    data: {
      title: "Fundamentos do React e JSX",
      order: 1,
      courseId: course.id,
    },
  });

  // Lição 1.1 - Bem-vindo ao React
  await prisma.lesson.create({
    data: {
      title: "Bem-vindo ao React",
      order: 1,
      type: "TEXT",
      moduleId: mod1.id,
      content: `
<h2>🚀 O que é React?</h2>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
  <iframe 
    src="https://www.youtube.com/embed/Tn6-PIqc4UM" 
    title="React em 100 Segundos" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
<p style="text-align: center; color: #9ca3af; font-size: 14px; margin-top: -16px;">🎬 React explicado em 100 segundos (Fireship)</p>

<p><strong>React</strong> é uma <em>biblioteca JavaScript</em> de código aberto criada pelo Facebook (hoje Meta) em 2013. Ela foi desenvolvida para resolver um problema específico: construir interfaces de usuário complexas e interativas de forma eficiente e organizada.</p>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px; border-radius: 12px; margin: 24px 0; color: white;">
  <h3 style="margin-top: 0; color: white;">📊 React em Números (2024)</h3>
  <ul style="margin-bottom: 0; line-height: 1.8;">
    <li><strong>+220.000</strong> estrelas no GitHub</li>
    <li><strong>+23 milhões</strong> downloads semanais no npm</li>
    <li><strong>#1</strong> biblioteca frontend mais usada</li>
    <li><strong>40%+</strong> das vagas de front-end pedem React</li>
  </ul>
</div>

<h3>🏢 Quem usa React?</h3>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 20px 0;">
  <div style="background: #1e1e2e; padding: 16px; border-radius: 8px; text-align: center;">
    <span style="font-size: 32px;">📘</span>
    <p style="margin: 8px 0 0; font-weight: bold;">Facebook</p>
  </div>
  <div style="background: #1e1e2e; padding: 16px; border-radius: 8px; text-align: center;">
    <span style="font-size: 32px;">📷</span>
    <p style="margin: 8px 0 0; font-weight: bold;">Instagram</p>
  </div>
  <div style="background: #1e1e2e; padding: 16px; border-radius: 8px; text-align: center;">
    <span style="font-size: 32px;">🎬</span>
    <p style="margin: 8px 0 0; font-weight: bold;">Netflix</p>
  </div>
</div>

<div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 20px; border-radius: 12px; margin-top: 24px;">
  <h4 style="margin-top: 0; color: #4ade80;">💡 Conceito-Chave: Componentes</h4>
  <p style="margin-bottom: 0; color: #bbf7d0;">
    React usa <strong>componentes</strong> - pedaços independentes e reutilizáveis de UI que você combina como blocos de LEGO para construir interfaces complexas.
  </p>
</div>
      `,
    },
  });

  // Lição 1.2 - Entendendo JSX
  await prisma.lesson.create({
    data: {
      title: "Entendendo JSX",
      order: 2,
      type: "TEXT",
      moduleId: mod1.id,
      content: `
<h2>📝 JSX: HTML dentro do JavaScript</h2>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
  <iframe 
    src="https://www.youtube.com/embed/9GtB5G2xGTY" 
    title="O que é JSX?" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
<p style="text-align: center; color: #9ca3af; font-size: 14px; margin-top: -16px;">🎬 Entendendo JSX no React</p>

<p><strong>JSX</strong> (JavaScript XML) é uma extensão de sintaxe que permite escrever código parecido com HTML dentro do JavaScript. É a forma padrão de criar interfaces no React.</p>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #61dafb;">✨ Exemplo de JSX</h4>
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4;">
function MeuComponente() {
  return (
    &lt;div className="card"&gt;
      &lt;h1&gt;Olá, React!&lt;/h1&gt;
      &lt;p&gt;Isso é JSX&lt;/p&gt;
    &lt;/div&gt;
  );
}</pre>
</div>

<h3>⚠️ Diferenças entre JSX e HTML</h3>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr style="background: #1e3a5f;">
    <th style="padding: 12px; text-align: left; border: 1px solid #333;">HTML</th>
    <th style="padding: 12px; text-align: left; border: 1px solid #333;">JSX</th>
    <th style="padding: 12px; text-align: left; border: 1px solid #333;">Por quê?</th>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #333;"><code>class="btn"</code></td>
    <td style="padding: 12px; border: 1px solid #333;"><code>className="btn"</code></td>
    <td style="padding: 12px; border: 1px solid #333;"><code>class</code> é reservada em JS</td>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #333;"><code>for="email"</code></td>
    <td style="padding: 12px; border: 1px solid #333;"><code>htmlFor="email"</code></td>
    <td style="padding: 12px; border: 1px solid #333;"><code>for</code> é reservada em JS</td>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #333;"><code>onclick="..."</code></td>
    <td style="padding: 12px; border: 1px solid #333;"><code>onClick={...}</code></td>
    <td style="padding: 12px; border: 1px solid #333;">camelCase + chaves</td>
  </tr>
</table>

<div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 20px; border-radius: 12px;">
  <h4 style="margin-top: 0; color: #4ade80;">🎯 Regra de Ouro</h4>
  <p style="margin-bottom: 0; color: #bbf7d0;">
    Todo componente React deve retornar <strong>um único elemento pai</strong>. Use <code>&lt;div&gt;</code> ou <code>&lt;&gt;...&lt;/&gt;</code> (Fragment) para envolver múltiplos elementos.
  </p>
</div>
      `,
    },
  });

  // Lição 1.3 - Expressões JavaScript
  await prisma.lesson.create({
    data: {
      title: "Expressões JavaScript em JSX",
      order: 3,
      type: "TEXT",
      moduleId: mod1.id,
      content: `
<h2>🔗 Expressões JavaScript no JSX</h2>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
  <iframe 
    src="https://www.youtube.com/embed/PHaECbrKgs0" 
    title="JavaScript Expressions in JSX" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
<p style="text-align: center; color: #9ca3af; font-size: 14px; margin-top: -16px;">🎬 Usando JavaScript dentro do JSX</p>

<p>A magia do JSX está em poder <strong>misturar JavaScript com marcação</strong>. Use chaves <code>{}</code> para inserir qualquer expressão JavaScript válida dentro do JSX.</p>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4;">
const nome = "Maria";
const idade = 25;

function Perfil() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Olá, {nome}!&lt;/h1&gt;
      &lt;p&gt;Idade: {idade} anos&lt;/p&gt;
      &lt;p&gt;Ano de nascimento: {2024 - idade}&lt;/p&gt;
    &lt;/div&gt;
  );
}</pre>
</div>

<h3>💡 O que você pode colocar dentro das chaves?</h3>

<ul style="line-height: 2;">
  <li>✅ Variáveis: <code>{nome}</code></li>
  <li>✅ Operações: <code>{preco * 2}</code></li>
  <li>✅ Funções: <code>{texto.toUpperCase()}</code></li>
  <li>✅ Ternários: <code>{ativo ? 'Sim' : 'Não'}</code></li>
  <li>❌ Statements (if, for, while) - use fora do JSX</li>
</ul>

<div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 20px; border-radius: 12px;">
  <h4 style="margin-top: 0; color: #4ade80;">📚 Resumo</h4>
  <p style="margin-bottom: 0; color: #bbf7d0;">
    Use <code>{}</code> para inserir JavaScript no JSX. Qualquer expressão que retorne um valor é válida!
  </p>
</div>
      `,
    },
  });

  // Lição 1.4 - Renderizando Listas
  await prisma.lesson.create({
    data: {
      title: "Renderizando Listas com map()",
      order: 4,
      type: "TEXT",
      moduleId: mod1.id,
      content: `
<h2>📋 Renderizando Listas com map()</h2>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
  <iframe 
    src="https://www.youtube.com/embed/0sasRxl35_8" 
    title="Renderizando Listas no React" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
<p style="text-align: center; color: #9ca3af; font-size: 14px; margin-top: -16px;">🎬 Listas e Keys no React</p>

<p>Uma das tarefas mais comuns em React é mostrar listas de dados. Usamos o método <code>.map()</code> do JavaScript para transformar arrays em elementos JSX.</p>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4;">
const frutas = ['🍎 Maçã', '🍌 Banana', '🍊 Laranja'];

function ListaFrutas() {
  return (
    &lt;ul&gt;
      {frutas.map((fruta, index) =&gt; (
        &lt;li key={index}&gt;{fruta}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</pre>
</div>

<h3>🔑 A propriedade key</h3>

<div style="background: #4a1515; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <h4 style="margin-top: 0; color: #f87171;">⚠️ OBRIGATÓRIO!</h4>
  <p style="color: #fca5a5;">
    Cada item em uma lista <strong>deve</strong> ter uma propriedade <code>key</code> única. O React usa essa key para identificar qual item mudou, foi adicionado ou removido.
  </p>
</div>

<h3>✅ Boas práticas para keys</h3>

<ul style="line-height: 2;">
  <li>Use IDs únicos do seu banco de dados</li>
  <li>Evite usar o <code>index</code> como key (a menos que a lista seja estática)</li>
  <li>Keys devem ser únicas <strong>entre irmãos</strong>, não globalmente</li>
</ul>

<div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 20px; border-radius: 12px;">
  <h4 style="margin-top: 0; color: #4ade80;">📚 Resumo</h4>
  <p style="margin-bottom: 0; color: #bbf7d0;">
    Use <code>array.map()</code> para renderizar listas. Sempre adicione uma <code>key</code> única em cada item!
  </p>
</div>
      `,
    },
  });

  // Exercício 1.1 - Primeiro Componente
  const lesson1Ex = await prisma.lesson.create({
    data: {
      title: "Exercício: Primeiro Componente",
      order: 5,
      type: "EXERCISE",
      moduleId: mod1.id,
      content: `
<h2>🎯 Desafio: Crie seu primeiro componente!</h2>

<p>Hora de praticar! Crie um componente que exibe um cartão de apresentação.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 24px; border-radius: 12px; margin: 24px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">📋 Requisitos:</h3>
  <ol style="margin-bottom: 0; color: #93c5fd; line-height: 2;">
    <li>Crie variáveis para <code>nome</code> e <code>profissao</code></li>
    <li>Exiba o nome em um <code>&lt;h2&gt;</code></li>
    <li>Exiba a profissão em um <code>&lt;p&gt;</code></li>
    <li>Use expressões JSX <code>{}</code> para mostrar os valores</li>
  </ol>
</div>
      `,
    },
  });

  await prisma.exercise.create({
    data: {
      lessonId: lesson1Ex.id,
      starterCode: `// PASSO 1: Crie as variáveis (fora da função)
// const nome = "Seu Nome"
// const profissao = "Sua Profissão"

export default function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* PASSO 2: Adicione um <h2> com o nome */}
      
      {/* PASSO 3: Adicione um <p> com a profissão */}
      
    </div>
  );
}`,
      solutionCode: `const nome = "João Silva";
const profissao = "Desenvolvedor React";

export default function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{nome}</h2>
      <p>{profissao}</p>
    </div>
  );
}`,
      testCode: `
CHECK:hasVariable:nome:Crie uma variável chamada nome
CHECK:hasVariable:profissao:Crie uma variável chamada profissao
CHECK:hasElement:h2:Use um elemento h2 para o nome
CHECK:hasElement:p:Use um elemento p para a profissão
CHECK:hasExpression:nome:Mostre o nome usando {nome}
CHECK:hasExpression:profissao:Mostre a profissão usando {profissao}
`,
    },
  });

  // Exercício 1.2 - Lista de Tarefas
  const lesson2Ex = await prisma.lesson.create({
    data: {
      title: "Exercício: Lista de Tarefas",
      order: 6,
      type: "EXERCISE",
      moduleId: mod1.id,
      content: `
<h2>🎯 Desafio: Crie uma lista de tarefas!</h2>

<p>Pratique o uso de <code>.map()</code> e <code>key</code> renderizando uma lista.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 24px; border-radius: 12px; margin: 24px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">📋 Requisitos:</h3>
  <ol style="margin-bottom: 0; color: #93c5fd; line-height: 2;">
    <li>Use o array <code>tarefas</code> fornecido</li>
    <li>Renderize cada tarefa como um <code>&lt;li&gt;</code></li>
    <li>Use <code>.map()</code> para iterar</li>
    <li>Adicione <code>key</code> em cada item</li>
  </ol>
</div>
      `,
    },
  });

  await prisma.exercise.create({
    data: {
      lessonId: lesson2Ex.id,
      starterCode: `const tarefas = [
  { id: 1, texto: '📚 Estudar React' },
  { id: 2, texto: '💻 Praticar código' },
  { id: 3, texto: '🎯 Fazer exercícios' },
];

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Minhas Tarefas</h2>
      <ul>
        {/* Use .map() para renderizar as tarefas */}
        {/* Cada <li> deve ter key={tarefa.id} */}
      </ul>
    </div>
  );
}`,
      solutionCode: `const tarefas = [
  { id: 1, texto: '📚 Estudar React' },
  { id: 2, texto: '💻 Praticar código' },
  { id: 3, texto: '🎯 Fazer exercícios' },
];

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Minhas Tarefas</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.texto}</li>
        ))}
      </ul>
    </div>
  );
}`,
      testCode: `
CHECK:contains:.map:Use o método map para iterar
CHECK:hasElement:li:Renderize cada tarefa em um li
CHECK:contains:key:Adicione a propriedade key em cada item
CHECK:hasExpression:tarefa.texto:Mostre o texto da tarefa
`,
    },
  });

  console.log("✅ Módulo 1 criado!");

  // =====================================================
  // MÓDULO 2: React Hooks
  // =====================================================
  const mod2 = await prisma.module.create({
    data: {
      title: "React Hooks",
      order: 2,
      courseId: course.id,
    },
  });

  // Lição 2.1 - Introdução aos Hooks
  await prisma.lesson.create({
    data: {
      title: "Introdução aos Hooks",
      order: 1,
      type: "TEXT",
      moduleId: mod2.id,
      content: `
<h2>🪝 Hooks: A Revolução do React</h2>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
  <iframe 
    src="https://www.youtube.com/embed/TNhaISOUy6Q" 
    title="React Hooks Explained" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
<p style="text-align: center; color: #9ca3af; font-size: 14px; margin-top: -16px;">🎬 React Hooks em 10 minutos</p>

<p><strong>Hooks</strong> são funções especiais introduzidas no React 16.8 que permitem usar estado e outros recursos do React em componentes funcionais.</p>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px; border-radius: 12px; margin: 24px 0; color: white;">
  <h3 style="margin-top: 0; color: white;">🎉 O Grande Antes e Depois</h3>
  <p style="margin-bottom: 0;">
    <strong>Antes:</strong> Precisava usar <code>class</code> para ter estado<br/>
    <strong>Depois:</strong> Funções simples com Hooks fazem tudo!
  </p>
</div>

<h3>📋 Os Hooks que você vai aprender:</h3>

<div style="display: grid; gap: 16px; margin: 24px 0;">
  <div style="background: #1e1e2e; padding: 20px; border-radius: 12px; border-left: 4px solid #61dafb;">
    <h4 style="margin: 0 0 8px; color: #61dafb;">useState</h4>
    <p style="margin: 0; color: #9ca3af;">Adiciona estado (memória) ao componente</p>
  </div>
  <div style="background: #1e1e2e; padding: 20px; border-radius: 12px; border-left: 4px solid #a6e3a1;">
    <h4 style="margin: 0 0 8px; color: #a6e3a1;">useEffect</h4>
    <p style="margin: 0; color: #9ca3af;">Executa efeitos colaterais (API, timers, etc.)</p>
  </div>
</div>

<h3>⚠️ Regras dos Hooks</h3>

<ol style="line-height: 2;">
  <li>Sempre comece com <code>use</code> (useState, useEffect)</li>
  <li>Chame apenas no topo do componente (não dentro de if/for)</li>
  <li>Apenas em componentes funcionais ou custom hooks</li>
</ol>
      `,
    },
  });

  // Lição 2.2 - useState
  await prisma.lesson.create({
    data: {
      title: "useState: Estado no React",
      order: 2,
      type: "TEXT",
      moduleId: mod2.id,
      content: `
<h2>📦 useState: A Memória do Componente</h2>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
  <iframe 
    src="https://www.youtube.com/embed/O6P86uwfdR0" 
    title="useState Hook Explained" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
<p style="text-align: center; color: #9ca3af; font-size: 14px; margin-top: -16px;">🎬 useState explicado em detalhes</p>

<p><code>useState</code> é o hook mais usado no React. Ele permite que seu componente "lembre" informações entre renderizações.</p>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #61dafb;">Sintaxe:</h4>
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4;">
const [valor, setValor] = useState(valorInicial);

// Exemplo prático:
const [contador, setContador] = useState(0);
const [nome, setNome] = useState("João");
const [ativo, setAtivo] = useState(true);</pre>
</div>

<h3>🔄 Como funciona a atualização?</h3>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4;">
function Contador() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;Contagem: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        Aumentar
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</pre>
</div>

<h3>⚠️ Importante!</h3>

<div style="background: #4a1515; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <p style="color: #f87171; margin: 0;">
    <strong>NUNCA</strong> modifique o estado diretamente!<br/>
    ❌ <code>count = count + 1</code><br/>
    ✅ <code>setCount(count + 1)</code>
  </p>
</div>

<div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 20px; border-radius: 12px;">
  <h4 style="margin-top: 0; color: #4ade80;">📚 Resumo</h4>
  <p style="margin-bottom: 0; color: #bbf7d0;">
    <code>useState</code> retorna um array com [valor, função para atualizar]. Sempre use a função para modificar o estado!
  </p>
</div>
      `,
    },
  });

  // Lição 2.3 - Exercício useState
  const lesson3Ex = await prisma.lesson.create({
    data: {
      title: "Exercício: Contador useState",
      order: 3,
      type: "EXERCISE",
      moduleId: mod2.id,
      content: `
<h2>🎯 Desafio: Crie um Contador!</h2>

<p>Pratique o <code>useState</code> criando um contador interativo.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 24px; border-radius: 12px; margin: 24px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">📋 Requisitos:</h3>
  <ol style="margin-bottom: 0; color: #93c5fd; line-height: 2;">
    <li>Importe e use <code>useState</code></li>
    <li>Crie um estado <code>contador</code> começando em 0</li>
    <li>Botão "+" deve incrementar o contador</li>
    <li>Botão "-" deve decrementar o contador</li>
  </ol>
</div>
      `,
    },
  });

  await prisma.exercise.create({
    data: {
      lessonId: lesson3Ex.id,
      starterCode: `import { useState } from 'react';

export default function App() {
  // PASSO 1: Crie o estado contador com useState
  // const [contador, setContador] = useState(0);
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Contador</h2>
      
      {/* PASSO 2: Mostre o valor do contador */}
      <p style={{ fontSize: '48px' }}>0</p>
      
      {/* PASSO 3: Adicione onClick nos botões */}
      <button style={{ fontSize: '24px', marginRight: '10px' }}>-</button>
      <button style={{ fontSize: '24px' }}>+</button>
    </div>
  );
}`,
      solutionCode: `import { useState } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Contador</h2>
      <p style={{ fontSize: '48px' }}>{contador}</p>
      <button 
        style={{ fontSize: '24px', marginRight: '10px' }}
        onClick={() => setContador(contador - 1)}
      >-</button>
      <button 
        style={{ fontSize: '24px' }}
        onClick={() => setContador(contador + 1)}
      >+</button>
    </div>
  );
}`,
      testCode: `
CHECK:hasHook:useState:Importe e use o useState
CHECK:hasVariable:contador:Crie o estado contador
CHECK:contains:setContador:Crie a função setContador
CHECK:hasExpression:contador:Mostre o valor do contador
CHECK:contains:onClick:Adicione eventos onClick nos botões
`,
    },
  });

  // Lição 2.4 - useEffect
  await prisma.lesson.create({
    data: {
      title: "useEffect: Efeitos Colaterais",
      order: 4,
      type: "TEXT",
      moduleId: mod2.id,
      content: `
<h2>⚡ useEffect: Conectando ao Mundo Exterior</h2>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
  <iframe 
    src="https://www.youtube.com/embed/0ZJgIjIuY7U" 
    title="useEffect Hook Explained" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
<p style="text-align: center; color: #9ca3af; font-size: 14px; margin-top: -16px;">🎬 useEffect explicado em detalhes</p>

<p><code>useEffect</code> permite executar código que interage com o "mundo exterior" - APIs, timers, DOM, etc.</p>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #61dafb;">Sintaxe:</h4>
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4;">
useEffect(() =&gt; {
  // Código executado após renderização
  
  return () =&gt; {
    // Cleanup (opcional)
  };
}, [dependencias]);</pre>
</div>

<h3>📋 O Array de Dependências</h3>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr style="background: #1e3a5f;">
    <th style="padding: 12px; text-align: left; border: 1px solid #333;">Sintaxe</th>
    <th style="padding: 12px; text-align: left; border: 1px solid #333;">Quando executa</th>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #333;"><code>useEffect(() =&gt; {}, [])</code></td>
    <td style="padding: 12px; border: 1px solid #333;">Apenas 1x (mount)</td>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #333;"><code>useEffect(() =&gt; {}, [x])</code></td>
    <td style="padding: 12px; border: 1px solid #333;">Quando x muda</td>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #333;"><code>useEffect(() =&gt; {})</code></td>
    <td style="padding: 12px; border: 1px solid #333;">Toda renderização</td>
  </tr>
</table>

<h3>🎯 Exemplo Prático:</h3>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4;">
function Relogio() {
  const [hora, setHora] = useState(new Date());
  
  useEffect(() =&gt; {
    const timer = setInterval(() =&gt; {
      setHora(new Date());
    }, 1000);
    
    return () =&gt; clearInterval(timer); // Cleanup!
  }, []); // [] = executa 1x
  
  return &lt;p&gt;{hora.toLocaleTimeString()}&lt;/p&gt;;
}</pre>
</div>

<div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 20px; border-radius: 12px;">
  <h4 style="margin-top: 0; color: #4ade80;">📚 Resumo</h4>
  <p style="margin-bottom: 0; color: #bbf7d0;">
    <code>useEffect</code> executa efeitos colaterais. Use o array de dependências para controlar quando executa. Use cleanup para limpar recursos!
  </p>
</div>
      `,
    },
  });

  // Lição 2.5 - Exercício useEffect
  const lesson4Ex = await prisma.lesson.create({
    data: {
      title: "Exercício: Timer com useEffect",
      order: 5,
      type: "EXERCISE",
      moduleId: mod2.id,
      content: `
<h2>🎯 Desafio: Crie um Timer!</h2>

<p>Pratique <code>useEffect</code> criando um timer que conta os segundos.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 24px; border-radius: 12px; margin: 24px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">📋 Requisitos:</h3>
  <ol style="margin-bottom: 0; color: #93c5fd; line-height: 2;">
    <li>Use <code>useState</code> para os segundos</li>
    <li>Use <code>useEffect</code> com <code>setInterval</code></li>
    <li>O timer deve incrementar a cada segundo</li>
    <li>Não esqueça do cleanup!</li>
  </ol>
</div>
      `,
    },
  });

  await prisma.exercise.create({
    data: {
      lessonId: lesson4Ex.id,
      starterCode: `import { useState, useEffect } from 'react';

export default function App() {
  // PASSO 1: Crie estado para os segundos
  // const [segundos, setSegundos] = useState(0);
  
  // PASSO 2: Use useEffect com setInterval
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     // incrementar segundos
  //   }, 1000);
  //   return () => clearInterval(timer); // cleanup
  // }, []);
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>⏱️ Timer</h2>
      <p style={{ fontSize: '48px' }}>0s</p>
    </div>
  );
}`,
      solutionCode: `import { useState, useEffect } from 'react';

export default function App() {
  const [segundos, setSegundos] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setSegundos(s => s + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>⏱️ Timer</h2>
      <p style={{ fontSize: '48px' }}>{segundos}s</p>
    </div>
  );
}`,
      testCode: `
CHECK:hasHook:useState:Use o hook useState
CHECK:hasHook:useEffect:Use o hook useEffect
CHECK:contains:setInterval:Use setInterval para o timer
CHECK:contains:clearInterval:Não esqueça do cleanup com clearInterval
CHECK:hasVariable:segundos:Crie o estado segundos
`,
    },
  });

  console.log("✅ Módulo 2 criado!");

  // =====================================================
  // MÓDULO 3: Props e Composição
  // =====================================================
  const mod3 = await prisma.module.create({
    data: {
      title: "Props e Composição",
      order: 3,
      courseId: course.id,
    },
  });

  // Lição 3.1 - O que são Props?
  await prisma.lesson.create({
    data: {
      title: "O que são Props?",
      order: 1,
      type: "TEXT",
      moduleId: mod3.id,
      content: `
<h2>📦 Props: A Comunicação Entre Componentes</h2>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
  <iframe 
    src="https://www.youtube.com/embed/PHaECbrKgs0" 
    title="React Props Explained" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
<p style="text-align: center; color: #9ca3af; font-size: 14px; margin-top: -16px;">🎬 Entendendo Props no React</p>

<p><strong>Props</strong> (abreviação de "properties") são a forma de passar dados de um componente pai para um componente filho. Pense nelas como "parâmetros" de uma função.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 24px; border-radius: 12px; margin: 24px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">🎯 Conceito Central</h3>
  <p style="margin-bottom: 0; font-size: 18px; color: #93c5fd;">
    Props fluem em <strong>uma única direção</strong>: de pai para filho.<br/>
    Isso se chama <em>fluxo de dados unidirecional</em>.
  </p>
</div>

<h3>📝 Sintaxe Básica</h3>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4;">
// Componente FILHO recebe props
function Saudacao({ nome }) {
  return &lt;h1&gt;Olá, {nome}!&lt;/h1&gt;
}

// Componente PAI passa props
function App() {
  return (
    &lt;div&gt;
      &lt;Saudacao nome="Maria" /&gt;
      &lt;Saudacao nome="João" /&gt;
    &lt;/div&gt;
  );
}</pre>
</div>

<h3>⚠️ Regra de Ouro: Props são Somente Leitura!</h3>

<div style="background: #4a1515; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <p style="color: #f87171; margin: 0;">
    <strong>NUNCA</strong> modifique props diretamente!<br/>
    Se você precisa de um valor que muda, use <code>useState</code>.
  </p>
</div>

<div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 20px; border-radius: 12px;">
  <h4 style="margin-top: 0; color: #4ade80;">📚 Resumo</h4>
  <ul style="margin-bottom: 0; color: #bbf7d0; line-height: 1.8;">
    <li>Props passam dados de pai para filho</li>
    <li>Fluxo unidirecional (só para baixo)</li>
    <li>Props são somente leitura</li>
    <li>Use desestruturação: <code>function Comp({ prop1, prop2 })</code></li>
  </ul>
</div>
      `,
    },
  });

  // Lição 3.2 - Children
  await prisma.lesson.create({
    data: {
      title: "Children: Conteúdo Aninhado",
      order: 2,
      type: "TEXT",
      moduleId: mod3.id,
      content: `
<h2>👶 A Prop Especial: children</h2>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
  <iframe 
    src="https://www.youtube.com/embed/Sq0FoUPxj_c" 
    title="React Children Prop" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
<p style="text-align: center; color: #9ca3af; font-size: 14px; margin-top: -16px;">🎬 A prop children no React</p>

<p><code>children</code> é uma prop especial que contém tudo que você coloca <strong>entre as tags</strong> de abertura e fechamento de um componente.</p>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4;">
// Componente que usa children
function Card({ titulo, children }) {
  return (
    &lt;div style={{ border: '1px solid #444', padding: '16px' }}&gt;
      &lt;h3&gt;{titulo}&lt;/h3&gt;
      &lt;div&gt;{children}&lt;/div&gt;
    &lt;/div&gt;
  );
}

// Usando o Card
function App() {
  return (
    &lt;Card titulo="Meu Perfil"&gt;
      &lt;p&gt;Nome: Maria Silva&lt;/p&gt;
      &lt;button&gt;Editar&lt;/button&gt;
    &lt;/Card&gt;
  );
}</pre>
</div>

<h3>🎯 Por que children é útil?</h3>

<p>Children permite criar componentes "container" - componentes que envolvem qualquer conteúdo:</p>

<ul style="line-height: 2;">
  <li>🎴 Cards</li>
  <li>🪟 Modais</li>
  <li>📐 Layouts</li>
  <li>🎨 Wrappers de estilo</li>
</ul>

<div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 20px; border-radius: 12px;">
  <h4 style="margin-top: 0; color: #4ade80;">📚 Resumo</h4>
  <ul style="margin-bottom: 0; color: #bbf7d0; line-height: 1.8;">
    <li><code>children</code> é tudo entre as tags do componente</li>
    <li>Perfeito para criar componentes "wrapper"</li>
    <li>Acesse via <code>props.children</code> ou desestruture <code>{ children }</code></li>
  </ul>
</div>
      `,
    },
  });

  // Exercício 3.1 - Card Reutilizável
  const lesson5Ex = await prisma.lesson.create({
    data: {
      title: "Exercício: Card Reutilizável",
      order: 3,
      type: "EXERCISE",
      moduleId: mod3.id,
      content: `
<h2>🎯 Desafio: Crie um Card reutilizável!</h2>

<p>Pratique <code>props</code> e <code>children</code> criando um componente Card.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 24px; border-radius: 12px; margin: 24px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">📋 Requisitos:</h3>
  <ol style="margin-bottom: 0; color: #93c5fd; line-height: 2;">
    <li>Receba <code>titulo</code> e <code>children</code> como props</li>
    <li>Mostre o título em um <code>&lt;h3&gt;</code></li>
    <li>Mostre o children em uma <code>&lt;div&gt;</code></li>
    <li>Adicione estilo básico ao card</li>
  </ol>
</div>
      `,
    },
  });

  await prisma.exercise.create({
    data: {
      lessonId: lesson5Ex.id,
      starterCode: `// Complete o componente Card
function Card({ titulo, children }) {
  return (
    <div style={{ border: '1px solid #444', borderRadius: '8px', overflow: 'hidden' }}>
      {/* PASSO 1: Adicione o header com {titulo} em um h3 */}
      <div style={{ background: '#1e3a5f', padding: '12px' }}>
        {/* Seu h3 aqui */}
      </div>
      
      {/* PASSO 2: Adicione o conteúdo com {children} */}
      <div style={{ padding: '16px' }}>
        {/* Seu children aqui */}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Card titulo="Meu Card">
        <p>Este é o conteúdo do card!</p>
      </Card>
    </div>
  );
}`,
      solutionCode: `function Card({ titulo, children }) {
  return (
    <div style={{ border: '1px solid #444', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px' }}>
      <div style={{ background: '#1e3a5f', padding: '12px' }}>
        <h3 style={{ margin: 0 }}>{titulo}</h3>
      </div>
      <div style={{ padding: '16px' }}>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Card titulo="Meu Card">
        <p>Este é o conteúdo do card!</p>
      </Card>
    </div>
  );
}`,
      testCode: `
CHECK:hasFunction:Card:Crie a função Card
CHECK:contains:titulo:Receba titulo como prop
CHECK:contains:children:Receba children como prop
CHECK:hasElement:h3:Use h3 para o título
CHECK:hasExpression:titulo:Mostre o titulo usando {titulo}
CHECK:hasExpression:children:Mostre o children usando {children}
`,
    },
  });

  console.log("✅ Módulo 3 criado!");

  // =====================================================
  // MÓDULO 4: Projeto Final
  // =====================================================
  const mod4 = await prisma.module.create({
    data: {
      title: "Projeto Final",
      order: 4,
      courseId: course.id,
    },
  });

  // Lição 4.1 - Introdução ao Projeto
  await prisma.lesson.create({
    data: {
      title: "Projeto: Mini Pokédex",
      order: 1,
      type: "TEXT",
      moduleId: mod4.id,
      content: `
<h2>🎮 Projeto Final: Mini Pokédex!</h2>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
  <iframe 
    src="https://www.youtube.com/embed/XuFDcZABiDQ" 
    title="Build a Pokedex with React" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
<p style="text-align: center; color: #9ca3af; font-size: 14px; margin-top: -16px;">🎬 Exemplo de projeto React com API</p>

<p>Chegou a hora de colocar tudo o que você aprendeu em prática! Vamos criar uma <strong>Mini Pokédex</strong>.</p>

<div style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 24px; border-radius: 12px; margin: 24px 0; text-align: center;">
  <h3 style="margin-top: 0; color: white;">🔴 POKÉDEX 🔴</h3>
  <p style="margin-bottom: 0; font-size: 18px; color: #fecaca;">
    Aplicando: <strong>JSX • useState • Props • map()</strong>
  </p>
</div>

<h3>🎯 O que você vai construir</h3>

<ul style="line-height: 2;">
  <li>📋 Lista de Pokémons em cards</li>
  <li>🔍 Busca por nome</li>
  <li>🎨 Design colorido por tipo</li>
</ul>

<h3>📚 Conceitos que você vai usar:</h3>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr style="background: #1e3a5f;">
    <th style="padding: 12px; text-align: left; border: 1px solid #333;">Conceito</th>
    <th style="padding: 12px; text-align: left; border: 1px solid #333;">Uso</th>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #333;">JSX</td>
    <td style="padding: 12px; border: 1px solid #333;">Estrutura dos cards</td>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #333;">useState</td>
    <td style="padding: 12px; border: 1px solid #333;">Gerenciar busca</td>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #333;">Props</td>
    <td style="padding: 12px; border: 1px solid #333;">Passar dados ao Card</td>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #333;">.map() e .filter()</td>
    <td style="padding: 12px; border: 1px solid #333;">Listar e filtrar</td>
  </tr>
</table>

<div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 20px; border-radius: 12px;">
  <h4 style="margin-top: 0; color: #4ade80;">💪 Você está pronto!</h4>
  <p style="margin-bottom: 0; color: #bbf7d0;">
    Você já aprendeu todos os conceitos necessários! Vamos ao exercício final!
  </p>
</div>
      `,
    },
  });

  // Exercício Final - Pokédex
  const lessonFinalEx = await prisma.lesson.create({
    data: {
      title: "Exercício Final: Pokédex",
      order: 2,
      type: "EXERCISE",
      moduleId: mod4.id,
      content: `
<h2>🎮 Exercício Final: Construa sua Pokédex!</h2>

<p>Use tudo que aprendeu para criar uma mini Pokédex funcional!</p>

<div style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 24px; border-radius: 12px; margin: 24px 0;">
  <h3 style="margin-top: 0; color: white;">📋 Requisitos:</h3>
  <ol style="margin-bottom: 0; color: #fecaca; line-height: 2;">
    <li>Crie um componente <code>PokemonCard</code> que receba props</li>
    <li>Use <code>useState</code> para controlar a busca</li>
    <li>Use <code>.filter()</code> para filtrar os Pokémons pelo nome</li>
    <li>Use <code>.map()</code> para renderizar a lista</li>
  </ol>
</div>

<h3>💡 Dicas:</h3>

<ul style="line-height: 2;">
  <li><code>pokemon.name.toLowerCase().includes(busca.toLowerCase())</code></li>
  <li>Não esqueça da propriedade <code>key</code> no map!</li>
</ul>
      `,
    },
  });

  await prisma.exercise.create({
    data: {
      lessonId: lessonFinalEx.id,
      starterCode: `import { useState } from 'react';

const pokemons = [
  { id: 1, name: 'Pikachu', type: 'Electric', emoji: '⚡' },
  { id: 2, name: 'Charmander', type: 'Fire', emoji: '🔥' },
  { id: 3, name: 'Squirtle', type: 'Water', emoji: '💧' },
  { id: 4, name: 'Bulbasaur', type: 'Grass', emoji: '🌿' },
  { id: 5, name: 'Jigglypuff', type: 'Fairy', emoji: '🎀' },
];

// PASSO 1: Crie o componente PokemonCard
function PokemonCard({ name, type, emoji }) {
  return (
    <div>
      {/* Adicione o emoji, name e type aqui */}
    </div>
  );
}

export default function App() {
  // PASSO 2: Crie um estado para a busca
  // const [busca, setBusca] = useState('');
  
  // PASSO 3: Filtre os pokémons pelo nome
  // const filtrados = pokemons.filter(...)
  
  return (
    <div style={{ padding: '20px', background: '#1a1a2e', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#ff6b6b' }}>🔴 Pokédex</h1>
      
      {/* PASSO 4: Adicione o input de busca */}
      <input 
        type="text"
        placeholder="Buscar Pokémon..."
        style={{ 
          display: 'block', 
          margin: '0 auto 20px', 
          padding: '12px 20px', 
          borderRadius: '25px',
          border: 'none',
          width: '80%',
          background: '#2d2d44',
          color: 'white'
        }}
      />
      
      {/* PASSO 5: Use map para renderizar os PokemonCards */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Renderize os cards aqui */}
      </div>
    </div>
  );
}`,
      solutionCode: `import { useState } from 'react';

const pokemons = [
  { id: 1, name: 'Pikachu', type: 'Electric', emoji: '⚡' },
  { id: 2, name: 'Charmander', type: 'Fire', emoji: '🔥' },
  { id: 3, name: 'Squirtle', type: 'Water', emoji: '💧' },
  { id: 4, name: 'Bulbasaur', type: 'Grass', emoji: '🌿' },
  { id: 5, name: 'Jigglypuff', type: 'Fairy', emoji: '🎀' },
];

const typeColors = {
  Electric: '#f59e0b',
  Fire: '#ef4444',
  Water: '#3b82f6',
  Grass: '#22c55e',
  Fairy: '#ec4899',
};

function PokemonCard({ name, type, emoji }) {
  return (
    <div style={{ 
      background: typeColors[type] || '#666',
      padding: '20px',
      borderRadius: '16px',
      textAlign: 'center',
      width: '150px',
    }}>
      <div style={{ fontSize: '48px' }}>{emoji}</div>
      <h3 style={{ margin: '8px 0', color: 'white' }}>{name}</h3>
      <span style={{ 
        background: 'rgba(0,0,0,0.2)', 
        padding: '4px 12px', 
        borderRadius: '12px',
        color: 'white',
        fontSize: '12px'
      }}>
        {type}
      </span>
    </div>
  );
}

export default function App() {
  const [busca, setBusca] = useState('');
  
  const filtrados = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(busca.toLowerCase())
  );
  
  return (
    <div style={{ padding: '20px', background: '#1a1a2e', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#ff6b6b' }}>🔴 Pokédex</h1>
      
      <input 
        type="text"
        placeholder="Buscar Pokémon..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{ 
          display: 'block', 
          margin: '0 auto 20px', 
          padding: '12px 20px', 
          borderRadius: '25px',
          border: 'none',
          width: '80%',
          background: '#2d2d44',
          color: 'white'
        }}
      />
      
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filtrados.map(pokemon => (
          <PokemonCard 
            key={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            emoji={pokemon.emoji}
          />
        ))}
      </div>
    </div>
  );
}`,
      testCode: `
CHECK:hasFunction:PokemonCard:Crie o componente PokemonCard
CHECK:hasHook:useState:Use useState para a busca
CHECK:contains:filter:Use filter para filtrar os pokémons
CHECK:contains:.map:Use map para renderizar a lista
CHECK:hasExpression:name:Mostre o nome do pokémon
CHECK:hasExpression:emoji:Mostre o emoji do pokémon
CHECK:contains:key:Não esqueça da propriedade key no map
`,
    },
  });

  // Lição de Conclusão
  await prisma.lesson.create({
    data: {
      title: "🎉 Parabéns! Você concluiu!",
      order: 3,
      type: "TEXT",
      moduleId: mod4.id,
      content: `
<div style="text-align: center; padding: 40px 20px;">
  <div style="font-size: 80px; margin-bottom: 24px;">🎉🏆🎉</div>
  
  <h1 style="font-size: 36px; color: #61dafb; margin-bottom: 16px;">
    Parabéns!
  </h1>
  
  <h2 style="color: #cdd6f4; font-weight: normal; margin-bottom: 32px;">
    Você completou o curso de React!
  </h2>
  
  <div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 32px; border-radius: 16px; max-width: 600px; margin: 0 auto 32px;">
    <h3 style="color: #61dafb; margin-top: 0;">📚 O que você aprendeu:</h3>
    
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; text-align: left;">
      <div style="background: rgba(0,0,0,0.2); padding: 16px; border-radius: 8px;">
        <span style="color: #4ade80;">✅</span> JSX e Expressões
      </div>
      <div style="background: rgba(0,0,0,0.2); padding: 16px; border-radius: 8px;">
        <span style="color: #4ade80;">✅</span> Renderização de Listas
      </div>
      <div style="background: rgba(0,0,0,0.2); padding: 16px; border-radius: 8px;">
        <span style="color: #4ade80;">✅</span> useState
      </div>
      <div style="background: rgba(0,0,0,0.2); padding: 16px; border-radius: 8px;">
        <span style="color: #4ade80;">✅</span> useEffect
      </div>
      <div style="background: rgba(0,0,0,0.2); padding: 16px; border-radius: 8px;">
        <span style="color: #4ade80;">✅</span> Props e Children
      </div>
      <div style="background: rgba(0,0,0,0.2); padding: 16px; border-radius: 8px;">
        <span style="color: #4ade80;">✅</span> Composição
      </div>
    </div>
  </div>
  
  <div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 24px; border-radius: 12px; max-width: 600px; margin: 0 auto;">
    <h3 style="margin-top: 0; color: #4ade80;">🚀 Próximos Passos</h3>
    <ul style="text-align: left; color: #bbf7d0; line-height: 2;">
      <li>Pratique construindo mais projetos</li>
      <li>Aprenda sobre <code>useContext</code> para estado global</li>
      <li>Explore <code>useReducer</code> para lógica complexa</li>
      <li>Descubra bibliotecas como React Router</li>
      <li>Aprenda Next.js para apps full-stack</li>
    </ul>
  </div>
  
  <p style="margin-top: 32px; color: #9ca3af; font-size: 18px;">
    Continue praticando e construindo! 💪
  </p>
</div>
      `,
    },
  });

  console.log("✅ Módulo 4 criado!");

  console.log("\n🎉 Seed expandido completo!");
  console.log("- 1 usuário demo criado");
  console.log("- 1 curso criado");
  console.log("- 4 módulos criados:");
  console.log("  • Módulo 1: Fundamentos (6 lições + 2 exercícios)");
  console.log("  • Módulo 2: Hooks (5 lições + 2 exercícios)");
  console.log("  • Módulo 3: Props (3 lições + 1 exercício)");
  console.log("  • Módulo 4: Projeto Final (3 lições + 1 exercício)");
}

main()
  .catch((e) => {
    console.error("❌ Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
