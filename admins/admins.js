// import { our_clients } from "../module"

// import { our_clients } from "../module.js";
window.onload=function(){
    


}
window.addEventListener("load", function(){
    if (localStorage.getItem("admin_setting") != null){
        
var bar_btn = document.getElementById("bar_btn")
var aside = document.querySelector("aside")
document.body.classList.remove("d-none")


let admin_name = document.getElementById("name_admin")

let admin_info = JSON.parse(localStorage.getItem("admin_setting"))

var theme_link = document.getElementById("theme_color")
var log_out = this.document.getElementById("log_out")
var log_out_confirm = document.getElementById("log_out_confirm")

admin_name.textContent = admin_info.name

if(admin_info.theme!=null){
    theme_link.setAttribute("href","./themes/"+admin_info.theme+".css")
}
else{
     theme_link.setAttribute("href","./themes/regular.css")
}
// Theme changeing
// var theme_link = document.getElementById("theme_color").href="./themes/retro.css"
// console.log(theme_link)
    }else{
 document.location.href="../index.html"
        }

bar_btn.addEventListener("click", function(){
    aside.classList.toggle("show")
})

})
log_out.addEventListener("click", function(){
    log_out_confirm.style.display = "flex"
})

var log_out_cancel = document.getElementById("confirm_no")
log_out_cancel.addEventListener("click", function(){
    log_out_confirm.style.display = "none"
})

var confirm_yes = document.getElementById("confirm_yes")
confirm_yes.addEventListener("click", function(){
    localStorage.removeItem("admin_setting")
    document.location.href="../index.html"
})
