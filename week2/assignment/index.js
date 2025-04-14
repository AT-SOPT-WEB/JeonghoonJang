import { todos as mockTodos } from "./mock.js";

const input = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
const prioritySelect = document.querySelector(".priority-select");
const todoList = document.querySelector(".todo-list");

const todosAll = document.querySelector(".todos-all");
const todosFinished = document.querySelector(".todos-finished");
const todosUnFinished = document.querySelector(".todos-unfinished");
const todosPriority = document.querySelector(".todos-priority");

const deleteBtn = document.querySelector(".del-btn");
const finishedBtn = document.querySelector(".fin-btn");
const checkAll = document.querySelector(".check-all");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal-close");

function createTodo(todo) {
  const tr = document.createElement("tr");

  //drag & drop
  tr.setAttribute("draggable", true);
  tr.dataset.id = todo.id;

  tr.innerHTML = `
    <td><input type="checkbox" data-id="${todo.id}"/></td>
    <td>${todo.priority}</td>
    <td>${todo.completed ? "✅" : "❌"}</td>
    <td>${todo.title}</td>
    `;

  return tr;
}

// 로컬스토리지에서 가져오기
let todos = JSON.parse(localStorage.getItem("todos"));

if (!todos || todos.length === 0) {
  localStorage.setItem("todos", JSON.stringify(mockTodos));
  todos = [...mockTodos];
}

// 초기화 - 화면에 표시
todos.forEach((todo) => {
  const tr = createTodo(todo);
  todoList.appendChild(tr);
});

// 추가 버튼 클릭 이벤트
addBtn.addEventListener("click", () => {
  const title = input.value;
  const priority = parseInt(prioritySelect.value);
  const nextId = Math.max(...todos.map((todo) => todo.id)) + 1;

  if (!title || isNaN(priority)) {
    // SWEEB 블로그 단락평가 확인
    alert("할 일과 중요도를 모두 입력해주세요!");
    return;
  }

  const newTodo = {
    id: nextId,
    title,
    completed: false,
    priority,
  };

  // 로컬스토리지에 저장
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));

  // 리스트에 추가
  const tr = createTodo(newTodo);
  todoList.appendChild(tr);

  // input 초기화
  input.value = "";
  prioritySelect.value = "";
});

// 삭제 버튼 클릭 이벤트
deleteBtn.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(
    'tbody input[type="checkbox"]:checked'
  );
  const checkedIds = [...checkboxes].map((cb) => parseInt(cb.dataset.id));

  if (checkedIds.length === 0) {
    alert("삭제할 Todo를 선택하세요.");
    return;
  }

  todos = todos.filter((todo) => !checkedIds.includes(todo.id));

  localStorage.setItem("todos", JSON.stringify(todos));

  checkboxes.forEach((cb) => {
    cb.closest("tr").remove();
  });
});

// 전체 체크 버튼 클릭 이벤트
checkAll.addEventListener("click", (e) => {
  const isChecked = e.target.checked;
  const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');

  checkboxes.forEach((cb) => {
    cb.checked = isChecked;
  });
});

// 하위 체크박스 클릭했을 때 전체 체크 버튼 풀리기
todoList.addEventListener("change", (e) => {
  if (e.target.matches('input[type="checkbox"]')) {
    const checkboxes = document.querySelectorAll(
      'tbody input[type="checkbox"]'
    );
    const checked = document.querySelectorAll(
      'tbody input[type="checkbox"]:checked'
    );
    checkAll.checked = checkboxes.length === checked.length;
  }
});

// drag & drop
let draggedRow = null;

// 드래그 시작
todoList.addEventListener("dragstart", (e) => {
  if (e.target.tagName === "TR") {
    draggedRow = e.target;
  }
});

// 드래그 중
todoList.addEventListener("dragover", (e) => {
  e.preventDefault(); // drop 허용
  const target = e.target.closest("tr");

  if (!target || target === draggedRow) return;

  const rect = target.getBoundingClientRect();
  const offset = e.clientY - rect.top;

  document.querySelectorAll("tbody tr").forEach((tr) => {
    tr.classList.remove("drag-over-top", "drag-over-bottom");
  });

  if (offset > rect.height / 2) {
    target.classList.add("drag-over-bottom");
    target.classList.remove("drag-over-top");
    target.after(draggedRow);
  } else {
    target.classList.add("drag-over-top");
    target.classList.remove("drag-over-bottom");
    target.before(draggedRow);
  }
});

// 드래그 종료
todoList.addEventListener("dragend", () => {
  dragSave();

  document.querySelectorAll("tbody tr").forEach((tr) => {
    tr.classList.remove("drag-over-top", "drag-over-bottom");
  });
});

// drag & drop 후 로컬 스토리지에 반영
function dragSave() {
  const rows = document.querySelectorAll("tbody tr");
  const newOrder = [];

  rows.forEach((row) => {
    const id = parseInt(row.dataset.id);
    const todo = todos.find((t) => t.id === id);
    if (todo) newOrder.push(todo);
  });

  todos = newOrder;
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 완료 버튼 클릭 이벤트
finishedBtn.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(
    'tbody input[type="checkbox"]:checked'
  );
  const checkedIds = [...checkboxes].map((cb) => parseInt(cb.dataset.id));

  if (checkedIds.length === 0) {
    alert("완료할 Todo를 선택하세요.");
    return;
  }

  //이미 완료된 todo가 포함되어있을 때
  const alreadyFinished = todos.some(
    (todo) => checkedIds.includes(todo.id) && todo.completed
  );

  if (alreadyFinished) {
    modal.classList.remove("hidden");
    return;
  }

  todos = todos.map((todo) =>
    checkedIds.includes(todo.id) ? { ...todo, completed: true } : todo
  );

  localStorage.setItem("todos", JSON.stringify(todos));

  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const tr = createTodo(todo);
    todoList.appendChild(tr);
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// 필러팅 버튼 ( 전체, 완료됨, 미완료, 중요도 )
todosAll.addEventListener("click", () => {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const tr = createTodo(todo);
    todoList.appendChild(tr);
  });
});

// 완료됨
todosFinished.addEventListener("click", () => {
  const finishedTodos = todos.filter((todo) => todo.completed);

  todoList.innerHTML = "";

  finishedTodos.forEach((todo) => {
    const tr = createTodo(todo);
    todoList.appendChild(tr);
  });
});

// 미완료
todosUnFinished.addEventListener("click", () => {
  const finishedTodos = todos.filter((todo) => !todo.completed);

  todoList.innerHTML = "";

  finishedTodos.forEach((todo) => {
    const tr = createTodo(todo);
    todoList.appendChild(tr);
  });
});

// 중요도
todosPriority.addEventListener("change", (e) => {
  const selected = parseInt(e.target.value);

  const priorityTodos = todos.filter((todo) => todo.priority === selected);

  todoList.innerHTML = "";

  priorityTodos.forEach((todo) => {
    const tr = createTodo(todo);
    todoList.appendChild(tr);
  });
});
