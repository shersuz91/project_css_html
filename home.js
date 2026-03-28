var bar_btn = document.getElementById("bar_btn")
var nav =  document.querySelector("nav")
// bar_btn.addEventListener("click", function(){
//     nav.classList.toggle("show_list")
// })
var prev = document.getElementById("prev")
var next = document.getElementById("next")
var card_box =  document.querySelector(".card_box")
var cards = document.querySelectorAll(".cards")
document.addEventListener("click", function(e){
    console.log(e.target.matches("[btn]"))
    if (e.target.matches("[btn]")){
        nav.classList.toggle("show_list")
    }
    else{
        nav.classList.remove("show_list")
    }
})


window.addEventListener("scroll", function(){
        console.log(window.scrollY)
   
    if (window.scrollY > 20){
        nav.classList.add("solid")
    }
    else{
        nav.classList.remove("solid")

    }
})

prev.addEventListener("click", function(e){
card_box.scrollBy(-200, 0)

})

next.addEventListener("click", function(e){
card_box.scrollBy(200, 0)

})
card_box.scrollTo(300, 0)