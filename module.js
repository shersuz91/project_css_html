let admins = [
    {   "id":1,
        "email":"Sherman@gmail.com",
        "pass":"1234",
        "name":"sherman",
        "last_name":"sher",
        "phone":"+5123456"
    },
    {   "id":2,
        "email":"christine@gmail.com",
        "pass":"1234",
        "name":"christine christ",
        "last_name":"christ",
        "phone":"+5123456"
    }
    ,
    {   "id":3,
        "email":"rafee@gmail.com",
        "pass":"1234",
        "name":" Mahmudul",
        "last_name":"Rafee",
        "phone":"+5123456"
    }
]


let our_clients = [
    {
        "id":1,
        "name":"Ahmed",
        "last_name":"Ali",
        "email":"sdf@gmail.com",
        "comapny":"Gym",
        "plan":"starter",
        "start":"2026-3-2",
        "notes":""

    },
    {
        "id":2,
        "name":"John",
        "last_name":"Doe",
        "email":"john@gmail.com",
        "comapny":"Music",
        "plan":"starter",
        "start":"2025-1-1",
        "notes":""

    },
    {
        "id":3,
        "name":"Sara",
        "last_name":"Smith",
        "email":"sara@gmail.com",
        "comapny":"Music",
        "plan":"starter",
        "start":"2026-3-3",
        "notes":""
    },
    {
        "id":4,
        "name":"Michal",
        "last_name":"Smith",
        "email":"michal@gmail.com",
        "comapny":"Taekwondo",
        "plan":"starter",
        "start":"2026-4-4",
        "notes":""
    },
    {
        "id":5,
        "name":"Emy",
        "last_name":"Smith",
        "email":"emy@gmail.com",
        "comapny":"Taekwondo",
        "plan":"starter",
        "start":"2026-5-5",
        "notes":""
    },
    {
        "id":6,
        "name":"Ali",
        "last_name":"Smith",
        "email":"ali@gmail.com",
        "comapny":"Taekwondo",
        "plan":"starter",
        "start":"2026-6-6",
        "notes":""

    },
    {
        "id":7,
        "name":"Sara",
        "last_name":"Smith",
        "email":"sara@gmail.com",
        "comapny":"Taekwondo",
        "plan":"starter",
        "start":"2026-7-7",
        "notes":""

    },
    {
        "id":8,
        "name":"Sara",
        "last_name":"Smith",
        "email":"sara@gmail.com",
        "comapny":"Gym",
        "plan":"starter",
        "start":"2026-8-8",
        "notes":""

    },
    {
        "id":9,
        "name":"Michael",
        "last_name":"Johnson",
        "email":"michael@gmail.com",
        "comapny":"Music",
        "plan":"starter",
        "start":"2026-9-9",
        "notes":""
    },
    {
        "id":10,
        "name":"Emily",
        "last_name":"Davis",
        "email":"emily@gmail.com",
        "comapny":"Music",
        "plan":"starter",
        "start":"2026-10-10",
        "notes":""

    }

]

function add_client(data){
    var all_client = JSON.parse(localStorage.getItem("clients_data"))
    var new_id = all_client.at(-1)["id"] + 1
    data["id"] = new_id
    all_client.push(data)
    localStorage.setItem("clients_data", JSON.stringify(all_client))
}

export {admins, our_clients, add_client}