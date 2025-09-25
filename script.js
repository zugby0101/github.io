// Curiosidades para a página inicial
const dailyCuriosities = [
    "A Terra não é uma esfera perfeita - é ligeiramente achatada nos polos",
    "O Sol corresponde a 99.86% de toda a massa do Sistema Solar",
    "Mais de 80% do oceano permanece inexplorado pela humanidade",
    "O ar que respiramos é composto principalmente de nitrogênio (78%)",
    "A Antártida concentra 60% de todos os meteoritos encontrados na Terra"
];

// Curiosidades completas para cada página
const allCuriosities = {
    terra: [
        "A Terra não é uma esfera perfeita - é um 'esferoide oblato'",
        "O ponto mais profundo da Terra é a Fossa das Marianas (11.000m)",
        "71% da superfície terrestre é coberta por água",
        "A Terra tem aproximadamente 4.5 bilhões de anos",
        "O núcleo da Terra é tão quente quanto a superfície do Sol",
        "Existem mais espécies de bactérias em uma colher de solo do que pessoas na Terra"
    ],
    espaco: [
        "O universo observável tem cerca de 93 bilhões de anos-luz de diâmetro",
        "Estima-se que existam 2 trilhões de galáxias no universo",
        "A luz do Sol leva 8 minutos e 20 segundos para chegar à Terra",
        "Júpiter funciona como um 'guarda-costas' da Terra",
        "A Lua está se afastando da Terra a 3.8 cm por ano",
        "Existem mais estrelas no universo que grãos de areia na Terra"
    ],
    mar: [
        "O oceano cobre 71% da superfície da Terra",
        "A maior cadeia de montanhas está no fundo do oceano",
        "O fitoplâncton produz mais de 50% do oxigênio da Terra",
        "A água do mar contém em média 3.5% de sal",
        "A corrente do Golfo regula o clima da Europa",
        "A Grande Barreira de Corais é visível do espaço"
    ],
    ar: [
        "A atmosfera se estende por até 10.000 km acima da superfície",
        "O céu é azul devido à dispersão da luz solar",
        "A pressão atmosférica ao nível do mar é de 1 kg/cm²",
        "A temperatura do ar diminui 6.5°C a cada 1.000m de altitude",
        "A camada de ozônio protege contra radiação UV",
        "O som precisa do ar para se propagar"
    ],
    meteoritos: [
        "A Antártida é o melhor lugar para encontrar meteoritos",
        "Desertos são o segundo melhor lugar para busca",
        "Meteoritos são cápsulas do tempo do Sistema Solar",
        "O maior meteorito encontrado pesa 60 toneladas",
        "Alguns meteoritos vieram da Lua e de Marte",
        "Cerca de 100 toneladas de material meteorítico atingem a Terra diariamente"
    ]
};

// Função para a curiosidade do dia na página inicial
function showDailyCuriosity() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const curiosityIndex = dayOfYear % dailyCuriosities.length;
    
    const curiosityElement = document.getElementById('daily-curiosity');
    if (curiosityElement) {
        curiosityElement.innerHTML = `<p>${dailyCuriosities[curiosityIndex]}</p>`;
    }
}

// Função para carregar curiosidades nas páginas específicas
function loadCuriosities(page) {
    const grid = document.getElementById('curiosities-grid');
    if (!grid) return;
    
    const curiosities = allCuriosities[page] || [];
    
    grid.innerHTML = curiosities.map((curiosity, index) => `
        <div class="curiosity-card">
            <h3><span class="curiosity-number">${index + 1}</span>${curiosity.split(' - ')[0]}</h3>
            <p>${curiosity.split(' - ')[1] || curiosity}</p>
        </div>
    `).join('');
}

// Função para criar diagramas simples
function createDiagram(type) {
    const diagram = document.getElementById('main-diagram');
    if (!diagram) return;
    
    diagram.className = `diagram ${type}-diagram`;
    
    // Adicionar elementos visuais básicos conforme o tipo
    switch(type) {
        case 'terra':
            diagram.innerHTML = '<div style="width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,#4a7b9d,#1e3a5f);margin:50px auto;animation:rotate 20s linear infinite"></div>';
            break;
        case 'espaco':
            diagram.innerHTML = '<div style="position:relative;width:100%;height:100%"><div style="width:100px;height:100px;background:radial-gradient(circle,#fff,transparent);border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);animation:pulse 3s infinite alternate"></div></div>';
            break;
        case 'mar':
            diagram.innerHTML = '<div style="position:relative;width:100%;height:100%;background:linear-gradient(to bottom,#006994,#004d73)"><div style="position:absolute;bottom:0;width:100%;height:30%;background:linear-gradient(to top,rgba(135,206,250,0.5),transparent)"></div></div>';
            break;
        case 'ar':
            diagram.innerHTML = '<div style="position:relative;width:100%;height:100%;background:linear-gradient(to bottom,#87ceeb,#4682b4)"><div style="position:absolute;top:20%;left:10%;width:80px;height:40px;background:#fff;border-radius:50%;opacity:0.8"></div></div>';
            break;
    }
}

// Inicialização da página
document.addEventListener('DOMContentLoaded', function() {
    // Página inicial
    showDailyCuriosity();
    
    // Páginas específicas - detectar qual página estamos
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '').replace('index', '');
    
    if (page && page !== 'index' && page in allCuriosities) {
        loadCuriosities(page);
        createDiagram(page);
    }
});

// Adicionar estilos de animação
const style = document.createElement('style');
style.textContent = `
    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    @keyframes pulse {
        0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.7; }
        100% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
    }
    
    @keyframes waves {
        0% { transform: translateX(0); }
        100% { transform: translateX(-20px); }
    }
`;
document.head.appendChild(style);