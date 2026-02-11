function showMessage(){
    alert("Thank you for showing interest!");
}
const text = "Hello, I'm Anjali Anandi 👋";
let index = 0;
function typeEffect(){
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
window.addEventListener("load", typeEffect)
function revealOnScroll(){
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - revealPoint){
            el.classList.add("active");
        }else{
            el.classList.remove("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll)
document.getElementById("hireBtn")?.addEventListener("click", showMessage);
window.addEventListener("load", function() {
    document.body.style.opacity="0";
    setTimeout(() => {
        document.body.style.transition="opacity 1.5s";
        document.body.style.opacity="1";
    }, 100);
});
const toggleBtn = document.getElementById("themeToggle");
if (toggleBtn) {
    toggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark");
        toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
}
function validateForm(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("message").value;
    if(name === "" || email === "" || message === ""){
        document.getElementById("error").innerText = "All fields are required!";
        return false;
    }
    alert("Message sent successfully!");
    return true;
}
window.addEventListener("scroll", function(){
    document.querySelectorAll(".bar span").forEach((bar) => {
        const sectionTop = document
        .getElementById("skills")
        .getBoundingClientRect().top;
        if(sectionTop < window.innerHeight - 100) {
            bar.style.width = bar.getAttribute("data-width");
        }
    });
});
document.getElementById("emailText")?.addEventListener("click", () => {
    navigator.clipboard.writeText("anjalianandi.152@gmail.com");
    alert("Email copied to clipboard!");
});
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuToggle.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
});
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
    });
});