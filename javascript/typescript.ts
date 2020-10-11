interface food {
    name: string;
    price: number;
    count: number;
};

var foodMenu: food[] = [
    {name: "Beefy Burgers" , price: 5 , count: 0} ,
    {name: "Burger Boys" , price: 7 , count: 0} ,
    {name: "Burger Bizz" , price: 9 , count: 0} ,
    {name: "Crackles Burger" , price: 10 , count: 0} ,
    {name: "Bull Burgers" , price: 13 , count: 0} ,
    {name: "Rocket Burgers" , price: 17 , count: 0} ,
    {name: "Smokin Burger" , price: 20 , count: 0} ,
    {name: "Delish Burger" , price: 22 , count: 0}
];

function printLabelName(index : number) : void{
    document.write(foodMenu[index].name);
}

function printLabelPrice(index : number) : void{
    document.write(foodMenu[index].price.toString());
}

function calculateBill(arr: number[]) : void {
    let sum : number = 0;
    for(let i = 0 ; i < 8 ; i++) {
        foodMenu[i].count = arr[i];
        sum += foodMenu[i].price * foodMenu[i].count;
    }
    alert("your bill is " + sum + " $! bon appetit :D");
}

