// Array para armazenar os feedbacks (simulando um banco de dados)
let feedbacks = [];

// Array de imagens aleatórias para os avatares
const randomAvatars = [
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200'
];

document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackSuccess = document.getElementById('feedbackSuccess');
    const depoimentosSlider = document.querySelector('.depoimentos-slider');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Função para gerar estrelas HTML
    function generateStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += `<i class="fas fa-star${i <= rating ? '' : '-o'}"></i>`;
        }
        return stars;
    }

    // Função para exibir feedbacks
    function displayFeedbacks(filterRating = 'all') {
        depoimentosSlider.innerHTML = '';
        
        const filteredFeedbacks = filterRating === 'all' 
            ? feedbacks 
            : feedbacks.filter(f => f.rating === parseInt(filterRating));

        filteredFeedbacks.forEach(feedback => {
            const randomAvatar = randomAvatars[Math.floor(Math.random() * randomAvatars.length)];
            const depoimento = document.createElement('div');
            depoimento.className = 'depoimento';
            depoimento.innerHTML = `
                <div class="rating-stars">
                    ${generateStars(feedback.rating)}
                </div>
                <div class="depoimento-content">
                    <p>"${feedback.message}"</p>
                    <div class="cliente-info">
                        <img src="${randomAvatar}" alt="${feedback.name}">
                        <h4>${feedback.name}</h4>
                    </div>
                </div>
            `;
            depoimentosSlider.appendChild(depoimento);
        });
    }

    // Event listeners para os botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayFeedbacks(button.dataset.filter);
        });
    });

    feedbackForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            rating: parseInt(document.querySelector('input[name="rating"]:checked')?.value),
            message: document.getElementById('message').value,
            date: new Date().toISOString()
        };

        try {
            // Aqui você pode adicionar a lógica para enviar os dados para um servidor
            // Por exemplo, usando fetch para enviar para uma API
            // const response = await fetch('/api/feedback', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(formData)
            // });

            // Simulando um envio bem-sucedido
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Adicionar feedback ao array local
            feedbacks.unshift(formData);

            // Atualizar a exibição dos feedbacks
            displayFeedbacks();

            // Mostrar mensagem de sucesso
            feedbackForm.style.display = 'none';
            feedbackSuccess.style.display = 'block';

            // Limpar formulário
            feedbackForm.reset();

            // Esconder mensagem de sucesso após 5 segundos
            setTimeout(() => {
                feedbackSuccess.style.display = 'none';
                feedbackForm.style.display = 'flex';
            }, 5000);

        } catch (error) {
            console.error('Erro ao enviar feedback:', error);
            alert('Ocorreu um erro ao enviar seu feedback. Por favor, tente novamente.');
        }
    });

    // Animação das estrelas
    const ratingLabels = document.querySelectorAll('.rating label');
    ratingLabels.forEach(label => {
        label.addEventListener('mouseover', () => {
            const rating = label.getAttribute('for').replace('star', '');
            highlightStars(rating);
        });
    });

    document.querySelector('.rating').addEventListener('mouseleave', () => {
        const checkedRating = document.querySelector('input[name="rating"]:checked')?.value || 0;
        highlightStars(checkedRating);
    });

    function highlightStars(rating) {
        ratingLabels.forEach(label => {
            const starRating = label.getAttribute('for').replace('star', '');
            label.style.color = starRating <= rating ? 'var(--secondary-color)' : '#ddd';
        });
    }

    // Adicionar alguns feedbacks de exemplo
    feedbacks = [
        {
            name: 'Maria Silva',
            rating: 5,
            message: 'O melhor café que já experimentei! Atendimento impecável.',
            date: '2024-03-15T10:30:00Z'
        },
        {
            name: 'João Santos',
            rating: 4,
            message: 'Café delicioso e ambiente muito agradável. Recomendo!',
            date: '2024-03-14T15:45:00Z'
        },
        {
            name: 'Ana Oliveira',
            rating: 5,
            message: 'Produto de alta qualidade e entrega rápida. Superou minhas expectativas!',
            date: '2024-03-13T09:15:00Z'
        }
    ];

    // Exibir feedbacks iniciais
    displayFeedbacks();
}); 