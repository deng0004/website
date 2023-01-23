// // Selecting DOM elements
// const btn = document.querySelector(".btn-open");
// const form = document.querySelector(".fact-form");
// const factsList = document.querySelector(".facts-list");

// // Create DOM elements: Render facts in list
// // factsList.innerHTML = "";

// // Load data from Supabase
// loadFacts();

// async function loadFacts() {
//     const res = await fetch(
//         "https://aaxznvhvokoxskmokznc.supabase.co/rest/v1/facts", {
//             headers: {
//                 apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFheHpudmh2b2tveHNrbW9rem5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1MzMxODksImV4cCI6MTk4OTEwOTE4OX0.rAmc7D9C-ux3faThGnR68QTJmUGkSkYwM7Jgk3rwnPw",
//                 Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFheHpudmh2b2tveHNrbW9rem5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1MzMxODksImV4cCI6MTk4OTEwOTE4OX0.rAmc7D9C-ux3faThGnR68QTJmUGkSkYwM7Jgk3rwnPw",
//             },
//         }
//     );
//     const data = await res.json();
//     // console.log(data);
//     // const filteredData = data.filter((fact) => fact.category === "technology");

//     createFactsList(data);
// }

// function createFactsList(dataArray) {
//     // factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");

//     const htmlArr = dataArray.map(
//         (fact) => `<li class="fact">
//       <p>
//       ${fact.text}
//         <a
//           class="source"
//           href="${fact.source}"
//           target="_blank"
//         >(Source)</a>
//       </p>
//       <span class="tag" style="background-color: ${
//         CATEGORIES.find((cat) => cat.name === fact.category).color
//       }">${fact.category}</span>
//     </li>`
//     );
//     const html = htmlArr.join("");
//     factsList.insertAdjacentHTML("afterbegin", html);
// }

// // Toggle form visibility
// btn.addEventListener("click", function() {
//     if (form.classList.contains("hidden")) {
//         form.classList.remove("hidden");
//         btn.textContent = "Close";
//     } else {
//         form.classList.add("hidden");
//         btn.textContent = "Share a fact";
//     }
// });

// console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
// console.log([7, 64, 6, -23, 11].find((el) => el > 10));

const yearFunc = function (year) {
  return `this is year ${year}`;
};
console.log(yearFunc(2020));
const yearFunc1 = (year) =>
  year > 2015 ? `year large than 2015` : `this is shortCut year ${year}`;
console.log(yearFunc1(2020));

const statusOfAli = ["ali", 10, true];
const [name, , isTrue] = statusOfAli;
const addStatusOfAli = [...statusOfAli, "society"];
console.log(addStatusOfAli);

const factObjAli = {
  name: "ali",
  status: "normal",
  age: 20,
  summary: function () {
    return `the fact of ${this.name}, statue is ${this.status}`;
  },
};

console.log(factObjAli.summary());

addStatusOfAli.forEach(function (el) {
  console.log(`this is a person inform: ${el}`);
});

// addStatusOfAli.map((el) => el * 10);
addStatusOfAli.forEach((el) => console.log(el));

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);
