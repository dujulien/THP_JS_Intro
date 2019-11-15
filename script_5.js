/* 2.3.2. Bibliothécaire
C'est ton premier jour de stage au CDI du collège du coin. Tu dois aider la bibliothécaire à faire des statistiques dans la base de données de livres du collège et elle te donne ce jeu de données pour que tu maitrises le back-office du programme.
Réalise un script script_5.js qui affichera dans la console les questions suivantes et leurs réponses : */


const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("- Est-ce que tous les livres ont été au moins empruntés une fois ?")
for (let index in books) {
	var rentStatus = "Oui, tous les livres ont été empruntés au moins une fois"
	if (books[index].rented <= 0) {
		rentStatus = "Non, il y a au moins un livre qui n'a pas été emprunté.";
		break;
	}
};
console.log(rentStatus)

// Quel est livre le plus emprunté ?
console.log("")
console.log("- Quel est livre le plus emprunté ?")
let booksSortedDsc = books.sort(function(a,b){return b.rented - a.rented})
let mostRentedBook = booksSortedDsc[0].title
console.log(`Le livre le plus emprunté est : ${mostRentedBook}.`)


// Quel est le livre le moins emprunté ?
console.log("")
console.log("- Quel est livre le moins emprunté ?")
let booksSortedAsc = books.sort(function(a,b){return a.rented - b.rented})
let lessRentedBook = booksSortedAsc[0].title
console.log(`Le livre le moins emprunté est : ${lessRentedBook}.`)


// Trouve le livre avec l'ID: 873495 ;
console.log("")

console.log(`Le livre avec l'id 873495 s'intitule : ${books.find(x => x.id === 873495).title}`);


// Supprime le livre avec l'ID: 133712 ;
console.log("")

for(let i = 0; i < books.length; i++){
	if (books[i].id === 133712) {
		books.splice(i,1);
	}
}

console.log("Voici l'array sans le livre avec l'id 133712 :");
console.log(books)


// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
console.log("")
console.log("Voici l'array avec les livres triés par ordre alphabétique :")
console.log(books.sort(function(a,b){return ('' + a.title).localeCompare(b.title)}))




















