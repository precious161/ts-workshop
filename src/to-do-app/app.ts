let form = document.getElementById("todo-form") as HTMLFormElement;
let task = document.getElementById("todo-task") as HTMLInputElement;
let list = document.getElementById("todo-list") as HTMLUListElement;
function addTask(event: Event): void {
  event.preventDefault();
  let lists = document.createElement("li");
  lists.textContent = task.value;
  list.appendChild(lists);

  let bDone = document.createElement("button");
  let bNot = document.createElement("button");
  let remove = document.createElement("button");
  bDone.innerHTML = "Done";
  bNot.innerHTML = "Undone";
  remove.innerHTML = "Remove";
  lists.appendChild(bDone);
  lists.appendChild(bNot);
  lists.appendChild(remove);
  bDone.addEventListener("click", () => {
    bDone.innerHTML = "✅";
    bNot.remove();
    remove.remove();
  });
  bNot.addEventListener("click", () => {
    bNot.innerHTML = "❌";
    bDone.remove();
    remove.remove();
  });
  remove.addEventListener("click", () => {
    bNot.remove();
    bDone.remove();
    remove.remove();
    lists.remove();
  });

  task.value = "";
}
form.addEventListener("submit", addTask);
