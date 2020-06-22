/***** Deliverable 1 *****/
const header = document.querySelector("h1")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "pink";


/***** Deliverable 3 *****/
console.log("POPSTARS array looks like this:", POPSTARS)
//select div that we will be adding popstars to
const starContainer = document.querySelector(".star-container")
POPSTARS.forEach(function(star){
    starContainer.innerHTML +=
    `
    <div class="star" data-number="${star.age}">
        <h3> ${star.name} (<em> ${star.nickname} <em>)</h3>
        <img src="${star.photo}" alt="${star.name}"
    </div>
    `
})


/***** Deliverable 4 *****/

//uncomment below to remove Mariah's div
// starContainer.querySelector("[data-number='50']").remove()