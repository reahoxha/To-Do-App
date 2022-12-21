const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const allTasks = document.querySelector("#tasks");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const task = input.value;

    if (!task) {
        alert("Please write something before submitting");
        return;
    }
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");

    const taskContent = document.createElement("div");
    taskContent.classList.add("content");

    taskContainer.appendChild(taskContent);

    const taskInput = document.createElement("input");
    taskInput.classList.add("text");
    taskInput.type = "text";
    taskInput.value = task;
    taskInput.setAttribute("readonly", "readonly");

    taskContent.appendChild(taskInput);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("actions");

    const btnEdit = document.createElement("button");
    btnEdit.classList.add("edit");
    btnEdit.innerText = "Edit";

    const btnDone = document.createElement("button");
    btnDone.classList.add("done");
    btnDone.innerText = "Done";
    
    btnContainer.appendChild(btnEdit);
    btnContainer.appendChild(btnDone);

    taskContainer.appendChild(btnContainer);
    
   allTasks.insertAdjacentElement("afterbegin", taskContainer);

    input.value='';

    btnEdit.addEventListener("click", () => {
        if(btnEdit.innerText.toLowerCase() === "edit"){
            btnEdit.innerText = "Save";
            taskInput.removeAttribute("readonly");
            taskInput.focus();
        }else{
            btnEdit.innerText = "Edit";
            taskInput.setAttribute("readonly", "readonly");
        }
    })

    btnDone.addEventListener("click", () => {
        taskInput.style.textDecoration = "line-through";
        if(btnDone.innerText.toLowerCase() === "done"){
            btnDone.innerText = "Undo";
            taskInput.removeAttribute("line-through");
            taskInput.focus();
        }else{
            btnDone.innerText = "Done";
            taskInput.setAttribute("line-through");
        }
    })

})