// Flipbook Modal funksiyaları
function openFlipbook() {
    document.getElementById('flipbook-modal').style.display = 'flex';
}

function closeFlipbook() {
    document.getElementById('flipbook-modal').style.display = 'none';
}

// Pəncərədən kənara kliklədikdə də bağlansın
window.onclick = function(event) {
    let modal = document.getElementById('flipbook-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
