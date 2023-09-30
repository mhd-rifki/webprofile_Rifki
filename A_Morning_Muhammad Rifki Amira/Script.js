
// Sticky Menubar

window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav")
    nav.classList.toggle("stick",this.window.scrollY >0)
})

// Pop-Up Message

let openMessage  = document.getElementById("open")
let closeMessage = document.getElementById("close")
let popup        = document.querySelector(".pop-up")

openMessage.addEventListener("click", function(){
    popup.classList.add("show");
})

closeMessage.addEventListener("click", function(){
    popup.classList.remove("show");
})