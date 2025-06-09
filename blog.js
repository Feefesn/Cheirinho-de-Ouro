// Dados dos posts do blog
const blogPosts = [
    {
        id: 1,
        title: 'A historia do cheirinho de ouro',
        excerpt: 'Descubra os segredos desse café com qualidade de ouro',
        content: `A história da Cheirinho de Ouro começa muito antes da fundação da empresa. Ela tem raízes profundas nas lavouras de café brasileiras e no compromisso com a excelência que sempre guiou os verdadeiros apaixonados por café.

No início da década de 1950, o Brasil era o maior produtor de café do mundo, mas a colheita ainda era feita manualmente, com muito esforço e riscos para os delicados pés de café. Foi nesse contexto que surgiu uma parceria inovadora entre as fábricas alemãs Allgaier e Porsche, resultando na criação de um trator revolucionário: o Allgaier P 312 System Porsche.

Esse trator foi projetado especialmente para as plantações de café brasileiras, com uma carroceria aerodinâmica e um motor a gasolina – uma decisão técnica importante para evitar a contaminação dos grãos com o cheiro forte e os gases do diesel. Leve e delicado no manuseio, o P 312 permitia a colheita dos grãos com o mínimo impacto, protegendo tanto os pés quanto o sabor do café. Apenas cerca de 220 unidades foram produzidas e enviadas ao Brasil, tornando-se verdadeiras joias da história agrícola nacional.

Inspirados por esse espírito pioneiro, os fundadores da Cheirinho de Ouro decidiram honrar essa herança. A empresa nasceu com a missão de preservar a essência do café brasileiro – um produto que representa o suor de gerações, a riqueza da nossa terra e o cuidado no cultivo e na colheita.

A marca carrega no nome a lembrança do aroma inconfundível que marca o início de cada dia: o cheirinho de café recém-passado, o verdadeiro ouro líquido que aquece a alma. E mais do que aroma e sabor, o Cheirinho de Ouro representa respeito: à história, à tradição e à natureza.

Hoje, cada grão selecionado pela Cheirinho de Ouro passa por processos modernos, sustentáveis e controlados, sem perder a essência artesanal herdada daqueles primeiros tempos. O cuidado com o cultivo, a colheita e a torra reflete o mesmo zelo que motivou a criação do trator P 312: valorizar o café em sua forma mais pura e preservar tudo aquilo que o torna especial.

Assim, quando você saboreia uma xícara de Cheirinho de Ouro, está degustando mais que um café. Está provando uma história que começou no campo, atravessou gerações e chega até você com o mesmo compromisso: entregar um café autêntico, de qualidade excepcional e profundamente brasileiro.`,
        image: 'images/blog/ee866b45-3c9e-4111-8f86-55c5bbc017c3.jfif',
        author: 'Bianca',
        date: '2024-03-15',
        tags: ['café coado', 'técnicas', 'preparação']
    },
    {
        id: 2,
        title: 'A equipe de marketing',
        excerpt: 'A equipe de marketing não é responsável apenas por criar campanhas de marketing para a empresa, mas mostrar a magia desse café',
        content: `Nos anos 1950, o Brasil deu um passo importante rumo à modernização da colheita do café com a chegada de um equipamento especial: o Allgaier P 312 System Porsche. Mais do que um trator, ele foi um símbolo de inovação. Projetado com precisão alemã especialmente para as plantações de café do Brasil, esse trator cuidava do café com leveza e respeito. Seu motor a gasolina e sua estrutura aerodinâmica permitiam uma colheita mais delicada, sem comprometer o sabor ou o aroma dos grãos – algo essencial para a qualidade do nosso produto mais valioso.

Foi com esse mesmo espírito – o de inovar sem perder a essência – que nasceu a Cheirinho de Ouro.

Nossa missão vai muito além de oferecer um café saboroso. Nós entregamos uma experiência sensorial que começa no aroma, envolve o paladar e desperta memórias afetivas. Somos uma marca que valoriza a procedência, o cuidado com cada etapa da produção e, principalmente, o respeito por quem cultiva e por quem consome.

Para vocês, que têm a responsabilidade de levar essa mensagem ao mundo, é fundamental entender que o marketing da Cheirinho de Ouro não se baseia apenas em campanhas e slogans. Ele se sustenta na conexão emocional com o público. Cada postagem, cada rótulo, cada anúncio precisa carregar a nossa verdade: a de que estamos preservando e celebrando o que há de mais precioso no café brasileiro.

Somos herdeiros de um legado que começou nas lavouras e atravessou gerações. Hoje, temos à nossa disposição as ferramentas e os canais que nossos antepassados nem poderiam imaginar. Mas o desafio é o mesmo: honrar o valor do café e contar sua história com autenticidade.

Queremos que cada pessoa que entrar em contato com nossa marca sinta o mesmo que sentimos ao abrir um pacote de Cheirinho de Ouro: orgulho, acolhimento e qualidade.`,
        image: 'images/blog/equipe-marketing.jpg.jpeg',
        author: 'sthefanny',
        date: '2024-03-14',
        tags: ['grãos', 'qualidade', 'origem']
    },
    {
        id: 3,
        title: 'Como preparamos o café de ouro',
        excerpt: 'Entenda como fazemos a acontecer esse café com qualidade de ouro',
        content: `Preparar um café perfeito é uma arte que combina técnica, conhecimento e paixão. Neste guia completo, vamos te mostrar como transformar grãos de café em uma experiência sensorial única.

Primeiro, vamos falar sobre a importância da moagem. O tamanho do grão moído afeta diretamente o sabor do seu café. Para café coado, recomendamos uma moagem média, que permite uma extração equilibrada dos sabores.

A proporção água/café é crucial. A regra de ouro é usar 60g de café para cada litro de água. Isso garante uma concentração ideal de sabores.

A temperatura da água também é fundamental. O ideal é entre 90°C e 96°C. Água muito quente pode extrair sabores amargos indesejados, enquanto água muito fria não extrai todos os sabores.

O tempo de extração deve ser entre 3 e 4 minutos para café coado. Isso permite que todos os sabores sejam extraídos de forma harmoniosa.

Por fim, não se esqueça de pré-aquecer o filtro e a xícara. Isso mantém a temperatura ideal do café por mais tempo.

Com essas dicas e um pouco de práticavideos/cafe-perfeito.mp4, você estará preparando cafés dignos de barista profissional em casa!`,
        video: 'videos/cafe-perfeito.mp4', // Caminho para o vídeo local
        author: 'Chef Café',
        date: '2024-03-16',
        tags: ['técnicas', 'preparação', 'dicas']
    }
];

// Função para exibir os posts do blog
function displayBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    blogGrid.innerHTML = blogPosts.map(post => `
        <article class="blog-card" data-post-id="${post.id}">
            ${post.video ? `
                <div class="video-container">
                    <video controls>
                        <source src="${post.video}" type="video/mp4">
                        Seu navegador não suporta a tag de vídeo.
                    </video>
                </div>
            ` : `
                <img src="${post.image}" alt="${post.title}">
            `}
            <div class="blog-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-meta">
                    <span class="author"><i class="fas fa-user"></i> ${post.author}</span>
                    <span class="date"><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
                </div>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
                <a href="#" class="read-more" onclick="openBlogPost(${post.id}); return false;">Ler mais</a>
            </div>
        </article>
    `).join('');
}

// Função para formatar a data
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
}

// Função para abrir post completo
function openBlogPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    const modal = document.createElement('div');
    modal.className = 'blog-modal';
    modal.innerHTML = `
        <div class="blog-modal-content">
            <button class="close-modal"><i class="fas fa-times"></i></button>
            ${post.video ? `
                <div class="video-container">
                    <video controls>
                        <source src="${post.video}" type="video/mp4">
                        Seu navegador não suporta a tag de vídeo.
                    </video>
                </div>
            ` : `
                <img src="${post.image}" alt="${post.title}">
            `}
            <h2>${post.title}</h2>
            <div class="blog-meta">
                <span class="author"><i class="fas fa-user"></i> ${post.author}</span>
                <span class="date"><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
            </div>
            <div class="blog-tags">
                ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
            <div class="blog-full-content">
                ${post.content}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Fechar modal
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        modal.remove();
        document.body.style.overflow = 'auto';
    });

    // Fechar ao clicar fora do conteúdo
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    });
}

// Inicializar blog quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    displayBlogPosts();
}); 