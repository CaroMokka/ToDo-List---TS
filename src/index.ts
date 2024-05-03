import { v4 as uuidV4 } from "uuid";

type Task = {
  id: string, 
  title: string, 
  completed: boolean, 
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>("#list-task");
const form = document.getElementById("todo") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#todo__new-task--title");

form?.addEventListener("submit", e => {
  e.preventDefault();
  if(input?.value == "" || input?.value == null) return 

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  addListItem(newTask);

})

function addListItem(task: Task) {
  const item = document.createElement("li") as HTMLLIElement
}

//21:13