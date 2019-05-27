// this is the data for hodling which page we're on
let pageNumber = 0


// have the content for these pages
const pages = [
  { url: "someone living on Earth", backgroundImage: "#edc7a9", description: "[]" },

]

// { copy: "thinking about life", background: "#a1fffe", circle: "#f7fe00" },



// const bodyTag = document.querySelector("body")

const linkHero = document.querySelector("section div.triggerMetaData")
// const linkDescription = document.querySelector("section div.triggerMetaData")



const updateSection = function () {
  linkHero.style.backgroundImage = pages[0].circle

}
// const updateSection = function () {
//   outputTag.innerHTML = pages[pageNumber].copy
//   bodyTag.style.backgroundColor = pages[pageNumber].background
//   circleTag.style.backgroundColor = pages[pageNumber].circle
//
// }
//
// const linkHover = function () {
//   updateSection()
// }
