(() => {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTAwM3IzMnBvM3Q1a2RmcGoifQ.pB6VBzFfCsOFZcUFG5KOb2g';         
        const dbLocais = [
            {
                id: 'hotel1',
                nome: 'Hotel Palace',
                categoria: 'hotel',
                pin: 'green',
                tags: ['hotel', 'gramado', 'hotel palace', 'luxo', 'vegano'],
                coords: [-50.879, -29.377], 
                fotos: {
                    principal: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDN8fGFjY2Vzc2libGUlMjBob3RlbHxlbnwwfHx8fDE3MTI5NjQ4MDh8MA&ixlib.rb-4.0.3&q=80&w=1080',
                    user: [
                        { img: 'https://images.unsplash.com/photo-1596701062351-8c2c14016b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDEwfHxhY2Nlc3NpYmxlJTIwYmF0aHJvb218ZW58MHx8fHwxNzEyOTY0OTM3fDA&ixlib.rb-4.0.3&q=80&w=1080', legenda: '✅ Banheiro Verificado', alt: 'Foto real do banheiro adaptado, mostrando barras de apoio e espaço de manobra.' },
                        { img: 'https://images.unsplash.com/photo-1598928616550-60b8a1a4561a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDV8fGFjY2Vzc2libGUlMjByYW1wfGVufDB8fHx8fDE3MTI5NjQ5Njd8MA&ixlib.rb-4.0.3&q=80&w=1080', legenda: '✅ Rampa Verificada', alt: 'Foto real da rampa de entrada com inclinação suave.' }
                    ]
                },
                verificacoes: 12,
                avaliacoes: [
                    { nota: 5, texto: "Perfeito! O banheiro era 100% adaptado." },
                    { nota: 4, texto: "Ótimo, mas a porta do elevador é um pouco pesada." }
                ],
                acessibilidade: {
                    fisica: { nota: 5, resumo: '"A rampa é perfeita e o elevador é largo. O banheiro do quarto é 100% adaptado."', itens: ['✅ Rampa de entrada s/ degraus', '✅ Elevador espaçoso', '✅ Quarto com portas largas (90cm)', '✅ Banheiro com barras e cadeira de banho'] },
                    auditiva: { nota: 4, resumo: '"Equipe atenciosa, usam chat para comunicar. TV com closed caption."', itens: ['✅ Funcionários se comunicam por texto/chat.', '✅ Cardápio digital com QR Code.', '✅ TV com Closed Caption.', '❌ Alarme de incêndio apenas sonoro.'] },
                    visual: { nota: 3, resumo: '"Tem cardápio em Braille, mas o site do hotel é péssimo para leitor de tela."', itens: ['✅ Cardápio em Braille disponível.', '✅ Guias em áudio para tour.', '✅ Sinalização tátil no lobby.', '❌ Site do hotel não é acessível.'] },
                    cognitiva: { nota: 4, resumo: '"Ambiente tranquilo e bem sinalizado, com pictogramas claros nos corredores."', itens: ['✅ Sinalização clara com pictogramas.', '✅ Ambiente silencioso no lobby.', '✅ Equipe treinada para atendimento paciente.', '✅ Opção de "Não Incomode" visual.'] }
                },
                inclusao: {
                    vegano: true,
                    glutenFree: true,
                    lgbtFriendly: true
                }
            },
            {
                id: 'museu1',
                nome: 'Museu da Cidade',
                categoria: 'turismo',
                pin: 'red',
                tags: ['museu', 'cidade', 'turismo', 'ouro preto', 'história'],
                coords: [-43.512, -20.385], 
                fotos: {
                    principal: 'https://images.unsplash.com/photo-1583410657077-4171e5d36b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDN8fG9sZCUyMG11c2V1bXxlbnwwfHx8fDE3MTI5NjUxNzJ8MA&ixlib.rb-4.0.3&q=80&w=1080',
                    user: [
                        { img: 'https://images.unsplash.com/photo-1505527184633-060172d5fe06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDR8fG11c2V1bSUyMHN0YWlyc3xlbnwwfHx8fDE3MTI5NjUyMDV8MA&ixlib.rb-4.0.3&q=80&w=1080', legenda: '❌ Escadaria na entrada', alt: 'Escadaria principal do museu sem rampa.' }
                    ]
                },
                verificacoes: 3,
                avaliacoes: [{ nota: 1, texto: "Impossível para cadeirante. A ‘rampa’ que o site diz ter é nos fundos e estava trancada." }],
                acessibilidade: {
                    fisica: { nota: 1, resumo: '"Impossível para cadeirante. A ‘rampa’ que o site diz ter é nos fundos e estava trancada."', itens: ['❌ Entrada principal com 10 degraus.', '❌ Elevador quebrado.', '❌ Banheiro adaptado usado como depósito.'] },
                    auditiva: { nota: 2, resumo: '"Vídeos sem legenda, guias falam muito rápido."', itens: ['❌ Vídeos institucionais sem legenda.', '❌ Guias não têm treinamento em Libras.'] },
                    visual: { nota: 2, resumo: '"Nenhuma peça tem descrição em áudio ou tátil."', itens: ['❌ Proibido tocar nas peças (sem réplicas táteis).', '❌ Nenhuma descrição em Braille ou audioguia.'] },
                    cognitiva: { nota: 1, resumo: '"Local muito cheio e barulhento, sem áreas de descanso."', itens: ['❌ Excesso de informação visual e sonora.', '❌ Sem áreas de descanso/silêncio.'] }
                },
                inclusao: {
                    vegano: false,
                    glutenFree: false,
                    lgbtFriendly: true
                }
            },
            {
                id: 'restaurante1',
                nome: 'Restaurante Sabor',
                categoria: 'restaurante',
                pin: 'yellow',
                tags: ['restaurante', 'sabor', 'comida', 'gramado', 'sem gluten'],
                coords: [-50.875, -29.379], 
                fotos: {
                    principal: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDJ8fHJlc3RhdXJhbnR8ZW58MHx8fHwxNzEyOTY1Mjg5fDA&ixlib.rb-4.0.3&q=80&w=1080',
                    user: [
                        { img: 'https://images.unsplash.com/photo-1560090045-3c0f562a00a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDE4fHxzdGVwJTIwYmF0aHJvb218ZW58MHx8fHwxNzEyOTY1MzIyfDA&ixlib.rb-4.0.3&q=80&w=1080', legenda: '⚠️ Banheiro com degrau', alt: 'Porta do banheiro com um pequeno degrau na entrada.' }
                    ]
                },
                verificacoes: 7,
                avaliacoes: [{ nota: 2, texto: "Dizem que é acessível, mas tem um degrau para o banheiro e as mesas são muito juntas." }],
                acessibilidade: {
                    fisica: { nota: 2, resumo: '"Dizem que é acessível, mas tem um degrau para o banheiro e as mesas são muito juntas."', itens: ['✅ Rampa de entrada OK.', '❌ Mesas muito próximas, difícil manobrar.', '❌ Banheiro com degrau na entrada.'] },
                    auditiva: { nota: 4, resumo: '"Cardápio digital via QR Code, fácil de usar."', itens: ['✅ Cardápio digital via QR Code.', '✅ Ambiente com boa iluminação para leitura labial.'] },
                    visual: { nota: 3, resumo: '"Cardápio digital funciona bem com leitor de tela, mas não há opção em Braille."', itens: ['✅ Cardápio digital (site) acessível.', '❌ Sem opção em Braille.'] },
                    cognitiva: { nota: 3, resumo: '"Música ambiente muito alta, mas cardápio tem fotos."', itens: ['✅ Cardápio com fotos dos pratos.', '❌ Música ambiente muito alta.', '❌ Pouco espaço entre as mesas.'] }
                },
                inclusao: {
                    vegano: false,
                    glutenFree: true,
                    lgbtFriendly: true
                }
            }
        ];

        let dbPosts = [
            { id: 'post1', autor: '@Mariana_Hist', data: '2 dias atrás', texto: "Pessoal, foi incrível! Ao contrário do que pensam, muitas calçadas em Gramado são boas. O 'Hotel Palace' (que achei aqui no app) foi perfeito. Fiquem longe do 'Restaurante Sabor', a rampa do banheiro é falsa...", tags: '#gramado #cadeirante #hotelacessivel', likes: 15, liked: false },
            { id: 'post2', autor: '@Edu_Dev', data: '5 dias atrás', texto: "Para quem é cego como eu, o Museu do Amanhã no RJ tem um app com audioguia excelente. Totalmente navegável. Recomendo!", tags: '#rj #audioguia #museu', likes: 22, liked: false },
            { id: 'post3', autor: '@AnaDesign', data: '1 semana atrás', texto: "Achei uma vinícola na Serra Gaúcha que oferece o tour com tablets que contêm todas as falas do guia por escrito e com vídeos em Libras. Maravilhoso!", tags: '#serragaucha #libras #deficienciaauditiva', likes: 31, liked: false },
            { id: 'post4', autor: '@LeoVeg', data: '1 semana atrás', texto: "Dica de ouro: o restaurante do Hotel Palace em Gramado tem um menu vegano completo e delicioso. E o hotel é super #lgbtfriendly. Recomendo!", tags: '#vegano #gramado #lgbtfriendly', likes: 18, liked: false }
        ];

        function simularChamadaAPI(filtros) {
            console.log("API SIMULADA: Recebido pedido com filtros:", filtros);
                const fetchPromise = new Promise((resolve, reject) => {
                const apiDelay = 1200; 

                setTimeout(() => {
                    try {
                        const locaisFiltrados = dbLocais.filter(local => {
                            const matchCategoria = filtros.categoria ? local.categoria === filtros.categoria : true;
                            
                            const matchTermo = filtros.termo ? 
                                local.tags.some(tag => tag.includes(filtros.termo)) || local.nome.toLowerCase().includes(filtros.termo) : true;
                            
                            const matchDeficiencia = filtros.deficiencia ? 
                                (local.acessibilidade[filtros.deficiencia] && local.acessibilidade[filtros.deficiencia].nota > 2) : true;
                            
                            const matchOutras = filtros.outras.length > 0 ? 
                                filtros.outras.every(filtro => local.inclusao && local.inclusao[filtro]) : true;
                            
                            return matchCategoria && matchTermo && matchDeficiencia && matchOutras;
                        });
                        
                        console.log(`API SIMULADA: Retornando ${locaisFiltrados.length} locais.`);
                        resolve(locaisFiltrados); 

                    } catch (error) {
                        console.error("API SIMULADA: Erro interno:", error);
                        reject(error);
                    }
                }, apiDelay);
            });

            const timeoutPromise = new Promise((resolve, reject) => {
                const tempoMaximo = 5000; 
                setTimeout(() => {
                    reject(new Error(`O pedido demorou mais de ${tempoMaximo / 1000} segundos! (Timeout)`));
                }, tempoMaximo);
            });

            return Promise.race([fetchPromise, timeoutPromise]);
        }

        let filtrosAtuais = { categoria: '', deficiencia: '', termo: '', outras: [] };
        let preferenciasUsuario = {};
        let gamificationStats = { avaliacoes: 0, roteiros: 0 };
        let ultimosResultadosFiltrados = [];
        let map;
        let currentMarkers = [];
        let currentLocalRating = 0; 

        const body = document.body;
        const screens = document.querySelectorAll('.screen');
        const navButtons = document.querySelectorAll('.nav-btn');
        const backButtons = document.querySelectorAll('.back-btn');

        const searchBar = document.getElementById('search-bar');
        const speechBtn = document.getElementById('speech-btn'); 
        const searchBtn = document.getElementById('search-btn');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const otherFilterButtons = document.querySelectorAll('.filter-btn-other'); 
        const categoryButtons = document.querySelectorAll('.category-btn');

        const resultadosTitulo = document.getElementById('resultados-titulo');
        const btnMapa = document.getElementById('btn-mapa');
        const btnLista = document.getElementById('btn-lista');
        const mapView = document.getElementById('map-view');
        const listView = document.getElementById('list-view');
        const mapboxMap = document.getElementById('mapbox-map');
        const listViewContainer = document.getElementById('list-view-container');
        const resultadosLoading = document.getElementById('resultados-loading');

        const localNome = document.getElementById('local-nome');
        const localFotos = document.getElementById('local-fotos');
        const localRatingOverall = document.getElementById('local-rating-overall');
        const localInclusionTags = document.getElementById('local-inclusion-tags'); 
        const tabs = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        const btnConfirmar = document.getElementById('confirm-access-btn');
        const starRatingInput = document.getElementById('star-rating-input');
        const novaAvaliacaoTexto = document.getElementById('nova-avaliacao-texto');
        const submitAvaliacaoBtn = document.getElementById('submit-avaliacao-btn');

        const btnNovoPost = document.getElementById('btn-novo-post');
        const formNovoPost = document.getElementById('form-novo-post');
        const communityFeed = document.getElementById('community-feed');
        const comunidadeLoading = document.getElementById('comunidade-loading');

        const prefToggles = document.querySelectorAll('.profile-settings .toggle-switch');
        const conquistaAvaliacoes = document.getElementById('conquista-avaliacoes');
        const conquistaRoteiros = document.getElementById('conquista-roteiros');

        const fab = document.getElementById('fab-assistente');
        const modal = document.getElementById('modal-assistente');
        const closeModal = document.getElementById('close-modal');
        const toggleContraste = document.getElementById('toggle-contraste');
        const toggleFonte = document.getElementById('toggle-fonte');
        const toggleLeitura = document.getElementById('toggle-leitura'); 
        const toggleVoz = document.getElementById('toggle-voz');

        function salvarPreferencias() {
            localStorage.setItem('acessoTripPreferencias', JSON.stringify(preferenciasUsuario));
        }

        function carregarPreferencias() {
            preferenciasUsuario = JSON.parse(localStorage.getItem('acessoTripPreferencias')) || { ultimaView: 'mapa' };
            gamificationStats = JSON.parse(localStorage.getItem('acessoTripGamification')) || { avaliacoes: 0, roteiros: 0 };

            if (preferenciasUsuario.altoContraste) {
                body.classList.add('high-contrast');
                toggleContraste.checked = true;
            }
            if (preferenciasUsuario.fonteGrande) {
                body.classList.add('large-font');
                toggleFonte.checked = true;
            }
            if (preferenciasUsuario.modoLeitura) {
                body.classList.add('reading-mode');
                toggleLeitura.checked = true;
            }

            prefToggles.forEach(toggle => {
                const prefNome = toggle.dataset.pref;
                if (prefNome && preferenciasUsuario[prefNome]) {
                    toggle.checked = true;
                }
            });
        }

        function salvarGamification() {
            localStorage.setItem('acessoTripGamification', JSON.stringify(gamificationStats));
        }

        const showLoader = (loader) => loader.classList.remove('hidden');
        const hideLoader = (loader) => loader.classList.add('hidden');
        const fakeDelay = (ms) => new Promise(res => setTimeout(res, ms));
        
        function showScreen(screenId, title) {
            let targetScreen = document.getElementById(screenId);
            
            screens.forEach(screen => {
                screen.setAttribute('aria-hidden', 'true');
            });
            
            if (targetScreen) {
                targetScreen.setAttribute('aria-hidden', 'false');
                document.title = `AcessoTrip - ${title || screenId}`;
                navButtons.forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.target === screenId);
                });
                
                const firstFocusable = targetScreen.querySelector('h1, h2');
                if (firstFocusable) {
                    firstFocusable.setAttribute('tabindex', '-1'); 
                    firstFocusable.focus();
                }

            } else {
                console.error(`Tela não encontrada: ${screenId}`);
            }
        }

        function renderizarLista(locais) {
            listViewContainer.innerHTML = '';
            if (locais.length === 0) {
                listViewContainer.innerHTML = '<li class="list-item">Nenhum local encontrado. Tente filtros diferentes.</li>';
                return;
            }
            locais.forEach(local => {
                const notaMedia = local.avaliacoes.length ? (local.avaliacoes.reduce((acc, c) => acc + c.nota, 0) / local.avaliacoes.length).toFixed(1) : 'Novo';
                const notaNum = parseFloat(notaMedia) || 0;
                const li = document.createElement('li');
                li.className = 'list-item';
                li.dataset.id = local.id;
                li.setAttribute('role', 'button');
                li.setAttribute('tabindex', '0'); 
                li.innerHTML = `
                    <h3>${local.nome} <span class="pin ${local.pin}"></span></h3>
                    <div class="stars">${'★'.repeat(Math.round(notaNum))}</span>${'☆'.repeat(5 - Math.round(notaNum))} <small>(${notaMedia})</small></div>
                    <p>${local.acessibilidade.fisica.resumo.substring(0, 70)}...</p>
                    <span class="categoria-tag">${local.categoria.charAt(0).toUpperCase() + local.categoria.slice(1)}</span>
                `;
                li.addEventListener('click', () => abrirDetalheLocal(local.id));
                li.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') abrirDetalheLocal(local.id);
                });
                listViewContainer.appendChild(li);
            });
        }

        function renderizarMapa(locais) {
            if (!map) {
                map = new mapboxgl.Map({
                    container: 'mapbox-map',
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [-46.633, -23.55], 
                    zoom: 4
                });
                map.addControl(new mapboxgl.NavigationControl());
            }

            currentMarkers.forEach(marker => marker.remove());
            currentMarkers = [];

            if (locais.length === 0) {
                map.flyTo({ center: [-46.633, -23.55], zoom: 3 });
                return;
            }

            const bounds = new mapboxgl.LngLatBounds();
            locais.forEach(local => {
                const el = document.createElement('div');
                el.className = 'map-pin-style'; 
                el.style.backgroundColor = `var(--cor-${local.pin === 'green' ? 'sucesso' : local.pin === 'yellow' ? 'alerta' : 'erro'})`;
                el.setAttribute('aria-label', `Pin: ${local.nome}`);

                const popupContent = document.createElement('div');
                popupContent.className = 'map-popup-content';
                
                const title = document.createElement('h4');
                title.textContent = local.nome;
                
                const rating = document.createElement('p');
                rating.innerHTML = `${'★'.repeat(local.acessibilidade.fisica.nota)} (Física)`;
                
                const button = document.createElement('button');
                button.className = 'popup-btn';
                button.textContent = 'Ver detalhes';
                button.dataset.id = local.id; 
                button.addEventListener('click', () => {
                    abrirDetalheLocal(local.id);
                });

                popupContent.appendChild(title);
                popupContent.appendChild(rating);
                popupContent.appendChild(button);

                const popup = new mapboxgl.Popup({ offset: 25 })
                    .setDOMContent(popupContent);

                const marker = new mapboxgl.Marker(el)
                    .setLngLat(local.coords)
                    .setPopup(popup)
                    .addTo(map);

                currentMarkers.push(marker);
                bounds.extend(local.coords);
            });

            map.fitBounds(bounds, { padding: 50, maxZoom: 15, duration: 1000 });
        }
        

        function renderizarDetalheLocal(id) {
            const local = dbLocais.find(l => l.id === id);
            if (!local) return;

            localNome.textContent = local.nome;
            localFotos.innerHTML = `<img src="${local.fotos.principal}" alt="Foto principal de ${local.nome}">`;
            
            const notaMedia = local.avaliacoes.length ? (local.avaliacoes.reduce((acc, c) => acc + c.nota, 0) / local.avaliacoes.length).toFixed(1) : 0;
            const notaNum = parseFloat(notaMedia) || 0;
            localRatingOverall.innerHTML = `
                <span class="stars">${'★'.repeat(Math.round(notaNum))}</span>${'☆'.repeat(5 - Math.round(notaNum))}
                <span>${notaMedia} (${local.avaliacoes.length} avaliações)</span>
            `;

            localInclusionTags.innerHTML = '';
            if (local.inclusao) {
                if(local.inclusao.vegano) localInclusionTags.innerHTML += `<span class="inclusion-tag">🌱 Vegano</span>`;
                if(local.inclusao.glutenFree) localInclusionTags.innerHTML += `<span class="inclusion-tag">🍞 Sem Glúten</span>`;
                if(local.inclusao.lgbtFriendly) localInclusionTags.innerHTML += `<span class="inclusion-tag">🌈 LGBTQ+ Friendly</span>`;
            }

            const getTabHtml = (tipo) => {
                const data = local.acessibilidade[tipo];
                if (!data) return '<h3>Informação não disponível</h3>';
                
                let userPhotosHtml = '';
                if (tipo === 'fisica' && local.fotos.user.length > 0) {
                    userPhotosHtml = `
                        <h4>Fotos da Comunidade (Verificadas)</h4>
                        <div class="user-photos">
                            ${local.fotos.user.map(foto => `
                                <figure>
                                    <img src="${foto.img}" alt="${foto.alt}">
                                    <figcaption>${foto.legenda}</figcaption>
                                </figure>
                            `).join('')}
                        </div>
                    `;
                }

                return `
                    <h3>Avaliação ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}: ${'★'.repeat(data.nota)}</h3>
                    <p><em>${data.resumo}</em></p>
                    <ul>${data.itens.map(item => `<li>${item}</li>`).join('')}</ul>
                    ${userPhotosHtml}
                `;
            };

            document.getElementById('tab-fisica').innerHTML = getTabHtml('fisica');
            document.getElementById('tab-auditiva').innerHTML = getTabHtml('auditiva');
            document.getElementById('tab-visual').innerHTML = getTabHtml('visual');
            document.getElementById('tab-cognitiva').innerHTML = getTabHtml('cognitiva');

            btnConfirmar.disabled = false;
            btnConfirmar.textContent = `👍 Eu estive aqui e confirmo! (${local.verificacoes} confirmações)`;
            btnConfirmar.dataset.localId = id;
            
            resetStarRating();
            novaAvaliacaoTexto.value = '';
            
            if(tabs.length > 0) {
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.classList.add('hidden'));
                
                tabs[0].classList.add('active');
                document.getElementById(tabs[0].dataset.tab).classList.remove('hidden');
            }
        }
        
        function renderizarComunidade() {
            communityFeed.innerHTML = '';
            if (dbPosts.length === 0) {
                communityFeed.innerHTML = '<p>Ainda não há posts. Seja o primeiro!</p>';
                return;
            }
            const postsOrdenados = dbPosts.sort((a, b) => (a.data.includes('Agora') ? -1 : 1));

            postsOrdenados.forEach(post => {
                const postElement = document.createElement('article');
                postElement.className = 'feed-post';
                postElement.innerHTML = `
                    <h4>${post.autor}</h4>
                    <div class="post-meta">
                        <span>${post.data}</span>
                    </div>
                    <p>${post.texto}</p>
                    <small>${post.tags}</small>
                    <button class="like-btn ${post.liked ? 'liked' : ''}" data-post-id="${post.id}" aria-label="Curtir post">
                        <span aria-hidden="true">❤️</span> <span class="like-count">${post.likes}</span>
                    </button>
                `;
                communityFeed.appendChild(postElement);
            });
            document.querySelectorAll('.like-btn').forEach(button => {
                button.addEventListener('click', handleLikePost);
            });
        }

        function renderizarPerfil() {
            conquistaAvaliacoes.textContent = gamificationStats.avaliacoes;
            conquistaRoteiros.textContent = gamificationStats.roteiros;
        }
        async function abrirResultados() {
            filtrosAtuais.termo = searchBar.value.toLowerCase();
            
            showScreen('tela-resultados', 'Resultados');
            showLoader(resultadosLoading);
            listViewContainer.innerHTML = ''; 
            
            try {
                const locaisFiltrados = await simularChamadaAPI(filtrosAtuais);
                ultimosResultadosFiltrados = locaisFiltrados;
                const cat = filtrosAtuais.categoria ? filtrosAtuais.categoria.charAt(0).toUpperCase() + filtrosAtuais.categoria.slice(1) : 'Locais';
                resultadosTitulo.textContent = `${locaisFiltrados.length} ${cat} Encontrados`;

                renderizarLista(locaisFiltrados);
                renderizarMapa(locaisFiltrados);
                
                alternarView(preferenciasUsuario.ultimaView || 'mapa');
            
            } catch (error) {
                console.error("Erro ao buscar ou renderizar resultados:", error);
                listViewContainer.innerHTML = `<li class="list-item">Ocorreu um erro ao buscar os locais: ${error.message}. Tente novamente.</li>`;
            
            } finally {
                hideLoader(resultadosLoading);
            }
        }
        
        function retornarParaResultados() {
            showScreen('tela-resultados', 'Resultados');
            const cat = filtrosAtuais.categoria ? filtrosAtuais.categoria.charAt(0).toUpperCase() + filtrosAtuais.categoria.slice(1) : 'Locais';
            resultadosTitulo.textContent = `${ultimosResultadosFiltrados.length} ${cat} Encontrados`;
            
            renderizarLista(ultimosResultadosFiltrados);
            renderizarMapa(ultimosResultadosFiltrados);
            alternarView(preferenciasUsuario.ultimaView || 'mapa');
        }

        function abrirDetalheLocal(id) {
            renderizarDetalheLocal(id);
            showScreen('tela-local', 'Detalhe do Local');
        }

        async function abrirComunidade() {
            showScreen('tela-comunidade', 'Comunidade');
            showLoader(comunidadeLoading);
            try {
                await fakeDelay(500); 
                renderizarComunidade();
            } catch (error) {
                console.error("Erro ao carregar comunidade:", error);
                communityFeed.innerHTML = '<p>Erro ao carregar comunidade.</p>';
            } finally {
                hideLoader(comunidadeLoading); 
            }
        }
        
        function abrirPerfil() {
            renderizarPerfil();
            showScreen('tela-perfil', 'Meu Perfil');
        }
        
        function alternarView(view) {
            const isDesktop = window.innerWidth >= 1024;

            if (isDesktop) {
                mapView.classList.remove('hidden');
                listView.classList.remove('hidden');
                if (map) map.resize();
                
                preferenciasUsuario.ultimaView = view; 
                salvarPreferencias();
                return; 
            }

            if (view === 'mapa') {
                mapView.classList.remove('hidden');
                listView.classList.add('hidden');
                btnMapa.classList.add('toggle-active');
                btnLista.classList.remove('toggle-active');
                if (map) map.resize(); 
                preferenciasUsuario.ultimaView = 'mapa';
            } else {
                mapView.classList.add('hidden');
                listView.classList.remove('hidden');
                btnLista.classList.add('toggle-active');
                btnMapa.classList.remove('toggle-active');
                preferenciasUsuario.ultimaView = 'lista';
            }
            salvarPreferencias();
        }

        searchBtn.addEventListener('click', abrirResultados);
        searchBar.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') abrirResultados();
        });

        speechBtn.addEventListener('click', () => {
            alert("Simulação de Busca por Voz:\n\n'Estou ouvindo...' (diga 'hotel acessível em gramado')");
            speechBtn.style.color = 'var(--cor-erro)'; 
            setTimeout(() => {
                const buscaSimulada = "hotel acessível em gramado";
                searchBar.value = buscaSimulada;
                alert(`Busca por voz reconheceu: "${buscaSimulada}"`);
                speechBtn.style.color = 'var(--cor-texto-secundario)';
                abrirResultados();
            }, 1000); 
        });

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                if (filtrosAtuais.deficiencia === filter) {
                    filtrosAtuais.deficiencia = '';
                    button.classList.remove('active');
                } else {
                    filtrosAtuais.deficiencia = filter;
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                }
                filtrosAtuais.categoria = ''; 
                filtrosAtuais.termo = '';
                searchBar.value = '';
                filtrosAtuais.outras = [];
                otherFilterButtons.forEach(btn => btn.classList.remove('active'));
                abrirResultados(); 
            });
        });

        otherFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                const index = filtrosAtuais.outras.indexOf(filter);
                
                if (index > -1) {
                    filtrosAtuais.outras.splice(index, 1); 
                    button.classList.remove('active');
                } else {
                    filtrosAtuais.outras.push(filter); 
                    button.classList.add('active');
                }
                
                filtrosAtuais.categoria = ''; 
                filtrosAtuais.termo = '';
                searchBar.value = '';
                abrirResultados(); 
            });
        });

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                filtrosAtuais.categoria = button.dataset.categoria;
                filtrosAtuais.termo = '';
                searchBar.value = '';
                filtrosAtuais.deficiencia = '';
                filtrosAtuais.outras = [];
                filterButtons.forEach(btn => btn.classList.remove('active'));
                otherFilterButtons.forEach(btn => btn.classList.remove('active'));
                abrirResultados();
            });
        });

        btnMapa.addEventListener('click', () => alternarView('mapa'));
        btnLista.addEventListener('click', () => alternarView('lista'));

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.dataset.tab;
                
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.classList.add('hidden')); 
                
                tab.classList.add('active');
                document.getElementById(targetTab).classList.remove('hidden'); 
            });
        });

        btnConfirmar.addEventListener('click', () => {
            const id = btnConfirmar.dataset.localId;
            const local = dbLocais.find(l => l.id === id);
            if (local && !btnConfirmar.disabled) {
                local.verificacoes++;
                btnConfirmar.textContent = `✅ Confirmado! (${local.verificacoes} confirmações)`;
                btnConfirmar.disabled = true;
            }
        });

        function resetStarRating() {
            currentLocalRating = 0;
            const radioButtons = starRatingInput.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radio => radio.checked = false);
        }

        starRatingInput.addEventListener('change', (e) => {
            if (e.target.name === 'rating') {
                currentLocalRating = parseInt(e.target.value, 10);
            }
        });

        submitAvaliacaoBtn.addEventListener('click', () => {
            const id = btnConfirmar.dataset.localId;
            const local = dbLocais.find(l => l.id === id);
            const texto = novaAvaliacaoTexto.value;

            if (currentLocalRating === 0) { alert('Por favor, selecione uma nota (de 1 a 5 estrelas).'); return; }
            if (!texto.trim()) { alert('Por favor, escreva um breve comentário.'); return; }

            local.avaliacoes.push({ nota: currentLocalRating, texto: texto });
            gamificationStats.avaliacoes++;
            salvarGamification();
            renderizarDetalheLocal(id); 
            alert('Avaliação enviada com sucesso! Obrigado por colaborar.');
        });

        function handleLikePost(e) {
            const button = e.currentTarget;
            const postId = button.dataset.postId;
            const post = dbPosts.find(p => p.id === postId);
            if (!post) return;

            post.liked = !post.liked;
            post.likes += post.liked ? 1 : -1;
            button.classList.toggle('liked', post.liked);
            button.querySelector('.like-count').textContent = post.likes;
        }

        btnNovoPost.addEventListener('click', () => {
            const isHidden = formNovoPost.classList.toggle('hidden');
            btnNovoPost.setAttribute('aria-expanded', !isHidden);
        });

        formNovoPost.addEventListener('submit', (e) => {
            e.preventDefault();
            const texto = document.getElementById('novo-post-texto').value;
            const tags = document.getElementById('novo-post-tags').value;
            if (!texto.trim()) return;

            dbPosts.unshift({
                id: `post${Date.now()}`,
                autor: '@Você (Colaborador)',
                data: 'Agora mesmo',
                texto: texto,
                tags: tags,
                likes: 0,
                liked: false
            });

            renderizarComunidade(); 
            formNovoPost.reset();
            formNovoPost.classList.add('hidden');
            btnNovoPost.setAttribute('aria-expanded', 'false');
        });

        prefToggles.forEach(toggle => {
            toggle.addEventListener('change', (e) => {
                const prefNome = e.target.dataset.pref;
                if (prefNome) {
                    preferenciasUsuario[prefNome] = e.target.checked;
                    salvarPreferencias();
                }
            });
        });

        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const target = button.dataset.target;
                if (target === 'tela-comunidade') abrirComunidade();
                else if (target === 'tela-perfil') abrirPerfil();
                else showScreen(target, button.querySelector('span:last-child').textContent);
            });
        });

        backButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const target = e.currentTarget.dataset.target;
                if (target === 'tela-resultados') {
                    retornarParaResultados(); 
                } else {
                    showScreen(target);
                }
            });
        });

        fab.addEventListener('click', () => modal.setAttribute('aria-hidden', 'false'));
        closeModal.addEventListener('click', () => modal.setAttribute('aria-hidden', 'true'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.setAttribute('aria-hidden', 'true');
        });

        toggleContraste.addEventListener('change', (e) => {
            preferenciasUsuario.altoContraste = e.target.checked;
            body.classList.toggle('high-contrast', e.target.checked);
            salvarPreferencias();
        });

        toggleFonte.addEventListener('change', (e) => {
            preferenciasUsuario.fonteGrande = e.target.checked;
            body.classList.toggle('large-font', e.target.checked);
            salvarPreferencias();
        });

        toggleLeitura.addEventListener('change', (e) => {
            preferenciasUsuario.modoLeitura = e.target.checked;
            body.classList.toggle('reading-mode', e.target.checked);
            salvarPreferencias();
        });

        toggleVoz.addEventListener('change', (e) => {
            alert(`Modo Voz (Simulação) ${e.target.checked ? 'Ativado' : 'Desativado'}`);
        });
        
        function inicializarApp() {
            carregarPreferencias();
            showScreen('tela-inicial', 'Início');
        }

        inicializarApp();

    });
})(); 