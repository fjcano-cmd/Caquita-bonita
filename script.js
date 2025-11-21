// Mock Data
const ads = [
    {
        id: 1,
        title: "Vintage Film Camera - Mint Condition",
        price: "€250",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
        location: "Madrid, ES",
        user: "Alex M.",
        posted: "2h ago"
    },
    {
        id: 2,
        title: "MacBook Pro M1 2021 - 16GB RAM",
        price: "€1,200",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
        location: "Barcelona, ES",
        user: "Sarah J.",
        posted: "5h ago"
    },
    {
        id: 3,
        title: "Modern Lounge Chair - Mid Century",
        price: "€450",
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
        location: "Valencia, ES",
        user: "David R.",
        posted: "1d ago"
    },
    {
        id: 4,
        title: "Electric Scooter - Xiaomi Pro 2",
        price: "€300",
        category: "Vehicles",
        image: "https://images.unsplash.com/photo-1626668020738-24564524319e?auto=format&fit=crop&w=800&q=80",
        location: "Seville, ES",
        user: "Maria G.",
        posted: "3h ago"
    },
    {
        id: 5,
        title: "Mechanical Keyboard - Custom Build",
        price: "€180",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
        location: "Bilbao, ES",
        user: "Tom H.",
        posted: "6h ago"
    },
    {
        id: 6,
        title: "Leather Weekend Bag - Handmade",
        price: "€120",
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
        location: "Malaga, ES",
        user: "Elena P.",
        posted: "4h ago"
    }
];

const categories = ["All", "Electronics", "Furniture", "Vehicles", "Fashion", "Photography"];

// DOM Elements
const adsGrid = document.getElementById('ads-grid');
const categoryContainer = document.getElementById('category-filters');
const searchInput = document.querySelector('.search-input');

// Render Categories
function renderCategories() {
    categoryContainer.innerHTML = categories.map((cat, index) => `
        <button class="category-pill ${index === 0 ? 'active' : ''}" onclick="filterAds('${cat}')">
            ${cat}
        </button>
    `).join('');
}

// Render Ads
function renderAds(adsToRender) {
    adsGrid.innerHTML = adsToRender.map(ad => `
        <article class="ad-card">
            <div class="ad-image-container">
                <img src="${ad.image}" alt="${ad.title}" class="ad-image">
                <span class="ad-badge">${ad.category}</span>
            </div>
            <div class="ad-content">
                <div class="ad-price">${ad.price}</div>
                <h3 class="ad-title">${ad.title}</h3>
                <div class="ad-meta">
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    ${ad.location} • ${ad.posted}
                </div>
                <div class="ad-footer">
                    <div class="user-info">
                        <div class="user-avatar"></div>
                        <span class="user-name">${ad.user}</span>
                    </div>
                    <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.875rem;">
                        Details
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

// Filter Functionality
window.filterAds = (category) => {
    // Update active state
    document.querySelectorAll('.category-pill').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.trim() === category);
    });

    // Filter data
    const filtered = category === 'All'
        ? ads
        : ads.filter(ad => ad.category === category);

    renderAds(filtered);
};

// Search Functionality
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = ads.filter(ad =>
        ad.title.toLowerCase().includes(term) ||
        ad.category.toLowerCase().includes(term)
    );
    renderAds(filtered);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderAds(ads);
});
