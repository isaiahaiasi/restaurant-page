import * as vUtil from '../util';
import { cssClass } from '/src/tokens';

const ID = 'view-about';
const pageName = 'ABOUT US';

const makePage = () => {
  const pageContent = vUtil.el('main', [], ID);
  const pageTextContainer = vUtil.el('div', [cssClass.mainTextContent]);
  
  //! Placeholder
  for (let i = 0; i < 3; i++) {
    const p = vUtil.el('p');
    const lorem = vUtil.lorem( i % 2 === 0 ? 100: 200 );
    p.textContent = lorem;
    pageTextContainer.appendChild(p);
  }

  pageContent.appendChild(pageTextContainer);

  return { pageName, pageContent, id: ID }
}

export { makePage };