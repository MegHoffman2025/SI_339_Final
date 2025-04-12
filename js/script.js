
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



  // trying to set up an item detail page
let recipes = document.querySelectorAll('div.recipe-card')
for (let i = 0; i < recipes.length; i++){
    console.log(recipes[i])
    recipeName = recipes[i].querySelector('h3').innerText
    creatorName = recipes[i].querySelector('h4').innerText
    recipeImage = recipes[i].querySelector('img').innerText
    console.log(recipeName)
    recipes[i].addEventListener('click', function(){
        console.log('getting recipe')
    })
}


plus_button = document.querySelector('.add-recipe')
plus_button.addEventListener('click', function(){
    console.log('adding a recipe')
    document.getElementById('recipeForm').style.display = 'block'

})

closeRecipeCreator = document.querySelector('.cancel-recipe')
closeRecipeCreator.addEventListener('click', function(){
    console.log('cancelling adding recipe')
    document.getElementById('recipeForm').style.display = 'none'

})


saveRecipe = document.querySelector('.recipe-submit')
saveRecipe.addEventListener('click', function(){
    console.log('adding recipe')

    recipeName = document.forms['recipeForm']['recipeName'].value
    creatorName = document.forms['recipeForm']['recipeSource'].value
    cookTime = document.forms['recipeForm']['recipeCookTime'].value
    ingredients = document.forms['recipeForm']['recipeIngredients'].value
    instructions = document.forms['recipeForm']['recipeInstructions'].value


    document.getElementById('recipeForm').style.display = 'none'

    let card = document.createElement('div')
    card.classList.add('recipe-card')
    let info = document.createElement('div')
    info.classList.add('info')


    let cardName = document.createElement('h3')
    let node = document.createTextNode(recipeName)
    cardName.appendChild(node)
    let cardCreator = document.createElement('h4')
    node = document.createTextNode(creatorName)
    cardCreator.appendChild(node)

    info.appendChild(cardName)
    info.appendChild(cardCreator)

    let image = document.createElement('img')
    image.src = '../images/empanadas.JPG'
    image.alt = recipeName
    card.appendChild(image)
    card.appendChild(info)

    console.log(card)
    recipes = document.querySelector('.all-recipes div.cards')
    recipes.appendChild(card)

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

