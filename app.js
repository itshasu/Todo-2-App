var list = document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item")

    // create li tag with text node
    var li = document.createElement("li")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    // create delete button
    var delbtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(delText)

    // create edit button
    var editbtn = document.createElement("button")
    var editText = document.createTextNode("edit")
    editbtn.appendChild(editText)
    editbtn.setAttribute("onclick","editItem(this)")
    
    li.appendChild(delbtn)
    li.appendChild(editbtn)

    list.appendChild(li)

    todo_item.value = ""
    // console.log(li)
}

function deleteItem(e){
    // console.log(e.parentNode)

    e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value",val)

    e.parentNode.firstChild.nodeValue = editValue
} 

function deleteAll(){
    list.innerHTML = ""
}