const counter = document.getElementById("counter");
const incr= document.querySelector(".increase");
const decr = document.querySelector(".decrease");

let count = 0;

incr.addEventListener("click", ()=> {
    count++;
    counter.innerHTML = count;
});

decr.addEventListener("click", ()=>{
    count--;
    counter.innerHTML = count;
})