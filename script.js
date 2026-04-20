let products = [
{
    name:"Букет троянд",
    price:600,
    image:"https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=400"
},
{
    name:"Тюльпани",
    price:450,
    image:"https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400"
},
{
    name:"Ведмедик",
    price:350,
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
},
{
    name:"Подарунковий набір",
    price:500,
    image:"https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400"
}
];

let total = 0;
let container = document.getElementById("products");

products.forEach(product => {

let card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<img src="${product.image}">
<h3>${product.name}</h3>
<p>${product.price} грн</p>
<button onclick="addToCart(${product.price})">Обрати</button>
`;

container.appendChild(card);

});

function addToCart(price){
    total += price;
    document.getElementById("total").innerText = "Сума: " + total + " грн";
}