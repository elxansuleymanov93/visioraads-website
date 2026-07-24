// 1-dən 28-ə qədər səhifələri avtomatik yaradır
const totalPages = 28;
const catalogPages = [];

for (let i = 1; i <= totalPages; i++) {
    catalogPages.push(`assets/${i}.webp`);
}

let currentPageIndex = 0;

function openFlipbook() {
    document.getElementById('flipbook-modal').style.display = 'flex';
    updatePage();
}

function closeFlipbook() {
    document.getElementById('flipbook-modal').style.display = 'none';
}

function nextPage() {
    if (currentPageIndex < catalogPages.length - 1) {
        currentPageIndex++;
        updatePage();
    }
}

function prevPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        updatePage();
    }
}

function updatePage() {
    const imgElement = document.getElementById('catalog-image');
    const pageNumElement = document.querySelector('.page-number');
    
    imgElement.src = catalogPages[currentPageIndex];
    pageNumElement.textContent = `Səhifə ${currentPageIndex + 1} / ${catalogPages.length}`;
}

// Klaviaturadan ox düymələri ilə idarəetmə (əlavə rahatlıq)
document.addEventListener('keydown', function(event) {
    let modal = document.getElementById('flipbook-modal');
    if (modal.style.display === 'flex') {
        if (event.key === 'ArrowRight') {
            nextPage();
        } else if (event.key === 'ArrowLeft') {
            prevPage();
        } else if (event.key === 'Escape') {
            closeFlipbook();
        }
    }
});

// Pəncərədən kənara kliklədikdə bağlansın
window.onclick = function(event) {
    let modal = document.getElementById('flipbook-modal');
    if (event.target == modal) {
        closeFlipbook();
    }
}
