// Select a single element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// Select multiple elements
export function qsa(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

// Create an HTML element with optional classes and text
export function createEl(tagName, classes = [], textContent = "") {
  const el = document.createElement(tagName);
  if (classes.length) el.classList.add(...classes);
  if (textContent) el.textContent = textContent;
  return el;
}

// Add multiple classes to an element
export function addClasses(el, classes) {
  if (!el || !classes.length) return;
  el.classList.add(...classes);
}

// Remove multiple classes from an element
export function removeClasses(el, classes) {
  if (!el || !classes.length) return;
  el.classList.remove(...classes);
}

// Toggle a class on an element
export function toggleClass(el, className) {
  if (!el) return;
  el.classList.toggle(className);
}

// Clear all child elements of a parent
export function clearEl(el) {
  if (!el) return;
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}
