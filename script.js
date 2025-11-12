// Sample dramas data
const dramas = [
    {
        title: "Crash Landing on You",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Romance",
        rating: 4.8
    },
    {
        title: "Descendants of the Sun",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Romance",
        rating: 4.7
    },
    {
        title: "Goblin",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Fantasy",
        rating: 4.7
    },
    {
        title: "Itaewon Class",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Drama",
        rating: 4.6
    },
    {
        title: "Vincenzo",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Action",
        rating: 4.8
    },
    {
        title: "Start-Up",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Romance",
        rating: 4.5
    },
    {
        title: "The Glory",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Thriller",
        rating: 4.9
    },
    {
        title: "Business Proposal",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Romance",
        rating: 4.6
    },
    {
        title: "Alchemy of Souls",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Fantasy",
        rating: 4.7
    },
    {
        title: "Extraordinary Attorney Woo",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Drama",
        rating: 4.8
    }
];

// Function to create drama cards
function createDramaCard(drama) {
    return `
        <div class="drama-card">
            <img src="${drama.image}" alt="${drama.title}">
            <div class="drama-info">
                <h3>${drama.title}</h3>
                <p>Category: ${drama.category}</p>
                <p>Rating: ${drama.rating}/5.0</p>
            </div>
        </div>
    `;
}

// Function to display dramas
function displayDramas() {
    const dramaGrid = document.getElementById('featuredDramas');
    dramaGrid.innerHTML = dramas.map(createDramaCard).join('');
}

// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredDramas = dramas.filter(drama => 
        drama.title.toLowerCase().includes(searchTerm) ||
        drama.category.toLowerCase().includes(searchTerm)
    );
    const dramaGrid = document.getElementById('featuredDramas');
    dramaGrid.innerHTML = filteredDramas.map(createDramaCard).join('');
});

// Category filter functionality
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.textContent;
        const filteredDramas = dramas.filter(drama => 
            drama.category.toLowerCase() === category.toLowerCase()
        );
        const dramaGrid = document.getElementById('featuredDramas');
        dramaGrid.innerHTML = filteredDramas.map(createDramaCard).join('');
    });
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    displayDramas();
});

// Modal functionality
const trailerModal = document.getElementById('trailerModal');
const paymentModal = document.getElementById('paymentModal');
const closeButtons = document.querySelectorAll('.close-modal');
const subscribeButtons = document.querySelectorAll('.subscribe-btn');
const paymentForm = document.getElementById('paymentForm');

// Close modals when clicking the close button
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        trailerModal.style.display = 'none';
        paymentModal.style.display = 'none';
        // Stop video when closing trailer modal
        const iframe = document.getElementById('trailerVideo');
        if (iframe) {
            iframe.src = iframe.src;
        }
    });
});

// Close modals when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === trailerModal) {
        trailerModal.style.display = 'none';
        const iframe = document.getElementById('trailerVideo');
        if (iframe) {
            iframe.src = iframe.src;
        }
    }
    if (event.target === paymentModal) {
        paymentModal.style.display = 'none';
    }
});

// Handle subscription button clicks
subscribeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const plan = button.getAttribute('data-plan');
        paymentModal.style.display = 'block';
        // You can store the selected plan in a data attribute or variable
        document.getElementById('paymentForm').setAttribute('data-plan', plan);
    });
});

// Handle payment form submission
paymentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Get form values
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const plan = paymentForm.getAttribute('data-plan');
    
    // Here you would typically send this data to your payment processor
    // For demo purposes, we'll just show an alert
    alert(`Subscription successful! Plan: ${plan}\nThank you for your payment.`);
    
    // Close the modal
    paymentModal.style.display = 'none';
    
    // Reset the form
    paymentForm.reset();
});

// Function to show trailer
function showTrailer(videoId) {
    const iframe = document.getElementById('trailerVideo');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    trailerModal.style.display = 'block';
}

// Add trailer button to drama cards
function addTrailerButtons() {
    const dramaCards = document.querySelectorAll('.drama-card');
    dramaCards.forEach(card => {
        const trailerButton = document.createElement('button');
        trailerButton.className = 'trailer-btn';
        trailerButton.innerHTML = '<i class="fas fa-play"></i> Watch Trailer';
        trailerButton.addEventListener('click', () => {
            // In a real implementation, you would get the video ID from your data
            const videoId = card.getAttribute('data-trailer-id');
            if (videoId) {
                showTrailer(videoId);
            }
        });
        card.appendChild(trailerButton);
    });
}

// Call this function after loading drama cards
addTrailerButtons();

// Video card functionality
const videoCards = document.querySelectorAll('.video-card');
videoCards.forEach(card => {
    card.addEventListener('click', () => {
        const videoId = card.getAttribute('data-trailer-id');
        if (videoId) {
            showTrailer(videoId);
        }
    });
});

// Slider functionality
function slideVideos(category, direction) {
    const slider = document.querySelector(`.${category}-slider`);
    const cardWidth = slider.querySelector('.video-card').offsetWidth;
    const gap = 32; // 2rem gap between cards
    const scrollAmount = cardWidth + gap;
    
    if (direction === 'next') {
        slider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    } else {
        slider.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Initialize sliders
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.video-grid');
    sliders.forEach(slider => {
        // Add touch support
        let touchStartX = 0;
        let touchEndX = 0;

        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeDistance = touchEndX - touchStartX;
            if (Math.abs(swipeDistance) > 50) { // Minimum swipe distance
                if (swipeDistance > 0) {
                    // Swipe right - go to previous
                    slider.scrollBy({
                        left: -scrollAmount,
                        behavior: 'smooth'
                    });
                } else {
                    // Swipe left - go to next
                    slider.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth'
                    });
                }
            }
        }
    });
}); 