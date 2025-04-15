

// code referenced from https://www.youtube.com/watch?v=okyfcpZfPAU#:~:text=How%20to%20Make%20Ecommerce%20Product,www.lundevweb....


let potions = null;
fetch('recipes.json')
.then(response => response.json())
.then(data => {
    potions = data;
    showDetail();
})

function showDetail (){
    let detail = document.querySelector('#recipe-information');
    let productID = new URLSearchParams(window.location.search).get('id');
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
             newIngredient.innerText = thisRecipe.ingredients[i].substr(2);
        }
        ing.appendChild(newIngredient)
    }
  
      
    let newInstructions = document.createElement('p')
    newInstructions.innerText = thisRecipe.instructions
    detail.querySelector('.instructions').appendChild(newInstructions)
  
  
  }
  