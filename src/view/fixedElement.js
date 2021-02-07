// store element's offsetTop
// listen for load to set element's offsettop once it's been loaded
// listen for scroll, & if scroll >= offset, give it the fixed height
//  & padding to keep elements in place
import { cssClass } from '../tokens';

const addDynamicFixedPos = (el) => {
  let _baseOffsetTop = 0;

  const setBaseOffsetTop = () => {
    _baseOffsetTop = el.offsetTop;
  };

  const affixOnScroll = () => {
    if (window.scrollY >= _baseOffsetTop) {
      el.classList.add(cssClass.fixedDynamic);
      el.parentNode.style.paddingTop = el.offsetHeight + 'px';
    } else {
      el.classList.remove(cssClass.fixedDynamic);
      el.parentNode.style.paddingTop = 0;
    }
  };

  window.addEventListener('load', setBaseOffsetTop);
  window.addEventListener('scroll', affixOnScroll);
};

export { addDynamicFixedPos };
