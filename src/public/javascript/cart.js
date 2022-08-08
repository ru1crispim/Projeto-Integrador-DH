// Codigo referente ao Carrinho

const KEYCART = '@games:cart'

function handleAddCart ({id, name, value, genre, description, image}) {
    let cart = localStorage.getItem(KEYCART) // pegar do localstorage
    console.log(cart)
    if(!cart){
        cart = '[]'
    }
    console.log(cart, 'dsdsdsd')
    const cartFormated = JSON.parse(cart)
    console.log(cartFormated)
    cartFormated.push({id, name, value, genre, description, image})
    
    localStorage.setItem(KEYCART, JSON.stringify(cartFormated));
    // salvar no local storage

}