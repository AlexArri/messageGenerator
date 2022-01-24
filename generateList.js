
//This function imports list from wordArray.txt 
//It organises the words form the text file into an array (called splitWords) by line.
// The splitWords array is then filtered to remove words with less than 5 charachters.
// All words of more the 5 chars are then placed into a new array called filteredList. 


 const fs = require("fs");
//import text file into array "textFile"
const textFile = fs.readFileSync("wordArray.txt", "utf-8");
//split words into elements by line. This is the initial array in a good format. 
const splitWords = textFile.split("\n");
//filter list with the nested function (filterList) as a param.
const filteredList = splitWords.filter(filterList)

//function to iterate over the array
function filterList(word){
    if(word.length > 5){
        return word;
    }
 };

 //initialising empty arrays for 12,18,24 seed phrases 
export let seed12 = [];
let seed18 = [];
let seed24 = [];

 function twelveSeedGenerator(){
    for(let i = 0; i < 12; i++){  
            let random = Math.floor(Math.random() * 7773);
            seed12.push(filteredList[random]);
        }      
    };

function eighteenSeedGenerator(){
    for(let i = 0; i < 18; i++){  
            let random = Math.floor(Math.random() * 7773);
            seed18.push(filteredList[random]);
        }
    };

function twentFourSeedGenerator(){
    for(let i = 0; i < 24; i++){  
            let random = Math.floor(Math.random() * 7773);
            seed24.push(filteredList[random]);
        }
    };


//below is script for creating tables depending on function above. 
function keyValues(functioner){
    if(functioner === twelveSeedGenerator ){
        twelveSeedGenerator();
        let obj = {...seed12};
        console.log(obj)
    }else if (functioner === eighteenSeedGenerator){
        eighteenSeedGenerator();
        let obj = {...seed18};
        console.log(obj)
    }else if (functioner === twentFourSeedGenerator){
        twentFourSeedGenerator();
        let obj = {...seed24};
        console.log(obj)
    }else{
        return "Fatal Error"
        console.log("Fatal Error!")
    }
   };
   


keyValues(eighteenSeedGenerator)

