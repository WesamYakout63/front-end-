;
var foodMenu = [
    { name: "Beefy Burgers", price: 5, count: 0 },
    { name: "Burger Boys", price: 7, count: 0 },
    { name: "Burger Bizz", price: 9, count: 0 },
    { name: "Crackles Burger", price: 10, count: 0 },
    { name: "Bull Burgers", price: 13, count: 0 },
    { name: "Rocket Burgers", price: 17, count: 0 },
    { name: "Smokin Burger", price: 20, count: 0 },
    { name: "Delish Burger", price: 22, count: 0 }
];
function printLabelName(index) {
    document.write(foodMenu[index].name);
}
function printLabelPrice(index) {
    document.write(foodMenu[index].price.toString());
}
function calculateBill(arr) {
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        foodMenu[i].count = arr[i];
        sum += foodMenu[i].price * foodMenu[i].count;
    }
    alert("your bill is " + sum + " $! bon appetit :D");
}
