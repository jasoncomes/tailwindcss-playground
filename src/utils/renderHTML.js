export default (parentElement, markup) => {
  if (!parentElement || !markup) {
    return;
  }
  const element = document.createElement('div');
  element.innerHTML = markup.trim();
  parentElement.appendChild(element.firstChild);
};
