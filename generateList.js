


const fs = require("fs");
//import text file into array "textFile"
const textFile = fs.readFileSync("wordArray.txt", "utf-8");
//split words into elements by line. This is the initial array in a good format. 
const splitWords = textFile.split("\n");
//filter list with the nested function (filterList) as a param.
const filteredList = splitWords.filter(filterList)

//function to iterate over the array.Gets words with 5 chars or more.
function filterList(word){
    if(word.length > 5){
        return word;
    }
 };

 //initialising empty arrays for 12,18,24 seed phrases 
let seed12 = [];
let seed18 = [];
let seed24 = [];

//function fills seed12 array with 12 random words.
 function twelveSeedGenerator(){
    for(let i = 0; i < 12; i++){  
            let random = Math.floor(Math.random() * 7773);
            seed12.push(filteredList[random]);
        }      
    };

//function fills seed18 array with 18 random words.
function eighteenSeedGenerator(){
    for(let i = 0; i < 18; i++){  
            let random = Math.floor(Math.random() * 7773);
            seed18.push(filteredList[random]);
        }
    };
//function fills seed24 array with 24 random words.
function twentFourSeedGenerator(){
    for(let i = 0; i < 24; i++){  
            let random = Math.floor(Math.random() * 7773);
            seed24.push(filteredList[random]);
        }
    };


//converts array into object. NOTE: CODE  SEGMENT NOT IN USE!!!!
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
   

// Test to see if function works correctly. WARNING: REMOVE CODE BLOCK BEFORE FINAL COMMIT. 
keyValues(eighteenSeedGenerator)

// demo of error
let list = document.getElementById("myList");

//ERROR BELOW: Issue with DOM and Node.js ?????????????

/*
c:\Users\Alex\Desktop\projects\messageGenerator\generateList.js:76
let list = document.getElementById("myList");
           ^

ReferenceError: document is not defined
    at Object.<anonymous> (c:\Users\Alex\Desktop\projects\messageGenerator\generateList.js:76:12)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
*/
