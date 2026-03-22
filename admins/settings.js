let admin_info = JSON.parse(localStorage.getItem("admin_setting"))
var admin_name = document.querySelector("input[name='name']")
var admin_lastName = document.querySelector("input[name='last_name']")
var admin_email = document.querySelector("input[name='email']")
var admin_phone = document.querySelector("input[name='phone']")
var form = document.querySelector("form")
var submit_btn =  document.querySelector("button[type='submit']")
var noti_exp = document.querySelector("input[name='noti_exp']")
var noti_client = document.querySelector("input[name='noti_client']")
var noti_email = document.querySelector("input[name='noti_email']")
var theme =  document.querySelector("select[name='theme']")
var theme_link = document.getElementById("theme_color")





console.log(admin_info.name)
admin_name.value=admin_info.name
admin_lastName.value=admin_info.last_name
admin_email.value=admin_info.email
admin_phone.value=admin_info.phone
theme.value= admin_info.theme

function check_noti(el, att){
if (att=="on"){
    el.setAttribute("checked", true)
}
else{
    el.removeAttribute("checked")
}
}
check_noti(noti_email, admin_info.noti_email)
check_noti(noti_client, admin_info.noti_client)
check_noti(noti_exp, admin_info.noti_exp)


submit_btn.addEventListener("click", function(e){
    e.preventDefault()
    var uform  = new FormData(form)
    var up_data = Object.fromEntries(uform)
    delete admin_info.noti_email
    delete admin_info.noti_client
    delete admin_info.noti_exp
    up_data = {...admin_info , ...up_data}
    console.log(up_data)
    localStorage.setItem("admin_setting", JSON.stringify(up_data))
    
    
    window.location.reload()

})

