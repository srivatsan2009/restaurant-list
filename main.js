menu_dish_items=["vegetable pizza" , "margherita pizza" , "cheeseburst pizza" , "paneer burger" , "paneer pizza" , "combo of paneer and cheeseburst pizza"];

function show() {
document.getElementById("array").innerHTML=menu_dish_items;
}

function add() {
text=document.getElementById("new_dish").value;
menu_dish_items.sort();
menu_dish_items.push(text);
document.getElementById("array").innerHTML=menu_dish_items;
}