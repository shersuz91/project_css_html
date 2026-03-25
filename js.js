import { admins, our_clients } from "./module.js"
let form = document.querySelector("form")
let submit = document.querySelector("input[type='submit']")
if (localStorage.getItem("admin_setting") != null){
    var admins_ = JSON.parse(localStorage.getItem("admin_setting"))
    document.location.href="./check_account/check_account.html?id="+admins_.id
}
submit.addEventListener("click", function(e){
     e.preventDefault()
        var formatD =  new FormData(form)
        var _data = Object.fromEntries(formatD)
        var _email = _data.email
        var _pass = _data.password
        let user_data = {
            "name": _email,
            "pass": _pass
        }
        for (let i = 0; i < admins.length; i++){
            if (admins[i].email.toLowerCase() == _email.toLowerCase() && admins[i].pass == _pass){
                
                localStorage.setItem("_email", admins[i].email)
                localStorage.setItem("_password", admins[i].pass)
                localStorage.setItem("_id", admins[i].id)
                if (localStorage.getItem("admin_setting") == null){
                    localStorage.setItem("admin_setting", JSON.stringify(admins[i]))
                }
                if (localStorage.getItem("clients_data") == null){
                    localStorage.setItem("clients_data", JSON.stringify(our_clients))
                }
                document.location.href="./check_account/check_account.html?id="+admins[i].id


            }
            else if (i == admins.length -1){
                console.log("Not exist")
            }
        }
       
        
         
   
})


console.log(document.URL)