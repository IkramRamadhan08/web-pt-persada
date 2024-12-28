document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('.click', (e) => {
        const target = link.getAttribute('href');
        if (target.startsWith('#')) {
            e.preventDefault();
            document.querySelector(target)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


const productContainer = document.querySelector('.product-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollPosition = 0;

nextBtn.addEventListener('click', () => {
    const containerWidth = productContainer.offsetWidth;
    scrollPosition -= containerWidth;
    if (Math.abs(scrollPosition) >= productContainer.scrollWidth) {
        scrollPosition = 0;
    }
    productContainer.style.transform = `translateX(${scrollPosition}px)`;
});

prevBtn.addEventListener('click', () => {
    const containerWidth = productContainer.offsetWidth;
    scrollPosition += containerWidth;
    if (scrollPosition > 0) {
        scrollPosition = -(productContainer.scrollWidth - containerWidth);
    }
    productContainer.style.transform = `translateX(${scrollPosition}px)`;
});
