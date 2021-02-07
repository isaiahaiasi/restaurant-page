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

const getLorem = (length) => {
  const fullLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mauris mi. Donec non risus sed ipsum ullamcorper rutrum sed a urna. Cras non convallis nisl, vel ultrices ligula. Aenean id velit eu nulla condimentum sagittis vel in felis. Phasellus auctor sollicitudin magna nec tincidunt. Etiam suscipit ultrices erat, id bibendum orci tristique ac. Donec id auctor risus. Aenean a convallis sapien, et tincidunt velit. Nullam aliquam erat leo, in sodales felis mattis sit amet. Nam eget fermentum est, nec tristique dolor. Quisque in accumsan justo, ac elementum orci. Suspendisse volutpat, justo a luctus ultrices, lacus libero eleifend dui, a laoreet mauris lacus luctus nibh. Phasellus pellentesque eros eget arcu tristique convallis. Cras maximus, massa ut hendrerit lobortis, urna velit condimentum nisl, at interdum felis lectus vel magna. Aliquam rutrum turpis lacus, a auctor nisl fermentum at. Cras nisl tortor, consectetur sed eros eget, vulputate tempor tortor. Vivamus non semper nunc, ac laoreet velit. Sed viverra velit eros, vel ultricies lacus dapibus ac. Pellentesque eget quam nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin libero mauris, auctor nec augue non, blandit dictum nisi. Vivamus interdum purus commodo libero consectetur varius. In vel libero eget eros eleifend bibendum.';
  const splitLorem = fullLorem.split(' ');

  let outLorem = '';
  for (let i = 0; i < length; i++) {
    outLorem += splitLorem[i % splitLorem.length] + ' ';
  }
 
  return outLorem;
};

const loremPara = (length, container) => {
  for (let i = 0; i < length; i++) {
    const p = el('p');
    const loremText = getLorem( i % 2 === 0 ? 100: 200 );
    p.textContent = loremText;
    container.appendChild(p);
  }
};



export { el, getLorem, loremPara };