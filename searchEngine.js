// Étape 1 : Créer un ensemble de documents
const documents = [
  {
    title: "Le petit prince",
    author: "Antoine de Saint-Exupéry"
  },
  {
    title: "Les fables de La Fontaine",
    author: "Jean de La Fontaine"
  },
  {
    title: "Les aventures d'Harry Potter",
    author: "J.K. Rowling"
  },
  {
    title: "Le seigneur des anneaux",
    author: "J.R.R. Tolkien"
  },
  {
    title: "La métamorphose",
    author: "Franz Kafka"
  },
  {
    title: "1984",
    author: "George Orwell"
  },
  {
    title: "L'Étranger",
    author: "Albert Camus"
  }

];

// Étape 2 : Créer l'index des documents
function createIndex(documents) {
  const index = {};

  for (const document of documents) {
    // Sépare le titre du document en mots
    const mots = document.title.split(" ");

    // Pour chaque mot, ajoute le document à l'index
    for (const mot of mots) {
      // Si le mot n'existe pas encore dans l'index, crée une nouvelle liste pour lui.
      if (!index[mot]) {
        index[mot] = [];
      }
      // Sinon, ajoute le document à la liste existante.
      index[mot].push(document);
    }
  }

  return index;
}

const index = createIndex(documents);

// Étape 3 : Implémenter la fonction de recherche
// Recherche un document par mot clé
function searchWord(mot, index) {
  // Si le mot clé existe dans l'index, renvoie la liste des documents associés
  if (index[mot]) {
    return index[mot];
  } else {
    // Sinon, renvoie une liste vide
    return [];
  }
}

// Étape 4 : Teste le moteur de recherche
const results = searchWord("aventures", index);
console.log(results); // Renvoie une liste des documents contenant le mot "aventures"
