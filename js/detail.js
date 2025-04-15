// find this product

let potions = null;
fetch('recipes.json')
.then(response => response.json())
.then(data => {
    potions = data;
    console.log(potions)
    showDetail();
})

function showDetail (){
    let detail = document.querySelector('#recipe-information');
    let productID = new URLSearchParams(window.location.search).get('id');
    let thisRecipe = potions.filter(value => {
      return value.id == productID
    })[0];
  
    console.log(thisRecipe)
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
      let newIngredient = document.createElement('li')
      newIngredient.innerText = thisRecipe.ingredients[i]
      ing.appendChild(newIngredient)
    }
  
      
    let newInstructions = document.createElement('p')
    newInstructions.innerText = thisRecipe.instructions
    detail.querySelector('.instructions').appendChild(newInstructions)
  
  
  }
  