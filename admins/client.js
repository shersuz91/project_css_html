let body_table = document.getElementById("body_table")
var our_clients = JSON.parse(localStorage.getItem("clients_data"))
let service_select = document.getElementById("service_select")
let status_select = document.getElementById("status_select")
console.log(our_clients)

for (let i = 0; i < our_clients.length; i++){
    let status = null
    var start_data = our_clients[i].start
    start_data = new Date(start_data)
    console.log(start_data)

    var end = our_clients[i].start.split("-")
     end[0] = Number(end[0])+1
    end = end.join("-")
    var time_now = new Date()
    var day = time_now.getDate()
    var month = time_now.getMonth() +1
    var year = time_now.getFullYear()

    var end_date = new Date(end)
    var now = new Date()
 if (end_date < now){
    our_clients[i].status = false
 }
 else if (start_data <= now  && end_date >= now){
    our_clients[i].status = true
 }
 else if (start_data > now ){
    our_clients[i].status = null
 }

   

    if (our_clients[i].status == true) {
        status = "🟢"
    }
    else if(our_clients[i].status == false){
        status = "🔴"
    }
    else{
        status ="Pending.."
    }
    
    
    body_table.innerHTML+=`
            <tr>
                <td>${our_clients[i].id}</td>
                <td>${our_clients[i].name}</td>
                <td class='service'>${our_clients[i].comapny}</td>
                <td class='md_show'>${our_clients[i].plan}</td>
                <td class='md_show'>${our_clients[i].start}</td>
                <td class='md_show'>${end}</td>
                <td class='status '>${status}</td>
                <td >
                <div class='action'>
                <a href='./edit.html?id${our_clients[i].id}'><i class="fa-regular fa-pen-to-square"></i></a><a href='delete_file.html?id${our_clients[i].id}'><i class="fa-regular fa-trash-can"></i></a>
                </div></td>
            </tr>`
}
function filterService(service_list,filter_value){
    Array.from(service_list).forEach(el=>{
    if (el.textContent != filter_value && filter_value!="all"){
        
        el.parentElement.classList.add("display_service")
    }
    else {
        el.parentElement.classList.remove("display_service")
    }
})
}
service_select.addEventListener("change", function(e){
var service = document.getElementsByClassName("service")
filterService(service,e.target.value)
})

status_select.addEventListener("change", function(e){
    console.log(service_select.value)
    var status = document.getElementsByClassName("status")
    Array.from(status).forEach(el=>{
        
        if(e.target.value == "Active"){
            if(el.textContent =="🟢" && !el.classList.contains("display_service")){
                el.parentElement.classList.remove("display_status")
            }
            else {
                 el.parentElement.classList.add("display_status")
            }
        }
        else if(e.target.value == "Expired"){
            if(el.textContent =="🔴" && !el.classList.contains("display_service")){
                el.parentElement.classList.remove("display_status")
            }
            else{
                 el.parentElement.classList.add("display_status")
            }
        }
        else if(e.target.value == "Panding" && !el.classList.contains("display_service")){
            if(el.textContent !="🔴" && el.textContent !="🟢" && !el.classList.contains("display_service")){
                el.parentElement.classList.remove("display_status")
            }
            else{
                 el.parentElement.classList.add("display_status")
            }
        }
        else{
            el.parentElement.classList.remove("display_status")
        }
        
    })
})
