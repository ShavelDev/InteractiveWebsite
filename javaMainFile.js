
import {essayArray} from './textData.js';
let par =  document.querySelector(".content-text")
par.innerHTML = essayArray[0];


document.addEventListener("DOMContentLoaded", function() {
    const sideBarTexts = document.querySelectorAll(".sideBar-text");
    sideBarTexts.forEach(function(element, index) {
        element.addEventListener("click", function() {
            sideBarAction(index);
        });
    });
});



function sideBarAction(number){
    par.innerHTML = essayArray[number];
}



console.log('java main file loaded succesfully')



