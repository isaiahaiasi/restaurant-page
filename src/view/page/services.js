import * as vUtil from '../util';
import { cssClass } from '/src/tokens';

const ID = 'view-services';
const pageName = 'SERVICES';

const makePage = () => {
  const pageContent = vUtil.el('main', [], ID);
  const pageTextContainer = vUtil.el('div', [cssClass.mainTextContent]);
  
  vUtil.loremPara(1, pageTextContainer);

  pageContent.appendChild(pageTextContainer);

  return { pageName, pageContent, id: ID };
}

export { makePage };