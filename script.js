// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animação do header ao rolar a página
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Rolando para baixo
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Rolando para cima
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Formulário de contato
const form = document.querySelector('.contato-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aqui você pode adicionar a lógica para enviar o formulário
        const formData = new FormData(this);
        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
        form.reset();
    });
}

// Animação de fade-in para elementos quando aparecem na tela
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elementos para animar
const animateElements = document.querySelectorAll('.produto-card, .valor, .sobre-content, .contato-container');
animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
});

// Classe para elementos que aparecem na tela
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        header.scroll-down {
            transform: translateY(-100%);
        }
        
        header.scroll-up {
            transform: translateY(0);
        }
        
        header {
            transition: transform 0.3s ease-in-out;
        }
    </style>
`);

// Dados do menu
const menuItems = {
    cafe: [
        {
            name: 'Cappuccino',
            description: 'Café com leite vaporizado e espuma',
            price: 8.00,
            image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=2070'
        },
        {
            name: 'Latte',
            description: 'Café com leite cremoso',
            price: 7.50,
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069'
        },
        {
            name: 'Café Coado',
            description: 'Café filtrado no método tradicional',
            price: 5.00,
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070'
        }
    ]
};

// Carrinho de compras
let cart = [];

// Funções do carrinho
function addToCart(name, price, image) {
    cart.push({ name, price, image });
    updateCartCount();
    updateCartItems();
    
    // Feedback visual
    const notification = document.createElement('div');
    notification.className = 'add-to-cart-notification';
    notification.textContent = 'Item adicionado ao carrinho!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

function updateCartItems() {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total span');
    let total = 0;

    cartItems.innerHTML = cart.map(item => {
        total += item.price;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">R$ ${item.price.toFixed(2)}</p>
                </div>
            </div>
        `;
    }).join('');

    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
}

// Inicializar menu
function initializeMenu() {
    const menuGrid = document.querySelector('.menu-grid');
    const categoryBtns = document.querySelectorAll('.category-btn');

    function displayMenuItems(category) {
        const items = menuItems[category];
        const menuItemsContainer = document.querySelector('.menu-items');
        
        menuItemsContainer.innerHTML = items.map(item => `
            <div class="menu-item" data-aos="fade-up">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span class="price">R$ ${item.price.toFixed(2)}</span>
                    <button class="add-to-cart" onclick="addToCart('${item.name}', ${item.price}, '${item.image}')">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                </div>
            </div>
        `).join('');
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayMenuItems(btn.dataset.category);
        });
    });

    // Mostrar cafés por padrão
    displayMenuItems('cafe');
}

// Carrinho lateral
function initializeCart() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const closeCart = document.querySelector('.close-cart');
    const checkoutBtn = document.querySelector('.checkout-btn');

    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
        document.body.style.overflow = 'auto';
    });

    // Fechar carrinho ao clicar fora
    document.addEventListener('click', (e) => {
        if (cartSidebar.classList.contains('open') && 
            !cartSidebar.contains(e.target) && 
            !cartIcon.contains(e.target)) {
            cartSidebar.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });

    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Seu carrinho está vazio!');
            return;
        }
        
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        alert(`Total do pedido: R$ ${total.toFixed(2)}\nObrigado pela compra!`);
        cart = [];
        updateCartCount();
        updateCartItems();
        cartSidebar.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
}

// Newsletter
function initializeNewsletter() {
    const form = document.querySelector('.newsletter-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input');
        const email = emailInput.value;
        
        if (!email) {
            alert('Por favor, insira seu e-mail.');
            return;
        }

        const button = form.querySelector('button');
        const originalText = button.textContent;
        button.innerHTML = 'Enviando... <span class="loading-spinner"></span>';
        button.disabled = true;

        // Simular envio
        setTimeout(() => {
            alert(`Obrigado por se inscrever! Em breve você receberá nossas novidades no email: ${email}`);
            form.reset();
            button.innerHTML = originalText;
            button.disabled = false;
        }, 1500);
    });
}

// Botão Voltar ao Topo
function initializeBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Mapa
function initializeMap() {
    const map = L.map('mapa').setView([-23.550520, -46.633308], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([-23.550520, -46.633308])
        .addTo(map)
        .bindPopup('Cheirinho de Ouro - Loja Principal')
        .openPopup();
}

// Inicializar tudo quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    initializeCart();
    initializeNewsletter();
    initializeBackToTop();
    initializeMap();
});
