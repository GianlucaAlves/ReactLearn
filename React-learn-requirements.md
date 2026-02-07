Documento de Requisitos: Plataforma React Pro (Interactive Edition)
1. Visão Geral
Plataforma de ensino de React baseada em conteúdo escrito (Markdown) e desafios práticos de codificação. O sistema deve permitir que o aluno leia a teoria e resolva exercícios em um ambiente de desenvolvimento integrado (IDE) no próprio navegador, com validação automática de resultados.

## 2. Requisitos Funcionais (RF)

| ID    | Requisito                | Descrição                                                                                                                        |
|-------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| RF-01 | Leitor de Conteúdo       | Suporte a Markdown para renderização de textos, tabelas e snippets de código com syntax highlighting.                           |
| RF-02 | IDE Integrada (Sandbox)  | Ambiente de codificação (ex: Sandpack ou Monaco Editor) que execute código React em tempo real no navegador.                    |
| RF-03 | Validação Automática     | Sistema que executa testes (unitários/DOM) no código do aluno para verificar se os critérios do exercício foram atingidos.      |
| RF-04 | Trilha de Progressão     | Bloqueio de lições avançadas até que os desafios das lições anteriores sejam concluídos (Pass/Fail).                            |
| RF-05 | Dicas (Hints)            | Botão para revelar dicas progressivas ou a solução comentada após X tentativas falhas.                                         |
| RF-06 | Persistência de Código   | Salvar o progresso do código do aluno no banco de dados ou LocalStorage para que ele possa continuar de onde parou.            |
| RF-07 | Workspace Personalizado  | Permitir que o aluno escolha entre tema dark/light para o editor de código.                                                    |


3. Requisitos Não Funcionais (RNF)
RNF-01 (Isolamento de Código): O código do aluno deve rodar em um ambiente isolado (iframe ou WebWorker) para não afetar a performance da plataforma principal.

RNF-02 (Feedback Instantâneo): O tempo entre o "Run Code" e o resultado dos testes não deve ultrapassar 1.5 segundos.

RNF-03 (Offline First): Capacidade de salvar o progresso localmente caso a conexão caia durante a resolução de um exercício.

4. Arquitetura Técnica Sugerida
Para rodar React dentro do navegador de forma performática, a stack muda levemente:

Motor de Execução: CodeSandbox Sandpack (A melhor ferramenta para criar ambientes de aprendizado React).

Renderização de Texto: react-markdown com plugins para suporte a fórmulas e destaque de código.

Testes de Validação: Utilização de bibliotecas como JSDOM ou os próprios testes do Sandpack para verificar se componentes foram criados corretamente.

5. Exemplo de Fluxo de Aula (UX)
Explicação (Esquerda da tela): Texto explicando o que é o useState.

Desafio (Abaixo do texto): "Crie um contador que incrementa ao clicar no botão".

Editor (Direita da tela): Um arquivo App.js com um código base incompleto.

Preview (Abaixo do editor): O resultado visual do que o aluno está digitando.

Botão "Verificar": Ao clicar, o sistema roda um teste:

Teste 1: Existe um botão? (Check!)

Teste 2: Ao clicar, o número muda de 0 para 1? (Check!)

Resultado: "Parabéns! Você desbloqueou a próxima aula."

6. Mapa de Módulos (Foco em Exercícios)
Módulo 1: Manipulação de DOM Virtual e JSX (Exercícios de sintaxe).

Módulo 2: Hooks Fundamentais (Desafios de lógica de estado).

Módulo 3: Composição de Componentes (Exercícios de passagem de Props).

Módulo 4: Consumo de API (Desafio: Criar um buscador de filmes que funciona de verdade no preview).