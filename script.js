// Navegação por abas
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remover classe active de todas as abas e seções
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
        
        // Adicionar classe active à aba clicada e seção correspondente
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// Criar estrelas para o diagrama do espaço
const spaceDiagram = document.getElementById('space-diagram');
for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = Math.random() * 3 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (Math.random() * 2 + 1) + 's';
    spaceDiagram.appendChild(star);
}

// Adicionar galáxia em expansão
const galaxy = document.createElement('div');
galaxy.classList.add('galaxy');
spaceDiagram.appendChild(galaxy);

// Criar vida marinha para o diagrama do oceano
const marineLife = document.getElementById('marine-life');
for (let i = 0; i < 8; i++) {
    const fish = document.createElement('div');
    fish.classList.add('fish');
    fish.style.bottom = Math.random() * 70 + 10 + '%';
    fish.style.animationDelay = Math.random() * 10 + 's';
    fish.style.animationDuration = (Math.random() * 10 + 10) + 's';
    marineLife.appendChild(fish);
}

// Criar nuvens e pássaros para o diagrama do céu
const skyDiagram = document.getElementById('sky-diagram');
for (let i = 0; i < 5; i++) {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloud.style.width = Math.random() * 80 + 40 + 'px';
    cloud.style.height = Math.random() * 40 + 20 + 'px';
    cloud.style.top = Math.random() * 40 + 10 + '%';
    cloud.style.animationDelay = Math.random() * 10 + 's';
    cloud.style.animationDuration = (Math.random() * 10 + 15) + 's';
    skyDiagram.appendChild(cloud);
}

for (let i = 0; i < 3; i++) {
    const bird = document.createElement('div');
    bird.classList.add('bird');
    bird.style.top = Math.random() * 60 + 20 + '%';
    bird.style.animationDelay = Math.random() * 5 + 's';
    bird.style.animationDuration = (Math.random() * 10 + 10) + 's';
    skyDiagram.appendChild(bird);
}

// Interatividade do mapa de meteoritos
const locationData = {
    antarctica: {
        title: "Antártida: A Campeã",
        info: `<p>A Antártida é o melhor lugar para encontrar meteoritos devido às condições ideais.</p>
                <div class="process-info">
                    <h4>Processo de concentração:</h4>
                    <ol>
                        <li>Meteoritos caem no gelo</li>
                        <li>Gelo flui para as bordas</li>
                        <li>Barreiras forçam o gelo a subir</li>
                        <li>Ventos expõem os meteoritos</li>
                        <li>Zonas de acumulação</li>
                    </ol>
                </div>`
    },
    deserts: {
        title: "Desertos: Segundo Melhor",
        info: `<p>Desertos são excelentes locais devido ao contraste visual.</p>
                <div class="process-info">
                    <h4>Vantagens:</h4>
                    <ul>
                        <li>Bom contraste visual</li>
                        <li>Baixa umidade</li>
                        <li>Pouca vegetação</li>
                    </ul>
                </div>`
    },
    other: {
        title: "Outras Áreas: Baixa Probabilidade",
        info: `<p>Em outras partes, a probabilidade é significativamente menor.</p>
                <div class="process-info">
                    <h4>Desvantagens:</h4>
                    <ul>
                        <li>Vegetação dificulta visualização</li>
                        <li>Intempéries degradam meteoritos</li>
                        <li>Atividades humanas</li>
                    </ul>
                </div>`
    }
};

// Elementos DOM para meteoritos
const titleEl = document.getElementById('location-title');
const infoEl = document.getElementById('location-info');
const antEl = document.getElementById('antarctica');
const desEl = document.getElementById('deserts');
const othEl = document.getElementById('other');

// Função para atualizar informações
function updateInfo(location) {
    titleEl.textContent = locationData[location].title;
    infoEl.innerHTML = locationData[location].info;
}

// Função para destacar continente
function highlight(continent) {
    [antEl, desEl, othEl].forEach(el => {
        el.style.boxShadow = 'none';
        el.style.border = '2px solid transparent';
    });
    continent.style.boxShadow = '0 0 20px rgba(79, 195, 247, 0.7)';
    continent.style.border = '3px solid var(--secondary)';
}

// Event listeners para os continentes
antEl.addEventListener('click', () => {
    updateInfo('antarctica');
    highlight(antEl);
});

desEl.addEventListener('click', () => {
    updateInfo('deserts');
    highlight(desEl);
});

othEl.addEventListener('click', () => {
    updateInfo('other');
    highlight(othEl);
});

// Inicializar
updateInfo('antarctica');
highlight(antEl);

// Sistema de curiosidades renovadas diariamente
const curiosities = {
    earth: [
        "A Terra não é uma esfera perfeita - é um 'esferoide oblato', ligeiramente achatada nos polos.",
        "O ponto mais profundo da Terra é a Fossa das Marianas, com cerca de 11.000 metros de profundidade.",
        "A maior parte do oxigênio da Terra vem dos oceanos, produzido pelo fitoplâncton.",
        "A Terra já foi uma 'bola de neve' há 650-700 milhões de anos.",
        "Os continentes estão em movimento constante - as placas tectônicas se movem alguns centímetros por ano.",
        "O lugar mais seco da Terra está na Antártida - os Vales Secos de McMurdo."
    ],
    space: [
        "O Sol corresponde a 99,86% de toda a massa do Sistema Solar.",
        "Mercúrio está encolhendo - continua a se resfriar desde sua formação.",
        "Vênus é mais quente que Mercúrio devido ao efeito estufa.",
        "Marte tem o maior vulcão do Sistema Solar - o Monte Olympus.",
        "Júpiter funciona como um 'guarda-costas' da Terra.",
        "A Lua está se afastando da Terra a 3,8 cm por ano."
    ],
    ocean: [
        "O oceano cobre 71% da superfície da Terra e contém 97% de toda a água.",
        "A maior cadeia de montanhas da Terra está no fundo do oceano.",
        "O ponto mais profundo do oceano é a Fossa das Marianas (11.000m).",
        "Mais de 80% do oceano permanece inexplorado.",
        "A Grande Barreira de Corais é a maior estrutura viva do planeta.",
        "As marés são causadas pela atração gravitacional da Lua e do Sol.",
        "A corrente do Golfo ajuda a regular o clima da Europa.",
        "O fitoplâncton marinho produz mais de 50% do oxigênio da Terra.",
        "O oceano absorve 30% do CO₂ atmosférico.",
        "A água do mar contém em média 3,5% de sal."
    ],
    sky: [
        "O ar é composto de nitrogênio (78%) e oxigênio (21%).",
        "A atmosfera da Terra se estende por até 10.000 km.",
        "O céu é azul devido à dispersão de Rayleigh.",
        "Os ventos são causados por diferenças de pressão.",
        "A camada de ozônio protege contra radiação UV.",
        "A pressão atmosférica ao nível do mar é de 1 kg/cm².",
        "O ar tem peso - uma coluna de ar pesa cerca de 1 kg.",
        "A umidade relativa indica a quantidade de vapor d'água.",
        "A temperatura do ar diminui 6,5°C a cada 1.000m.",
        "O som precisa do ar para se propagar."
    ],
    meteorites: [
        "A Antártida concentra 60% dos meteoritos encontrados.",
        "Desertos são o segundo melhor lugar para encontrar meteoritos.",
        "Meteoritos são cápsulas do tempo do Sistema Solar.",
        "O maior meteorito é o Hoba, pesando 60 toneladas.",
        "Alguns meteoritos vieram da Lua e de Marte.",
        "O meteorito Chelyabinsk liberou energia de 30 bombas atômicas."
    ]
};

// Função para obter um índice baseado na data atual
function getDailyIndex(category, totalItems) {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    
    // Usar uma combinação de ano e dia do ano para variar o índice
    const seed = today.getFullYear() * 366 + dayOfYear;
    
    // Gerar um índice pseudo-aleatório baseado na categoria e data
    let hash = 0;
    for (let i = 0; i < category.length; i++) {
        hash = ((hash << 5) - hash) + category.charCodeAt(i);
        hash = hash & hash; // Converte para inteiro de 32 bits
    }
    
    return Math.abs((seed * hash) % totalItems);
}

// Função para selecionar curiosidades únicas para uma categoria
function selectCuriosities(category, count) {
    const allCuriosities = curiosities[category];
    const selectedIndices = new Set();
    const selectedCuriosities = [];
    
    // Selecionar índices únicos
    while (selectedIndices.size < count && selectedIndices.size < allCuriosities.length) {
        const index = getDailyIndex(category + selectedIndices.size, allCuriosities.length);
        if (!selectedIndices.has(index)) {
            selectedIndices.add(index);
            selectedCuriosities.push(allCuriosities[index]);
        }
    }
    
    return selectedCuriosities;
}

// Função para exibir curiosidades em uma seção
function displayCuriosities(category, containerId, count = 6) {
    const container = document.getElementById(containerId);
    const selectedCuriosities = selectCuriosities(category, count);
    
    container.innerHTML = '';
    
    selectedCuriosities.forEach((curiosity, index) => {
        const card = document.createElement('div');
        card.className = 'curiosity-card';
        
        card.innerHTML = `
            <h3><span class="curiosity-number">${index + 1}</span> ${curiosity.split(' - ')[0]}</h3>
            <p>${curiosity.split(' - ')[1] || curiosity}</p>
            <div class="media-container">
                <div class="media-placeholder">📷 Mídia relacionada</div>
                <div class="media-caption">Imagem ilustrativa</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Função para calcular a próxima atualização (meia-noite)
function getNextRefreshTime() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow;
}

// Função para formatar a data da próxima atualização
function formatRefreshTime(date) {
    return date.toLocaleDateString('pt-BR') + ' às ' + date.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'});
}

// Inicializar as curiosidades para cada seção
document.addEventListener('DOMContentLoaded', () => {
    // Exibir curiosidades iniciais
    displayCuriosities('earth', 'earth-curiosities');
    displayCuriosities('space', 'space-curiosities');
    displayCuriosities('ocean', 'ocean-curiosities', 10);
    displayCuriosities('sky', 'sky-curiosities', 10);
    displayCuriosities('meteorites', 'meteorites-curiosities');
    
    // Configurar informações de atualização
    const nextRefresh = getNextRefreshTime();
    document.getElementById('earth-next-refresh').textContent = formatRefreshTime(nextRefresh);
    document.getElementById('space-next-refresh').textContent = formatRefreshTime(nextRefresh);
    document.getElementById('ocean-next-refresh').textContent = formatRefreshTime(nextRefresh);
    document.getElementById('sky-next-refresh').textContent = formatRefreshTime(nextRefresh);
    document.getElementById('meteorites-next-refresh').textContent = formatRefreshTime(nextRefresh);
    
    // Verificar se é um novo dia e atualizar se necessário
    const lastUpdate = localStorage.getItem('cosmocurios-last-update');
    const today = new Date().toDateString();
    
    if (lastUpdate !== today) {
        localStorage.setItem('cosmocurios-last-update', today);
    }
});