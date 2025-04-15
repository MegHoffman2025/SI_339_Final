
// code referenced from https://www.youtube.com/watch?v=okyfcpZfPAU#:~:text=How%20to%20Make%20Ecommerce%20Product,www.lundevweb....

// importing recipes to create detail page
let potions = null;
fetch('recipes.json')
.then(response => response.json())
.then(data => {
    potions = data;
    console.log(potions)
    addDataToHTML();
})


// addine each recipe in the json file to the page
let listRecipes = document.querySelector('div.cards')
function addDataToHTML(){
  potions.forEach(recipe => {
    let newCard = document.createElement('a')
    newCard.href = '/item_detail.html?id=' + recipe.id
    newCard.classList.add("recipe-card")
    newCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="info">
        <h3>${recipe.name}</h3>
        <h4>${recipe.creator}</h4>
      </div>
    `
    listRecipes.appendChild(newCard)
  })

}


// creating filter for recipes to search in search bar
function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    cards = document.querySelectorAll('.all-recipes a.recipe-card');
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


hamburger = document.getElementById('menu')
hamburger.addEventListener('click', function(){
  console.log('getting menu')
  document.getElementById('links').style.display = "flex"

})

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

    let recipeName = document.forms['recipeForm']['recipeName'].value
    let creatorName = document.forms['recipeForm']['recipeSource'].value
    let cookTime = document.forms['recipeForm']['recipeCookTime'].value
    let ingredients = document.forms['recipeForm']['recipeIngredients'].value
    let instructions = document.forms['recipeForm']['recipeInstructions'].value
    let photo = document.forms['recipeForm']['recipePhoto'].value

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
    console.log(photo)
    image.src = photo
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

