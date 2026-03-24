import { add_client } from "../module.js"  
var c_form = document.querySelector("form")
var form_box  = document.getElementsByClassName("form_box ")
var active_box  = document.getElementsByClassName("active_box")
var active_span = document.getElementsByClassName("active_span") 
var form_bar = document.querySelectorAll(".form_bar > span")
var btn_submit = document.querySelector("button[type='submit']")
var get_form = document.getElementsByClassName("get_form")
Array.from(get_form).forEach(element=>{
    console.log(element)
    element.addEventListener("click", function(e){
        

     // set the first position of the form
        // when it start should be in the first section
        var pose =  Number(active_box[0].getAttribute("form_box"))


    // check if the pressed button is Next
    if (e.target.textContent=="Next"){
        var inputs = active_box[0].querySelectorAll("input, select")
        // Here I check if the inputs in the current form box are valid or not
       for (let i = 0; i< inputs.length; i++){
        if (!inputs[i].checkValidity()){
            inputs[i].nextElementSibling.style.display="block"
            return
        }
        else{
            inputs[i].nextElementSibling.style.display="none"
        }
        
       }
        pose +=1
        // In this section I remove the active class from the span bar and from the current form box
        // **************************
        // for the current span that has active give it unactive class
        // to make the ::after class goes forward(look at css style)
        active_span[0].classList.add("unactive_span")
        // in the same time add active_box class to the next box_form(look at active_box in css)
        active_box[0].nextElementSibling.classList.add("active_box")
        // here get the first active_span(current active span) and give the next element active_span
        active_span[0].nextElementSibling.classList.add("active_span")
        active_box[0].style.left= "-100%"
        // Here we remove the active_box and active_span from the current elements
        active_box[0].classList.remove("active_box")
        active_span[0].classList.remove("active_span")
        active_box[0].style.left= "0%"

        
    }
    // check if the pressed button is Back
    else if(e.target.textContent == "Back"){
        pose -=1
        // We do the sam thing for the back direction but we don't add unactive span class(look at the unctive_span class in css)
        Array.from(active_box).at(-1).previousElementSibling.classList.add("active_box")
        Array.from(active_box).at(-1).style.left= "100%"
         Array.from(active_span).at(-1).previousElementSibling.classList.add("active_span")
         Array.from(active_span).at(-1).previousElementSibling.classList.remove("unactive_span")
        Array.from(active_box).at(-1).classList.remove("active_box")
        Array.from(active_span).at(-1).classList.remove("active_span")
        active_box[0].style.left= "0%"
    }
   
    // Here I control the next and back button
    // First I remove the disabled atter from both
        document.getElementsByClassName("prev")[0].removeAttribute("disabled")
        document.getElementsByClassName("next")[0].removeAttribute("disabled")
        // Second I check where is the active class
        if (form_box[0].classList.contains("active_box")){
            // if it is in the first form box so there is no need for go back
            document.getElementsByClassName("prev")[0].setAttribute("disabled", "true")
        }
        else if (Array.from(form_box).at(-1).classList.contains("active_box")){
            // if it is in the last form box so no need to go next
            document.getElementsByClassName("next")[0].setAttribute("disabled", "true")
            var new_form = new FormData(c_form)
    var c_data = Object.fromEntries(new_form)
    console.log(c_data["notes"])
    for (let key in c_data){
        document.getElementById(key).value = c_data[key]
    }
        }
    document.location.href="#top"
 
}
)
})

btn_submit.addEventListener("click", function(e){
    e.preventDefault()
    var new_form = new FormData(c_form)
    var c_data = Object.fromEntries(new_form)
    console.log(c_data)
    var new_client = {
        "name":c_data["first_name"],
        "last_name":c_data["last_name"],
        "email":c_data["email"],
        "comapny":c_data["service_type"],
        "plan":c_data["plan"],
        "start":c_data["start_date"],
        "notes":c_data["notes"]
    }
    add_client(new_client)

})

