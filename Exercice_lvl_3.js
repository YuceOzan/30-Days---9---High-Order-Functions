import {countries_data} from "./Countries.js";

//1. SORT COUNTRIES BY NAME, CAPITAL, POPULATION

const countriesSortedByName = countries_data.slice().sort((a,b) => a.name > b.name ? 1 : -1);
//console.log(countriesSortedByName);

const countriesSortedByCapital = countries_data.slice().sort((a,b) => a.capital > b.capital ? 1 : -1);
//console.log(countriesSortedByCapital);

const countriesSortedByPopulation = countries_data.slice().sort((a,b) => a.population > b.population ? 1 : -1);
//console.log(countriesSortedByPopulation);

//2. FIND THE TEN MOST SPOKEN LANGUAGES

const mostSpokenLanguages = (countries, limit) => {
    const allLanguages = countries
      .flatMap(country => country.languages)
      .reduce((map, language) => {
        map[language] = (map[language] || 0) + 1;
        return map;
      }, {});
  
    return Object.entries(allLanguages)
      .map(([language, count]) => ({ language, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);
  };
  
  const result = mostSpokenLanguages(countries_data, 10);
  console.log(result);
  
 // console.log(result);
  
//3. FIND THE TEN MOST POPULATED COUNTRIES

const mostPopulatedCountries = (countries, limit) => {
    return countries
      .sort((a, b) => b.population - a.population)
      .slice(0, limit)
      .map(country => ({ country: country.name, population: country.population }));
  };
  
  const result2 = mostPopulatedCountries(countries_data, 10);
  console.log(result2);
  
  //4. CALCULATING APP

  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

  class Statistics {
    constructor(data) {
        this.data = data;
        this.data.sort((a, b) => a - b);
    }
    count() {
        return this.data.length;
    }
    sum() {
        return this.data.reduce((acc, val) => acc + val, 0);
    }
    min() {
        return this.data[0];
    }
    max() {
        return this.data[this.data.length - 1];
    }
    range() {
        return this.max() - this.min();
    }
    mean() {
        return this.sum() / this.count();
    }
    median() {
        const mid = Math.floor(this.count() / 2);
        return this.count() % 2 === 0
            ? (this.data[mid - 1] + this.data[mid]) / 2
            : this.data[mid];
    }
    mode() {
        const frequencyMap = {};
        this.data.forEach((value) => {
            frequencyMap[value] = (frequencyMap[value] || 0) + 1;
        });

        let modeValue = null;
        let modeCount = 0;

        for (const [key, value] of Object.entries(frequencyMap)) {
            const count = parseInt(value);
            if (count > modeCount) {
                modeValue = parseInt(key);
                modeCount = count;
            }
        }

        return { mode: modeValue, count: modeCount };
    }
    var() {
        const mean = this.mean();
        const squaredDiffs = this.data.map((value) => Math.pow(value - mean, 2));
        return this.sumArray(squaredDiffs) / (this.count() - 1);
    }
    std() {
        return Math.sqrt(this.var());
    }
    freqDist() {
        const frequencyMap = {};
        this.data.forEach((value) => {
            frequencyMap[value] = (frequencyMap[value] || 0) + 1;
        });

        const freqDist = Object.entries(frequencyMap)
            .map(([value, count]) => [parseFloat(value), count])
            .sort((a, b) => b[1] - a[1]);

        return freqDist;
    }

    describe() {
        return `Count: ${this.count()}
Sum: ${this.sum()}
Min: ${this.min()}
Max: ${this.max()}
Range: ${this.range()}
Mean: ${this.mean()}
Median: ${this.median()}
Mode: (${this.mode().mode}, ${this.mode().count})
Variance: ${this.var()}
Standard Deviation: ${this.std()}
Frequency Distribution: ${JSON.stringify(this.freqDist())}`;
    }

    sumArray(array) {
        return array.reduce((acc, val) => acc + val, 0);
    }
}
const statistics = new Statistics(ages);

console.log(statistics.describe());
