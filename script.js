// =========================
// WEBSITE LOADED ALERT
// =========================

window.addEventListener("load", () => {

setTimeout(() => {

alert(
"🙏 Welcome to MAHADEV CNC\n\nPrecision in Every Cut, Perfection in Every Design."
);

}, 1000);

});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,0.15)";

}
else{

navbar.style.boxShadow =
"0 5px 25px rgba(0,0,0,0.08)";

}

});

// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

target.scrollIntoView({
behavior:"smooth"
});

});

});

// =========================
// REVEAL ANIMATION
// =========================

const revealElements =
document.querySelectorAll(
".card, .app-card, .feature, .stat-box"
);

function reveal(){

revealElements.forEach((element)=>{

const windowHeight =
window.innerHeight;

const elementTop =
element.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

element.style.opacity = "1";
element.style.transform =
"translateY(0px)";

}

});

}

revealElements.forEach((element)=>{

element.style.opacity = "0";

element.style.transform =
"translateY(40px)";

element.style.transition =
"all 0.8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// =========================
// COUNTER ANIMATION
// =========================

const counters =
document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

const updateCounter = () => {

const target =
parseInt(
counter.innerText.replace(/\D/g,'')
);

const current =
+counter.getAttribute("data-count")
|| 0;

const increment =
target / 100;

if(current < target){

const next =
Math.ceil(current + increment);

counter.setAttribute(
"data-count",
next
);

if(counter.innerText.includes("+")){

counter.innerText =
next + "+";

}
else if(counter.innerText.includes("%")){

counter.innerText =
next + "%";

}
else{

counter.innerText = next;

}

setTimeout(updateCounter,20);

}

};

updateCounter();

});

// =========================
// WHATSAPP BUTTON ALERT
// =========================

const whatsappBtn =
document.querySelector(".floating-whatsapp");

if(whatsappBtn){

whatsappBtn.addEventListener("click",()=>{

alert(
"Thank you for contacting MAHADEV CNC!\n\nWe will assist you shortly."
);

});

}

// =========================
// CONTACT BUTTON ALERT
// =========================

const contactBtn =
document.querySelector(".whatsapp");

if(contactBtn){

contactBtn.addEventListener("click",()=>{

alert(
"Redirecting to WhatsApp...\n\nGet your free quotation now!"
);

});

}

// =========================
// CONSOLE MESSAGE
// =========================

console.log(
"MAHADEV CNC Website Loaded Successfully"
);

const form =
document.getElementById("customerForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name =
document.getElementById("name").value;

alert(
"Thank You " +
name +
"! We will contact you soon."
);

form.reset();

});

}