// 2.2.2 Pyramide de Mario

numberFloors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étage veux-tu ?")

for (let i = 1; i <= numberFloors; i++) {
	console.log(" ".repeat(numberFloors - i) + "#".repeat(i))
}