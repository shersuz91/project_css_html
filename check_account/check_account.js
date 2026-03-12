let admins_email = localStorage.getItem("_email")
let admins_pass = localStorage.getItem("_pass")
let admins_id = localStorage.getItem("_id")
let _id_part = location.search
let _id = Number(_id_part.slice(_id_part.indexOf("id=") + 3))
console.log(_id)
let came_from = document.referrer
if (admins_id == _id ){
    if(came_from.includes("http://127.0.0.1:5500/")){
        document.location.href = "../admins/dashboard.html"
    }
}