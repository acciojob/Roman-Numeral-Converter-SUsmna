function convertToRoman(num) {
  	const romanNumerals = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1],
    };

  //your code here
	let roman = '';

    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i][1]) {
            roman += romanNumerals[i][0];
            num -= romanNumerals[i][1];
        }
    }

    return roman;
}
// do not edit below this line
module.exports = convertToRoman
