const zoneNotes = document.querySelector("#zone-notes");  //on récupère la zone de texte
const cleNotes = "notes-" + window.location.pathname; //le chemin de la page actuelle

const notesSaved = localStorage.getItem(cleNotes); //au chargement, on lit les notes enregistrées.
if (notesSaved !== null) {  //s'il y a quelque chose d'enregistré, on le remet dans la zone. 
    zoneNotes.value = notesSaved;  //Pour un <textarea>, le contenu s'appelle .value, pas .textContent.
}

function enregistrerNotes() {  //la fonction qui écrit le texte actuel dans le localStorage.
    localStorage.setItem(cleNotes, zoneNotes.value);
}

zoneNotes.addEventListener("input", enregistrerNotes); //l'événement input (ввод) se déclenche à chaque caractère tapé. Les notes sont donc enregistrées en continu, sans bouton.