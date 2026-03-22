let body_table = document.getElementsByClassName("body_table")[0]
var our_clients = JSON.parse(localStorage.getItem("clients_data"))
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
                <td>${our_clients[i].comapny}</td>
                <td>${our_clients[i].plan}</td>
                <td>${our_clients[i].start}</td>
                <td>${end}</td>
                <td>${status}</td>
                <td>
                <div class='action'>
                <a href='./edit.html?id${our_clients[i].id}'><i class="fa-regular fa-pen-to-square"></i></a><a href='delete_file.html?id${our_clients[i].id}'><i class="fa-regular fa-trash-can"></i></a>
                </div></td>
            </tr>`
}
