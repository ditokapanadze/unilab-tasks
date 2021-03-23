const addBtn = document.querySelector('.add-btn')
addBtn.addEventListener('click', addTask)


function addTask (e){
    e.preventDefault()
    const inputValue = document.querySelector(".input").value
    if(inputValue.length < 3){
        alert("Task name mast be at least 3 characters long")
    } else{
        const taskUl = document.querySelector('.task-ul')
        const newTask = document.createElement("li")
        taskUl.appendChild(newTask)
       const paragraph = document.createElement("p")
       newTask.appendChild(paragraph)
        console.log(inputValue)
        paragraph.innerHTML = inputValue
        newTask.classList.add("task-li")
        
        //Delete button
        const dltButton =  document.createElement('button')
        dltButton.innerHTML = "delete"
        newTask.appendChild(dltButton)
        dltButton.classList.add("dlt-btn")
        const deletBtn = document.querySelectorAll('.dlt-btn')
        
        for(var i = 0; i < deletBtn.length; i++){
            deletBtn[i].addEventListener('click', deleteTask)
        }
        document.querySelector(".input").value =""

        // CLEAR BTN]
        if(!document.querySelector('.clear-btn')){
            const container =document.querySelector('.container')
        const clearButton = document.createElement('button')
        clearButton.innerHTML = "Clear Tasks"
        container.appendChild(clearButton)
        clearButton.classList.add("clear-btn")
        clearButton.addEventListener('click', clear)
        } 
    }
}


// DELETE FUNCTION
function deleteTask (e){
    const item = e.target
    const task = item.parentElement
    task.remove()
}

// CLEAR FUPNCTION
function clear(){
    const tasks = document.querySelectorAll(".task-li")
    console.log(tasks)
    tasks.forEach(e => e.parentNode.removeChild(e));
    document.querySelector(".clear-btn").remove()
}