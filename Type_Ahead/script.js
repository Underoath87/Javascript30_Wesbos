// const searchInput = document.querySelector(".search");
// const suggestions = document.querySelector(".suggestions");

// const endpoint =
//   "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// const cities = [];

// fetch(endpoint)
//   .then((response) => response.json())
//   .then((data) => cities.push(...data));

// const findMatches = function (wordTomatch, cities) {
//   return cities.filter((place) => {
//     // figure out if the city or state matches what was searched

//     const regex = new RegExp(wordTomatch, "gi");
//     return place.city.match(regex) || place.state.match(regex);
//   });
// };

// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// const displayMatches = function () {
//   const matchArr = findMatches(this.value, cities);
//   const html = matchArr
//     .map((place) => {
//       const regex = new RegExp(this.value, "gi");
//       const cityName = place.city.replace(
//         regex,
//         `<span class='hl'>${this.value}</span>`
//       );
//       const statename = place.state.replace(
//         regex,
//         `<span class='hl'>${this.value}</span>`
//       );
//       return `
//         <li>
//             <span class='name'>${cityName},${statename}</span>
//             <span class='population'>${numberWithCommas(
//               place.population
//             )}</span>
//         </li>
//     `;
//     })
//     .join("");
//   suggestions.insertAdjacentHTML("afterbegin", html);
// };

// searchInput.addEventListener("change", displayMatches);
// searchInput.addEventListener("keyup", displayMatches);
