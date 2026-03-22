// import { our_clients } from "../module"

// import { our_clients } from "../module.js";


let admin_name = document.getElementById("name_admin")
let admin_info = JSON.parse(localStorage.getItem("_name_admin"))
admin_name.textContent = admin_info.name

// Theme changeing
// var theme_link = document.getElementById("theme_color").href="./themes/retro.css"
// console.log(theme_link)