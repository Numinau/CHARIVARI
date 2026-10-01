 // 1. Sélectionner le bouton dans le HTML
 const boutonTheme = document.querySelector("#theme-toggle");

 // 2. Définir la fonction à éxécuter lors du clique
function changerTheme() {
   // console.log("Le bouton a été cliqué!");  //cliquer 3fois sur le bouton sur site
   document.body.classList.toggle("dark-theme");
   if (document.body.classList.contains("dark-theme")) {
        boutonTheme.textContent = "Mode clair ☀️";
    } else {
        boutonTheme.textContent = "Mode sombre 🌙";    
    }
}

// 3. Ecouter le clic sur le bouton
boutonTheme.addEventListener("click", changerTheme);
/* Comprenons les trois instructions : Le bouton a été cliqué!
- document.querySelector("#theme-toggle") recherche dans le DOM l'élément dont l'identifiant est theme-toggle.
- function changerTheme() définit une fonction qui affiche un message dans la console.
- addEventListener("click", changerTheme) demande au navigateur d'exécuter cette fonction chaque fois que tu cliques sur le bouton. */

/*document.body   Sélectionne le <body> de ta page HTML.
.classList        Permet de manipuler ses classes CSS.
.toggle()         Ajoute une classe si elle est absente, ou la retire si elle existe.
"dark-theme"      Le nom de notre classe CSS pour le thème sombre.
Au premier clic, JavaScript ajoute dark-theme au <body>. Au deuxième clic, il la retire. Au troisième, il l'ajoute à nouveau. */