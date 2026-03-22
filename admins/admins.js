// import { our_clients } from "../module"

// import { our_clients } from "../module.js";


let admin_name = document.getElementById("name_admin")
let admin_info = JSON.parse(localStorage.getItem("admin_setting"))
var theme_link = document.getElementById("theme_color")
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