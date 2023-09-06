let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'chicken biryani',
        image: 'biryanis-of-Hyderabad-ed.jpg',
        price: 120
    },
    {
        id: 2,
        name: 'mutton biryani',
        image: 'Gosht-Biryani-1300x868.jpeg',
        price: 120
    },
    {
        id: 3,
        name: 'special mutton biryani',
        image: '3r3bmreg_biryani_120x90_07_July_22.png ',
        price: 120
    },
    {
        id: 4,
        name: 'fish biryani',
        image: 'fish biryani.webp',
        price: 120
    },
    {
        id: 5,
        name: 'special fish biryani',
        image: 'special fish - Copy.jfif',
        price: 120
    },
    {
        id: 6,
        name: 'butter chicken',
        image: 'butter chicken.jpg',
        price: 120
    },
    {
        id: 7,
        name: 'tandoori chicken',
        image: 'tandoori.jfif',
        price: 120
    },
    {
        id: 8,
        name: 'grill chicken',
        image: 'grill.jpg',
        price: 120
    },
    {
        id: 9,
        name: 'afgani chicken',
        image: 'afgani.webp',
        price: 120
    },
    {
        id: 10,
        name: 'mughlai chicken',
        image: 'Mughlai-Chicken-Recipe-by-Food-fusion-5.webp',
        price: 120
    },
    {
        id: 11,
        name: 'chicken fry',
        image: 'thumb__700_0_0_0_auto - Copy.jpg',
        price: 120
    },
    {
        id: 12,
        name: 'hyderabad special chicken briyani',
        image: 'whatsapp_image_2021-10-27_at_19.54.34_1 - Copy.jpeg',
        price: 120
    }

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}