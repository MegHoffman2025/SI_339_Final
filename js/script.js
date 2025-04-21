// code referenced from https://www.youtube.com/watch?v=okyfcpZfPAU#:~:text=How%20to%20Make%20Ecommerce%20Product,www.lundevweb....

// importing recipes to create detail page
let potions = null;
fetch('/SI_339_Final/recipes.json')
.then(response => response.json())
.then(data => {
    potions = data;
    console.log(potions)
    if ((window.location.pathname == '/SI_339_Final/') || (window.location.pathname == '/SI_339_Final/index.html')){
      addDataToHTML();
    }
    if (window.location.pathname == '/SI_339_Final/discover.html'){
      addQuickRecipesToHTML();
      addFavoritesToHTML();
    }
    console.log(window.location.pathname)
    if (window.location.pathname.indexOf('item_detail.html') > -1){
      showDetail();
    }
})


// addine each recipe in the json file to the page

let listRecipes = document.querySelector('.all-recipes div.cards')
function addDataToHTML(){
  potions.forEach(recipe => {
    let newCard = document.createElement('a')
    newCard.href = '/SI_339_Final/item_detail.html?id=' + recipe.id
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

let listQuickRecipes = document.querySelector('.quick div.cards')
function addQuickRecipesToHTML(){
  potions.forEach(recipe => {
    if (recipe.under30 == true){
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
      listQuickRecipes.appendChild(newCard)
    }
  })

}

let listFavRecipes = document.querySelector('.favorites div.cards')
function addFavoritesToHTML(){
  potions.forEach(recipe => {
    if (recipe.favorite == true){
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
      listFavRecipes.appendChild(newCard)
    }
  })

}


function showDetail (){
  let detail = document.querySelector('#recipe-information');
  let productID = new URLSearchParams(window.location.search).get('id');
  console.log(productID)
  let thisRecipe = potions.filter(value => {
    return value.id == productID
  })[0];

  // if no product with the id retirn to home page
  if(!thisRecipe){
    window.location.href = '/';
  }

  detail.querySelector('.image').src = thisRecipe.image
  detail.querySelector('.image').alt = thisRecipe.name
  document.querySelector('.name').innerText = thisRecipe.name
  document.querySelector('.creator').innerText = thisRecipe.creator
  document.querySelector('.cookTime').innerText = thisRecipe.cookTime
  
  ing = document.querySelector('.ingredients')
  for (i = 0; i < thisRecipe.ingredients.length; i++){
      console.log()
      let newIngredient = document.createElement('li')
      newIngredient.innerText = thisRecipe.ingredients[i]
      if (thisRecipe.ingredients[i][0] == "*"){
           newIngredient = document.createElement('h3');
           newIngredient.innerText = thisRecipe.ingredients[i].slice(2, -2)
      }
      ing.appendChild(newIngredient)
  }

    
  let newInstructions = document.createElement('p')
  newInstructions.innerText = thisRecipe.instructions
  detail.querySelector('.instructions').appendChild(newInstructions)


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






// creating event listener for when user clicks on hamburger menu
hamburgers = document.querySelectorAll('.menu')
for (i = 0; i < hamburgers.length; i++){
  hamburgers[i].addEventListener('click', function(){
    console.log('getting menu')
    console.log(document.getElementById("links").style.left)
    if (document.getElementById("links").style.left == '-800px'){
        document.getElementById("links").style.left = '0px'
    } else {
        document.getElementById("links").style.left = '-800px'
    }
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

    let recipeName = document.forms['recipeForm']['recipeName'].value
    let creatorName = document.forms['recipeForm']['recipeSource'].value
    let cookTime = document.forms['recipeForm']['recipeCookTime'].value
    let ingredients = document.forms['recipeForm']['recipeIngredients'].value
    let instructions = document.forms['recipeForm']['recipeInstructions'].value
    let photo = document.forms['recipeForm']['recipePhoto'].value

    document.getElementById('recipeForm').style.display = 'none'

  potions.add({
      id: 2,
      image: photo,
      name: recipeName,
      creator: creatorName,
      cookTime: cookTime,
      under30: false,
      favorite: true,
      ingredients: ingredients,
      instructions: instructions,
    })

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

