
// creating filter for recipes to search in search bar
function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    cards = document.querySelectorAll('.all-recipes div.recipe-card');
    for (i = 0; i < cards.length; i++) {
      recipeName = cards[i].querySelector('h3').innerText
      creatorName = cards[i].querySelector('h4').innerText
      if ((recipeName.toUpperCase().indexOf(filter) > -1) || (creatorName.toUpperCase().indexOf(filter) > -1)) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }


let recipes = document.querySelectorAll('.recipe-card')
for (let i = 0; i < recipes.length; i++){
    recipes[i].addEventListener('click', function(){
        console.log('getting recipe')
    })
}


plus_button = document.querySelector('.add-recipe')
plus_button.addEventListener('click', function(){
    console.log('adding a recipe')
})



// trying to get the plus icon to stay in the bottom right corner when scrolling the main section
// let body_height = document.querySelector("body").scrollHeight
// console.log(body_height)
// let footer_height = document.querySelector("footer").scrollHeight
// console.log(footer_height)
// let visable_height = screen.height
// console.log(visable_height)
// let scrollable_distance = body_height - footer_height - visable_height
// console.log(scrollable_distance)

// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.documentElement.scrollTop >= scrollable_distance) {
//     document.querySelector(".add-recipe").style.position = 'absolute';
//     document.querySelector(".add-recipe").style.bottom = '32px';
//   } else {
//     document.querySelector(".add-recipe").style.position = "fixed";
//     document.querySelector(".add-recipe").style.bottom = '32px';
//   }
// }

