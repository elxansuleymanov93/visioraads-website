// 1-dən 28-ə qədər səhifələri avtomatik düzəldir və əvvəlinə 0 qoyur (01, 02... 28)
const totalPages = 28;
const catalogPages = [];

for (let i = 1; i <= totalPages; i++) {
    // 10-dan kiçik rəqəmlərin əvvəlinə '0' əlavə edir (məs: 1 -> 01)
    let fileName = i < 10 ? `0${i}.webp` : `${i}.webp`;
    catalogPages.push(`assets/pages/${fileName}`);
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

// Klaviaturadan ox düymələri ilə idarəetmə
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
