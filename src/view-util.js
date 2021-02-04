function el(tag, classes, id) {
  const elm = document.createElement(tag);

  classes?.forEach((className) => {
    elm.classList.add(className)
  });

  if (id) {
    elm.id = id;
  }

  return elm;
}

export { el };