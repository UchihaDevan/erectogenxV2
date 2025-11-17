// Função para selecionar produto
function selectProduct(productId) {
    console.log('Produto selecionado:', productId);
    
    // Aqui você pode adicionar a lógica para processar a compra
    // Por exemplo, redirecionar para página de checkout
    alert('Redirecionando para finalizar sua compra do ' + productId.replace('-', ' ') + '...');
    
    // Exemplo de redirecionamento (descomente e ajuste a URL conforme necessário)
    // window.location.href = 'checkout.html?product=' + productId;
}

// Função para rolar até a seção de produtos
function scrollToProducts() {
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
        productsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Alerta ao tentar sair da página
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = 'Aguarde! Seu pedido ainda não foi concluído. Tem certeza que deseja sair?';
    return e.returnValue;
});

// Animação de entrada dos elementos ao scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.benefit-card, .product-card, .bonus-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });
}

// Contador de tempo na página (opcional - para analytics)
let timeOnPage = 0;
setInterval(() => {
    timeOnPage++;
    // Você pode enviar esse dado para analytics
    console.log('Tempo na página:', timeOnPage, 'segundos');
}, 1000);

// Destacar o card mais popular
function highlightBestChoice() {
    const featuredCard = document.querySelector('.product-card.featured');
    if (featuredCard) {
        setInterval(() => {
            featuredCard.style.boxShadow = '0 25px 50px -12px rgba(248, 181, 0, 0.5)';
            setTimeout(() => {
                featuredCard.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            }, 1000);
        }, 3000);
    }
}

// Simular clique no vídeo (você pode integrar com player real)
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.play-button');
    const videoPlaceholder = document.querySelector('.video-placeholder');
    
    if (playButton && videoPlaceholder) {
        playButton.addEventListener('click', function() {
            alert('Aqui você pode integrar um player de vídeo real (YouTube, Vimeo, etc.)');
            // Exemplo de integração com YouTube:
            // videoPlaceholder.innerHTML = '<iframe width="100%" height="450" src="https://www.youtube.com/embed/SEU_VIDEO_ID" frameborder="0" allowfullscreen></iframe>';
        });
    }
    
    // Iniciar animações
    animateOnScroll();
    highlightBestChoice();
});

// Função para adicionar efeito de urgência
function addUrgencyEffect() {
    const urgencyBar = document.querySelector('.urgency-bar');
    if (urgencyBar) {
        let isRed = true;
        setInterval(() => {
            if (isRed) {
                urgencyBar.style.background = 'linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)';
            } else {
                urgencyBar.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
            }
            isRed = !isRed;
        }, 2000);
    }
}

// Iniciar efeito de urgência
addUrgencyEffect();

// Rastreamento de cliques nos CTAs (para analytics)
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;
        console.log('CTA clicado:', buttonText);
        // Aqui você pode enviar dados para Google Analytics, Facebook Pixel, etc.
    });
});

// Função para detectar quando o usuário tenta sair da página
document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0) {
        console.log('Usuário tentou sair da página');
        // Aqui você pode mostrar um popup de última chance
        // Por exemplo: mostrar um modal com oferta especial
    }
});

// Smooth scroll para todos os links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
