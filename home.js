var bar_btn = document.getElementById("bar_btn")
var nav =  document.querySelector("nav")
// bar_btn.addEventListener("click", function(){
//     nav.classList.toggle("show_list")
// })
var prev = document.getElementById("prev")
var next = document.getElementById("next")
var card_box =  document.querySelector(".card_box")
var cards = document.querySelectorAll(".cards")
var about_top_a = document.getElementById("about_top_a")
var offer_top_a = document.getElementById("offer_top_a")
var for_how_top_a = document.getElementById("for_how_top_a")
var price_top_a = document.getElementById("price_top_a")
var review_top_a = document.getElementById("review_top_a")
var conec_top_a = document.getElementById("conec_top_a")
var navLinks = document.querySelectorAll(".a_link")
var go_up = document.getElementById("go_up")
document.addEventListener("click", function(e){
    if (e.target.matches("[btn]")){
        nav.classList.toggle("show_list")
    }
    else{
        nav.classList.remove("show_list")
    }
})


window.addEventListener("scroll", function(){
   
    if (window.scrollY > 20){
        nav.classList.add("solid")
    }
    else{
        nav.classList.remove("solid")
    }

      if (window.scrollY > 100){
        go_up.style.opacity="1"
    }
    else{
go_up.style.opacity="0"
    }
    
    
})

prev.addEventListener("click", function(e){
card_box.scrollBy(-200, 0)

})

next.addEventListener("click", function(e){
card_box.scrollBy(200, 0)

})
