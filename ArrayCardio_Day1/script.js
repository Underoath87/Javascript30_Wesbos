// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

// prettier-ignore
const people = ["Bernhard, Sandra", "Bethea, Erin", "Becker, Carl", "Bentsen, Lloyd", "Beckett, Samuel", "Blake, William", "Berger, Ric", "Beddoes, Mick", "Beethoven, Ludwig", "Belloc, Hilaire", "Begin, Menachem", "Bellow, Saul", "Benchley, Robert", "Blair, Robert", "Benenson, Peter", "Benjamin, Walter", "Berlin, Irving", "Benn, Tony", "Benson, Leana", "Bent, Silas", "Berle, Milton", "Berry, Halle", "Biko, Steve", "Beck, Glenn", "Bergman, Ingmar", "Black, Elk", "Berio, Luciano", "Berne, Eric", "Berra, Yogi", "Berry, Wendell", "Bevan, Aneurin", "Ben-Gurion, David", "Bevel, Ken", "Biden, Joseph", "Bennington, Chester", "Bierce, Ambrose", "Billings, Josh", "Birrell, Augustine", "Blair, Tony", "Beecher, Henry", "Biondo, Frank"];

// Array.prototype.filter()
// 1. Filter the list of investors for those who were born between in the 1500's and 1600's

const born1500 = inventors.filter(
  (age) => age.year >= 1500 && age.year <= 1600
);
console.table(born1500);

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names

const fullName = inventors.map(function (name) {
  return `${name.first} ${name.last}`;
});

console.log(fullName);

//Array.prototype.sort()
//3. Sort the investors by birthdate, oldest to youngest

const birthDateSort = inventors.sort(function (a, b) {
  return a.year - b.year;
});

console.table(birthDateSort);

// Array.protoype.reduce()
// 4.How many years did all the investors live

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

// console.log(totalYears);

// 5. Sort the investors by years lived

// sorting array with how long the lived if a is lived long than be stay but if b is long lived switch the index;
const oldest = inventors.sort(function (a, b) {
  const currentGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return currentGuy > nextGuy ? -1 : 1;
});

console.table(oldest);

// 6. creat a list of boulevards in paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));

const de = links
  .map((link) => link.textContent)
  .filter((streetName) => streetName.includes('de'));

// 7. sort Exercise
// sort the people alphabetically by last name

// const alphabet = people
//   .map(function (person) {
//     const [lastName, firstName] = person.split(',');
//     return { lastName, firstName };
//   })
//   .sort(function (a, b) {
//     a.lastName.localeCompare(b.lastName);
//   });

// console.log(alphabet);

// //Wes bos solution

const alpha = people.sort(function (lastOne, nextOne) {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');

  return aLast > bLast ? -1 : 1;
});

console.log(alpha);

// 8. reduce Exercise

// Sum up the instances of each of these

// prettier-ignore
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);
