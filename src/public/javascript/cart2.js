// Codigo referente ao Carrinho

const KEYCART = '@games:cart'

function handleAddCart ({id, name, value, genre, description, image}) {
    let cart = localStorage.getItem(KEYCART) // pegar do localstorage
    
    if(!cart){
        cart = '[]'
    }
    
    const cartFormated = JSON.parse(cart)
    
    cartFormated.push({id, name, value, genre, description, image})
    
    localStorage.setItem(KEYCART, JSON.stringify(cartFormated));
    // salvar no local storage

    
}

                // const algo = document.querySelector("#teste")
                // const tr = document.createElement('tr');
                
                // if(algo){
                //     tr.innerHTML="asdjkaskldjaskldj"
                //     algo.appendChild(tr)
                // }

    function templateProduct () {
        const productList = document.getElementById('productList');
        if (!productList){
            return 
        }

        let cart = getCart();

        cart.forEach(item => {
                console.log(item)
            const elementProduct = document.createElement('div');
            elementProduct.classList.add('produto');
            
            const elementTitle = document.createElement('span');
            elementTitle.classList.add('nome');
            elementTitle.innerHTML = 'Nome: ' + item.name

            elementProduct.appendChild(elementTitle);

            const elementProducts = document.createElement('div');
            elementProducts.classList.add('div');

            const elementImage = document.createElement('img');
            elementImage.classList.add('imagem');
            elementImage.setAttribute('src','productsImg/' + item.image);

            elementProducts.appendChild(elementImage);
            elementProduct.appendChild(elementProducts);

            const elementValue = document.createElement('span');
            elementValue.classList.add('preco');
            elementValue.innerHTML = 'Valor: ' + item.value;

            elementProduct.appendChild(elementValue);

            productList.appendChild(elementProduct);
            
        })

        
    }

    function getCart (){
        let cart = localStorage.getItem(KEYCART) // pegar do localstorage
    
            if(!cart){
                cart = '[]'
            }
            
            const cartFormated = JSON.parse(cart);

            return cartFormated;
    };

    function addServer ({id, name, value, genre, description, image}) {
        let cart = localStorage.getItem(KEYCART) // pegar do localstorage
        
        if(!cart){
            cart = '[]'
        }
        
        const cartFormated = JSON.parse(cart)
        
        cartFormated.push({id, name, value, genre, description, image})
        
        localStorage.setItem(KEYCART, JSON.stringify(cartFormated));
        
        fetch('/carrinho')
        .then(function(res){
            return res.json()
        })
        .then(function(cartFormated){
            let price = 0;


        })
            
    }


    window.onload = function (){
        templateProduct()
        console.log('hello wolrd')
    }

