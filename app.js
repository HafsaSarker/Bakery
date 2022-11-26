//TODO: FIX INCREMEANT N DECREMEANT FOR ALL

const headerArr = [
{
    id: 1,
    img:
    "menu items/header3.jpg",
    text:
    "Strawberry shortcake is typically made with a biscuit-like cake or scone that is split and filled with strawberries and sweetened whipped cream. It's a dessert that is easy to make and really highlights the berries. The name actually dates back long before this current shortcake first appeared.",
},
{
    id: 2,
    img:
    "menu items/header6.jpg",
    text:
    "Matcha Mille Crepe Cake - a delicious twist on a traditional French pastry! This cake is made of thin layers of green tea crepes, stacked together with fresh whipped cream in-between. The perfect dessert idea if you don't have an oven - every layer is made on a stovetop. This cake will impress you with its beautiful look and tasty flavor.",
},
{
    id: 3,
    img:
    "menu items/headerpic4.jpg",
    text:
    "This matcha cake or green tea cake is made with matcha powder, a bright green powder made in Japan from finely ground green tea leaves. It gives this sponge cake a beautiful green color and a slightly earthy flavor. Its flavor similar to the taste of green tea but with stronger, more vibrant grassy notes.",
},
{
    id: 4,
    img:
    "menu items/1647534372242.jpeg",
    text:
    "This strawberry cake completely blew me away. After years of mediocre from-scratch strawberry cakes, my expectations were pretty low. It was time to taste test my efforts. Biting into the first pastel pink forkful was the moment of truth…I cried tears of joy. Or were those actual tears because I just dirtied every dish with all this strawberry cake recipe testing?",
},
];

const img = document.getElementById("header-img");
const info = document.getElementById("shop-desc");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;
// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showHeader(currentItem);
});

//show person based on item 
function showHeader(_items_){
    const item = headerArr[_items_];
    img.src = item.img;
    info.textContent = item.text;
}
//show next person
nextBtn.addEventListener('click', function () {
    currentItem++;
    if(currentItem > headerArr.length - 1){
        currentItem = 0;
    }
    showHeader(currentItem);
});

prevBtn.addEventListener('click', function () {
    currentItem--;
    if(currentItem < 0){
        currentItem = headerArr.length - 1;
    }
    showHeader(currentItem);
});


//set initial count
let count = 0;

//select val and btn
const value = document.getElementById("quantity");
const incrmt= document.getElementById("add");
const decrmt = document.getElementById("minus");

const increaseCount =  () => {
    count++;
    value.innerHTML = count;
}
const decreaseCount =  () => {
    count--;
    if(count <= 0){
        count = 1;
    }
    value.innerHTML = count;
}
incrmt.addEventListener("click", increaseCount);
decrmt.addEventListener("click", decreaseCount);