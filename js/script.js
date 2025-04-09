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