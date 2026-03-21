var form_box  = document.getElementsByClassName("form_box ")
var active_box  = document.getElementsByClassName("active_box")
var form_bar = document.querySelectorAll(".form_bar > span")
function next(e){
    if (e.textContent=="Next"){
        var oldEl= active_box[0].getAttribute("form_box")
        active_box[0].nextElementSibling.classList.add("active_box")
        for (let i = 0; i<active_box.length; i++){
            if(active_box[i].getAttribute("form_box")==oldEl){
                active_box[i].classList.remove("active_box")
            }
        }
        var box_num = active_box[0].getAttribute("form_box")
form_bar[box_num].classList.add("active_span")
    for (i = 0; i<form_bar.length; i++ ){
        if(form_bar[i].getAttribute("form_bar") !=box_num ){
            if (form_bar[i].classList.contains("active_span")){
                form_bar[i].classList.add("unactive_span")
            }
            form_bar[i].classList.remove("active_span")
        }
    }
    }
    else if(e.textContent == "Back"){
        var oldEl= active_box[0].getAttribute("form_box")
        active_box[0].previousElementSibling.classList.add("active_box")
        for (let i = 0; i<active_box.length; i++){
            if(active_box[i].getAttribute("form_box")==oldEl){
                active_box[i].classList.remove("active_box")
            }
        }
         var box_num = active_box[0].getAttribute("form_box")
         console.log(box_num)
form_bar[box_num].classList.add("active_span")
    for (i = 0; i<form_bar.length; i++ ){
        if(form_bar[i].getAttribute("form_bar") !=box_num ){
            if (form_bar[i].classList.contains("active_span")){
                // form_bar[i].classList.add("unactive_span")
            }
            form_bar[i].classList.remove("active_span")
        }
    }
    }
        if (!form_box[0].classList.contains("active_box")){
            document.getElementsByClassName("prev")[0].removeAttribute("disabled")
        }
        else{
             document.getElementsByClassName("prev")[0].setAttribute("disabled", "true")
        }
        console.log(form_box)
        if (!Array.from(form_box).at(-1).classList.contains("active_box")){
            document.getElementsByClassName("next")[0].removeAttribute("disabled")
        }
        else{
             document.getElementsByClassName("next")[0].setAttribute("disabled", "true")
        }
    
    // var active_box  = document.getElementsByClassName("active_box")
    var box_num = active_box[0].getAttribute("form_box")
    for (let i = 0; i<form_box.length; i++){
        form_box[i].style.transform= "translateX(-"+box_num*100+"%)"
    }
// form_bar[box_num].classList.add("active_span")
//     for (i = 0; i<form_bar.length; i++ ){
//         if(form_bar[i].getAttribute("form_bar") !=box_num ){
//             if (form_bar[i].classList.contains("active_span")){
//                 form_bar[i].classList.add("unactive_span")
//             }
//             form_bar[i].classList.remove("active_span")
//         }
//     }
}
