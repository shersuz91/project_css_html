
import { our_clients } from "../module.js";

let body_table = document.getElementsByClassName("body_table")[0]
let admin_name = document.getElementById("name_admin")
admin_name.textContent = localStorage.getItem("_name_admin")
for (let i = 0; i < our_clients.length; i++){
    let status = null
    if (our_clients[i].status == true) {
        status = "🟢"
    }
    else{
        status = "🔴"
    }
    body_table.innerHTML+=`
            <tr>
                <td>${our_clients[i].id}</td>
                <td>${our_clients[i].name}</td>
                <td>${our_clients[i].email}</td>
                <td>${our_clients[i].comapny}</td>
                <td>${our_clients[i].start}</td>
                <td>${our_clients[i].end}</td>
                <td>${status}</td>
                <td><a href='./edit.html?id${our_clients[i].id}'>Edit</a><a href='delete_file.html?id${our_clients[i].id}'>DELTE</a></td>
            </tr>`
}