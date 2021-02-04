const Class = (() => {
  const colCenter = (() => 'col-center')();
  const widthFill = (() => 'widthFill')();
  const spaceV = (() => 'spaceV')();
  const hidden = (() => 'hidden')();

  const topContent = (() => 'top-content')();
  const btnGroup = (() => 'btn-group')();
  const btn = (() => 'btn')();
  
  return { colCenter, widthFill, spaceV, hidden, topContent, btnGroup, btn };
})();

export { Class };