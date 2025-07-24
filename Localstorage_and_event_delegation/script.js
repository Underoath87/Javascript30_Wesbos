const addItems = document.querySelector(".add-items");
const itemList = document.querySelector(".plates");

const checkAllBtn = document.querySelector(".check-all");
const unCheckAllBtn = document.querySelector(".uncheck-all");
const clearAllBtn = document.querySelector(".clear-all");

// Initialize items from localStorage or set to an empty array if not found
// This will ensure that items persist across page reloads
let items = JSON.parse(localStorage.getItem("items")) || [];

// // Add Item Function
// // This function will add a new item to the items array and update localStorage
// const addItem = function (e) {
//   e.preventDefault();
//   const text = this.querySelector("[name=item]").value;

//   const item = {
//     text,
//     done: false,
//   };

//   items.push(item);
//   localStorage.setItem("items", JSON.stringify(items));
//   displayUi(items);
//   this.reset();

//   //   console.log(item);
// };

// // Display UI Function
// // This function will render the items in the UI based on the items array

// const displayUi = function (plates = []) {
//   const html = plates
//     .map((plate, i) => {
//       return `
//         <li>
//             <input type="checkbox" data-index=${i} id="item${i}" ${
//         plate.done ? "checked" : ""
//       }/>

//             <label for="item${i}">${plate.text}</label>
//          </li>
//         `;
//     })
//     .join("");

//   itemList.innerHTML = html;
//   // console.log(items);
// };

// // Toggle Done Function
// // This function will toggle the done status of an item when its checkbox is clicked
// const toggleDone = function (e) {
//   if (!e.target.matches("input")) return; // skip this unless it's an input
//   const el = e.target;
//   console.log(el);
//   const index = el.dataset.index;
//   items[index].done = !items[index].done;
//   localStorage.setItem("items", JSON.stringify(items));
//   displayUi(items);
// };

// // Event Listeners for Check All, Uncheck All, and Clear All
// checkAllBtn.addEventListener("click", () => {
//   items.forEach((item) => (item.done = true));
//   localStorage.setItem("items", JSON.stringify(items));
//   displayUi(items);
// });

// unCheckAllBtn.addEventListener("click", () => {
//   items.forEach((item) => (item.done = false));
//   localStorage.setItem("items", JSON.stringify(items));
//   displayUi(items);
// });

// clearAllBtn.addEventListener("click", () => {
//   items = [];
//   localStorage.removeItem("items");
//   displayUi(items);
// });

// // Form Handler
// addItems.addEventListener("submit", addItem);

// //event delegation
// itemList.addEventListener("click", toggleDone);

// // Init
// displayUi(items);

// const checkboxes = document.querySelectorAll("input");

const addItem = function (e) {
  e.preventDefault();
  const input = document.querySelector("[name=item]").value;

  const item = {
    input,
    done: false,
  };

  items.push(item);
  displayUi(items);
  localStorage.setItem("items", JSON.stringify(items));
  console.log(items);
  this.reset();
};

const displayUi = function (plates = []) {
  const html = plates
    .map((plate, i) => {
      return `
    <li>
      <input type='checkbox' data-index="${i}" id="item${i}" ${
        plate.done ? "checked" : ""
      }/>
      <label for="item${i}">${plate.input}</label>
    </li>
  `;
    })
    .join("");

  itemList.innerHTML = html;
};

const toggleDone = function (e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  displayUi(items);
  console.log(index);
};

checkAllBtn.addEventListener("click", () => {
  items.forEach((item) => (item.done = true));
  localStorage.setItem("items", JSON.stringify(items));
  displayUi(items);
});

unCheckAllBtn.addEventListener("click", () => {
  items.forEach((item) => (item.done = false));
  localStorage.setItem("items", JSON.stringify(items));
  displayUi(items);
});

clearAllBtn.addEventListener("click", () => {
  items = [];
  localStorage.removeItem("items");
  displayUi(items);
});

//Init
displayUi(items);

addItems.addEventListener("submit", addItem);

itemList.addEventListener("click", toggleDone);
