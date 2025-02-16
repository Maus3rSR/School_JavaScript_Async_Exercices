/**
 * Code de base, ne pas modifier
 */

// Définition
const boutonVoyageHTML = document.querySelector(".btn-voyage");
const localisationEpoqueHTML = document.querySelector(".localisation_epoque");
const listeArtefactHTML = document.querySelector(".liste_artefacts");
const formChoixEpoqueHtml = document.querySelector(".form__choix_epoque");
const formRechercheArtefact = document.querySelector(
  ".form__recherche_artefact"
);

const creerLesChoixEpoque = (epoques) => {
  const selectHtml = formChoixEpoqueHtml.querySelector("select");
  Object.entries(epoques).forEach(([id_epoque, nom_epoque]) => {
    const option = document.createElement("option");
    option.value = id_epoque;
    option.text = nom_epoque;
    selectHtml.appendChild(option);
  });
};

function generationNombreAleatoireEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Permet d'afficher l'époque de destination du voyage
const afficherDestination = (nomEpoque) =>
  (localisationEpoqueHTML.textContent = nomEpoque);

// Permet d'afficher un artefact trouvée, ou non, à une époque
const afficherRechercheArtefact = ({ artefact, epoque, success = true }) => {
  const li = document.createElement("li");
  li.textContent = `${success ? "✅" : "❌"} ${artefact} (Epoque ${epoque})`;
  listeArtefactHTML.appendChild(li);
};

// Execution

// Gestion envoi formulaire choix époque
formChoixEpoqueHtml.addEventListener("submit", (event) => {
  event.preventDefault();
  const epoque = new FormData(formChoixEpoqueHtml).get("epoque");

  if (!epoque) {
    alert("Choisie une époque de voyage temporel Chronos !");
    return;
  }

  quandEpoqueChoisie(epoque);
});

// Gestion envoi formulaire recherche artelefact
formRechercheArtefact.addEventListener("submit", (event) => {
  event.preventDefault();
  const artefact = new FormData(formRechercheArtefact).get("artefact");
  quandRechercheArtefact(artefact);
});

/**
 * Votre partie commence ici, la partie modifiable par vos soins
 */
function main() {
  // Sera modifié par le dernier exercice
  const epoques = {
    romaine: "Romaine",
    medievale: "Médievale",
    jurassique: "Jurassique",
  };

  // Création dynamique des époques de destination de la machine temporelle
  creerLesChoixEpoque(epoques);
}

main();

// Permet d'être réutilisé dans la fonction quandRechercheArtefact
let nomEpoqueActuelle;

// Fonction appelée plus haut quand le formulaire de voyage temporel est envoyé
// et qu'une époque de destination du voyage temporel a été choisi
// Faites le test depuis la page HTML
function quandEpoqueChoisie(nomEpoque) {
  nomEpoqueActuelle = nomEpoque;
  console.log(nomEpoqueActuelle);
  // Utilisation de votre fonction voyagerTemps
}

// Fonction appelée plus haut quand le formulaire de recherche d'artefact est envoyé
// Faites le test depuis la page HTML
function quandRechercheArtefact(artefact) {
  console.log(artefact);
  // Utilisation de votre fonction collecterArtefact
}
