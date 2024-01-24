const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products2 = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//1. FIND THE TOTAL PRICE OF PRODUCTS BY CHAINING TWO OR MORE ARRAY ITERATORS

const totalPrice = products2
.map(product => product.price)
.filter(price => typeof price === "number")
.reduce((acc, cur) => acc + cur, 0);

console.log(totalPrice);

//2. FIND THE SUM OF PRICE USING ONLY REDUCE

const reducePrice = products2.reduce((acc, cur) => {
    
    if(typeof cur.price === "number"){
        return acc + cur.price;
    } else {
        return acc;
    }
},0);

console.log(reducePrice);

//3. DECLARE A FUNCTION WHICH RETURNS AN ARRAY OF COUNTRIES THAT HAVE COMMON PATERNS ("LAND", "IA", "ISLAND", "STAN")

import {countries3} from "./Countries.js";

const categorizedCountries = countries3.filter((country) => {
    const patternCountries = country.toLowerCase();
    return (
        patternCountries.includes("land") ||
        patternCountries.includes("island") ||
        patternCountries.endsWith("ia") ||
        patternCountries.endsWith("stan")
    )
    
})

console.log(categorizedCountries);

//4. CREATE A FUNCTION WHICH RETURN AN ARRAY OF OBJECTS, WHICH IS THE LETTER AND THE NUMBER OF TIMES THE LETTER
//   USE TO START WITH A NAME OF COUNTRY

function countStartingLetters(countryNames) {
    const startingLetterCount = countryNames.reduce((acc, country) => {
      const firstLetter = country.charAt(0).toUpperCase();
  
      if (acc.has(firstLetter)) {
        acc.set(firstLetter, acc.get(firstLetter) + 1);
      } else {
        acc.set(firstLetter, 1);
      }
  
      return acc;
    }, new Map());
  
    const result = Array.from(startingLetterCount).map(([letter, count]) => ({
      letter,
      count,
    }));
  
    return result;
  }
  const result = countStartingLetters(countries3);
  console.log(result);


//5. DECLARE A FUNCTION TO GET THE FIRST TEN COUNTRIES

const getFirstTenCountries = () => countries3.slice(0,10);
console.log(getFirstTenCountries());

//6. DECLARE A FUNCTION TO GET THE LAST TEN COUNTRIES

const getLastTenCountries = () => countries3.slice(-10);
console.log(getLastTenCountries())

//7. FIND OUT WHICH LETTER IS USED MANY TIMES AS INITIAL FOR A COUNTRY NAME
  
function mostFrequentInitialLetter(countries) {
    const initialLetterCount = countries.reduce((acc, country) => {
      const firstLetter = country.slice(0, 1).toUpperCase();
  
      if (acc.has(firstLetter)) {
        acc.set(firstLetter, acc.get(firstLetter) + 1);
      } else {
        acc.set(firstLetter, 1);
      }
  
      return acc;
    }, new Map());
  
    let mostFrequentLetter = '';
    let highestCount = 0;
  
    initialLetterCount.forEach((count, letter) => {
      if (count > highestCount) {
        highestCount = count;
        mostFrequentLetter = letter;
      }
    });
  
    return mostFrequentLetter;
  }
  
  console.log(mostFrequentInitialLetter(countries3));
  
  