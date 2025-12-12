// Date affichée actuellement (1er jour du mois)
let currentMonth = new Date(2025, 5, 1);  // Juin 2025 (mois commence à 0 = janvier)
let monthNumber = currentMonth.getMonth()
months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet","Août","Septembre", "Octobre", "Novembre", "Décembre" ]

// Mise à jour du titre
function updateHeader() {
    const titre = currentMonth.toLocaleString('fr-FR', { month: 'long', year: 'numeric' });
    document.getElementById("titre-mois").textContent = titre;
    document.querySelector(".second").textContent = titre;
    document.querySelector(".first").textContent = months[monthNumber-1];
     document.querySelector(".third").textContent = months[monthNumber+1];
}

// Change de mois
function changeMonth(offset) {
    currentMonth.setMonth(currentMonth.getMonth() + offset);
    monthNumber = currentMonth.getMonth()
    updateHeader();
    // ⬇️ Ici tu appelles ton code qui met à jour ton planning
    renderAgenda();
}



// Boutons
document.getElementById("prev-month").addEventListener("click", () => changeMonth(-1));
document.getElementById("next-month").addEventListener("click", () => changeMonth(1));

// ❤️ Mise en place initiale
updateHeader();
