import { admins } from "./module.js"
let form = document.querySelector("form")
let submit = document.querySelector("input[type='submit']")
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
            if (admins[i].name.toLowerCase() == _email.toLowerCase() && admins[i].pass == _pass){
                
                localStorage.setItem("_email", admins[i].name)
                localStorage.setItem("_password", admins[i].pass)
                localStorage.setItem("_id", admins[i].id)
                document.location.href="./check_account/check_account.html?id="+admins[i].id
            }
            else if (i == admins.length -1){
                console.log("Not exist")
            }
        }
       
        
         
   
})
console.log(document.URL)