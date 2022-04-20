const pigLatin = function(string) {
	return string
	  .split(" ")
	  .map(word => {
		const index = firstVowelIndex(word);
		const beginning = word.slice(0, index);
		const ending = word.slice(index);
		return `${ending}${beginning}ay`;
	  })
	  .join(" ");
  };

const firstVowelIndex = function(string) {
	const vowels = string.match(/[aeiou]/g);
	if (vowels[0] == "u" && string[string.indexOf(vowels[0]) - 1] == "q") {
	  return string.indexOf(vowels[1]);
	}
	return string.indexOf(vowels[0]);
};
<<<<<<< HEAD
  
// Do not edit below this line
module.exports = pigLatin;
=======

  module.exports = pigLatin;
>>>>>>> db998d7279501a619412cbe20658125349e81d07
