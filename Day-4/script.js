const x = Number(document.getElementById("num1").value);
const y = Number(document.getElementById("num2").value);
const z = Number(document.getElementById("num3").value);
const s=(x+y+z)/2;

const a=s*((s-x)*(s-y)*(s-z));

const submit = document.getElementById("submit");
submit.addEventListener('click',()=>{
    const res = Math.sqrt(a);
    document.getElementById("ans").innerHTML=res;
})


// question 2

const n1 = Number(document.getElementById("n1").value);
const n2 = Number(document.getElementById("n2").value);
const Mul = document.getElementById("Mul");
const Div = document.getElementById("Div");

Mul.addEventListener('click',()=>{
    document.getElementById("answer").innerHTML=n1*n2;
})

Div.addEventListener('click',()=>{
    document.getElementById("answer").innerHTML=n1/n2;
})


// question 3

let Celcius = document.getElementById("celcius");
let Fahrenheit = document.getElementById("fahrenheit");

Celcius.addEventListener('input',()=>{
    let sol = (Celcius.value * 9/5) + 32;
    Fahrenheit.value = sol;
})

Fahrenheit.addEventListener('input',()=>{
    let sol = (Fahrenheit.value - 32)* 5/9
    Celcius.value = sol;
})

