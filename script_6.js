/* 2.4.1. Code la vie

UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
CCU ou CCC ou CCA ou CCG => Proline
UUA ou UUG => Leucine
UUU ou UUC => Phénylalanine
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
UAU ou UAC => Tyrosine

Tester sur :
CCGUCGUUGCGCUACAGC
CCUCGCCGGUACUUCUCG */

function lifeCode(s) {
	let codons = s.match(/.{1,3}/g);
	console.log(codons)
	let aminoacidArray = [];
	codons.forEach(codon => {
		if (codon === 'UCU' || codon === 'UCC' || codon === 'UCA' || codon === 'UCG' || codon === 'AGU' || codon === 'AGC'){
				aminoacidArray.push("Sérine");
		} else if (codon === 'CCU' || codon === 'CCC' || codon === 'CCA' || codon === 'CCG'){
				aminoacidArray.push("Proline");
		} else if (codon === 'CGU' || codon === 'CGC' || codon === 'CGA' || codon === 'CGG' || codon === 'AGA' || codon === 'AGG'){
				aminoacidArray.push("Arginine");
		} else if (codon === 'UUA' || codon === 'UUG'){
				aminoacidArray.push("Leucine");
		} else if (codon === 'UUU' || codon === 'UUC'){
				aminoacidArray.push("Phénylalanine");
		} else if (codon === 'UAU' || codon === 'UAC'){
				aminoacidArray.push("Tyrosine");
		}
	})
	return aminoacidArray.join("-")
}

console.log(lifeCode("UUACGCAGUAGA"))
console.log(lifeCode("CCGUCGUUGCGCUACAGC"))
console.log(lifeCode("CCUCGCCGGUACUUCUCG"))

"Leucine-Arginine-Sérine-Arginine"