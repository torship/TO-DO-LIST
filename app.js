const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        // Create delete button with icon
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        li.appendChild(deleteBtn);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.classList.contains("delete-btn") || e.target.parentElement.classList.contains("delete-btn")){
        e.target.closest("li").remove();
        saveData();
    }
}, false);

// Add this function to save tasks to local storage
function saveData(){
     localStorage.setItem("tasks", listContainer.innerHTML);
}

// Add this function to load tasks when page loads
function loadTasks(){
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
}

// Load tasks when page loads
loadTasks();
