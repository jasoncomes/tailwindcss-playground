export default (parentElement, markup) => {
  if (!parentElement || !markup) {
    return;
  }
  const element = document.createElement('style');
  element.innerHTML = markup.trim();
  parentElement.appendChild(element);
};
