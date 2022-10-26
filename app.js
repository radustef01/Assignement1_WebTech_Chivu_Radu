function hash(input, dictionary) {
	//  TODO: implementați funcția

	if (typeof input !== "string")
		throw new Error("Input should be a string")
	if (typeof dictionary !== "object")
		throw new Error("Dictionary should be a vector")
	for (i of dictionary)
		if (typeof i !== "string")
			throw new Error("Invalid dictionary format")

	let inputNou = input.slice()

	if (dictionary.length != 0){
		for (wordDictionary of dictionary){
			for (let cuvant of inputNou.split(" ")){
				if (wordDictionary.toLowerCase() === cuvant.toLowerCase()){
					let [prima, ultima] = [cuvant.charAt(0), cuvant.charAt(cuvant.length - 1)]
					let diez = prima + cuvant.replace(/[^\s]/g,"#").slice(1, cuvant.length - 1) + ultima
					inputNou = inputNou.replace(cuvant,diez)
				}
			}
		}

	}

	
	return inputNou;


}

const app = {
	hash
};

// const input0 = 10;
// console.log(hash(input0));

module.exports = app;