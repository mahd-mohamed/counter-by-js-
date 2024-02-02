/**
 * this is counter by js ,css and html : 
 * made by mahd-mohamed 
 */

const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increse = document.getElementById("increse");
const count = document.getElementById("count");
let count1 =0;
increse.onclick = function(){

    count1++;
    count.textContent = count1;
}
decrease.onclick = function(){

    count1--;
    count.textContent = count1;
}
reset.onclick = function(){

    count1=0;
    count.textContent = count1;
}

