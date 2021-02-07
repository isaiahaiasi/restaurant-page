import * as vUtil from '../util';
import { cssClass } from '/src/tokens';

const ID = 'view-about';
const pageName = 'ABOUT';

const makePage = () => {
  const pageContent = vUtil.el('div', [cssClass.pageContent], ID);
  const pageTextContainer = vUtil.el('div', [cssClass.mainTextContent]);
  
  vUtil.loremPara(4, pageTextContainer);

  pageContent.appendChild(pageTextContainer);

  return { pageName, pageContent, id: ID }
}

export { makePage };