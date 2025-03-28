const toggleBtn = document.getElementById('toggleBtn');
const mainNav = document.getElementById('mainNav');

// Toggle navigation menu
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('open');
    mainNav.classList.toggle('open');
});


// Array of Temple Objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
];


// Function to create temple cards
function createTempleCards(templeArray) {
    const albumSection = document.querySelector('.image-album');
    albumSection.innerHTML = ''; // Clear previous content
    
    templeArray.forEach(temple => {
        const card = document.createElement('div');
        card.className = 'temple-card';
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <article>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
            </article>
            <picture>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
            </picture>
        `;
        albumSection.appendChild(card);
    });
}

// Function to filter temples based on category
function filterTemples(category) {
    let filteredTemples = temples; // Default to all temples

    if (category === 'old') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    } else if (category === 'new') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    } else if (category === 'large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (category === 'small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
    }
    
    createTempleCards(filteredTemples);
}

// Event listeners for navigation menu items
document.querySelectorAll('#mainNav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const category = link.textContent.toLowerCase(); // Get the category from the link text
        filterTemples(category);
        
        // Update active class
        document.querySelector('#mainNav .active').classList.remove('active');
        link.classList.add('active');
    });
});

// Initial load of all temples
createTempleCards(temples);
