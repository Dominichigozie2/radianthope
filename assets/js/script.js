//  THIS CODE IS FOR NAVBARl

const menuToggle = document.getElementById("menuToggle");
    const navLink = document.getElementById("navLink");
    const exitBtn = document.getElementById("exitBtn");
   menuToggle.onclick = function() {
    navLink.style.display = "block";
    menuToggle.style.display ="none";
    if(menuToggle.style.display == "none"){
        menuToggle.style.display ="none";
        navLink.style.display = "flex";
    }
    else if(navLink.style.display == "flex"){
        menuToggle.style.display ="none";
    }
    else{
        navLink.style.display = "none";
    }
   }
   exitBtn.onclick = function() {
    navLink.style.display = "none";
    menuToggle.style.display ="block";
   }


    


// THE NAVBAR JAVASCRIPT CODE ENDED HERE 

// FOR FAQS RESULT
const btn1 = document.getElementById("displayShow1");
const btn2 = document.getElementById("displayShow2");
const btn3 = document.getElementById("displayShow3");
const btn4 = document.getElementById("displayShow4");
const btn5 = document.getElementById("displayShow5");
const btn6 = document.getElementById("displayShow6");
const btn7 = document.getElementById("displayShow7");
const btn8 = document.getElementById("displayShow8");
const btn9 = document.getElementById("displayShow9");
const btn10 = document.getElementById("displayShow10");
const result1 = document.getElementById("no1Result");
const result2 = document.getElementById("no2Result");
const result3 = document.getElementById("no3Result");
const result4 = document.getElementById("no4Result");
const result5 = document.getElementById("no5Result");
const result6 = document.getElementById("no6Result");
const result7 = document.getElementById("no7Result");
const result8 = document.getElementById("no8Result");
const result9 = document.getElementById("no9Result");
const result10 = document.getElementById("no10Result");
const buttCont = document.querySelector(".butt-cont");
const forPlus = document.querySelector(".for-plus");
btn1.onclick = function(){
    result1.style.display ="block";
    forPlus.textContent ="-";
    if(forPlus.textContent =="-"){
        forPlus.onclick = function(){
            result1.style.display ="none"; 
            forPlus.textContent ="+";  
        }
    }
    else{
        result1.style.display ="none"; 
    }
}



// for blog image


const track = document.querySelector(".for-image-center");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const dots = document.querySelectorAll(".dot");

let index = 0;

function updateCarousel(){
    const cardWidth = document.querySelector(".blog-image").offsetWidth;
    track.style.transform = `translateX(-${index * (cardWidth + 15)}px)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}
prevBtn.addEventListener("click", () => {
    if (index > 0){
        index--;
        updateCarousel();
    }
});
nextBtn.addEventListener("click", () => {
    if (index < dots.length - 1){
        index++;
        updateCarousel();
    }
});
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        updateCarousel();
    });
});

