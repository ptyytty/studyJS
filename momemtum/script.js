// const a = 5;
// const b = 2;
// const myName = "typark";

// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("hello " + myName);

// const amIFat = null;
// let something; // = undefined 값이 없음

// console.log(amIFat);

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(daysOfWeek);

// daysOfWeek.push("sun");

// console.log(daysOfWeek);

// const player = {
//     name: "typark",
//     points: 10,
//     fat: false,
// }

// console.log(player);
// console.log(player.name);

// player.lastname = "potato";
// console.log(player);

// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);

// }

// sayHello("park", 24);
// sayHello("lee", 21);
// sayHello("kim", 30);

// const player = {
//     name: "typark",
//     sayHello: function(otherPersonsName){
//         console.log("Hello " + otherPersonsName);
//     }
// }

// console.log(player.name);
// player.sayHello("lynn");

// const age = parseInt(prompt("How old are you?"));
// console.log(age);

// const age = parseInt(prompt("How old are you?"));
// if(isNaN(age)){
//     console.log("Please write a number");
// }else if(age<18){
//     console.log("You are too young");
// }else{
//     console.log("You can drink");
// }

// const title = document.getElementById("title");
// title.innerText = "Got you!";

// const title = document.querySelector(".hello h1");  //querySelector = 한 개만 가져옴    querySelectorAll = 조건 맞으면 다 가져옴
// console.log(title);

const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter)
title.addEventListener("mouseleave",handleMouseLeave)
