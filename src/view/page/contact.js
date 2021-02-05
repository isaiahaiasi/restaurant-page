import * as vUtil from '../util';
import { cssClass } from '/src/tokens';

const ID = 'view-contact';
const pageName = 'CONTACT';

const makePage = () => {
  const pageContent = vUtil.el('main', [], ID);
  const pageTextContainer = vUtil.el('div', [cssClass.mainTextContent]);
  
  //! Placeholder
  for (let i = 0; i < 10; i++) {
    const p = vUtil.el('p');
    p.textContent = 'lorem';
    pageTextContainer.appendChild(p);
  }

  pageContent.appendChild(pageTextContainer);

  return { pageName, pageContent, id: ID }
}

export { makePage };