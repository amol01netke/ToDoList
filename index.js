console.log("Script is running...");
const listElement = document.querySelector('.todoList');

//add items to localstorage on button click
let btnClick = document.getElementById("btn-todo");
btnClick.addEventListener("click", () => {
    let userData = document.getElementById("todo").value; //get data entered in the input box

    let getLocalStorage = localStorage.getItem("New Todo");   //create a localstorage key
    //if local storgae key is null initialize an empty array
    if (getLocalStorage == null) {
        listArr = [];
    }
    //parse the JSON in array
    else {
        listArr = JSON.parse(getLocalStorage);
    }

    if (userData != "") {
        listArr.push(userData); //push the data in the array
        localStorage.setItem("New Todo", JSON.stringify(listArr)); //set the item in the local storage
        //alert(userData);
    }
    showList();
});

//display todo list
showList = () => {
    let getLocalStorage = localStorage.getItem("New Todo");   //create a localstorage key

    //if local storgae key is null initialize an empty array
    if (getLocalStorage == null) {
        listArr = [];
    }
    //parse the JSON in array
    else {
        listArr = JSON.parse(getLocalStorage);
    }

    let newTag = '';
    for (let i = listArr.length - 1; i >= 0; i--) {
        element = listArr[i];
        newTag += ` <div>${element}<span onclick="deleteListItem(${[i]})"><i class="fa-solid fa-trash"></i></span></div>`;

    }
    listElement.innerHTML = newTag;
}

//delete an item
deleteListItem = (index) => {
    let getLocalStorage = localStorage.getItem("New Todo");   //create a localstorage key
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1);

    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showList();
}

//delete all items
let deleteAll=document.getElementById("btn-delete");
deleteAll.addEventListener("click",function(){
    listArr=[];
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showList();
});