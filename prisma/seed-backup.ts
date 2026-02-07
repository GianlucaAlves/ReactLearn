import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed...");

  // Limpa dados existentes
  await prisma.progress.deleteMany();
  await prisma.exercise.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.module.deleteMany();
  await prisma.course.deleteMany();
  await prisma.user.deleteMany();

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

<p><strong>React</strong> é uma biblioteca JavaScript criada pelo Facebook (Meta) em 2013 para construir interfaces de usuário. Hoje é a ferramenta mais popular do mundo para desenvolvimento frontend.</p>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
  <h3 style="margin-top: 0; color: white;">📊 React em Números</h3>
  <ul style="margin-bottom: 0;">
    <li><strong>+200 mil</strong> estrelas no GitHub</li>
    <li><strong>+20 milhões</strong> downloads semanais no npm</li>
    <li><strong>#1</strong> framework frontend mais usado</li>
  </ul>
</div>

<h3>🏢 Quem usa React?</h3>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 20px 0;">
  <div style="background: #1a1a2e; padding: 15px; border-radius: 8px; text-align: center;">
    <span style="font-size: 24px;">📘</span><br/>
    <strong>Facebook</strong>
  </div>
  <div style="background: #1a1a2e; padding: 15px; border-radius: 8px; text-align: center;">
    <span style="font-size: 24px;">📸</span><br/>
    <strong>Instagram</strong>
  </div>
  <div style="background: #1a1a2e; padding: 15px; border-radius: 8px; text-align: center;">
    <span style="font-size: 24px;">🎬</span><br/>
    <strong>Netflix</strong>
  </div>
  <div style="background: #1a1a2e; padding: 15px; border-radius: 8px; text-align: center;">
    <span style="font-size: 24px;">🏠</span><br/>
    <strong>Airbnb</strong>
  </div>
  <div style="background: #1a1a2e; padding: 15px; border-radius: 8px; text-align: center;">
    <span style="font-size: 24px;">💬</span><br/>
    <strong>WhatsApp</strong>
  </div>
  <div style="background: #1a1a2e; padding: 15px; border-radius: 8px; text-align: center;">
    <span style="font-size: 24px;">🚗</span><br/>
    <strong>Uber</strong>
  </div>
</div>

<h3>🧩 O Conceito de Componentes</h3>

<p>React usa <strong>componentes</strong> - pense neles como peças de LEGO que você combina para criar interfaces complexas.</p>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border-left: 4px solid #61dafb; margin: 20px 0;">
  <p style="margin: 0; font-family: monospace; color: #a6adc8;">
    <span style="color: #89b4fa;">// Um componente é uma função que retorna interface</span><br/>
    <span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">BotaoLike</span>() {<br/>
    &nbsp;&nbsp;<span style="color: #cba6f7;">return</span> &lt;<span style="color: #89b4fa;">button</span>&gt;👍 Curtir&lt;/<span style="color: #89b4fa;">button</span>&gt;<br/>
    }
  </p>
</div>

<h3>🎯 O que você vai aprender neste módulo</h3>

<ol>
  <li><strong>JSX</strong> - A sintaxe especial do React</li>
  <li><strong>Componentes</strong> - Como criar e usar</li>
  <li><strong>Expressões</strong> - JavaScript dentro do JSX</li>
  <li><strong>Props</strong> - Passando dados entre componentes</li>
</ol>

<div style="background: #166534; padding: 16px; border-radius: 8px; margin-top: 20px;">
  <p style="margin: 0;">✅ <strong>Dica:</strong> Não se preocupe se parecer muito no início. A cada lição, tudo vai ficando mais claro!</p>
</div>
      `,
    },
  });

  // Lição 1.2 - O que é JSX?
  await prisma.lesson.create({
    data: {
      title: "O que é JSX?",
      order: 2,
      type: "TEXT",
      moduleId: mod1.id,
      content: `
<h2>📝 JSX: JavaScript + XML</h2>

<p><strong>JSX</strong> (JavaScript XML) é uma extensão de sintaxe que permite escrever código parecido com HTML dentro do JavaScript. É o coração do React!</p>

<div style="background: #1e3a5f; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">🤔 Por que JSX existe?</h3>
  <p style="margin-bottom: 0;">JSX torna o código mais legível e intuitivo. Em vez de criar elementos com funções, você escreve como se fosse HTML!</p>
</div>

<h3>Comparação: Sem JSX vs Com JSX</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
  <div style="background: #4a1515; padding: 15px; border-radius: 8px;">
    <p style="margin-top: 0; color: #f87171;">❌ Sem JSX (difícil de ler)</p>
    <pre style="background: #1a1a1a; padding: 10px; border-radius: 4px; overflow-x: auto; font-size: 12px;">React.createElement(
  'div',
  null,
  React.createElement(
    'h1', 
    null, 
    'Olá!'
  )
)</pre>
  </div>
  <div style="background: #14532d; padding: 15px; border-radius: 8px;">
    <p style="margin-top: 0; color: #4ade80;">✅ Com JSX (fácil de ler)</p>
    <pre style="background: #1a1a1a; padding: 10px; border-radius: 4px; overflow-x: auto; font-size: 12px;">&lt;div&gt;
  &lt;h1&gt;Olá!&lt;/h1&gt;
&lt;/div&gt;</pre>
  </div>
</div>

<h3>📋 HTML vs JSX: Diferenças Importantes</h3>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background: #374151;">
      <th style="padding: 12px; text-align: left; border: 1px solid #4b5563;">HTML</th>
      <th style="padding: 12px; text-align: left; border: 1px solid #4b5563;">JSX</th>
      <th style="padding: 12px; text-align: left; border: 1px solid #4b5563;">Por quê?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px; border: 1px solid #4b5563;"><code>class</code></td>
      <td style="padding: 12px; border: 1px solid #4b5563;"><code>className</code></td>
      <td style="padding: 12px; border: 1px solid #4b5563;"><code>class</code> é palavra reservada em JS</td>
    </tr>
    <tr style="background: #1f2937;">
      <td style="padding: 12px; border: 1px solid #4b5563;"><code>for</code></td>
      <td style="padding: 12px; border: 1px solid #4b5563;"><code>htmlFor</code></td>
      <td style="padding: 12px; border: 1px solid #4b5563;"><code>for</code> é palavra reservada em JS</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #4b5563;"><code>onclick</code></td>
      <td style="padding: 12px; border: 1px solid #4b5563;"><code>onClick</code></td>
      <td style="padding: 12px; border: 1px solid #4b5563;">Eventos usam camelCase</td>
    </tr>
    <tr style="background: #1f2937;">
      <td style="padding: 12px; border: 1px solid #4b5563;"><code>tabindex</code></td>
      <td style="padding: 12px; border: 1px solid #4b5563;"><code>tabIndex</code></td>
      <td style="padding: 12px; border: 1px solid #4b5563;">Atributos usam camelCase</td>
    </tr>
  </tbody>
</table>

<h3>⚠️ 3 Regras de Ouro do JSX</h3>

<div style="display: grid; gap: 15px; margin: 20px 0;">
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px; border-left: 4px solid #f9e2af;">
    <h4 style="margin-top: 0; color: #f9e2af;">1️⃣ Um Elemento Raiz</h4>
    <p style="margin-bottom: 0;">Sempre retorne um único elemento pai (use <code>&lt;div&gt;</code> ou <code>&lt;&gt;...&lt;/&gt;</code>)</p>
  </div>
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px; border-left: 4px solid #89b4fa;">
    <h4 style="margin-top: 0; color: #89b4fa;">2️⃣ Feche Todas as Tags</h4>
    <p style="margin-bottom: 0;"><code>&lt;img&gt;</code> vira <code>&lt;img /&gt;</code>, <code>&lt;br&gt;</code> vira <code>&lt;br /&gt;</code></p>
  </div>
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px; border-left: 4px solid #a6e3a1;">
    <h4 style="margin-top: 0; color: #a6e3a1;">3️⃣ camelCase para Atributos</h4>
    <p style="margin-bottom: 0;"><code>onclick</code> → <code>onClick</code>, <code>tabindex</code> → <code>tabIndex</code></p>
  </div>
</div>
      `,
    },
  });

  // Lição 1.3 - Expressões JavaScript no JSX
  await prisma.lesson.create({
    data: {
      title: "Expressões JavaScript no JSX",
      order: 3,
      type: "TEXT",
      moduleId: mod1.id,
      content: `
<h2>🔧 JavaScript Dentro do JSX</h2>

<p>O poder do JSX está em poder usar <strong>JavaScript diretamente</strong> na sua interface. Para isso, usamos <strong>chaves { }</strong>.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 20px; border-radius: 12px; margin: 20px 0; text-align: center;">
  <p style="font-size: 24px; margin: 0;">
    <code style="background: #61dafb; color: #1a1a2e; padding: 5px 15px; border-radius: 8px;">{ expressão JavaScript }</code>
  </p>
</div>

<h3>📌 Exemplos Práticos</h3>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <pre style="margin: 0; color: #cdd6f4;"><span style="color: #89b4fa;">// 1. Variáveis</span>
const nome = <span style="color: #a6e3a1;">"Maria"</span>;
return &lt;h1&gt;Olá, <span style="color: #f9e2af;">{nome}</span>!&lt;/h1&gt;  <span style="color: #6c7086;">// Olá, Maria!</span>

<span style="color: #89b4fa;">// 2. Cálculos</span>
return &lt;p&gt;2 + 2 = <span style="color: #f9e2af;">{2 + 2}</span>&lt;/p&gt;  <span style="color: #6c7086;">// 2 + 2 = 4</span>

<span style="color: #89b4fa;">// 3. Métodos de string</span>
return &lt;p&gt;<span style="color: #f9e2af;">{nome.toUpperCase()}</span>&lt;/p&gt;  <span style="color: #6c7086;">// MARIA</span>

<span style="color: #89b4fa;">// 4. Ternário (if inline)</span>
const idade = 20;
return &lt;p&gt;<span style="color: #f9e2af;">{idade >= 18 ? "Adulto" : "Menor"}</span>&lt;/p&gt;  <span style="color: #6c7086;">// Adulto</span>

<span style="color: #89b4fa;">// 5. Arrays com map</span>
const frutas = [<span style="color: #a6e3a1;">"🍎"</span>, <span style="color: #a6e3a1;">"🍌"</span>, <span style="color: #a6e3a1;">"🍊"</span>];
return &lt;p&gt;<span style="color: #f9e2af;">{frutas.join(" ")}</span>&lt;/p&gt;  <span style="color: #6c7086;">// 🍎 🍌 🍊</span></pre>
</div>

<h3>✅ O que PODE ir dentro de { }</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
  <div style="background: #14532d; padding: 15px; border-radius: 8px;">
    <h4 style="margin-top: 0; color: #4ade80;">✅ Permitido</h4>
    <ul style="margin-bottom: 0; color: #d1d5db;">
      <li>Variáveis e constantes</li>
      <li>Operações matemáticas</li>
      <li>Chamadas de funções</li>
      <li>Operador ternário <code>? :</code></li>
      <li>Métodos de array (map, filter)</li>
      <li>Template literals</li>
    </ul>
  </div>
  <div style="background: #4a1515; padding: 15px; border-radius: 8px;">
    <h4 style="margin-top: 0; color: #f87171;">❌ Não permitido</h4>
    <ul style="margin-bottom: 0; color: #d1d5db;">
      <li><code>if/else</code> (use ternário)</li>
      <li><code>for/while</code> (use map)</li>
      <li><code>switch</code></li>
      <li>Objetos diretamente</li>
      <li>Declarações de variável</li>
    </ul>
  </div>
</div>

<h3>🎨 Exemplo Real: Card de Usuário</h3>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <pre style="margin: 0; color: #cdd6f4;"><span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">CardUsuario</span>() {
  <span style="color: #cba6f7;">const</span> usuario = {
    nome: <span style="color: #a6e3a1;">"Ana Silva"</span>,
    avatar: <span style="color: #a6e3a1;">"👩‍💻"</span>,
    posts: <span style="color: #fab387;">42</span>,
    online: <span style="color: #fab387;">true</span>
  };

  <span style="color: #cba6f7;">return</span> (
    &lt;<span style="color: #89b4fa;">div</span>&gt;
      &lt;<span style="color: #89b4fa;">span</span>&gt;<span style="color: #f9e2af;">{usuario.avatar}</span>&lt;/<span style="color: #89b4fa;">span</span>&gt;
      &lt;<span style="color: #89b4fa;">h2</span>&gt;<span style="color: #f9e2af;">{usuario.nome}</span>&lt;/<span style="color: #89b4fa;">h2</span>&gt;
      &lt;<span style="color: #89b4fa;">p</span>&gt;<span style="color: #f9e2af;">{usuario.posts}</span> publicações&lt;/<span style="color: #89b4fa;">p</span>&gt;
      &lt;<span style="color: #89b4fa;">span</span>&gt;<span style="color: #f9e2af;">{usuario.online ? "🟢 Online" : "⚫ Offline"}</span>&lt;/<span style="color: #89b4fa;">span</span>&gt;
    &lt;/<span style="color: #89b4fa;">div</span>&gt;
  );
}</pre>
</div>
      `,
    },
  });

  // Exercício 1.1 - Seu Primeiro Componente
  const lesson1Ex = await prisma.lesson.create({
    data: {
      title: "Exercício: Seu Primeiro Componente",
      order: 4,
      type: "EXERCISE",
      moduleId: mod1.id,
      content: `
<h2>🎯 Desafio: Crie seu primeiro componente React!</h2>

<p>Hora de praticar! Você vai criar um <strong>cartão de perfil</strong> usando JSX e expressões JavaScript.</p>

<div style="background: #1e3a5f; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">📋 Requisitos</h3>
  <ol style="margin-bottom: 0;">
    <li>Crie variáveis para <code>nome</code> e <code>profissao</code></li>
    <li>Mostre o nome em um <code>&lt;h2&gt;</code></li>
    <li>Mostre a profissão em um <code>&lt;p&gt;</code></li>
    <li>Use expressões <code>{}</code> para exibir as variáveis</li>
  </ol>
</div>

<h3>🎨 Exemplo do resultado esperado:</h3>
<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border: 2px solid #61dafb;">
  <h2 style="margin: 0 0 8px 0;">Maria Silva</h2>
  <p style="margin: 0; color: #a6adc8;">Desenvolvedora React</p>
</div>

<h3>💡 Dicas</h3>
<ul>
  <li>Declare as variáveis <strong>dentro</strong> da função do componente</li>
  <li>Use <code>{nomeDaVariavel}</code> para exibir o valor</li>
  <li>Não esqueça de exportar com <code>export default</code></li>
</ul>
      `,
    },
  });

  await prisma.exercise.create({
    data: {
      lessonId: lesson1Ex.id,
      starterCode: `// 🎯 Seu Primeiro Componente React!
// Complete o código abaixo

function CartaoPerfil() {
  // 1. Crie uma variável 'nome' com seu nome
  // 2. Crie uma variável 'profissao' com sua profissão
  
  return (
    <div>
      {/* 3. Use <h2> para mostrar o nome */}
      {/* 4. Use <p> para mostrar a profissão */}
    </div>
  );
}

export default function App() {
  return <CartaoPerfil />;
}`,
      solutionCode: `function CartaoPerfil() {
  const nome = "Maria Silva";
  const profissao = "Desenvolvedora React";
  
  return (
    <div>
      <h2>{nome}</h2>
      <p>{profissao}</p>
    </div>
  );
}

export default function App() {
  return <CartaoPerfil />;
}`,
      testCode: `
CHECK:hasVariable:nome:Declare uma variável 'nome'
CHECK:hasVariable:profissao:Declare uma variável 'profissao'
CHECK:hasElement:h2:Use o elemento <h2>
CHECK:hasExpression:nome:Mostre o nome usando {nome}
CHECK:hasExpression:profissao:Mostre a profissão usando {profissao}
CHECK:contains:export default:Exporte o componente
`,
    },
  });

  // Lição 1.5 - Renderização de Listas
  await prisma.lesson.create({
    data: {
      title: "Renderização de Listas",
      order: 5,
      type: "TEXT",
      moduleId: mod1.id,
      content: `
<h2>📋 Renderizando Listas com map()</h2>

<p>Uma das tarefas mais comuns no React é mostrar listas de dados. Para isso, usamos o método <strong>map()</strong> do JavaScript.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 20px; border-radius: 12px; margin: 20px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">🔄 Como funciona o map()</h3>
  <p style="margin-bottom: 0;">O <code>map()</code> percorre cada item de um array e retorna um novo array com os elementos transformados em JSX.</p>
</div>

<h3>Exemplo Visual</h3>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <pre style="margin: 0; color: #cdd6f4;"><span style="color: #89b4fa;">// Array de dados</span>
const frutas = [<span style="color: #a6e3a1;">"🍎 Maçã"</span>, <span style="color: #a6e3a1;">"🍌 Banana"</span>, <span style="color: #a6e3a1;">"🍊 Laranja"</span>];

<span style="color: #89b4fa;">// Transformando em lista</span>
<span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">ListaFrutas</span>() {
  <span style="color: #cba6f7;">return</span> (
    &lt;<span style="color: #89b4fa;">ul</span>&gt;
      <span style="color: #f9e2af;">{frutas.map((fruta, index) => (</span>
        <span style="color: #f9e2af;">&lt;li key={index}&gt;{fruta}&lt;/li&gt;</span>
      <span style="color: #f9e2af;">))}</span>
    &lt;/<span style="color: #89b4fa;">ul</span>&gt;
  );
}</pre>
</div>

<p>Resultado:</p>
<div style="background: #1e1e2e; padding: 15px; border-radius: 8px; border-left: 4px solid #a6e3a1;">
  <ul style="margin: 0; padding-left: 20px;">
    <li>🍎 Maçã</li>
    <li>🍌 Banana</li>
    <li>🍊 Laranja</li>
  </ul>
</div>

<h3>🔑 A Prop Key - MUITO IMPORTANTE!</h3>

<div style="background: #4a1515; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <h4 style="margin-top: 0; color: #f87171;">⚠️ Sempre use key!</h4>
  <p>A prop <code>key</code> ajuda o React a identificar qual item mudou. Sem ela, você verá um warning no console.</p>
  <p style="margin-bottom: 0;"><strong>Regra:</strong> Use um ID único quando possível, evite usar index em listas que podem mudar.</p>
</div>

<h3>Exemplo com Objetos</h3>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <pre style="margin: 0; color: #cdd6f4;"><span style="color: #cba6f7;">const</span> usuarios = [
  { <span style="color: #89b4fa;">id</span>: <span style="color: #fab387;">1</span>, <span style="color: #89b4fa;">nome</span>: <span style="color: #a6e3a1;">"Ana"</span>, <span style="color: #89b4fa;">avatar</span>: <span style="color: #a6e3a1;">"👩"</span> },
  { <span style="color: #89b4fa;">id</span>: <span style="color: #fab387;">2</span>, <span style="color: #89b4fa;">nome</span>: <span style="color: #a6e3a1;">"Bruno"</span>, <span style="color: #89b4fa;">avatar</span>: <span style="color: #a6e3a1;">"👨"</span> },
  { <span style="color: #89b4fa;">id</span>: <span style="color: #fab387;">3</span>, <span style="color: #89b4fa;">nome</span>: <span style="color: #a6e3a1;">"Carla"</span>, <span style="color: #89b4fa;">avatar</span>: <span style="color: #a6e3a1;">"👩‍🦰"</span> },
];

<span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">ListaUsuarios</span>() {
  <span style="color: #cba6f7;">return</span> (
    &lt;<span style="color: #89b4fa;">div</span>&gt;
      {usuarios.<span style="color: #f9e2af;">map</span>(user =&gt; (
        &lt;<span style="color: #89b4fa;">div</span> <span style="color: #fab387;">key</span>={user.<span style="color: #89b4fa;">id</span>}&gt;
          &lt;<span style="color: #89b4fa;">span</span>&gt;{user.avatar}&lt;/<span style="color: #89b4fa;">span</span>&gt;
          &lt;<span style="color: #89b4fa;">span</span>&gt;{user.nome}&lt;/<span style="color: #89b4fa;">span</span>&gt;
        &lt;/<span style="color: #89b4fa;">div</span>&gt;
      ))}
    &lt;/<span style="color: #89b4fa;">div</span>&gt;
  );
}</pre>
</div>
      `,
    },
  });

  // Exercício 1.2 - Renderizar Lista
  const lesson2Ex = await prisma.lesson.create({
    data: {
      title: "Exercício: Lista de Tarefas",
      order: 6,
      type: "EXERCISE",
      moduleId: mod1.id,
      content: `
<h2>🎯 Desafio: Renderize uma lista de tarefas!</h2>

<p>Pratique o uso do <code>map()</code> para transformar dados em elementos JSX.</p>

<div style="background: #1e3a5f; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">📋 Requisitos</h3>
  <ol style="margin-bottom: 0;">
    <li>Use o método <code>map()</code> no array de tarefas</li>
    <li>Cada tarefa deve ser um elemento <code>&lt;li&gt;</code></li>
    <li>Adicione a prop <code>key</code> usando o <code>id</code></li>
    <li>Mostre o texto da tarefa</li>
  </ol>
</div>

<h3>🎨 Resultado esperado:</h3>
<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border: 2px solid #61dafb;">
  <h1 style="margin-top: 0;">Minhas Tarefas</h1>
  <ul>
    <li>Estudar React</li>
    <li>Fazer exercícios</li>
    <li>Criar projeto</li>
  </ul>
</div>
      `,
    },
  });

  await prisma.exercise.create({
    data: {
      lessonId: lesson2Ex.id,
      starterCode: `const tarefas = [
  { id: 1, texto: "Estudar React" },
  { id: 2, texto: "Fazer exercícios" },
  { id: 3, texto: "Criar projeto" }
];

export default function App() {
  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <ul>
        {/* 
          Use map() aqui para renderizar as tarefas
          Lembre-se: cada <li> precisa de uma key!
        */}
      </ul>
    </div>
  );
}`,
      solutionCode: `const tarefas = [
  { id: 1, texto: "Estudar React" },
  { id: 2, texto: "Fazer exercícios" },
  { id: 3, texto: "Criar projeto" }
];

export default function App() {
  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}>{tarefa.texto}</li>
        ))}
      </ul>
    </div>
  );
}`,
      testCode: `
CHECK:contains:.map(:Use o método map() para renderizar a lista
CHECK:contains:key=:Adicione a prop key em cada elemento
CHECK:hasElement:li:Renderize cada tarefa como um <li>
CHECK:hasExpression:texto:Mostre o texto de cada tarefa com {tarefa.texto} ou similar
`,
    },
  });

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
<h2>🪝 O que são Hooks?</h2>

<p><strong>Hooks</strong> são funções especiais que permitem usar recursos do React (como estado e ciclo de vida) em componentes funcionais.</p>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 12px; margin: 20px 0; color: white;">
  <h3 style="margin-top: 0; color: white;">🎉 Antes vs Depois dos Hooks</h3>
  <p style="margin-bottom: 0;">Antes do React 16.8 (2019), você precisava usar <strong>classes</strong> para ter estado. Hooks revolucionaram o React, tornando o código mais simples e legível!</p>
</div>

<h3>📚 Os Hooks Mais Importantes</h3>

<div style="display: grid; gap: 15px; margin: 20px 0;">
  <div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border-left: 4px solid #61dafb;">
    <h4 style="margin-top: 0; color: #61dafb;">useState</h4>
    <p style="margin-bottom: 0;">Adiciona <strong>estado</strong> ao componente. Use para dados que mudam (contadores, inputs, toggles).</p>
  </div>
  <div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border-left: 4px solid #a6e3a1;">
    <h4 style="margin-top: 0; color: #a6e3a1;">useEffect</h4>
    <p style="margin-bottom: 0;">Executa <strong>efeitos colaterais</strong>. Use para API calls, timers, manipulação do DOM.</p>
  </div>
  <div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border-left: 4px solid #f9e2af;">
    <h4 style="margin-top: 0; color: #f9e2af;">useContext</h4>
    <p style="margin-bottom: 0;">Acessa <strong>contexto global</strong>. Use para temas, autenticação, preferências.</p>
  </div>
  <div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border-left: 4px solid #cba6f7;">
    <h4 style="margin-top: 0; color: #cba6f7;">useRef</h4>
    <p style="margin-bottom: 0;">Cria <strong>referências</strong> que persistem. Use para acessar elementos DOM diretamente.</p>
  </div>
</div>

<h3>⚠️ As 2 Regras dos Hooks</h3>

<div style="background: #4a1515; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <h4 style="margin-top: 0; color: #f87171;">Regra 1: Apenas no Topo</h4>
  <p>Não use hooks dentro de <code>if</code>, <code>for</code>, ou funções aninhadas.</p>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px;">
    <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px;">
      <p style="color: #f87171; margin: 0 0 5px 0;">❌ Errado</p>
      <code style="font-size: 12px;">if (logado) { useState(); }</code>
    </div>
    <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px;">
      <p style="color: #4ade80; margin: 0 0 5px 0;">✅ Certo</p>
      <code style="font-size: 12px;">const [x] = useState();</code>
    </div>
  </div>
</div>

<div style="background: #14532d; padding: 20px; border-radius: 8px;">
  <h4 style="margin-top: 0; color: #4ade80;">Regra 2: Apenas em Componentes React</h4>
  <p style="margin-bottom: 0;">Hooks só funcionam em componentes funcionais ou em outros hooks customizados.</p>
</div>
      `,
    },
  });

  // Lição 2.2 - useState
  await prisma.lesson.create({
    data: {
      title: "useState: Gerenciando Estado",
      order: 2,
      type: "TEXT",
      moduleId: mod2.id,
      content: `
<h2>🎛️ useState: O Hook de Estado</h2>

<p><strong>useState</strong> é o hook mais importante do React. Ele permite que seu componente "lembre" de informações.</p>

<div style="background: #1e1e2e; padding: 25px; border-radius: 12px; margin: 20px 0; text-align: center;">
  <code style="font-size: 18px; color: #61dafb;">const [valor, setValor] = useState(valorInicial)</code>
</div>

<h3>🔍 Anatomia do useState</h3>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <pre style="margin: 0; color: #cdd6f4;"><span style="color: #cba6f7;">const</span> [<span style="color: #a6e3a1;">count</span>, <span style="color: #f9e2af;">setCount</span>] = useState(<span style="color: #fab387;">0</span>);
      <span style="color: #6c7086;">│         │              │</span>
      <span style="color: #6c7086;">│         │              └── valor inicial</span>
      <span style="color: #6c7086;">│         └── função para atualizar</span>
      <span style="color: #6c7086;">└── valor atual do estado</span></pre>
</div>

<h3>📱 Exemplo: Contador Interativo</h3>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <pre style="margin: 0; color: #cdd6f4;"><span style="color: #cba6f7;">import</span> { useState } <span style="color: #cba6f7;">from</span> <span style="color: #a6e3a1;">'react'</span>;

<span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">Contador</span>() {
  <span style="color: #89b4fa;">// Declara um estado "count" iniciando em 0</span>
  <span style="color: #cba6f7;">const</span> [count, setCount] = useState(<span style="color: #fab387;">0</span>);

  <span style="color: #cba6f7;">return</span> (
    &lt;<span style="color: #89b4fa;">div</span>&gt;
      &lt;<span style="color: #89b4fa;">p</span>&gt;Você clicou <span style="color: #f9e2af;">{count}</span> vezes&lt;/<span style="color: #89b4fa;">p</span>&gt;
      &lt;<span style="color: #89b4fa;">button</span> <span style="color: #fab387;">onClick</span>={() =&gt; <span style="color: #f9e2af;">setCount(count + 1)</span>}&gt;
        Clique aqui
      &lt;/<span style="color: #89b4fa;">button</span>&gt;
    &lt;/<span style="color: #89b4fa;">div</span>&gt;
  );
}</pre>
</div>

<h3>🎨 Estado pode ser qualquer tipo</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px;">
    <h4 style="margin-top: 0; color: #89b4fa;">Número</h4>
    <code>useState(0)</code>
  </div>
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px;">
    <h4 style="margin-top: 0; color: #a6e3a1;">String</h4>
    <code>useState("")</code>
  </div>
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px;">
    <h4 style="margin-top: 0; color: #f9e2af;">Boolean</h4>
    <code>useState(false)</code>
  </div>
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px;">
    <h4 style="margin-top: 0; color: #cba6f7;">Array</h4>
    <code>useState([])</code>
  </div>
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px;">
    <h4 style="margin-top: 0; color: #fab387;">Objeto</h4>
    <code>useState({})</code>
  </div>
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px;">
    <h4 style="margin-top: 0; color: #f5c2e7;">Null</h4>
    <code>useState(null)</code>
  </div>
</div>

<h3>⚠️ Importante: Nunca modifique o estado diretamente!</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
  <div style="background: #4a1515; padding: 15px; border-radius: 8px;">
    <p style="color: #f87171; margin-top: 0;">❌ Errado</p>
    <code style="font-size: 12px;">count = count + 1;</code>
  </div>
  <div style="background: #14532d; padding: 15px; border-radius: 8px;">
    <p style="color: #4ade80; margin-top: 0;">✅ Certo</p>
    <code style="font-size: 12px;">setCount(count + 1);</code>
  </div>
</div>
      `,
    },
  });

  // Exercício 2.1 - Contador
  const lesson3Ex = await prisma.lesson.create({
    data: {
      title: "Exercício: Contador Interativo",
      order: 3,
      type: "EXERCISE",
      moduleId: mod2.id,
      content: `
<h2>🎯 Desafio: Crie um contador com useState!</h2>

<p>Hora de praticar o hook mais importante do React!</p>

<div style="background: #1e3a5f; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">📋 Requisitos</h3>
  <ol style="margin-bottom: 0;">
    <li>Use <code>useState</code> para criar um estado <code>count</code></li>
    <li>Crie um botão "+" que incrementa o contador</li>
    <li>Crie um botão "-" que decrementa o contador</li>
    <li>Mostre o valor atual na tela</li>
  </ol>
</div>

<h3>🎨 Resultado esperado:</h3>
<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border: 2px solid #61dafb; text-align: center;">
  <h1 style="margin-top: 0;">Contador</h1>
  <p style="font-size: 48px; margin: 20px 0;">0</p>
  <button style="padding: 10px 20px; margin: 0 5px;">-</button>
  <button style="padding: 10px 20px; margin: 0 5px;">+</button>
</div>

<h3>💡 Dicas</h3>
<ul>
  <li>Importe useState: <code>import { useState } from 'react'</code></li>
  <li>Use <code>onClick={() => setCount(count + 1)}</code> no botão</li>
</ul>
      `,
    },
  });

  await prisma.exercise.create({
    data: {
      lessonId: lesson3Ex.id,
      starterCode: `import { useState } from 'react';

export default function App() {
  // 1. Declare o estado 'count' com useState
  // const [count, setCount] = useState(???)
  
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Contador</h1>
      
      {/* 2. Mostre o valor do count */}
      <p style={{ fontSize: '48px' }}>0</p>
      
      {/* 3. Crie os botões - e + */}
      <button>-</button>
      <button>+</button>
    </div>
  );
}`,
      solutionCode: `import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Contador</h1>
      <p style={{ fontSize: '48px' }}>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`,
      testCode: `
CHECK:hasHook:State:Use o hook useState
CHECK:contains:setCount:Crie a função setCount para atualizar o estado
CHECK:hasExpression:count:Mostre o valor de count com {count}
CHECK:contains:onClick:Adicione onClick nos botões
CHECK:contains:+ 1:Implemente a lógica de incrementar (+1)
CHECK:contains:- 1:Implemente a lógica de decrementar (-1)
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
<h2>⚡ useEffect: Efeitos e Ciclo de Vida</h2>

<p><strong>useEffect</strong> permite executar código em momentos específicos do ciclo de vida do componente.</p>

<div style="background: #1e1e2e; padding: 25px; border-radius: 12px; margin: 20px 0; text-align: center;">
  <code style="font-size: 16px; color: #61dafb;">useEffect(() => { /* efeito */ }, [dependências])</code>
</div>

<h3>🎯 Quando usar useEffect?</h3>

<div style="display: grid; gap: 12px; margin: 20px 0;">
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px; display: flex; align-items: center; gap: 15px;">
    <span style="font-size: 24px;">🌐</span>
    <div>
      <strong>Buscar dados de API</strong>
      <p style="margin: 0; color: #a6adc8; font-size: 14px;">Carregar dados quando componente monta</p>
    </div>
  </div>
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px; display: flex; align-items: center; gap: 15px;">
    <span style="font-size: 24px;">⏰</span>
    <div>
      <strong>Timers (setInterval/setTimeout)</strong>
      <p style="margin: 0; color: #a6adc8; font-size: 14px;">Criar contadores, relógios, delays</p>
    </div>
  </div>
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px; display: flex; align-items: center; gap: 15px;">
    <span style="font-size: 24px;">📜</span>
    <div>
      <strong>Atualizar título da página</strong>
      <p style="margin: 0; color: #a6adc8; font-size: 14px;">document.title</p>
    </div>
  </div>
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px; display: flex; align-items: center; gap: 15px;">
    <span style="font-size: 24px;">💾</span>
    <div>
      <strong>localStorage</strong>
      <p style="margin: 0; color: #a6adc8; font-size: 14px;">Salvar e recuperar dados</p>
    </div>
  </div>
</div>

<h3>📊 Array de Dependências</h3>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse;">
    <tr style="border-bottom: 1px solid #4b5563;">
      <th style="padding: 10px; text-align: left; color: #61dafb;">Dependência</th>
      <th style="padding: 10px; text-align: left; color: #61dafb;">Quando executa</th>
    </tr>
    <tr style="border-bottom: 1px solid #4b5563;">
      <td style="padding: 10px;"><code>[]</code> (vazio)</td>
      <td style="padding: 10px;">Apenas 1x quando monta</td>
    </tr>
    <tr style="border-bottom: 1px solid #4b5563;">
      <td style="padding: 10px;"><code>[count]</code></td>
      <td style="padding: 10px;">Quando count muda</td>
    </tr>
    <tr>
      <td style="padding: 10px;">sem array</td>
      <td style="padding: 10px;">Em toda renderização ⚠️</td>
    </tr>
  </table>
</div>

<h3>🧹 Cleanup: Limpando Efeitos</h3>

<p>Sempre limpe timers e subscriptions para evitar memory leaks!</p>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <pre style="margin: 0; color: #cdd6f4;">useEffect(() => {
  <span style="color: #89b4fa;">// Cria o timer</span>
  const timer = setInterval(() => {
    console.log(<span style="color: #a6e3a1;">'tick'</span>);
  }, <span style="color: #fab387;">1000</span>);

  <span style="color: #89b4fa;">// Cleanup: remove quando desmonta</span>
  <span style="color: #cba6f7;">return</span> () => clearInterval(timer);
}, []);</pre>
</div>
      `,
    },
  });

  // Exercício 2.2 - useEffect Timer
  const lesson4Ex = await prisma.lesson.create({
    data: {
      title: "Exercício: Timer com useEffect",
      order: 5,
      type: "EXERCISE",
      moduleId: mod2.id,
      content: `
<h2>🎯 Desafio: Crie um timer com useEffect!</h2>

<p>Combine useState e useEffect para criar um cronômetro.</p>

<div style="background: #1e3a5f; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">📋 Requisitos</h3>
  <ol style="margin-bottom: 0;">
    <li>Use <code>useState</code> para os segundos</li>
    <li>Use <code>useEffect</code> com <code>setInterval</code></li>
    <li>Incremente 1 segundo a cada 1000ms</li>
    <li>Não esqueça do <strong>cleanup</strong>!</li>
  </ol>
</div>

<h3>🎨 Resultado esperado:</h3>
<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border: 2px solid #61dafb; text-align: center;">
  <h1 style="margin-top: 0;">⏱️ Timer</h1>
  <p style="font-size: 48px; margin: 20px 0;">5s</p>
  <p style="color: #a6adc8;">Contando desde que a página carregou</p>
</div>

<h3>💡 Dicas</h3>
<ul>
  <li>Use <code>setSegundos(s => s + 1)</code> para atualizar baseado no valor anterior</li>
  <li>Retorne uma função de cleanup: <code>return () => clearInterval(timer)</code></li>
</ul>
      `,
    },
  });

  await prisma.exercise.create({
    data: {
      lessonId: lesson4Ex.id,
      starterCode: `import { useState, useEffect } from 'react';

export default function App() {
  // 1. Crie o estado para segundos
  
  // 2. Use useEffect para criar o timer
  // useEffect(() => {
  //   const timer = setInterval(...)
  //   return () => clearInterval(timer)
  // }, [])
  
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>⏱️ Timer</h1>
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
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>⏱️ Timer</h1>
      <p style={{ fontSize: '48px' }}>{segundos}s</p>
    </div>
  );
}`,
      testCode: `
CHECK:hasHook:State:Use o hook useState
CHECK:hasHook:Effect:Use o hook useEffect
CHECK:contains:setInterval:Use setInterval para o timer
CHECK:contains:clearInterval:Não esqueça do cleanup com clearInterval
CHECK:contains:return:Retorne uma função de cleanup
CHECK:contains:[]:Use array de dependências vazio
`,
    },
  });

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
<h2>📦 Props: Passando Dados Entre Componentes</h2>

<p><strong>Props</strong> (propriedades) são a forma de passar dados de um componente pai para um componente filho. Pense nelas como "argumentos" para seus componentes.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 20px; border-radius: 12px; margin: 20px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">🎯 Conceito Chave</h3>
  <p style="margin-bottom: 0; font-size: 18px;">Props fluem em <strong>uma direção</strong>: de pai para filho (unidirectional data flow)</p>
</div>

<h3>📊 Visualizando o Fluxo</h3>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
  <pre style="margin: 0; color: #cdd6f4; font-size: 14px;">
        ┌─────────────┐
        │   <span style="color: #61dafb;">App</span>       │
        │             │
        │  nome="Ana" │
        └──────┬──────┘
               │ <span style="color: #a6e3a1;">props</span>
               ▼
        ┌─────────────┐
        │ <span style="color: #f9e2af;">Saudacao</span>    │
        │             │
        │ Olá, Ana!   │
        └─────────────┘
  </pre>
</div>

<h3>✨ Exemplo Prático</h3>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <pre style="margin: 0; color: #cdd6f4;"><span style="color: #89b4fa;">// Componente filho recebe props</span>
<span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">Saudacao</span>({ nome }) {
  <span style="color: #cba6f7;">return</span> &lt;<span style="color: #89b4fa;">h1</span>&gt;Olá, <span style="color: #f9e2af;">{nome}</span>!&lt;/<span style="color: #89b4fa;">h1</span>&gt;
}

<span style="color: #89b4fa;">// Componente pai passa props</span>
<span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">App</span>() {
  <span style="color: #cba6f7;">return</span> (
    &lt;<span style="color: #89b4fa;">div</span>&gt;
      &lt;<span style="color: #f9e2af;">Saudacao</span> <span style="color: #fab387;">nome</span>=<span style="color: #a6e3a1;">"Ana"</span> /&gt;
      &lt;<span style="color: #f9e2af;">Saudacao</span> <span style="color: #fab387;">nome</span>=<span style="color: #a6e3a1;">"Bruno"</span> /&gt;
      &lt;<span style="color: #f9e2af;">Saudacao</span> <span style="color: #fab387;">nome</span>=<span style="color: #a6e3a1;">"Carla"</span> /&gt;
    &lt;/<span style="color: #89b4fa;">div</span>&gt;
  );
}</pre>
</div>

<p>Resultado:</p>
<div style="background: #1e1e2e; padding: 15px; border-radius: 8px; border-left: 4px solid #a6e3a1;">
  <h1 style="margin: 5px 0;">Olá, Ana!</h1>
  <h1 style="margin: 5px 0;">Olá, Bruno!</h1>
  <h1 style="margin: 5px 0;">Olá, Carla!</h1>
</div>

<h3>📚 Passando Diferentes Tipos</h3>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <pre style="margin: 0; color: #cdd6f4;">&lt;<span style="color: #f9e2af;">Componente</span>
  <span style="color: #fab387;">texto</span>=<span style="color: #a6e3a1;">"string"</span>
  <span style="color: #fab387;">numero</span>={<span style="color: #fab387;">42</span>}
  <span style="color: #fab387;">booleano</span>={<span style="color: #fab387;">true</span>}
  <span style="color: #fab387;">array</span>={[<span style="color: #fab387;">1</span>, <span style="color: #fab387;">2</span>, <span style="color: #fab387;">3</span>]}
  <span style="color: #fab387;">objeto</span>={{ <span style="color: #89b4fa;">nome</span>: <span style="color: #a6e3a1;">"x"</span> }}
  <span style="color: #fab387;">funcao</span>={() => <span style="color: #a6e3a1;">alert</span>(<span style="color: #a6e3a1;">'oi'</span>)}
/&gt;</pre>
</div>

<div style="background: #4a1515; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <h4 style="margin-top: 0; color: #f87171;">⚠️ Props são Somente Leitura!</h4>
  <p style="margin-bottom: 0;">Nunca modifique props. Se precisa de um valor que muda, use <strong>useState</strong> no componente.</p>
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

<p><code>children</code> é uma prop especial que contém tudo que você coloca <strong>entre as tags</strong> de um componente.</p>

<div style="background: #1e1e2e; padding: 25px; border-radius: 12px; margin: 20px 0; text-align: center;">
  <pre style="margin: 0; color: #cdd6f4; font-size: 16px;">&lt;<span style="color: #f9e2af;">Card</span>&gt;<span style="color: #a6e3a1;">Este conteúdo é o children!</span>&lt;/<span style="color: #f9e2af;">Card</span>&gt;</pre>
</div>

<h3>🏗️ Criando Componentes de Layout</h3>

<p>children é perfeito para criar "containers" reutilizáveis:</p>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <pre style="margin: 0; color: #cdd6f4;"><span style="color: #89b4fa;">// Componente Card genérico</span>
<span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">Card</span>({ <span style="color: #fab387;">children</span>, <span style="color: #fab387;">titulo</span> }) {
  <span style="color: #cba6f7;">return</span> (
    &lt;<span style="color: #89b4fa;">div</span> style={{ border: <span style="color: #a6e3a1;">'1px solid #333'</span>, borderRadius: <span style="color: #fab387;">8</span> }}&gt;
      &lt;<span style="color: #89b4fa;">h3</span>&gt;{titulo}&lt;/<span style="color: #89b4fa;">h3</span>&gt;
      &lt;<span style="color: #89b4fa;">div</span>&gt;<span style="color: #f9e2af;">{children}</span>&lt;/<span style="color: #89b4fa;">div</span>&gt;
    &lt;/<span style="color: #89b4fa;">div</span>&gt;
  );
}

<span style="color: #89b4fa;">// Usando o Card</span>
&lt;<span style="color: #f9e2af;">Card</span> <span style="color: #fab387;">titulo</span>=<span style="color: #a6e3a1;">"Meu Perfil"</span>&gt;
  &lt;<span style="color: #89b4fa;">p</span>&gt;Nome: Ana Silva&lt;/<span style="color: #89b4fa;">p</span>&gt;
  &lt;<span style="color: #89b4fa;">p</span>&gt;Email: ana@email.com&lt;/<span style="color: #89b4fa;">p</span>&gt;
&lt;/<span style="color: #f9e2af;">Card</span>&gt;</pre>
</div>

<h3>📦 Exemplos de Uso</h3>

<div style="display: grid; gap: 15px; margin: 20px 0;">
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px; border-left: 4px solid #61dafb;">
    <h4 style="margin-top: 0; color: #61dafb;">Modal</h4>
    <code>&lt;Modal&gt;{conteúdo do modal}&lt;/Modal&gt;</code>
  </div>
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px; border-left: 4px solid #a6e3a1;">
    <h4 style="margin-top: 0; color: #a6e3a1;">Sidebar</h4>
    <code>&lt;Sidebar&gt;{menu items}&lt;/Sidebar&gt;</code>
  </div>
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px; border-left: 4px solid #f9e2af;">
    <h4 style="margin-top: 0; color: #f9e2af;">Layout</h4>
    <code>&lt;Layout&gt;{página inteira}&lt;/Layout&gt;</code>
  </div>
</div>
      `,
    },
  });

  // Exercício 3.1 - Card com Props
  const lesson5Ex = await prisma.lesson.create({
    data: {
      title: "Exercício: Card Reutilizável",
      order: 3,
      type: "EXERCISE",
      moduleId: mod3.id,
      content: `
<h2>🎯 Desafio: Crie um Card reutilizável!</h2>

<p>Crie um componente que aceita <code>titulo</code> como prop e <code>children</code> para o conteúdo.</p>

<div style="background: #1e3a5f; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">📋 Requisitos</h3>
  <ol style="margin-bottom: 0;">
    <li>Receba <code>titulo</code> e <code>children</code> como props</li>
    <li>Mostre o título em um <code>&lt;h3&gt;</code></li>
    <li>Mostre o children em uma <code>&lt;div&gt;</code></li>
    <li>Adicione algum estilo básico</li>
  </ol>
</div>

<h3>🎨 Resultado esperado:</h3>
<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border: 2px solid #61dafb;">
  <div style="border: 1px solid #4b5563; padding: 15px; border-radius: 8px;">
    <h3 style="margin-top: 0;">Meu Card</h3>
    <div>
      <p>Este é o conteúdo do card!</p>
    </div>
  </div>
</div>
      `,
    },
  });

  await prisma.exercise.create({
    data: {
      lessonId: lesson5Ex.id,
      starterCode: `// Crie o componente Card aqui
function Card({ titulo, children }) {
  // Retorne: um div com h3 para titulo e div para children
  return (
    <div>
      {/* Seu código aqui */}
    </div>
  );
}

export default function App() {
  return (
    <Card titulo="Meu Card">
      <p>Este é o conteúdo do card!</p>
    </Card>
  );
}`,
      solutionCode: `function Card({ titulo, children }) {
  return (
    <div style={{ border: '1px solid #4b5563', padding: '15px', borderRadius: '8px' }}>
      <h3>{titulo}</h3>
      <div>{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <Card titulo="Meu Card">
      <p>Este é o conteúdo do card!</p>
    </Card>
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

  // Lição 3.4 - Composição
  await prisma.lesson.create({
    data: {
      title: "Composição de Componentes",
      order: 4,
      type: "TEXT",
      moduleId: mod3.id,
      content: `
<h2>🧩 Composição: A Arte de Combinar</h2>

<p><strong>Composição</strong> é o padrão de criar componentes complexos combinando componentes menores. É a base do React!</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 20px; border-radius: 12px; margin: 20px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">💡 Filosofia React</h3>
  <p style="margin-bottom: 0; font-size: 18px;">"Componentes pequenos que fazem uma coisa bem feita"</p>
</div>

<h3>🏗️ Exemplo: Sistema de Comentários</h3>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <pre style="margin: 0; color: #cdd6f4;"><span style="color: #89b4fa;">// Componente pequeno: Avatar</span>
<span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">Avatar</span>({ foto, nome }) {
  <span style="color: #cba6f7;">return</span> &lt;<span style="color: #89b4fa;">img</span> src={foto} alt={nome} /&gt;
}

<span style="color: #89b4fa;">// Componente médio: InfoUsuario</span>
<span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">InfoUsuario</span>({ usuario }) {
  <span style="color: #cba6f7;">return</span> (
    &lt;<span style="color: #89b4fa;">div</span>&gt;
      &lt;<span style="color: #f9e2af;">Avatar</span> foto={usuario.foto} nome={usuario.nome} /&gt;
      &lt;<span style="color: #89b4fa;">span</span>&gt;{usuario.nome}&lt;/<span style="color: #89b4fa;">span</span>&gt;
    &lt;/<span style="color: #89b4fa;">div</span>&gt;
  );
}

<span style="color: #89b4fa;">// Componente completo: Comentario</span>
<span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">Comentario</span>({ autor, texto, data }) {
  <span style="color: #cba6f7;">return</span> (
    &lt;<span style="color: #89b4fa;">div</span>&gt;
      &lt;<span style="color: #f9e2af;">InfoUsuario</span> usuario={autor} /&gt;
      &lt;<span style="color: #89b4fa;">p</span>&gt;{texto}&lt;/<span style="color: #89b4fa;">p</span>&gt;
      &lt;<span style="color: #89b4fa;">time</span>&gt;{data}&lt;/<span style="color: #89b4fa;">time</span>&gt;
    &lt;/<span style="color: #89b4fa;">div</span>&gt;
  );
}</pre>
</div>

<h3>📊 Árvore de Componentes</h3>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
  <pre style="margin: 0; color: #cdd6f4;">
          ┌────────────┐
          │ <span style="color: #f9e2af;">Comentario</span> │
          └─────┬──────┘
                │
    ┌───────────┼───────────┐
    │           │           │
┌───▼───┐  ┌────▼────┐  ┌───▼───┐
│<span style="color: #89b4fa;">InfoUser</span>│  │  <span style="color: #89b4fa;">Texto</span>  │  │ <span style="color: #89b4fa;">Data</span>  │
└───┬───┘  └─────────┘  └───────┘
    │
┌───▼───┐
│<span style="color: #a6e3a1;">Avatar</span> │
└───────┘
  </pre>
</div>

<h3>✅ Benefícios da Composição</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
  <div style="background: #14532d; padding: 15px; border-radius: 8px;">
    <h4 style="margin-top: 0; color: #4ade80;">♻️ Reutilização</h4>
    <p style="margin-bottom: 0;">Avatar pode ser usado em perfil, comentários, chat...</p>
  </div>
  <div style="background: #14532d; padding: 15px; border-radius: 8px;">
    <h4 style="margin-top: 0; color: #4ade80;">🔧 Manutenção</h4>
    <p style="margin-bottom: 0;">Altere o Avatar em um lugar, muda em todos</p>
  </div>
  <div style="background: #14532d; padding: 15px; border-radius: 8px;">
    <h4 style="margin-top: 0; color: #4ade80;">🧪 Testabilidade</h4>
    <p style="margin-bottom: 0;">Teste cada componente isoladamente</p>
  </div>
  <div style="background: #14532d; padding: 15px; border-radius: 8px;">
    <h4 style="margin-top: 0; color: #4ade80;">📖 Legibilidade</h4>
    <p style="margin-bottom: 0;">Código mais fácil de entender</p>
  </div>
</div>
      `,
    },
  });

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
<h2>🎮 Projeto Final: Mini Pokédex</h2>

<p>Hora de aplicar <strong>tudo</strong> que você aprendeu! Vamos criar uma Mini Pokédex funcional.</p>

<div style="background: linear-gradient(135deg, #e63946 0%, #1d3557 100%); padding: 25px; border-radius: 12px; margin: 20px 0; text-align: center;">
  <span style="font-size: 48px;">🔴⚪</span>
  <h2 style="margin: 10px 0 0 0; color: white;">Pokédex</h2>
</div>

<h3>🎯 O que vamos construir</h3>

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin: 20px 0;">
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px; text-align: center;">
    <span style="font-size: 32px;">📋</span>
    <h4 style="margin: 10px 0 5px;">Lista de Pokémons</h4>
    <p style="margin: 0; color: #a6adc8; font-size: 14px;">Cards com info</p>
  </div>
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px; text-align: center;">
    <span style="font-size: 32px;">🔍</span>
    <h4 style="margin: 10px 0 5px;">Busca</h4>
    <p style="margin: 0; color: #a6adc8; font-size: 14px;">Filtrar por nome</p>
  </div>
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px; text-align: center;">
    <span style="font-size: 32px;">🏷️</span>
    <h4 style="margin: 10px 0 5px;">Tipos</h4>
    <p style="margin: 0; color: #a6adc8; font-size: 14px;">Elétrico, Fogo, Água...</p>
  </div>
  <div style="background: #1e1e2e; padding: 15px; border-radius: 8px; text-align: center;">
    <span style="font-size: 32px;">🎨</span>
    <h4 style="margin: 10px 0 5px;">Estilo</h4>
    <p style="margin: 0; color: #a6adc8; font-size: 14px;">Visual bonito</p>
  </div>
</div>

<h3>🧠 Conceitos que você vai usar</h3>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr style="background: #374151;">
    <th style="padding: 12px; text-align: left; border: 1px solid #4b5563;">Conceito</th>
    <th style="padding: 12px; text-align: left; border: 1px solid #4b5563;">Uso no projeto</th>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #4b5563;"><code>useState</code></td>
    <td style="padding: 12px; border: 1px solid #4b5563;">Estado da busca</td>
  </tr>
  <tr style="background: #1f2937;">
    <td style="padding: 12px; border: 1px solid #4b5563;"><code>Props</code></td>
    <td style="padding: 12px; border: 1px solid #4b5563;">Dados do Pokémon</td>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #4b5563;"><code>map()</code></td>
    <td style="padding: 12px; border: 1px solid #4b5563;">Renderizar lista</td>
  </tr>
  <tr style="background: #1f2937;">
    <td style="padding: 12px; border: 1px solid #4b5563;"><code>filter()</code></td>
    <td style="padding: 12px; border: 1px solid #4b5563;">Busca por nome</td>
  </tr>
  <tr>
    <td style="padding: 12px; border: 1px solid #4b5563;">Composição</td>
    <td style="padding: 12px; border: 1px solid #4b5563;">PokemonCard</td>
  </tr>
</table>

<h3>📁 Estrutura do Projeto</h3>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; font-family: monospace;">
  <pre style="margin: 0; color: #cdd6f4;">
App
├── <span style="color: #89b4fa;">Header</span> (título)
├── <span style="color: #a6e3a1;">SearchBar</span> (campo de busca)
├── <span style="color: #f9e2af;">PokemonList</span>
│   └── <span style="color: #cba6f7;">PokemonCard</span> (x5)
└── <span style="color: #fab387;">Footer</span>
  </pre>
</div>

<div style="background: #166534; padding: 16px; border-radius: 8px; margin-top: 20px;">
  <p style="margin: 0;">💪 <strong>Você consegue!</strong> Este projeto usa exatamente o que você aprendeu. Vamos lá!</p>
</div>
      `,
    },
  });

  // Exercício Final - Pokédex
  const lesson6Ex = await prisma.lesson.create({
    data: {
      title: "Exercício Final: Pokédex",
      order: 2,
      type: "EXERCISE",
      moduleId: mod4.id,
      content: `
<h2>🎯 Desafio Final: Crie a Mini Pokédex!</h2>

<p>Chegou o momento de mostrar tudo que você aprendeu!</p>

<div style="background: #1e3a5f; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">📋 Requisitos</h3>
  <ol style="margin-bottom: 0;">
    <li>Crie o componente <code>PokemonCard</code> que recebe pokemon como prop</li>
    <li>Mostre nome e tipo de cada Pokémon no card</li>
    <li>Implemente a busca usando <code>filter()</code></li>
    <li>Use <code>map()</code> para renderizar os cards</li>
    <li>Conecte o input ao estado de busca</li>
  </ol>
</div>

<h3>🎨 Resultado esperado:</h3>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border: 2px solid #e63946;">
  <h1 style="margin-top: 0; text-align: center;">🔴 Mini Pokédex</h1>
  <input style="width: 100%; padding: 10px; margin-bottom: 15px; border-radius: 8px; border: 1px solid #4b5563; background: #374151; color: white;" placeholder="Buscar Pokémon...">
  <div style="display: grid; gap: 10px;">
    <div style="background: #374151; padding: 15px; border-radius: 8px;">
      <h3 style="margin: 0 0 5px;">⚡ Pikachu</h3>
      <span style="background: #fbbf24; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Elétrico</span>
    </div>
    <div style="background: #374151; padding: 15px; border-radius: 8px;">
      <h3 style="margin: 0 0 5px;">🔥 Charmander</h3>
      <span style="background: #ef4444; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Fogo</span>
    </div>
  </div>
</div>

<h3>💡 Dicas</h3>
<ul>
  <li><code>filter()</code> + <code>includes()</code> para busca</li>
  <li><code>toLowerCase()</code> para busca case-insensitive</li>
  <li>Não esqueça da prop <code>key</code> no map!</li>
</ul>
      `,
    },
  });

  await prisma.exercise.create({
    data: {
      lessonId: lesson6Ex.id,
      starterCode: `import { useState } from 'react';

const pokemons = [
  { id: 1, nome: "Pikachu", tipo: "Elétrico", emoji: "⚡" },
  { id: 2, nome: "Charmander", tipo: "Fogo", emoji: "🔥" },
  { id: 3, nome: "Squirtle", tipo: "Água", emoji: "💧" },
  { id: 4, nome: "Bulbasaur", tipo: "Planta", emoji: "🌿" },
  { id: 5, nome: "Jigglypuff", tipo: "Normal", emoji: "🎀" },
];

// 1. Crie o componente PokemonCard
function PokemonCard({ pokemon }) {
  return (
    <div style={{ background: '#374151', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
      {/* Mostre emoji + nome em h3, tipo em span */}
    </div>
  );
}

export default function App() {
  // 2. Crie o estado para busca
  
  // 3. Filtre os pokemons baseado na busca
  const pokemonsFiltrados = pokemons; // Substitua com filter()
  
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>🔴 Mini Pokédex</h1>
      
      {/* 4. Crie o input de busca */}
      
      {/* 5. Use map() para renderizar os cards */}
    </div>
  );
}`,
      solutionCode: `import { useState } from 'react';

const pokemons = [
  { id: 1, nome: "Pikachu", tipo: "Elétrico", emoji: "⚡" },
  { id: 2, nome: "Charmander", tipo: "Fogo", emoji: "🔥" },
  { id: 3, nome: "Squirtle", tipo: "Água", emoji: "💧" },
  { id: 4, nome: "Bulbasaur", tipo: "Planta", emoji: "🌿" },
  { id: 5, nome: "Jigglypuff", tipo: "Normal", emoji: "🎀" },
];

function PokemonCard({ pokemon }) {
  return (
    <div style={{ background: '#374151', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
      <h3 style={{ margin: '0 0 5px' }}>{pokemon.emoji} {pokemon.nome}</h3>
      <span style={{ background: '#6b7280', padding: '2px 8px', borderRadius: '4px', fontSize: '12px' }}>
        {pokemon.tipo}
      </span>
    </div>
  );
}

export default function App() {
  const [busca, setBusca] = useState("");
  
  const pokemonsFiltrados = pokemons.filter(p => 
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );
  
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>🔴 Mini Pokédex</h1>
      
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #4b5563', background: '#1f2937', color: 'white' }}
      />
      
      <div>
        {pokemonsFiltrados.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}`,
      testCode: `
CHECK:hasHook:State:Use o hook useState para o estado da busca
CHECK:contains:setBusca:Crie a função setBusca para atualizar a busca
CHECK:contains:.filter(:Use filter() para filtrar os pokémons
CHECK:contains:toLowerCase:Use toLowerCase() para busca case-insensitive
CHECK:contains:.includes(:Use includes() para verificar se o nome contém a busca
CHECK:contains:.map(:Use map() para renderizar a lista
CHECK:contains:key=:Adicione a prop key em cada card
CHECK:hasFunction:PokemonCard:Crie o componente PokemonCard
CHECK:contains:onChange:Conecte o input ao estado com onChange
`,
    },
  });

  // Lição Final - Parabéns
  await prisma.lesson.create({
    data: {
      title: "🎉 Parabéns! Você concluiu o curso!",
      order: 3,
      type: "TEXT",
      moduleId: mod4.id,
      content: `
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; border-radius: 16px; text-align: center; margin: 20px 0;">
  <span style="font-size: 64px;">🎉</span>
  <h1 style="color: white; margin: 20px 0;">Parabéns!</h1>
  <p style="color: white; font-size: 20px; margin: 0;">Você completou o React Fundamentals!</p>
</div>

<h2>📚 O que você aprendeu</h2>

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin: 20px 0;">
  <div style="background: #14532d; padding: 20px; border-radius: 8px; text-align: center;">
    <span style="font-size: 32px;">✅</span>
    <h3 style="margin: 10px 0 5px;">JSX</h3>
    <p style="margin: 0; color: #d1d5db;">A sintaxe do React</p>
  </div>
  <div style="background: #14532d; padding: 20px; border-radius: 8px; text-align: center;">
    <span style="font-size: 32px;">✅</span>
    <h3 style="margin: 10px 0 5px;">Componentes</h3>
    <p style="margin: 0; color: #d1d5db;">Blocos de construção</p>
  </div>
  <div style="background: #14532d; padding: 20px; border-radius: 8px; text-align: center;">
    <span style="font-size: 32px;">✅</span>
    <h3 style="margin: 10px 0 5px;">useState</h3>
    <p style="margin: 0; color: #d1d5db;">Gerenciar estado</p>
  </div>
  <div style="background: #14532d; padding: 20px; border-radius: 8px; text-align: center;">
    <span style="font-size: 32px;">✅</span>
    <h3 style="margin: 10px 0 5px;">useEffect</h3>
    <p style="margin: 0; color: #d1d5db;">Efeitos colaterais</p>
  </div>
  <div style="background: #14532d; padding: 20px; border-radius: 8px; text-align: center;">
    <span style="font-size: 32px;">✅</span>
    <h3 style="margin: 10px 0 5px;">Props</h3>
    <p style="margin: 0; color: #d1d5db;">Passar dados</p>
  </div>
  <div style="background: #14532d; padding: 20px; border-radius: 8px; text-align: center;">
    <span style="font-size: 32px;">✅</span>
    <h3 style="margin: 10px 0 5px;">Composição</h3>
    <p style="margin: 0; color: #d1d5db;">Combinar componentes</p>
  </div>
</div>

<h2>🚀 Próximos Passos</h2>

<div style="display: grid; gap: 15px; margin: 20px 0;">
  <div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border-left: 4px solid #61dafb;">
    <h3 style="margin-top: 0; color: #61dafb;">1. Context API</h3>
    <p style="margin-bottom: 0;">Gerenciamento de estado global sem prop drilling</p>
  </div>
  <div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border-left: 4px solid #a6e3a1;">
    <h3 style="margin-top: 0; color: #a6e3a1;">2. React Router</h3>
    <p style="margin-bottom: 0;">Navegação entre páginas em SPAs</p>
  </div>
  <div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border-left: 4px solid #f9e2af;">
    <h3 style="margin-top: 0; color: #f9e2af;">3. Fetching de Dados</h3>
    <p style="margin-bottom: 0;">Consumir APIs REST e GraphQL</p>
  </div>
  <div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border-left: 4px solid #cba6f7;">
    <h3 style="margin-top: 0; color: #cba6f7;">4. Next.js</h3>
    <p style="margin-bottom: 0;">O framework React para produção</p>
  </div>
</div>

<h2>💡 Ideias de Projetos</h2>

<ul>
  <li><strong>🎯 To-Do List</strong> - Adicionar, remover, marcar completo</li>
  <li><strong>🌤️ App de Clima</strong> - Buscar clima por cidade (API)</li>
  <li><strong>📝 Blog Pessoal</strong> - Posts, comentários</li>
  <li><strong>🛒 Mini E-commerce</strong> - Carrinho de compras</li>
  <li><strong>🎮 Jogo da Velha</strong> - Lógica de jogo</li>
</ul>

<div style="background: #166534; padding: 25px; border-radius: 12px; text-align: center; margin-top: 30px;">
  <p style="font-size: 20px; margin: 0;">
    "A prática leva à perfeição. Continue codando!" 🚀
  </p>
</div>
      `,
    },
  });

  console.log("✅ Seed completo!");
  console.log("- 1 usuário demo criado");
  console.log("- 1 curso criado");
  console.log("- 4 módulos criados");
  console.log("- 15 lições criadas (com conteúdo visual aprimorado)");
  console.log("- 6 exercícios criados (com verificações reais)");
}

main()
  .catch((e) => {
    console.error("❌ Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
