// Načtení aktuálního oblíbeného filmu ze sessionStorage
function loadFavoriteMovie() {
    const movie = sessionStorage.getItem('favoriteMovie');
    const textElement = document.getElementById('favoriteMovieText');
    textElement.textContent = movie ? `Váš oblíbený film: ${movie}` : "Žádný film nebyl nastaven.";
}

// Zobrazení sekce pro zobrazení filmu
function showDisplaySection() {
    document.getElementById('displaySection').classList.remove('hidden');
    document.getElementById('setSection').classList.add('hidden');
    loadFavoriteMovie();
}

// Zobrazení sekce pro nastavení filmu
function showSetSection() {
    document.getElementById('displaySection').classList.add('hidden');
    document.getElementById('setSection').classList.remove('hidden');
}

// Uložení filmu do sessionStorage
function saveFavoriteMovie() {
    const movieInput = document.getElementById('movieInput').value.trim();
    if (movieInput) {
        sessionStorage.setItem('favoriteMovie', movieInput);
        alert('Film byl uložen!');
        showDisplaySection();
    } else {
        alert('Zadejte název filmu!');
    }
}

// Inicializace
document.addEventListener('DOMContentLoaded', loadFavoriteMovie);
