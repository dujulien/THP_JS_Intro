// 2.2. Opérations et boucles
// 2.2.1. Calculs rapides - factorielle

function factoriel(inputNumber) {
	if (inputNumber == 0) {
		return 1;
	} else {
		return factoriel(inputNumber -1) * inputNumber;
	}
}

prompt("De quel nombre veux-tu calculer la factorielle ?");
console.log(`Le résultat est ${factoriel(5)}`);
