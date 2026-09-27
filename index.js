/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function createFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));
  return { name, occupation, rate };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, createFreelancer);

function getAverageRate() {
  const sumOfAll = freelancers.reduce(
    (total, freelancer) => total + freelancer.rate,
    0,
  );
  return sumOfAll / NUM_FREELANCERS;
}

const averageRate = getAverageRate();

function Freelancer_Row(freelancer) {
  const { name, occupation, rate } = freelancer;
  const $tableRow = document.createElement("tr");
  $tableRow.classList.add("table-row");

  $tableRow.innerHTML = `
    <td>${name}</td>
    <td>${occupation}</td>
    <td>${rate}</td>
  `;

  return $tableRow;
}

function Freelancer_Rows(freelancers) {
  const $tableBody = document.createElement("tbody");
  $tableBody.classList.add('table-body');

  const $rows = freelancers.map(Freelancer_Row);
  $tableBody.replaceChildren(...$rows);

  return $tableBody;
}

function Average_Rate() {
  const $paragraph = document.createElement("p");
  $paragraph.innerHTML = `The average rate is ${getAverageRate()}`;

  return $paragraph.innerHTML;
}

function render() {
  const $div = document.querySelector("#app");

  $div.innerHTML = `
    <div class="title">
      <h1>Freelancer Forum</h1>
      <div>${Average_Rate()}</div>
    </div>
    <table>
      <thead class="table-header">
        <tr class="head-row">
          <td>Name</td>
          <td>Occupation</td>
          <td>Rate</td>
        </tr>
      </thead>
      <tbody id="FreelancerRows">
      </tbody>
    </table>
  `;

  $div.querySelector("#FreelancerRows").replaceWith(Freelancer_Rows(freelancers));
}

render();