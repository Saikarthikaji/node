// console.log("hello world");

// async function getData() {
//     let data = await fetch('http://localhost:3000/getData');
//     console.log("data : " , data);

//     let parsed_data = await data.json();
//     console.log("parsed_data : ", parsed_data);

//     let content = document.getElementById('content');
//     console.log("content : " ,  content);


//     let rows = "";

//     for(let i=0; i<parsed_data.length; i++) {
//         rows = rows + `
//         <tr>
//         <td>${parsed_data[i]._id}</td>
//         <td><input name="id" id="name-${parsed_data[i]._id}" value="${parsed_data[i].name}"disabled=true></td>
//         <td><input name="email" id="email-${parsed_data[i]._id}" value="${parsed_data[i].email}"disabled=true></td>
//         <td><input name="password" id="password-${parsed_data[i]._id}" value="${parsed_data[i].password}"disabled=true></td>
//         <td><button onclick="handleEdit('${parsed_data[i]._id}')">Edit</button></td>
//         <td><button onclick="handleSave('${parsed_data[i]._id}')">Save</button></td>
//         <td><button onclick="handleDelete('${parsed_data[i]._id}')">Delete</button></td>
//         </tr>
//         `;
//     }

//     content.innerHTML = rows;
// }

// getData();

// function handleEdit(id) {
//     console.log("id : ",id);

//     let name = document.getElementById(`name-${id}`);
//     console.log("name : ",name);
//     name.disabled = false;

//     let email = document.getElementById(`email ${id}`);
//     console.log("email : ",email);
//     email.disabled = fales;

//     let password =document.getElementById(`password ${id}`);
//     console.log("password : ", password);
//     password.disabled = false;
// }

//  async function handleSave(id) {
//     console.log("id : ",id);

//     let name = document.getElementById(`name-${id}`);
//     console.log("name : ",name);
//     let namevalue = name.Value;
//     console.log("namevalue : ", namevalue);

//     let email = document.getElementById(`email-${id}`);
//     console.log("email : ",email);
//     let emailvalue = email.value;
//     console.log("emailvalue :", emailvalue);

//     let password =document.getElementById(`password ${id}`);
//     console.log("password : ", password);
//     let passwordvalue = password.value;
//     console.log("passwordvalue :", passwordvalue);


//     function handleDelete(id) {
//         console.log("id : ",id);
    
//         let name = document.getElementById(`name-${id}`);
//         console.log("name : ",name);
       
    
//         let email = document.getElementById(`email ${id}`);
//         console.log("email : ",email);
       
    
//         let password =document.getElementById(`password ${id}`);
//         console.log("password : ", password);
        
        
//     }

//     //sent t server

//     let data ={
//         id : id,
//         name : namevalue,
//         email : emailvalue,
//         password : passwordvalue,
//     }

//     console.log("data : ", data);

//     let json_data = JSON.stringify(data);
//     console.log("json_data : ", json_data);

//     let response = await fetch('http//localhost:3000/editData', {
//         method : "Put",
//         headers : {
//             "content-Type" : "applicaton/json",
//         },
//         body : json_data

//     });

//     console.log("response : ", response);

//     let parsed_response = await response.text();
//     console.log("parsed_response : ", parsed_response);

//     if (parsed_response == "success") {
//         alert("Updation successful");
//     }else {
//         alert ("Updation failed")
//     }
// }

// function handleDelete(id) {
//     console.log("id : ",id);

//     let name = document.getElementById(`name-${id}`);
//     console.log("name : ",name);
   

//     let email = document.getElementById(`email ${id}`);
//     console.log("email : ",email);
   

//     let password =document.getElementById(`password ${id}`);
//     console.log("password : ", password);
    
    
// }



async function getData() {
    console.log("Hello world");

    let data = await fetch('http://localhost:3000/getData');
    console.log("data : ", data);

    let parsedData = await data.json();
    console.log("parsedData : ", parsedData);

    let content = document.getElementById("content");
    console.log("content : ", content);

    let rows = "";

    for (let i = 0; i < parsedData.length; i++) {
        rows = rows + //`
            // <tr>
            // <td>${parsedData[i]._id}</td>
            // <td>${parsedData[i].pass}</id>
            // <td>${parsedData[i].email}</id>
            // <td>${parsedData[i].pass}</id>
            // </tr>
            // `
            `
        <tr>
        <td>${parsedData[i]._id}</td>
        <td><input type="text" name="name" id="name-${parsedData[i]._id}"  value="${parsedData[i].name}" disabled=true ></input></td>
        <td><input type="text" name="email" id="email-${parsedData[i]._id}" value="${parsedData[i].email}" disabled=true></td>
        <td><input type="text" name="password" id="password-${parsedData[i]._id}" value="${parsedData[i].password}" disabled=true></td>
        <td><button onclick="handleEdit('${parsedData[i]._id}')">Edit</button></td>
        <td><button onclick="handleSave('${parsedData[i]._id}')">Save</button></td>
        <td><button onclick="handleDelete('${parsedData[i]._id}')">Delete</button></td>
        
        </tr>
        `
    }
    content.innerHTML = rows;
}

getData();

function handleEdit(id) {
    console.log("id : ", id);

    let name = document.getElementById(`name-${id}`)
    console.log("name : ", name);
    name.disabled = false;

    let email = document.getElementById(`email-${id}`)
    console.log("email : ", email);
    email.disabled = false;

    let password = document.getElementById(`password-${id}`)
    console.log("password : ", password);
    password.disabled = false;


}

async function handleSave(id) {
    console.log("id : ", id);

    let nameTag = document.getElementById(`name-${id}`)
    console.log("nameTag : ", nameTag);
    let name = nameTag.value;
    console.log("name : ",name)


    let emailTag = document.getElementById(`email-${id}`)
    console.log("emailTag : ", emailTag);
    let email = emailTag.value;
    console.log("email : ",email)


    let passTag = document.getElementById(`password-${id}`)
    console.log("passTag : ", passTag);
    let password = passTag.value;
    console.log("pass : ",password);

    let data = {
        id,
        name,
        email,
        password,
    }

    let jsonData = JSON.stringify(data);
    console.log("jsonData : ", jsonData);

    let response=await fetch('http://localhost:3000/editData', {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: jsonData,

    });

    console.log("response : ",response);
    let parsed_response = await response.text();

    if (parsed_response == "success"){
        alert("Updation success")
    }else{
        alert("Updation failed")
    }
    getData();
}

async function handleDelete(id) {
    console.log("id : ", id);

    let nameTag = document.getElementById(`name-${id}`)
    console.log("nameTag : ", nameTag);
    let name = nameTag.value;
    console.log("name : ",name)


    let emailTag = document.getElementById(`email-${id}`)
    console.log("emailTag : ", emailTag);
    let email = emailTag.value;
    console.log("email : ",email)


    let passTag = document.getElementById(`password-${id}`)
    console.log("passTag : ", passTag);
    let password = passTag.value;
    console.log("pass : ",password);

    let data = {
        id,
        name,
        email,
        password,
    }

    let jsonData = JSON.stringify(data);
    console.log("jsonData : ", jsonData);

    let response=await fetch('http://localhost:3000/deleteData', {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
        body: jsonData,

    });

    console.log("response : ",response);
    let parsed_response = await response.text();

    if (parsed_response == "deleted"){
        alert("Deletion Success")
    }else{
        alert("Deletion failed")
    }
    getData();
}