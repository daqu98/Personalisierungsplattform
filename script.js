
function showRecommendations() {
    const recommendations = [
        "Produkt 1 - Beste Wahl für dich",
        "Produkt 2 - Basierend auf deinem letzten Kauf",
        "Produkt 3 - Kunden, die dies kauften, kauften auch...",
    ];

    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    recommendations.forEach(function(product) {
        const li = document.createElement('li');
        li.textContent = product;
        productList.appendChild(li);
    });
}
