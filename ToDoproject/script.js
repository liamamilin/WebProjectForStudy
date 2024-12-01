// 获取DOM元素
const todoInput = document.getElementById("todo-input"); // 输入框
const addButton = document.getElementById("add-btn"); // 添加任务按钮
const todoList = document.getElementById("todo-list"); // 任务列表容器
const clearAllButton = document.getElementById("clear-all-btn"); // 清空所有任务按钮

// 从本地存储加载任务并显示
function loadTasks() {
  // 获取存储在 localStorage 中的任务列表，如果没有任务，返回一个空数组
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
  todoList.innerHTML = '';  // 清空当前任务列表

  // 遍历任务列表并逐个显示
  tasks.forEach(task => {
    addTaskToDOM(task); // 调用函数在页面上添加任务
  });
}

// 将单个任务添加到 DOM 中
function addTaskToDOM(task) {
  // 创建一个新的列表项 (li)
  const li = document.createElement("li");

  // 在列表项中填充任务内容和删除按钮
  li.innerHTML = `
    <span>${task.text}</span>  <!-- 任务文本 -->
    <button class="delete-btn">Delete</button>  <!-- 删除按钮 -->
  `;

  // 获取删除按钮
  const deleteButton = li.querySelector(".delete-btn");

  // 为删除按钮添加点击事件监听器
  deleteButton.addEventListener("click", () => deleteTask(task.id)); // 删除任务时调用 deleteTask 函数

  // 将新创建的任务项添加到任务列表中
  todoList.appendChild(li);
}

// 创建一个新任务
function createTask(text) {
  // 获取存储在 localStorage 中的任务列表，若没有则创建一个空数组
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // 创建一个新的任务对象，包含唯一的 ID 和任务文本
  const newTask = {
    id: Date.now(), // 使用当前时间戳作为任务的唯一标识符
    text: text
  };

  // 将新任务添加到任务列表中
  tasks.push(newTask);

  // 更新 localStorage 中的任务列表
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // 调用 addTaskToDOM 函数将新任务显示在页面上
  addTaskToDOM(newTask);
}

// 删除任务
function deleteTask(taskId) {
  // 获取存储在 localStorage 中的任务列表
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // 过滤掉删除的任务，保留其他任务
  tasks = tasks.filter(task => task.id !== taskId);

  // 更新 localStorage 中的任务列表
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // 重新加载任务并更新页面显示
  loadTasks();
}

// 清空所有任务
function clearAllTasks() {
  // 从 localStorage 中删除所有任务
  localStorage.removeItem("tasks");

  // 重新加载任务并更新页面显示
  loadTasks();
}

// 为“添加任务”按钮添加点击事件监听器
addButton.addEventListener("click", () => {
  const taskText = todoInput.value.trim(); // 获取输入框中的任务文本，并去除首尾空白字符
  if (taskText) { // 如果文本不为空
    createTask(taskText); // 创建新任务
    todoInput.value = ''; // 清空输入框
  }
});

// 为“清空所有任务”按钮添加点击事件监听器
clearAllButton.addEventListener("click", clearAllTasks);

// 页面加载时，调用 loadTasks 函数，显示存储在 localStorage 中的任务
window.onload = loadTasks;
