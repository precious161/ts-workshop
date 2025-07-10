var form = document.getElementById("todo-form");
var task = document.getElementById("todo-task");
var list = document.getElementById("todo-list");
function addTask(event) {
    event.preventDefault();
    var lists = document.createElement("li");
    lists.textContent = task.value;
    list.appendChild(lists);
    var bDone = document.createElement("button");
    var bNot = document.createElement("button");
    var remove = document.createElement("button");
    bDone.innerHTML = "Done";
    bNot.innerHTML = "Undone";
    remove.innerHTML = "Remove";
    lists.appendChild(bDone);
    lists.appendChild(bNot);
    lists.appendChild(remove);
    bDone.addEventListener("click", function () {
        bDone.innerHTML = "✅";
        bNot.remove();
        remove.remove();
    });
    bNot.addEventListener("click", function () {
        bNot.innerHTML = "❌";
        bDone.remove();
        remove.remove();
    });
    remove.addEventListener("click", function () {
        bNot.remove();
        bDone.remove();
        remove.remove();
        lists.remove();
    });
    task.value = "";
}
form.addEventListener("submit", addTask);
