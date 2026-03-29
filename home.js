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
var a_link = document.querySelectorAll(".a_link")
var go_up = document.getElementById("go_up")
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

      if (window.scrollY > 100){
        go_up.style.opacity="1"
    }
    else{
go_up.style.opacity="0"
    }
    console.log(window.scrollY)
    for(let i = 0; i< a_link.length; i++){
            a_link[i].classList.remove("active_section")
        }
    if (1345 >window.scrollY && window.scrollY >= 800){
        
        about_top_a.classList.add("active_section")
    }
    else if(1745 >window.scrollY && window.scrollY >= 1345){
        offer_top_a.classList.add("active_section")
    }
     else if(2245 >window.scrollY && window.scrollY >= 1745){
        for_how_top_a.classList.add("active_section")
    }

      else if(3072 >window.scrollY && window.scrollY >= 2245){
        price_top_a.classList.add("active_section")
    }
      else if(3472 >window.scrollY && window.scrollY >= 3072){
        review_top_a.classList.add("active_section")
    }
      else if(window.scrollY >= 3472){
        conec_top_a.classList.add("active_section")
    }
})

prev.addEventListener("click", function(e){
card_box.scrollBy(-200, 0)

})

next.addEventListener("click", function(e){
card_box.scrollBy(200, 0)

})
