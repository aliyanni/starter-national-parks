console.log(document);
const heading = document.querySelector("h1");
console.log(heading);

const valueClass = document.querySelector(".value");
console.log(valueClass);

const button = document.querySelector("button");
console.log(button);

const areaClass = document.querySelector(".area");
console.log(areaClass);

const statDiv = document.querySelector(".stat, div");
console.log(statDiv);

const hello = document.querySelector(".hello");
console.log(hello);

const allButton = document.querySelectorAll("button");
console.log(allButton);

const heading3List = document.querySelectorAll("h3");

for (let element of heading3List.values()) {
  console.log(element);
}

for (let i = 0; i < heading3List.length; i++) {
  const element = heading3List[i];
  console.log(element);
}

const ratings = document.querySelectorAll(".rating-display .value");
for(let rating of ratings.values()){
    console.log(rating, "rating");
}

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  /*
  if (ratingValue > 4.7) {
    rating.style.fontWeight = "bold";
    rating.style.color = "#3ba17c";
  }
  */
}

const areaElement = document.querySelectorAll(".area-display .value");
for(let i = 0; i < areaElement.length; i++){
    console.log(areaElement[i]);
}

const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if(content.length > 250){
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }

  desc.innerHTML = content;
}

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);

/*
// Get the parent element of all parks
const main = document.querySelector("main");
// Select a single park
const park = main.querySelector(".park-display");
// Remove that park
main.removeChild(park);
*/

const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", (event) => {
  console.log("You clicked the button", event);
});

const allBtns = document.querySelectorAll(".rate-button");
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.parentNode);
  });
});

// Function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};
// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
  event.preventDefault();
  // 1.  Get the main element
  const main = document.querySelector("main");
  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");
  // 3. Empty the main
  main.innerHTML = "";
  // 4. Create an array
  const parksArray = Array.from(parksList);
  // 5. Sort the array
  parksArray.sort(sortByName);
  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};
// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");
// Add an event listener
nameSorter.addEventListener("click", nameSorterClickHandler);



// Function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkARating = parkA.querySelector(".rating-display").innerText;
  const parkBRating = parkB.querySelector(".rating-display").innerText;
  if (parkARating < parkBRating) {
    return -1;
  } else if (parkARating > parkBRating) {
    return 1;
  } else {
    return 0;
  }
};
// Function for handling the `nameSorter` click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();
  // 1.  Get the main element
  const main = document.querySelector("main");
  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");
  // 3. Empty the main
  main.innerHTML = "";
  // 4. Create an array
  const parksArray = Array.from(parksList);
  // 5. Sort the array
  parksArray.sort(sortByRating);
  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};
// Select the `ratingSorter` link
const ratingSorter = document.querySelector("#rating-sorter");
// Add an event listener
ratingSorter.addEventListener("click", nameSorterClickHandler);


/*
console.log("Before!");
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});
console.log("After!");
*/



// The code that runs once the DOM is loaded
const main = () => {
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#name-sorter");
  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);
  // Select the `ratingSorter` link
  const ratingSorter = document.querySelector("#rating-sorter");
  // Add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);
}
// Add event listener for `DOMContentLoaded`
window.addEventListener("DOMContentLoaded", main);