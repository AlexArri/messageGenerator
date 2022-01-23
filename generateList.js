//This script imports list from wordArray.txt and removed words with less than 5 charachters.

//import the list wordArray.txt and converts file to an array. Splits words by line. 
const fs = require("fs");
const textFile = fs.readFileSync("wordArray.txt", "utf-8");
const splitWords = textFile.split("\n");

console.log(splitWords);
