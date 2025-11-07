<div align="center">   <br />   <h1 style="font-size: 3em; margin-bottom: 0; color: #2e64a1;">     ♿️ AcessoTrip   </h1>      <strong style="font-size: 1.2em; color: #555;">     Protótipo de UX/UI para Turismo Acessível   </strong>      <br /> 

  <p style="font-size: 1.1em; max-width: 700px;">     Uma plataforma colaborativa, desenvolvida como protótipo de alta fidelidade (HTML/CSS/JS), que permite a pessoas com deficiência planejar, avaliar e compartilhar experiências de viagens acessíveis, reduzindo barreiras e promovendo a autonomia.   </p>

  <p>     <img src="https://img.shields.io/badge/status-Protótipo%20Funcional-green?style=for-the-badge" alt="Status do Projeto: Protótipo Funcional">     <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">     <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">     <img src="https://img.shields.io/badge/Mapbox-000000?style=for-the-badge&logo=mapbox&logoColor=white" alt="Mapbox">   </p>

</div>

📖 Sobre o Projeto
O AcessoTrip nasceu como um Projeto Final de UX/UI focado em resolver um problema real e frustrante: a dificuldade que pessoas com deficiência (PCD) enfrentam ao tentar planear viagens.

A metodologia utilizada foi o Design Centrado no Utilizador (DCU). O projeto não começou pelo código, mas sim pela investigação e empatia, através da criação de Personas e Jornadas de Utilizador.

O resultado é este protótipo funcional de alta fidelidade que simula uma aplicação web responsiva (Mobile-first, com adaptação para Desktop), focada em acessibilidade desde a sua concepção.

O Problema Central (As Dores)
Muitos sites e apps de turismo não trazem informações precisas sobre acessibilidade. Pessoas com deficiência enfrentam frustrações constantes, como:

Informações Enganosas: "Rampas falsas" (rampas muito inclinadas ou que terminam em degraus) e banheiros ditos "adaptados" que não possuem espaço de manobra.

Exclusão Digital: Sites e apps que não são compatíveis com leitores de tela, ou conteúdo de vídeo sem legendas ou interpretação em Libras.

Falta de Confiança: O medo de chegar ao destino e não ter autonomia, dependendo da "boa vontade" ou da empatia de prestadores de serviço.

👥 As Personas (O Coração do UX)
O design foi guiado por três personas principais, cada uma representando um espectro de acessibilidade.

<div style="width: 100%; overflow-x: auto;">   <table width="100%" style="border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">     <thead style="background-color: #2e64a1; color: white;">       <tr>         <th style="padding: 12px 15px; text-align: left;">Persona</th>         <th style="padding: 12px 15px; text-align: left;">Perfil</th>         <th style="padding: 12px 15px; text-align: left;">Dores Principais</th>         <th style="padding: 12px 15px; text-align: left;">Funcionalidade-Chave</th>       </tr>     </thead>     <tbody style="background-color: #fff; color: #333;">       <tr style="border-bottom: 1px solid #ddd; background-color: #f9f9f9;">         <td style="padding: 12px 15px;"><strong>Mariana, 32</strong></td>         <td style="padding: 12px 15px;">Cadeirante</td>         <td style="padding: 12px 15px;">Rampas falsas, banheiros inadaptados, informação visual enganosa.</td>         <td style="padding: 12px 15px;">Fotos reais e verificadas pela comunidade (na <code>tela-local</code>).</td>       </tr>       <tr style="border-bottom: 1px solid #ddd;">         <td style="padding: 12px 15px;"><strong>Eduardo, 45</strong></td>         <td style="padding: 12px 15px;">Deficiente Visual</td>         <td style="padding: 12px 15px;">Sites e apps sem rótulos (não semânticos), incompatíveis com leitores de tela.</td>         <td style="padding: 12px 15px;">Uso correto de tags ARIA e formulários acessíveis (avaliação por estrelas).</td>       </tr>       <tr style="background-color: #f9f9f9;">         <td style="padding: 12px 15px;"><strong>Ana Luiza, 27</strong></td>         <td style="padding: 12px 15px;">Deficiente Auditiva</td>         <td style="padding: 12px 15px;">Vídeos sem legendas, guias que falam de costas, falta de comunicação visual.</td>         <td style="padding: 12px 15px;">Abas de acessibilidade (ex: "Auditiva") e foco em comunicação textual (posts, avaliações).</td>       </tr>     </tbody>   </table> </div>

✨ Funcionalidades Principais (Protótipo)
O protótipo implementa 5 telas principais e diversas funcionalidades de acessibilidade e inclusão:

1. Tela Inicial: Apresenta a pesquisa principal com Busca por Voz (simulada) e filtros por tipo de deficiência (Física, Visual, Auditiva, Cognitiva).

2. Filtros de Inclusão: Expande o conceito de acessibilidade para incluir necessidades sociais e alimentares, como filtros para locais Veganos, Sem Glúten e LGBTQ+ Friendly.

3. Tela de Resultados (Responsiva):

Mobile: Permite alternar entre Mapa Colaborativo (com pins coloridos) e Modo Lista, essencial para leitores de tela.

Desktop: Exibe o Mapa e a Lista lado a lado, aproveitando o espaço da tela.

4. Tela do Local: O núcleo da confiança. Exibe fotos reais enviadas por utilizadores, notas de acessibilidade separadas por abas (Física, Visual, etc.) e um sistema de avaliação por estrelas 100% acessível (construído com input[type=radio]).

5. Tela de Comunidade: Um feed social onde utilizadores trocam dicas e relatos, criando uma rede de confiança.

6. Assistente de Acessibilidade: Um botão flutuante (FAB) que abre um modal com opções de Alto Contraste, Aumentar Fonte e Modo Leitura Simplificada (para necessidades cognitivas).

🚀 Stack Tecnológica (Protótipo)
A seleção de tecnologias foi focada na prototipagem rápida, responsividade e na demonstração de conceitos modernos de frontend.

<div style="width: 100%; overflow-x: auto;">   <table width="100%" style="border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">     <thead style="background-color: #444; color: white;">       <tr>         <th style="padding: 12px 15px; text-align: left;">Tecnologia</th>         <th style="padding: 12px 15px; text-align: left;">Propósito (Justificativa da Escolha)</th>       </tr>     </thead>     <tbody style="background-color: #fff; color: #333;">       <tr style="border-bottom: 1px solid #ddd; background-color: #f9f9f9;">         <td style="padding: 12px 15px;"><strong>HTML5</strong></td>         <td style="padding: 12px 15px;">Utilizado para a estruturação semântica do conteúdo (<code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;section&gt;</code>), fundamental para a acessibilidade e SEO.</td>       </tr>       <tr style="border-bottom: 1px solid #ddd;">         <td style="padding: 12px 15px;"><strong>CSS3 (Vanilla)</strong></td>         <td style="padding: 12px 15px;">           <strong>Design Responsivo:</strong> Adoção da abordagem <em>Mobile-First</em>, com <code>@media queries</code> para Tablet e Desktop.


          <strong>Tematização:</strong> Uso extensivo de <strong>Variáveis CSS</strong> (<code>:root</code>) para gerir o tema (cores, fontes, sombras), permitindo a funcionalidade de "Alto Contraste".         </td>       </tr>       <tr style="border-bottom: 1px solid #ddd; background-color: #f9f9f9;">         <td style="padding: 12px 15px;"><strong>JavaScript (ES6+)</strong></td>         <td style="padding: 12px 15px;">           <strong>Arquitetura SPA:</strong> Simula uma <em>Single Page Application (SPA)</em> trocando o <code>aria-hidden</code> das telas.


          <strong>Código Assíncrono:</strong> Usa <code>async/await</code> para simular chamadas de API (<code>simularChamadaAPI</code>).


          <strong>Escopo Seguro:</strong> Todo o código está encapsulado numa <strong>IIFE</strong> (Immediately Invoked Function Expression) para evitar poluição do escopo global.         </td>       </tr>       <tr style="background-color: #f9f9f9;">         <td style="padding: 12px 15px;"><strong>Mapbox GL JS</strong></td>         <td style="padding: 12px 15px;">Biblioteca de mapas escolhida para a renderização do mapa interativo, permitindo a personalização de pins e popups.</td>       </tr>     </tbody>   </table> </div>

♿ Foco em Acessibilidade e Inclusão (RNF)
Mais do que uma funcionalidade, a acessibilidade é o requisito principal do projeto. Diversas técnicas de WAI-ARIA e design inclusivo foram implementadas.

<div style="width: 100%; overflow-x: auto;">   <table width="100%" style="border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">     <thead style="background-color: #444; color: white;">       <tr>         <th style="padding: 12px 15px; text-align: left;">Tópico</th>         <th style="padding: 12px 15px; text-align: left;">Implementação</th>         <th style="padding: 12px 15px; text-align: left;">Justificativa (A quem ajuda?)</th>       </tr>     </thead>     <tbody style="background-color: #fff; color: #333;">       <tr style="border-bottom: 1px solid #ddd; background-color: #f9f9f9;">         <td style="padding: 12px 15px;"><strong>Controles de Formulário</strong></td>         <td style="padding: 12px 15px;">O seletor de estrelas (<code>#star-rating-input</code>) é um <code>&lt;fieldset&gt;</code> com <code>&lt;input type="radio"&gt;</code> ocultos e <code>&lt;label&gt;</code>s estilizados.</td>         <td style="padding: 12px 15px;">           <strong>(Ajuda Eduardo)</strong> Garante que utilizadores de leitores de tela ou teclado possam avaliar, pois <code>div</code>s ou <code>span</code>s com JavaScript (como era antes) são inacessíveis.         </td>       </tr>       <tr style="border-bottom: 1px solid #ddd;">         <td style="padding: 12px 15px;"><strong>Semântica e ARIA</strong></td>         <td style="padding: 12px 15px;">Uso extensivo de <code>aria-label</code> (para botões-ícone), <code>aria-hidden</code> (para gerir telas), <code>role="dialog"</code> e <code>aria-modal="true"</code> (para o assistente).</td>         <td style="padding: 12px 15px;">           <strong>(Ajuda Eduardo)</strong> Fornece o contexto que falta aos leitores de tela. O <code>aria-hidden="true"</code> é crucial na arquitetura SPA para focar o utilizador apenas no conteúdo da tela ativa.         </td>       </tr>       <tr style="border-bottom: 1px solid #ddd; background-color: #f9f9f9;">         <td style="padding: 12px 15px;"><strong>Acessibilidade Adaptativa</strong></td>         <td style="padding: 12px 15px;">O modal do assistente (<code>#modal-assistente</code>) ativa/desativa classes no <code>&lt;body&gt;</code> (ex: <code>.high-contrast</code>, <code>.large-font</code>, <code>.reading-mode</code>).</td>         <td style="padding: 12px 15px;">           <strong>(Ajuda Eduardo e Cognitivo)</strong> Permite ao utilizador adaptar a interface às suas necessidades visuais (alto contraste, fonte maior) ou cognitivas (modo de leitura simplificada).         </td>       </tr>       <tr style="border-bottom: 1px solid #ddd;">         <td style="padding: 12px 15px;"><strong>Navegação Alternativa</strong></td>         <td style="padding: 12px 15px;">Botão "Modo Lista" na tela de resultados e simulação de Busca por Voz.</td>         <td style="padding: 12px 15px;">           <strong>(Ajuda Eduardo e Mariana)</strong> Oferece uma alternativa linear (lista) para quem não pode interagir com o mapa visual, e uma alternativa de entrada (voz) para quem tem dificuldade de digitação.         </td>       </tr>       <tr style="background-color: #f9f9f9;">         <td style="padding: 12px 15px;"><strong>Responsividade</strong></td>         <td style="padding: 12px 15px;">Uso de <code>min-width: 44px</code> e <code>min-height: 44px</code> em controlos interativos (botões, toggles).</td>         <td style="padding: 12px 15px;">           <strong>(Ajuda Mariana/Motora)</strong> Garante que os alvos de toque (botões) sejam grandes o suficiente para serem usados com facilidade, em conformidade com as diretrizes da WCAG.         </td>       </tr>     </tbody>   </table> </div>

💡 Notas de Arquitetura (Frontend)

  1. Arquitetura SPA Simulada: O projeto não recarrega a página. Ele usa JavaScript (a função showScreen) para gerir o estado de visibilidade das diferentes "telas", alterando aria-hidden para true ou false.

  2. API Assíncrona e Robusta: A busca de dados é gerida pela função async/await. Ela chama simularChamadaAPI, que retorna uma Promise.

  3. Gestão de Carregamento e Timeout: Para prevenir loaders infinitos, o projeto utiliza:

  4. try...catch...finally: Garante que hideLoader() seja sempre chamado, mesmo que a API falhe.

  5. Promise.race: Implementa um timeout de 5 segundos, garantindo que o utilizador nunca espere indefinidamente (a simulação demora apenas 1.2s).

  6. Design Responsivo Híbrido: O CSS não é apenas "mobile". Ele deteta ecrãs de desktop e reorganiza a interface, transformando a barra de navegação inferior num menu lateral e exibindo o mapa e a lista lado a lado. O JavaScript deteta esta alteração e ajusta o seu comportamento (ex: alternarView).
