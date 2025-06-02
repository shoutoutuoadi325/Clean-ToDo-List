const form = document.getElementById('todo-form');
const input = document.getElementById('new-todo');
const list = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Localization setup
const translations = {
  en: { title: 'To-Do List', placeholder: 'Add a to-do item', addButton: 'Add', remove: 'Remove' },
  zh: { title: '提醒事项', placeholder: '添加提醒事项', addButton: '添加', remove: '删除' }
};
let currentLang = localStorage.getItem('lang') || 'en';

// Translation helper
function t(key) {
  return translations[currentLang][key] || key;
}

// Update static UI texts
function updateTexts() {
  document.title = t('title');
  document.documentElement.lang = currentLang;
  const selector = document.getElementById('language-select');
  if (selector) selector.value = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
}

// Handle language change
document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('language-select');
  if (selector) {
    selector.addEventListener('change', e => {
      currentLang = e.target.value;
      localStorage.setItem('lang', currentLang);
      updateTexts();
      saveAndRender();
    });
  }
  updateTexts();
  render();
});

function render() {
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = todo.text;
    if (todo.completed) span.classList.add('complete');
    span.addEventListener('click', () => {
      todos[index].completed = !todos[index].completed;
      saveAndRender();
    });
    const removeBtn = document.createElement('button');
    removeBtn.textContent = t('remove');
    removeBtn.addEventListener('click', () => {
      todos.splice(index, 1);
      saveAndRender();
    });
    li.appendChild(span);
    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}

function saveAndRender() {
  localStorage.setItem('todos', JSON.stringify(todos));
  render();
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    todos.push({ text, completed: false });
    input.value = '';
    saveAndRender();
  }
});

render();
