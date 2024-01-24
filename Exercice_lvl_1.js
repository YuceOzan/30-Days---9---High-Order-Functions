const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//1. EXPLAIN DIFFERENCE BETWEEN FOREACH, MAP, FILTER, REDUCE

/*
forEach:

It goes through a list of items one by one.
It can interaact with each item, but it doesn't change the original list.
Example: Checking each item in a shopping list.

map:

It creates a new list based on an existing one.
It transforms each item in the original list and make a new list with those transformations.
Example: Doubling the prices of items in a shopping list.

filter:

It interacts with specific items from a list that meet certain criteria.
It creates a new list with only the items that pass your condition.
Example: Selecting only the items in a shopping list that cost less than $10.

reduce:

It combines all items in a list to get a single result.
It performs an operation on each item and accumulate a final result.
Example: Calculating the total cost of items in a shopping list.


*/

//2. CALLBACK FUNCTION FOREACH / MAP / FILTER / REDUCE

const callback = (x) => {
    return x + x
};


const arr = [1,2,3,4,5];
const sum = arr.map(callback);
console.log(sum);

//3. USE FOREACH TO PRINT EACH COUNTRY IN THE ARRAY

countries.forEach(country => console.log(country));

//4. USE FOREACH TO PRINT EACH NAME IN THE ARRAY

names.forEach(nameList => console.log(nameList));

//5. USE FOREACH TO PRINT EACH NUMBER IN THE ARRAY

numbers.forEach(num => console.log(num));

//6. USE MAP TO CREATE NEW ARRAY BY CHANGING COUNTRIES ARRAY TO UPPERCASE

const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

//7. USE MAP TO CREATE AN ARRAY OF COUNTRIES LENGTH 

const countriesLength = countries.map((country) => country.length);
console.log(countriesLength)

//8. USE MAP TO CREATE A NEW ARRAY TO SQUARE EACH NUMBERS 

const squareNumbers = numbers.map((num) => num ** 2);
console.log(squareNumbers);

//9. USE MAP TO CHANGE EACH NAMES TO UPPER CASE

const upperCaseNames = names.map((name) => name.toUpperCase());
console.log(upperCaseNames);

//10. USE MAP TO MAP THE PRODUCTS TO ITS CORRESPONDING PRICE

const productToPrice = products.map((product) => `${product.product}: ${product.price}`);
console.log(productToPrice);

//11. USE FILTER TO FILTER OUT COUNTRIES WITH "LAND"

const countriesWithLand = countries.filter((country) => country.toLowerCase().includes("land"));
console.log(countriesWithLand);

//12. USE FILTER TO FILTER OUT COUNTRIES WITH 6 CHARACTERS

const countriesWithSixChar = countries.filter((country) => country.length === 6);
console.log(countriesWithSixChar);

//13. USE FILTER TO FILTER OUT COUNTRIES WITH 6 OR MORE CHARACTERS

const countriesWithMoreLetters = countries.filter((country) => country.length >= 6 );
console.log(countriesWithMoreLetters);

//14. USE FILTER TOU FILTER OUT COUNTRY THAT STARTS WITH "E"

const countriesWithE = countries.filter((country) => country.toLowerCase().startsWith("e"));
console.log(countriesWithE);

//15. USE FILTER TO FILTER OUT ONLY PRICES WITH VALUES

const pricesWithValue = products.filter((product) => typeof product.price === "number");
console.log(pricesWithValue);

//16. DECLARE A FUNCTION WHICH TAKES AN ARRAY AS PARAMETER AND RETURNS AN ARRAY WITH ONLY STRING ITEMS

const array = ["fire", "water", 7, "wind", true, 9, "earth"]
const getStringList = array.filter((list) => typeof list === "string");
console.log(getStringList);

//17. USE REDUCE TO SUM ALL THE NUMBERS IN THE ARRAY

const sumOfAllNumbers = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sumOfAllNumbers);

//18. USE REDUCE TO CONCATENATE ALL COUNTRIES IN A SENTENCE

const concatenatedSentence = countries.reduce((acc, cur, index) => {
  if (index === countries.length - 1) {
    return acc + 'and ' + cur;
  } else {
    return acc + cur + ', ';
  }
}, 'Estonia, ');

console.log(concatenatedSentence + ' are north European countries');

//19. EXPLAIN THE DIFFERENCE BETWEEN SOME AND EVERY

/*
some:
It iterates through an array with given conditions and returns a Bolean as an answer.
It returns true if one of the elements of the array meets the conditions previously set.
Example : [false, false, true, false] --> result will be True.

every:
It iterates through an array with given conditions and returns a Bolean as an answer.
It returns true if all the elements of the array meets the conditions previously set.
Example : [false, false, true, false] --> result will be False.
*/ 

//20. USE SOME TO CHECK LENGTH OF ELEMENTS OF THE ARRAY

const countriesWithMoreThanSevenLetters = countries.some((country) => country.length > 7);
console.log(countriesWithMoreThanSevenLetters);

//21. USE EVERY TO CHECK IF ALL COUNTRIES CONTAIN "LAND"

const allCountriesWithLand = countries.every((country) => country.toLowerCase().includes("land"));
console.log(allCountriesWithLand);

//22. EXPLAIN THE DIFFERENCE BETWEEN FIND AND FINDINDEX

/*
find:
It iterates through the array and returns the first element that meets the condition

findIndex:
It iterates throught the array and return the position of the first element that meets the condition
*/ 

//23. USE FIND TO FIND THE FIRST COUNTRY CONTANING ONLY SIX LETTERS

const countryWithSixLetter = countries.find((country) => country.length === 6);
console.log(countryWithSixLetter);

//24. USE FINDINDEX TO FIND THE POSITION OF THE FIRST COUNTRY CONTAINING ONLY SIX LETTERS

const positionOfSixLetterCountry = countries.findIndex((country) => country.length === 6);
console.log(positionOfSixLetterCountry);

//25. USE FINDINDEX TO FIND THE POSITION OF NORWAY IF IT DOESN'T EXIST GET THE -1

const norwayPosition = countries.findIndex((country) => country.toLowerCase() === "norway");
console.log(norwayPosition);


//26. USE FINDINDEX TO FIND THE POSITION OF RUSSIA IF IT DOESN'T EXIST GET THE -1

const russiaPosition = countries.findIndex((country) => (country.toLowerCase() === "russia" 
? true : false));
console.log(russiaPosition);