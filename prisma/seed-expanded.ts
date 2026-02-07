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

  // Lição 1.1 - Bem-vindo ao React (EXPANDIDA)
  await prisma.lesson.create({
    data: {
      title: "Bem-vindo ao React",
      order: 1,
      type: "TEXT",
      moduleId: mod1.id,
      content: `
<h2>🚀 O que é React?</h2>

<p><strong>React</strong> é uma <em>biblioteca JavaScript</em> de código aberto criada pelo Facebook (hoje Meta) em 2013. Ela foi desenvolvida para resolver um problema específico: construir interfaces de usuário complexas e interativas de forma eficiente e organizada.</p>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px; border-radius: 12px; margin: 24px 0; color: white;">
  <h3 style="margin-top: 0; color: white;">📊 React em Números (2024)</h3>
  <ul style="margin-bottom: 0; line-height: 1.8;">
    <li><strong>+220.000</strong> estrelas no GitHub (o mais estrelado do mundo)</li>
    <li><strong>+23 milhões</strong> downloads semanais no npm</li>
    <li><strong>#1</strong> biblioteca frontend mais usada por 8 anos consecutivos</li>
    <li><strong>40%+</strong> das vagas de front-end pedem React</li>
  </ul>
</div>

<h3>🤔 Por que React foi criado?</h3>

<p>Antes do React, desenvolvedores enfrentavam grandes desafios:</p>

<div style="display: grid; gap: 12px; margin: 20px 0;">
  <div style="background: #4a1515; padding: 16px; border-radius: 8px; border-left: 4px solid #f87171;">
    <strong style="color: #f87171;">❌ Problema 1: Complexidade</strong>
    <p style="margin: 8px 0 0 0; color: #fca5a5;">Aplicações grandes tinham código espaguete - difícil de manter e entender.</p>
  </div>
  <div style="background: #4a1515; padding: 16px; border-radius: 8px; border-left: 4px solid #f87171;">
    <strong style="color: #f87171;">❌ Problema 2: Performance</strong>
    <p style="margin: 8px 0 0 0; color: #fca5a5;">Manipular o DOM diretamente era lento e causava "travamentos".</p>
  </div>
  <div style="background: #4a1515; padding: 16px; border-radius: 8px; border-left: 4px solid #f87171;">
    <strong style="color: #f87171;">❌ Problema 3: Reutilização</strong>
    <p style="margin: 8px 0 0 0; color: #fca5a5;">Era difícil reaproveitar partes da interface em diferentes lugares.</p>
  </div>
</div>

<p>O React resolve esses problemas com três conceitos principais:</p>

<div style="display: grid; gap: 12px; margin: 20px 0;">
  <div style="background: #14532d; padding: 16px; border-radius: 8px; border-left: 4px solid #4ade80;">
    <strong style="color: #4ade80;">✅ Solução 1: Componentes</strong>
    <p style="margin: 8px 0 0 0; color: #86efac;">Divida a interface em peças independentes e reutilizáveis.</p>
  </div>
  <div style="background: #14532d; padding: 16px; border-radius: 8px; border-left: 4px solid #4ade80;">
    <strong style="color: #4ade80;">✅ Solução 2: Virtual DOM</strong>
    <p style="margin: 8px 0 0 0; color: #86efac;">React atualiza apenas o que mudou, tornando tudo muito rápido.</p>
  </div>
  <div style="background: #14532d; padding: 16px; border-radius: 8px; border-left: 4px solid #4ade80;">
    <strong style="color: #4ade80;">✅ Solução 3: Fluxo Unidirecional</strong>
    <p style="margin: 8px 0 0 0; color: #86efac;">Dados fluem em uma direção, facilitando debug e manutenção.</p>
  </div>
</div>

<h3>🏢 Quem usa React no mundo real?</h3>

<p>As maiores empresas de tecnologia do mundo confiam no React para suas aplicações:</p>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 20px 0;">
  <div style="background: #1a1a2e; padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #333;">
    <span style="font-size: 32px;">📘</span><br/>
    <strong style="color: #61dafb;">Facebook</strong>
    <p style="margin: 8px 0 0 0; font-size: 12px; color: #888;">Criador do React</p>
  </div>
  <div style="background: #1a1a2e; padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #333;">
    <span style="font-size: 32px;">📸</span><br/>
    <strong style="color: #61dafb;">Instagram</strong>
    <p style="margin: 8px 0 0 0; font-size: 12px; color: #888;">100% React</p>
  </div>
  <div style="background: #1a1a2e; padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #333;">
    <span style="font-size: 32px;">🎬</span><br/>
    <strong style="color: #61dafb;">Netflix</strong>
    <p style="margin: 8px 0 0 0; font-size: 12px; color: #888;">Interface de streaming</p>
  </div>
  <div style="background: #1a1a2e; padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #333;">
    <span style="font-size: 32px;">🏠</span><br/>
    <strong style="color: #61dafb;">Airbnb</strong>
    <p style="margin: 8px 0 0 0; font-size: 12px; color: #888;">Plataforma completa</p>
  </div>
  <div style="background: #1a1a2e; padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #333;">
    <span style="font-size: 32px;">💬</span><br/>
    <strong style="color: #61dafb;">WhatsApp</strong>
    <p style="margin: 8px 0 0 0; font-size: 12px; color: #888;">Versão Web</p>
  </div>
  <div style="background: #1a1a2e; padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #333;">
    <span style="font-size: 32px;">🚗</span><br/>
    <strong style="color: #61dafb;">Uber</strong>
    <p style="margin: 8px 0 0 0; font-size: 12px; color: #888;">App e Dashboard</p>
  </div>
</div>

<h3>🧩 Entendendo Componentes - O Coração do React</h3>

<p>Imagine que você está montando uma casa de LEGO. Cada peça (porta, janela, telhado) é independente, mas juntas formam algo maior. <strong>Componentes React funcionam exatamente assim!</strong></p>

<div style="background: #1e3a5f; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <h4 style="margin-top: 0; color: #61dafb;">🔍 Analogia: Página do Instagram</h4>
  <p style="margin-bottom: 0;">Uma página do Instagram é composta por componentes:</p>
  <ul style="margin-bottom: 0; color: #93c5fd;">
    <li><code>Header</code> - Barra superior com logo</li>
    <li><code>Stories</code> - Carrossel de stories</li>
    <li><code>Feed</code> - Lista de posts</li>
    <li><code>Post</code> - Um único post (imagem + likes + comentários)</li>
    <li><code>BottomNav</code> - Menu inferior</li>
  </ul>
</div>

<p>Cada componente é uma <strong>função JavaScript</strong> que retorna interface (HTML):</p>

<div style="background: #1e1e2e; padding: 20px; border-radius: 8px; border-left: 4px solid #61dafb; margin: 20px 0;">
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4; line-height: 1.6;"><span style="color: #6c7086;">// Um componente simples</span>
<span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">BotaoCurtir</span>() {
  <span style="color: #cba6f7;">return</span> (
    &lt;<span style="color: #89b4fa;">button</span>&gt;
      👍 Curtir
    &lt;/<span style="color: #89b4fa;">button</span>&gt;
  );
}

<span style="color: #6c7086;">// Usando o componente</span>
&lt;<span style="color: #f9e2af;">BotaoCurtir</span> /&gt;</pre>
</div>

<h3>🎯 O que você vai aprender neste módulo</h3>

<p>Ao final deste módulo, você será capaz de:</p>

<ol style="line-height: 2;">
  <li><strong>Entender JSX</strong> - A sintaxe especial que parece HTML mas é JavaScript</li>
  <li><strong>Criar componentes</strong> - Funções que retornam interface</li>
  <li><strong>Usar expressões</strong> - Inserir JavaScript dinâmico no JSX</li>
  <li><strong>Renderizar listas</strong> - Transformar arrays em elementos visuais</li>
</ol>

<div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 20px; border-radius: 12px; margin-top: 24px;">
  <h4 style="margin-top: 0; color: #4ade80;">💡 Dica de Estudo</h4>
  <p style="margin-bottom: 0; color: #bbf7d0;">
    Não tente decorar tudo de uma vez! React é melhor aprendido <strong>praticando</strong>. 
    Leia a teoria, faça os exercícios, e volte às explicações sempre que precisar.
  </p>
</div>
      `,
    },
  });

  // Lição 1.2 - O que é JSX? (EXPANDIDA)
  await prisma.lesson.create({
    data: {
      title: "O que é JSX?",
      order: 2,
      type: "TEXT",
      moduleId: mod1.id,
      content: `
<h2>📝 JSX: A Mágica por Trás do React</h2>

<p><strong>JSX</strong> significa <em>JavaScript XML</em>. É uma extensão de sintaxe que permite escrever código que parece HTML dentro do JavaScript. Mas não se engane - <strong>JSX não é HTML!</strong></p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 24px; border-radius: 12px; margin: 24px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">🧠 Conceito Fundamental</h3>
  <p style="margin-bottom: 0; font-size: 18px; color: #93c5fd;">
    JSX é uma forma mais <strong>elegante</strong> de escrever <code>React.createElement()</code>. 
    Por baixo dos panos, todo JSX é convertido em chamadas de função JavaScript.
  </p>
</div>

<h3>🔄 A Transformação: JSX → JavaScript</h3>

<p>Quando você escreve JSX, o compilador (Babel) transforma em JavaScript puro:</p>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 24px 0;">
  <div style="background: #14532d; padding: 20px; border-radius: 12px;">
    <h4 style="margin-top: 0; color: #4ade80;">✅ O que você escreve (JSX)</h4>
    <pre style="background: #0d1117; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 13px; margin: 0;"><code style="color: #c9d1d9;">&lt;div className="card"&gt;
  &lt;h1&gt;Olá, React!&lt;/h1&gt;
  &lt;p&gt;Bem-vindo&lt;/p&gt;
&lt;/div&gt;</code></pre>
  </div>
  <div style="background: #4a1515; padding: 20px; border-radius: 12px;">
    <h4 style="margin-top: 0; color: #f87171;">❌ O que seria sem JSX</h4>
    <pre style="background: #0d1117; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 13px; margin: 0;"><code style="color: #c9d1d9;">React.createElement(
  'div',
  { className: 'card' },
  React.createElement('h1', null, 'Olá, React!'),
  React.createElement('p', null, 'Bem-vindo')
)</code></pre>
  </div>
</div>

<p style="text-align: center; color: #a6adc8;">
  <em>Qual versão você prefere ler e escrever? 😅</em>
</p>

<h3>📋 HTML vs JSX: As 5 Diferenças Cruciais</h3>

<p>JSX é <strong>parecido</strong> com HTML, mas tem diferenças importantes. Memorize estas regras:</p>

<table style="width: 100%; border-collapse: collapse; margin: 24px 0; background: #1e1e2e; border-radius: 12px; overflow: hidden;">
  <thead>
    <tr style="background: linear-gradient(135deg, #374151 0%, #1f2937 100%);">
      <th style="padding: 16px; text-align: left; border-bottom: 2px solid #4b5563; color: #f9fafb;">HTML</th>
      <th style="padding: 16px; text-align: left; border-bottom: 2px solid #4b5563; color: #f9fafb;">JSX</th>
      <th style="padding: 16px; text-align: left; border-bottom: 2px solid #4b5563; color: #f9fafb;">Motivo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 16px; border-bottom: 1px solid #374151;"><code style="background: #ef4444; padding: 2px 6px; border-radius: 4px;">class</code></td>
      <td style="padding: 16px; border-bottom: 1px solid #374151;"><code style="background: #22c55e; padding: 2px 6px; border-radius: 4px;">className</code></td>
      <td style="padding: 16px; border-bottom: 1px solid #374151; color: #9ca3af;"><code>class</code> é palavra reservada em JavaScript</td>
    </tr>
    <tr style="background: #111827;">
      <td style="padding: 16px; border-bottom: 1px solid #374151;"><code style="background: #ef4444; padding: 2px 6px; border-radius: 4px;">for</code></td>
      <td style="padding: 16px; border-bottom: 1px solid #374151;"><code style="background: #22c55e; padding: 2px 6px; border-radius: 4px;">htmlFor</code></td>
      <td style="padding: 16px; border-bottom: 1px solid #374151; color: #9ca3af;"><code>for</code> é palavra reservada (laço de repetição)</td>
    </tr>
    <tr>
      <td style="padding: 16px; border-bottom: 1px solid #374151;"><code style="background: #ef4444; padding: 2px 6px; border-radius: 4px;">onclick</code></td>
      <td style="padding: 16px; border-bottom: 1px solid #374151;"><code style="background: #22c55e; padding: 2px 6px; border-radius: 4px;">onClick</code></td>
      <td style="padding: 16px; border-bottom: 1px solid #374151; color: #9ca3af;">Eventos usam camelCase</td>
    </tr>
    <tr style="background: #111827;">
      <td style="padding: 16px; border-bottom: 1px solid #374151;"><code style="background: #ef4444; padding: 2px 6px; border-radius: 4px;">tabindex</code></td>
      <td style="padding: 16px; border-bottom: 1px solid #374151;"><code style="background: #22c55e; padding: 2px 6px; border-radius: 4px;">tabIndex</code></td>
      <td style="padding: 16px; border-bottom: 1px solid #374151; color: #9ca3af;">Atributos multi-palavras usam camelCase</td>
    </tr>
    <tr>
      <td style="padding: 16px;"><code style="background: #ef4444; padding: 2px 6px; border-radius: 4px;">style="color: red"</code></td>
      <td style="padding: 16px;"><code style="background: #22c55e; padding: 2px 6px; border-radius: 4px;">style={{color: 'red'}}</code></td>
      <td style="padding: 16px; color: #9ca3af;">Estilos inline são objetos JavaScript</td>
    </tr>
  </tbody>
</table>

<h3>⚠️ As 3 Regras de Ouro do JSX</h3>

<p>Todo código JSX <strong>deve</strong> seguir estas três regras. Viole qualquer uma e terá erro!</p>

<div style="display: grid; gap: 16px; margin: 24px 0;">
  <div style="background: #1e1e2e; padding: 20px; border-radius: 12px; border-left: 4px solid #f9e2af;">
    <h4 style="margin-top: 0; color: #f9e2af;">1️⃣ Retorne UM Único Elemento Raiz</h4>
    <p>Todo componente deve retornar apenas UM elemento pai. Se precisar de vários, envolva com uma <code>&lt;div&gt;</code> ou use Fragments <code>&lt;&gt;...&lt;/&gt;</code></p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 12px;">
      <div style="background: #4a1515; padding: 12px; border-radius: 8px;">
        <p style="margin: 0 0 8px 0; color: #f87171; font-size: 12px;">❌ ERRO</p>
        <code style="font-size: 12px;">return (<br>&nbsp;&nbsp;&lt;h1&gt;Título&lt;/h1&gt;<br>&nbsp;&nbsp;&lt;p&gt;Texto&lt;/p&gt;<br>)</code>
      </div>
      <div style="background: #14532d; padding: 12px; border-radius: 8px;">
        <p style="margin: 0 0 8px 0; color: #4ade80; font-size: 12px;">✅ CORRETO</p>
        <code style="font-size: 12px;">return (<br>&nbsp;&nbsp;&lt;&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Título&lt;/h1&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Texto&lt;/p&gt;<br>&nbsp;&nbsp;&lt;/&gt;<br>)</code>
      </div>
    </div>
  </div>
  
  <div style="background: #1e1e2e; padding: 20px; border-radius: 12px; border-left: 4px solid #89b4fa;">
    <h4 style="margin-top: 0; color: #89b4fa;">2️⃣ Feche TODAS as Tags</h4>
    <p>Diferente do HTML, JSX exige que todas as tags sejam fechadas, incluindo as "self-closing":</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 12px;">
      <div style="background: #4a1515; padding: 12px; border-radius: 8px;">
        <p style="margin: 0 0 8px 0; color: #f87171; font-size: 12px;">❌ ERRO</p>
        <code style="font-size: 12px;">&lt;img src="foto.png"&gt;<br>&lt;br&gt;<br>&lt;input type="text"&gt;</code>
      </div>
      <div style="background: #14532d; padding: 12px; border-radius: 8px;">
        <p style="margin: 0 0 8px 0; color: #4ade80; font-size: 12px;">✅ CORRETO</p>
        <code style="font-size: 12px;">&lt;img src="foto.png" /&gt;<br>&lt;br /&gt;<br>&lt;input type="text" /&gt;</code>
      </div>
    </div>
  </div>
  
  <div style="background: #1e1e2e; padding: 20px; border-radius: 12px; border-left: 4px solid #a6e3a1;">
    <h4 style="margin-top: 0; color: #a6e3a1;">3️⃣ Use camelCase para Atributos</h4>
    <p>Todos os atributos com mais de uma palavra usam camelCase (primeira letra minúscula, demais palavras com maiúscula):</p>
    <div style="margin-top: 12px; background: #0d1117; padding: 12px; border-radius: 8px;">
      <code style="font-size: 12px;">
        onclick → <span style="color: #4ade80;">onClick</span><br>
        onchange → <span style="color: #4ade80;">onChange</span><br>
        tabindex → <span style="color: #4ade80;">tabIndex</span><br>
        maxlength → <span style="color: #4ade80;">maxLength</span><br>
        readonly → <span style="color: #4ade80;">readOnly</span>
      </code>
    </div>
  </div>
</div>

<h3>🎨 Exemplo Completo: Componente com JSX</h3>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4; line-height: 1.7; font-size: 14px;"><span style="color: #6c7086;">// Componente de Card de Perfil</span>
<span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">CardPerfil</span>() {
  <span style="color: #cba6f7;">return</span> (
    &lt;<span style="color: #89b4fa;">div</span> <span style="color: #fab387;">className</span>=<span style="color: #a6e3a1;">"card"</span>&gt;  <span style="color: #6c7086;">{/* className, não class */}</span>
      &lt;<span style="color: #89b4fa;">img</span> 
        <span style="color: #fab387;">src</span>=<span style="color: #a6e3a1;">"avatar.png"</span> 
        <span style="color: #fab387;">alt</span>=<span style="color: #a6e3a1;">"Foto"</span>
      /&gt;  <span style="color: #6c7086;">{/* Tag fechada com / */}</span>
      &lt;<span style="color: #89b4fa;">h2</span>&gt;Maria Silva&lt;/<span style="color: #89b4fa;">h2</span>&gt;
      &lt;<span style="color: #89b4fa;">button</span> <span style="color: #fab387;">onClick</span>={() =&gt; <span style="color: #f9e2af;">alert</span>(<span style="color: #a6e3a1;">'Clicou!'</span>)}&gt;
        Seguir
      &lt;/<span style="color: #89b4fa;">button</span>&gt;  <span style="color: #6c7086;">{/* onClick, não onclick */}</span>
    &lt;/<span style="color: #89b4fa;">div</span>&gt;
  );
}</pre>
</div>

<div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 20px; border-radius: 12px; margin-top: 24px;">
  <h4 style="margin-top: 0; color: #4ade80;">📚 Resumo da Lição</h4>
  <ul style="margin-bottom: 0; color: #bbf7d0; line-height: 1.8;">
    <li>JSX parece HTML mas é JavaScript</li>
    <li>Use <code>className</code> em vez de <code>class</code></li>
    <li>Feche todas as tags (ex: <code>&lt;img /&gt;</code>)</li>
    <li>Eventos usam camelCase (ex: <code>onClick</code>)</li>
    <li>Sempre retorne um único elemento raiz</li>
  </ul>
</div>
      `,
    },
  });

  // Lição 1.3 - Expressões JavaScript no JSX (EXPANDIDA)
  await prisma.lesson.create({
    data: {
      title: "Expressões JavaScript no JSX",
      order: 3,
      type: "TEXT",
      moduleId: mod1.id,
      content: `
<h2>🔧 O Superpoder do JSX: Expressões JavaScript</h2>

<p>A grande vantagem do JSX sobre HTML é poder usar <strong>JavaScript diretamente</strong> na sua interface. Para isso, usamos <strong>chaves { }</strong>.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 24px; border-radius: 12px; margin: 24px 0; text-align: center;">
  <p style="font-size: 28px; margin: 0;">
    <code style="background: #61dafb; color: #1a1a2e; padding: 8px 20px; border-radius: 8px; font-weight: bold;">{ expressão JavaScript }</code>
  </p>
  <p style="margin: 16px 0 0 0; color: #93c5fd;">Tudo dentro das chaves é avaliado como JavaScript</p>
</div>

<h3>📌 O que são Expressões?</h3>

<p>Uma <strong>expressão</strong> é qualquer código JavaScript que produz um valor. Veja a diferença:</p>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 24px 0;">
  <div style="background: #14532d; padding: 20px; border-radius: 12px;">
    <h4 style="margin-top: 0; color: #4ade80;">✅ Expressões (produzem valor)</h4>
    <ul style="margin-bottom: 0; color: #bbf7d0; line-height: 2;">
      <li><code>2 + 2</code> → 4</li>
      <li><code>nome</code> → "Maria"</li>
      <li><code>ativo ? "Sim" : "Não"</code></li>
      <li><code>lista.map(...)</code></li>
      <li><code>funcao()</code></li>
    </ul>
  </div>
  <div style="background: #4a1515; padding: 20px; border-radius: 12px;">
    <h4 style="margin-top: 0; color: #f87171;">❌ Declarações (não funcionam)</h4>
    <ul style="margin-bottom: 0; color: #fca5a5; line-height: 2;">
      <li><code>if (x) { ... }</code></li>
      <li><code>for (let i...) { }</code></li>
      <li><code>const x = 5</code></li>
      <li><code>switch (x) { }</code></li>
      <li><code>while (x) { }</code></li>
    </ul>
  </div>
</div>

<h3>🎯 Exemplos Práticos de Expressões no JSX</h3>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4; line-height: 1.8; font-size: 14px;"><span style="color: #6c7086;">// 1️⃣ VARIÁVEIS - Exibir valores dinâmicos</span>
<span style="color: #cba6f7;">const</span> nome = <span style="color: #a6e3a1;">"Maria"</span>;
<span style="color: #cba6f7;">const</span> idade = <span style="color: #fab387;">25</span>;
<span style="color: #cba6f7;">return</span> &lt;<span style="color: #89b4fa;">p</span>&gt;Olá, <span style="color: #f9e2af;">{nome}</span>! Você tem <span style="color: #f9e2af;">{idade}</span> anos.&lt;/<span style="color: #89b4fa;">p</span>&gt;
<span style="color: #6c7086;">// Resultado: "Olá, Maria! Você tem 25 anos."</span>

<span style="color: #6c7086;">// 2️⃣ CÁLCULOS - Fazer contas na hora</span>
<span style="color: #cba6f7;">const</span> preco = <span style="color: #fab387;">100</span>;
<span style="color: #cba6f7;">const</span> desconto = <span style="color: #fab387;">0.2</span>;
<span style="color: #cba6f7;">return</span> &lt;<span style="color: #89b4fa;">p</span>&gt;Preço final: R$ <span style="color: #f9e2af;">{preco * (1 - desconto)}</span>&lt;/<span style="color: #89b4fa;">p</span>&gt;
<span style="color: #6c7086;">// Resultado: "Preço final: R$ 80"</span>

<span style="color: #6c7086;">// 3️⃣ MÉTODOS DE STRING - Transformar texto</span>
<span style="color: #cba6f7;">const</span> usuario = <span style="color: #a6e3a1;">"joão silva"</span>;
<span style="color: #cba6f7;">return</span> &lt;<span style="color: #89b4fa;">h1</span>&gt;<span style="color: #f9e2af;">{usuario.toUpperCase()}</span>&lt;/<span style="color: #89b4fa;">h1</span>&gt;
<span style="color: #6c7086;">// Resultado: "JOÃO SILVA"</span>

<span style="color: #6c7086;">// 4️⃣ OPERADOR TERNÁRIO - Condicionais inline</span>
<span style="color: #cba6f7;">const</span> logado = <span style="color: #fab387;">true</span>;
<span style="color: #cba6f7;">return</span> &lt;<span style="color: #89b4fa;">p</span>&gt;<span style="color: #f9e2af;">{logado ? "Bem-vindo!" : "Faça login"}</span>&lt;/<span style="color: #89b4fa;">p</span>&gt;
<span style="color: #6c7086;">// Resultado: "Bem-vindo!"</span>

<span style="color: #6c7086;">// 5️⃣ TEMPLATE LITERALS - Strings complexas</span>
<span style="color: #cba6f7;">const</span> produto = <span style="color: #a6e3a1;">"Camiseta"</span>;
<span style="color: #cba6f7;">const</span> qtd = <span style="color: #fab387;">3</span>;
<span style="color: #cba6f7;">return</span> &lt;<span style="color: #89b4fa;">p</span>&gt;<span style="color: #f9e2af;">{\`Você comprou \${qtd}x \${produto}\`}</span>&lt;/<span style="color: #89b4fa;">p</span>&gt;
<span style="color: #6c7086;">// Resultado: "Você comprou 3x Camiseta"</span></pre>
</div>

<h3>🎨 Expressões em Atributos</h3>

<p>Você também pode usar expressões em atributos do JSX:</p>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4; line-height: 1.8; font-size: 14px;"><span style="color: #6c7086;">// Em src de imagem</span>
<span style="color: #cba6f7;">const</span> fotoUrl = <span style="color: #a6e3a1;">"https://example.com/foto.jpg"</span>;
&lt;<span style="color: #89b4fa;">img</span> <span style="color: #fab387;">src</span>=<span style="color: #f9e2af;">{fotoUrl}</span> /&gt;

<span style="color: #6c7086;">// Em className dinâmico</span>
<span style="color: #cba6f7;">const</span> ativo = <span style="color: #fab387;">true</span>;
&lt;<span style="color: #89b4fa;">button</span> <span style="color: #fab387;">className</span>=<span style="color: #f9e2af;">{ativo ? "btn-ativo" : "btn-inativo"}</span>&gt;

<span style="color: #6c7086;">// Em style dinâmico</span>
<span style="color: #cba6f7;">const</span> cor = <span style="color: #a6e3a1;">"#61dafb"</span>;
&lt;<span style="color: #89b4fa;">div</span> <span style="color: #fab387;">style</span>=<span style="color: #f9e2af;">{{ backgroundColor: cor, padding: '20px' }}</span>&gt;

<span style="color: #6c7086;">// Em eventos</span>
&lt;<span style="color: #89b4fa;">button</span> <span style="color: #fab387;">onClick</span>=<span style="color: #f9e2af;">{() => alert('Clicou!')}</span>&gt;Clique&lt;/<span style="color: #89b4fa;">button</span>&gt;</pre>
</div>

<h3>⚠️ Erros Comuns e Como Evitar</h3>

<div style="display: grid; gap: 16px; margin: 24px 0;">
  <div style="background: #4a1515; padding: 20px; border-radius: 12px;">
    <h4 style="margin-top: 0; color: #f87171;">❌ Erro: Usar if/else dentro do JSX</h4>
    <pre style="background: #0d1117; padding: 12px; border-radius: 8px; margin: 12px 0;"><code style="color: #fca5a5;">return (
  &lt;div&gt;
    {if (logado) { return &lt;p&gt;Oi&lt;/p&gt; }}  // ERRO!
  &lt;/div&gt;
)</code></pre>
    <p style="margin-bottom: 0; color: #fca5a5;"><strong>Solução:</strong> Use operador ternário <code>{logado ? &lt;p&gt;Oi&lt;/p&gt; : null}</code></p>
  </div>
  
  <div style="background: #4a1515; padding: 20px; border-radius: 12px;">
    <h4 style="margin-top: 0; color: #f87171;">❌ Erro: Renderizar objetos diretamente</h4>
    <pre style="background: #0d1117; padding: 12px; border-radius: 8px; margin: 12px 0;"><code style="color: #fca5a5;">const usuario = { nome: "Ana", idade: 20 };
return &lt;p&gt;{usuario}&lt;/p&gt;  // ERRO!</code></pre>
    <p style="margin-bottom: 0; color: #fca5a5;"><strong>Solução:</strong> Acesse propriedades <code>{usuario.nome}</code> ou use <code>{JSON.stringify(usuario)}</code></p>
  </div>
  
  <div style="background: #4a1515; padding: 20px; border-radius: 12px;">
    <h4 style="margin-top: 0; color: #f87171;">❌ Erro: Esquecer as chaves</h4>
    <pre style="background: #0d1117; padding: 12px; border-radius: 8px; margin: 12px 0;"><code style="color: #fca5a5;">const nome = "Pedro";
return &lt;p&gt;Olá, nome&lt;/p&gt;  // Mostra "Olá, nome" literal!</code></pre>
    <p style="margin-bottom: 0; color: #fca5a5;"><strong>Solução:</strong> Use chaves <code>&lt;p&gt;Olá, {nome}&lt;/p&gt;</code></p>
  </div>
</div>

<h3>🏆 Exemplo Completo: Card de Produto</h3>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4; line-height: 1.8; font-size: 14px;"><span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">CardProduto</span>() {
  <span style="color: #cba6f7;">const</span> produto = {
    nome: <span style="color: #a6e3a1;">"Tênis Nike"</span>,
    preco: <span style="color: #fab387;">299.90</span>,
    emEstoque: <span style="color: #fab387;">true</span>,
    avaliacao: <span style="color: #fab387;">4.5</span>,
    imagem: <span style="color: #a6e3a1;">"tenis.jpg"</span>
  };

  <span style="color: #cba6f7;">return</span> (
    &lt;<span style="color: #89b4fa;">div</span> <span style="color: #fab387;">style</span>={{ border: <span style="color: #a6e3a1;">'1px solid #333'</span>, padding: <span style="color: #a6e3a1;">'20px'</span>, borderRadius: <span style="color: #a6e3a1;">'12px'</span> }}&gt;
      &lt;<span style="color: #89b4fa;">img</span> <span style="color: #fab387;">src</span>=<span style="color: #f9e2af;">{produto.imagem}</span> <span style="color: #fab387;">alt</span>=<span style="color: #f9e2af;">{produto.nome}</span> /&gt;
      
      &lt;<span style="color: #89b4fa;">h2</span>&gt;<span style="color: #f9e2af;">{produto.nome}</span>&lt;/<span style="color: #89b4fa;">h2</span>&gt;
      
      &lt;<span style="color: #89b4fa;">p</span> <span style="color: #fab387;">style</span>={{ fontSize: <span style="color: #a6e3a1;">'24px'</span>, fontWeight: <span style="color: #a6e3a1;">'bold'</span> }}&gt;
        R$ <span style="color: #f9e2af;">{produto.preco.toFixed(2)}</span>
      &lt;/<span style="color: #89b4fa;">p</span>&gt;
      
      &lt;<span style="color: #89b4fa;">p</span>&gt;⭐ <span style="color: #f9e2af;">{produto.avaliacao}</span> / 5&lt;/<span style="color: #89b4fa;">p</span>&gt;
      
      &lt;<span style="color: #89b4fa;">span</span> <span style="color: #fab387;">style</span>={{ 
        color: <span style="color: #f9e2af;">{produto.emEstoque ? '#4ade80' : '#f87171'}</span> 
      }}&gt;
        <span style="color: #f9e2af;">{produto.emEstoque ? '✅ Em estoque' : '❌ Indisponível'}</span>
      &lt;/<span style="color: #89b4fa;">span</span>&gt;
      
      &lt;<span style="color: #89b4fa;">button</span> <span style="color: #fab387;">disabled</span>=<span style="color: #f9e2af;">{!produto.emEstoque}</span>&gt;
        Comprar
      &lt;/<span style="color: #89b4fa;">button</span>&gt;
    &lt;/<span style="color: #89b4fa;">div</span>&gt;
  );
}</pre>
</div>

<div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 20px; border-radius: 12px; margin-top: 24px;">
  <h4 style="margin-top: 0; color: #4ade80;">📚 Resumo da Lição</h4>
  <ul style="margin-bottom: 0; color: #bbf7d0; line-height: 1.8;">
    <li>Use <code>{ }</code> para inserir JavaScript no JSX</li>
    <li>Apenas <strong>expressões</strong> funcionam (não if/for)</li>
    <li>Para condicionais, use operador ternário <code>? :</code></li>
    <li>Expressões funcionam em conteúdo e atributos</li>
    <li>Objetos não podem ser renderizados diretamente</li>
  </ul>
</div>
      `,
    },
  });

  // Exercício 1.1 - Seu Primeiro Componente (EXPANDIDO)
  const lesson1Ex = await prisma.lesson.create({
    data: {
      title: "Exercício: Seu Primeiro Componente",
      order: 4,
      type: "EXERCISE",
      moduleId: mod1.id,
      content: `
<h2>🎯 Desafio: Crie seu primeiro componente React!</h2>

<p>Hora de colocar em prática tudo que você aprendeu! Você vai criar um <strong>cartão de perfil simples</strong> usando JSX e expressões.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 24px; border-radius: 12px; margin: 24px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">📋 O que você precisa fazer:</h3>
  <ol style="margin-bottom: 0; color: #93c5fd; line-height: 2;">
    <li>Criar uma variável <code>nome</code> com qualquer nome</li>
    <li>Criar uma variável <code>profissao</code> com qualquer profissão</li>
    <li>Exibir o nome em uma tag <code>&lt;h2&gt;</code> usando <code>{nome}</code></li>
    <li>Exibir a profissão em uma tag <code>&lt;p&gt;</code> usando <code>{profissao}</code></li>
  </ol>
</div>

<h3>🎨 Exemplo do resultado visual:</h3>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; border: 2px solid #61dafb; margin: 20px 0;">
  <h2 style="margin: 0 0 8px 0; color: #f9fafb;">Maria Silva</h2>
  <p style="margin: 0; color: #9ca3af;">Desenvolvedora React</p>
</div>

<h3>💡 Passo a Passo</h3>

<div style="display: grid; gap: 12px; margin: 20px 0;">
  <div style="background: #1e1e2e; padding: 16px; border-radius: 8px; border-left: 4px solid #61dafb;">
    <strong style="color: #61dafb;">Passo 1:</strong>
    <p style="margin: 8px 0 0 0; color: #cdd6f4;">Dentro da função <code>CartaoPerfil</code>, declare as variáveis:</p>
    <code style="color: #a6e3a1;">const nome = "Seu Nome";</code>
  </div>
  <div style="background: #1e1e2e; padding: 16px; border-radius: 8px; border-left: 4px solid #61dafb;">
    <strong style="color: #61dafb;">Passo 2:</strong>
    <p style="margin: 8px 0 0 0; color: #cdd6f4;">No return, use as variáveis com chaves:</p>
    <code style="color: #a6e3a1;">&lt;h2&gt;{nome}&lt;/h2&gt;</code>
  </div>
</div>

<div style="background: #4a1515; padding: 16px; border-radius: 8px; margin: 20px 0;">
  <h4 style="margin-top: 0; color: #f87171;">⚠️ Cuidado!</h4>
  <ul style="margin-bottom: 0; color: #fca5a5;">
    <li>Declare as variáveis <strong>dentro</strong> da função, antes do return</li>
    <li>Não esqueça das <strong>chaves { }</strong> ao redor das variáveis</li>
    <li>O componente já está sendo exportado - não mexa nisso</li>
  </ul>
</div>
      `,
    },
  });

  await prisma.exercise.create({
    data: {
      lessonId: lesson1Ex.id,
      starterCode: `// 🎯 Seu Primeiro Componente React!
// Siga os passos nos comentários

function CartaoPerfil() {
  // PASSO 1: Crie uma variável 'nome' com seu nome
  // Exemplo: const nome = "Maria";
  
  // PASSO 2: Crie uma variável 'profissao' com uma profissão
  // Exemplo: const profissao = "Designer";
  
  return (
    <div style={{ padding: '20px', border: '1px solid #444', borderRadius: '12px' }}>
      {/* PASSO 3: Substitua o texto "Nome" por {nome} */}
      <h2>Nome</h2>
      
      {/* PASSO 4: Substitua o texto "Profissão" por {profissao} */}
      <p style={{ color: '#888' }}>Profissão</p>
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
    <div style={{ padding: '20px', border: '1px solid #444', borderRadius: '12px' }}>
      <h2>{nome}</h2>
      <p style={{ color: '#888' }}>{profissao}</p>
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

  // Lição 1.5 - Renderização de Listas (EXPANDIDA)
  await prisma.lesson.create({
    data: {
      title: "Renderização de Listas",
      order: 5,
      type: "TEXT",
      moduleId: mod1.id,
      content: `
<h2>📋 Transformando Arrays em Interface</h2>

<p>Uma das tarefas mais comuns no React é mostrar <strong>listas de dados</strong> - posts de um feed, produtos de uma loja, mensagens de um chat. Para isso, usamos o método <code>map()</code> do JavaScript.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 24px; border-radius: 12px; margin: 24px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">🔄 O Conceito</h3>
  <p style="margin-bottom: 0; font-size: 18px; color: #93c5fd;">
    <code>map()</code> percorre cada item de um array e <strong>transforma</strong> em elementos JSX.
    <br/>Array de dados → <code>map()</code> → Lista de componentes
  </p>
</div>

<h3>🎯 Exemplo Visual: De Array para Lista</h3>

<div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 20px; align-items: center; margin: 24px 0;">
  <div style="background: #1e1e2e; padding: 20px; border-radius: 12px;">
    <h4 style="margin-top: 0; color: #f9e2af;">📦 Dados (Array)</h4>
    <pre style="margin: 0; color: #cdd6f4; font-size: 13px;">[
  "🍎 Maçã",
  "🍌 Banana",
  "🍊 Laranja"
]</pre>
  </div>
  <div style="font-size: 32px;">→</div>
  <div style="background: #1e1e2e; padding: 20px; border-radius: 12px;">
    <h4 style="margin-top: 0; color: #a6e3a1;">🖥️ Interface (JSX)</h4>
    <ul style="margin: 0; padding-left: 20px; color: #cdd6f4;">
      <li>🍎 Maçã</li>
      <li>🍌 Banana</li>
      <li>🍊 Laranja</li>
    </ul>
  </div>
</div>

<h3>📝 Sintaxe do map()</h3>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4; line-height: 1.8; font-size: 14px;"><span style="color: #6c7086;">// Estrutura básica do map()</span>
array.<span style="color: #f9e2af;">map</span>((item, index) =&gt; {
  <span style="color: #cba6f7;">return</span> &lt;<span style="color: #89b4fa;">Elemento</span>&gt;{item}&lt;/<span style="color: #89b4fa;">Elemento</span>&gt;
})

<span style="color: #6c7086;">// Versão curta (arrow function implícita)</span>
array.<span style="color: #f9e2af;">map</span>(item =&gt; &lt;<span style="color: #89b4fa;">Elemento</span>&gt;{item}&lt;/<span style="color: #89b4fa;">Elemento</span>&gt;)</pre>
</div>

<h3>🎨 Exemplo Completo: Lista de Frutas</h3>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4; line-height: 1.8; font-size: 14px;"><span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">ListaFrutas</span>() {
  <span style="color: #cba6f7;">const</span> frutas = [<span style="color: #a6e3a1;">"🍎 Maçã"</span>, <span style="color: #a6e3a1;">"🍌 Banana"</span>, <span style="color: #a6e3a1;">"🍊 Laranja"</span>];

  <span style="color: #cba6f7;">return</span> (
    &lt;<span style="color: #89b4fa;">ul</span>&gt;
      <span style="color: #f9e2af;">{frutas.map((fruta, index) =&gt; (</span>
        <span style="color: #f9e2af;">&lt;li key={index}&gt;{fruta}&lt;/li&gt;</span>
      <span style="color: #f9e2af;">))}</span>
    &lt;/<span style="color: #89b4fa;">ul</span>&gt;
  );
}</pre>
</div>

<h3>🔑 A Prop KEY - Super Importante!</h3>

<div style="background: #4a1515; padding: 24px; border-radius: 12px; margin: 24px 0; border-left: 4px solid #f87171;">
  <h4 style="margin-top: 0; color: #f87171;">⚠️ Sempre use a prop key!</h4>
  <p>A prop <code>key</code> é um identificador único que ajuda o React a saber qual item mudou, foi adicionado ou removido. Sem ela:</p>
  <ul style="color: #fca5a5; margin-bottom: 0;">
    <li>Você verá um warning no console</li>
    <li>Performance pode ser prejudicada</li>
    <li>Bugs estranhos podem acontecer em listas dinâmicas</li>
  </ul>
</div>

<h4>Regras da Key:</h4>

<div style="display: grid; gap: 12px; margin: 20px 0;">
  <div style="background: #14532d; padding: 16px; border-radius: 8px;">
    <strong style="color: #4ade80;">✅ Use ID único quando disponível</strong>
    <pre style="margin: 8px 0 0 0; color: #bbf7d0; font-size: 13px;">usuarios.map(user => &lt;Card key={user.id} /&gt;)</pre>
  </div>
  <div style="background: #14532d; padding: 16px; border-radius: 8px;">
    <strong style="color: #4ade80;">✅ Index é ok para listas estáticas</strong>
    <pre style="margin: 8px 0 0 0; color: #bbf7d0; font-size: 13px;">cores.map((cor, i) => &lt;div key={i} /&gt;)</pre>
  </div>
  <div style="background: #4a1515; padding: 16px; border-radius: 8px;">
    <strong style="color: #f87171;">❌ Não use index se a lista pode mudar de ordem</strong>
    <pre style="margin: 8px 0 0 0; color: #fca5a5; font-size: 13px;">// Se adicionar/remover/reordenar, use ID!</pre>
  </div>
</div>

<h3>🏆 Exemplo Real: Lista de Usuários</h3>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; margin: 24px 0;">
  <pre style="margin: 0; font-family: 'Fira Code', monospace; color: #cdd6f4; line-height: 1.8; font-size: 14px;"><span style="color: #cba6f7;">function</span> <span style="color: #f9e2af;">ListaUsuarios</span>() {
  <span style="color: #cba6f7;">const</span> usuarios = [
    { <span style="color: #89b4fa;">id</span>: <span style="color: #fab387;">1</span>, <span style="color: #89b4fa;">nome</span>: <span style="color: #a6e3a1;">"Ana"</span>, <span style="color: #89b4fa;">avatar</span>: <span style="color: #a6e3a1;">"👩"</span>, <span style="color: #89b4fa;">online</span>: <span style="color: #fab387;">true</span> },
    { <span style="color: #89b4fa;">id</span>: <span style="color: #fab387;">2</span>, <span style="color: #89b4fa;">nome</span>: <span style="color: #a6e3a1;">"Bruno"</span>, <span style="color: #89b4fa;">avatar</span>: <span style="color: #a6e3a1;">"👨"</span>, <span style="color: #89b4fa;">online</span>: <span style="color: #fab387;">false</span> },
    { <span style="color: #89b4fa;">id</span>: <span style="color: #fab387;">3</span>, <span style="color: #89b4fa;">nome</span>: <span style="color: #a6e3a1;">"Carla"</span>, <span style="color: #89b4fa;">avatar</span>: <span style="color: #a6e3a1;">"👩‍🦰"</span>, <span style="color: #89b4fa;">online</span>: <span style="color: #fab387;">true</span> },
  ];

  <span style="color: #cba6f7;">return</span> (
    &lt;<span style="color: #89b4fa;">div</span>&gt;
      &lt;<span style="color: #89b4fa;">h2</span>&gt;Usuários Online&lt;/<span style="color: #89b4fa;">h2</span>&gt;
      {usuarios.<span style="color: #f9e2af;">map</span>(user =&gt; (
        &lt;<span style="color: #89b4fa;">div</span> <span style="color: #fab387;">key</span>={user.<span style="color: #89b4fa;">id</span>} style={{ display: <span style="color: #a6e3a1;">'flex'</span>, gap: <span style="color: #a6e3a1;">'10px'</span>, padding: <span style="color: #a6e3a1;">'10px'</span> }}&gt;
          &lt;<span style="color: #89b4fa;">span</span>&gt;{user.avatar}&lt;/<span style="color: #89b4fa;">span</span>&gt;
          &lt;<span style="color: #89b4fa;">span</span>&gt;{user.nome}&lt;/<span style="color: #89b4fa;">span</span>&gt;
          &lt;<span style="color: #89b4fa;">span</span>&gt;{user.online ? <span style="color: #a6e3a1;">'🟢'</span> : <span style="color: #a6e3a1;">'⚫'</span>}&lt;/<span style="color: #89b4fa;">span</span>&gt;
        &lt;/<span style="color: #89b4fa;">div</span>&gt;
      ))}
    &lt;/<span style="color: #89b4fa;">div</span>&gt;
  );
}</pre>
</div>

<div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 20px; border-radius: 12px; margin-top: 24px;">
  <h4 style="margin-top: 0; color: #4ade80;">📚 Resumo da Lição</h4>
  <ul style="margin-bottom: 0; color: #bbf7d0; line-height: 1.8;">
    <li><code>map()</code> transforma arrays em elementos JSX</li>
    <li>Sempre use a prop <code>key</code> com valor único</li>
    <li>Prefira ID ao index em listas dinâmicas</li>
    <li>O retorno do map vai dentro de chaves <code>{ }</code></li>
  </ul>
</div>
      `,
    },
  });

  // Exercício 1.2 - Lista de Tarefas (EXPANDIDO)
  const lesson2Ex = await prisma.lesson.create({
    data: {
      title: "Exercício: Lista de Tarefas",
      order: 6,
      type: "EXERCISE",
      moduleId: mod1.id,
      content: `
<h2>🎯 Desafio: Renderize uma lista de tarefas!</h2>

<p>Pratique o uso do <code>map()</code> para transformar um array de dados em elementos na tela.</p>

<div style="background: linear-gradient(135deg, #1e3a5f 0%, #1e1e2e 100%); padding: 24px; border-radius: 12px; margin: 24px 0;">
  <h3 style="margin-top: 0; color: #61dafb;">📋 O que você precisa fazer:</h3>
  <ol style="margin-bottom: 0; color: #93c5fd; line-height: 2;">
    <li>No local indicado, use <code>tarefas.map()</code></li>
    <li>Para cada tarefa, retorne um <code>&lt;li&gt;</code></li>
    <li>Adicione <code>key={tarefa.id}</code> no <code>&lt;li&gt;</code></li>
    <li>Mostre o texto da tarefa com <code>{tarefa.texto}</code></li>
  </ol>
</div>

<h3>🎨 Resultado esperado:</h3>

<div style="background: #1e1e2e; padding: 24px; border-radius: 12px; border: 2px solid #61dafb; margin: 20px 0;">
  <h1 style="margin-top: 0; font-size: 24px;">📝 Minhas Tarefas</h1>
  <ul style="line-height: 2;">
    <li>Estudar React</li>
    <li>Fazer exercícios</li>
    <li>Criar projeto</li>
  </ul>
</div>

<h3>💡 Dica de Sintaxe</h3>

<div style="background: #1e1e2e; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <pre style="margin: 0; color: #cdd6f4; font-size: 14px;">{tarefas.map(tarefa => (
  &lt;li key={tarefa.id}&gt;{tarefa.texto}&lt;/li&gt;
))}</pre>
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
    <div style={{ padding: '20px' }}>
      <h1>📝 Minhas Tarefas</h1>
      <ul>
        {/* 
          Use tarefas.map() aqui!
          Para cada tarefa, retorne: <li key={tarefa.id}>{tarefa.texto}</li>
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
    <div style={{ padding: '20px' }}>
      <h1>📝 Minhas Tarefas</h1>
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

  console.log("✅ Módulo 1 criado com conteúdo expandido!");

  // =====================================================
  // MÓDULO 2: React Hooks (será criado na próxima parte)
  // =====================================================
  const mod2 = await prisma.module.create({
    data: {
      title: "React Hooks",
      order: 2,
      courseId: course.id,
    },
  });

  // Placeholder - será expandido
  await prisma.lesson.create({
    data: {
      title: "Introdução aos Hooks",
      order: 1,
      type: "TEXT",
      moduleId: mod2.id,
      content: `<h2>🪝 Módulo em construção</h2><p>Este módulo será expandido em breve!</p>`,
    },
  });

  // =====================================================
  // MÓDULO 3: Props e Composição (será criado na próxima parte)
  // =====================================================
  const mod3 = await prisma.module.create({
    data: {
      title: "Props e Composição",
      order: 3,
      courseId: course.id,
    },
  });

  await prisma.lesson.create({
    data: {
      title: "O que são Props?",
      order: 1,
      type: "TEXT",
      moduleId: mod3.id,
      content: `<h2>📦 Módulo em construção</h2><p>Este módulo será expandido em breve!</p>`,
    },
  });

  // =====================================================
  // MÓDULO 4: Projeto Final (será criado na próxima parte)
  // =====================================================
  const mod4 = await prisma.module.create({
    data: {
      title: "Projeto Final",
      order: 4,
      courseId: course.id,
    },
  });

  await prisma.lesson.create({
    data: {
      title: "Projeto: Mini Pokédex",
      order: 1,
      type: "TEXT",
      moduleId: mod4.id,
      content: `<h2>🎮 Módulo em construção</h2><p>Este módulo será expandido em breve!</p>`,
    },
  });

  console.log("✅ Seed expandido completo - Módulo 1!");
  console.log("- 1 usuário demo criado");
  console.log("- 1 curso criado");
  console.log("- 4 módulos criados");
  console.log("- Módulo 1 com 6 lições expandidas e 2 exercícios");
}

main()
  .catch((e) => {
    console.error("❌ Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
