 // 1. Sélectionner le bouton dans le HTML
 const boutonTheme = document.querySelector("#theme-toggle");
 const themeSauvegarde = sessionStorage.getItem("theme"); //getItem("theme") : on lit la valeur rangée sous la clé "theme". À la première visite, c'est null

 if (themeSauvegarde === "dark") {   // condition: Si la dernière fois c'était le mode sombre...
    document.body.classList.add("dark-theme");  //on ajoute la classe au <body>. On utilise add et pas toggle, parce qu'ici on veut forcer le sombre, pas inverser.
    boutonTheme.textContent = "Mode clair ☀️"; 
 } else {  //sinon, rien d'enregistré ou "light", donc on garde le mode clair, comme avant.
    boutonTheme.textContent = "Mode sombre 🌙"; 
 }

 // 2. Définir la fonction à éxécuter lors du clique
function changerTheme() {
   // console.log("Le bouton a été cliqué!");  //cliquer 3fois sur le bouton sur site
   document.body.classList.toggle("dark-theme");
   if (document.body.classList.contains("dark-theme")) {
        boutonTheme.textContent = "Mode clair ☀️";
        sessionStorage.setItem("theme", "dark");  //setItem("theme", "dark") : on range la valeur "dark" sous la clé "theme" 
    } else {
        boutonTheme.textContent = "Mode sombre 🌙";
        sessionStorage.setItem("theme", "light");  //setItem("theme", "light") : on range la valeur "light" sous la clé "theme" 
    }
}

// 3. Ecouter le clic sur le bouton
boutonTheme.addEventListener("click", changerTheme);
/* Comprenons les trois instructions : Le bouton a été cliqué!
- document.querySelector("#theme-toggle") recherche dans le DOM l'élémentdont l'identifiant est theme-toggle.
- function changerTheme() définit une fonction qui affiche un message dans la console.
- addEventListener("click", changerTheme) demande au navigateur d'exécuter cette fonction chaque fois que tu cliques sur le bouton. */

/*document.body   Sélectionne le <body> de ta page HTML.
.classList        Permet de manipuler ses classes CSS.
.toggle()         Ajoute une classe si elle est absente, ou la retire si elle existe.
"dark-theme"      Le nom de notre classe CSS pour le thème sombre.
Au premier clic, JavaScript ajoute dark-theme au <body>. Au deuxième clic, il la retire. Au troisième, il l'ajoute à nouveau. */

//TP 11 setItem() — это уже не Set и не Array. Это метод для localStorage и sessionStorage.