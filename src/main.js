import "./index.css";

const formEL = document.querySelector("form");

const inputEl = document.querySelector("[data-user-input]");

const taskList = document.querySelector(".form-control");

//state
const State = [];

formEL.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputEl.value) return;

  State.push({
    id: crypto.randomUUID(),
    text: inputEl.value,
    isCompleted: false,
  });
  renderTasks();
  inputEl.value = "";
});

const state = [];

function renderTasks() {
  state.forEach((task) => {
    const label = document.createElement("label");
    label.classList.add("label", "cursor-pointer");
    label.innerHTML = `
    <span class="label-text">${task.text}</span>
    <input type="checkbox" class="checkbox checkbox-primary" />
    `;
    taskList.appendChild(label);
  });
}
