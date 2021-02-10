import * as vUtil from '../util';
import { cssClass } from '/src/tokens';

const ID = 'view-contact';
const pageName = 'CONTACT';

const makePage = () => {
  const pageContent = vUtil.el('div', [cssClass.pageContent], ID);
  const pageTextContainer = vUtil.el('div', [cssClass.mainTextContent]);
  
  const header = vUtil.elWithContent('h1', 'Contact us!');
  pageTextContainer.appendChild(header);

  const p1 = vUtil.elWithContent('p', 'Find us at 02496 Waterdeep Dr, or reach out to us via mail, scrying, or messenger owlbear!');
  pageTextContainer.appendChild(p1);

  pageContent.appendChild(pageTextContainer);

  return { pageName, pageContent, id: ID }
}

export { makePage };