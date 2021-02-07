import * as vUtil from '../util';
import { cssClass } from '/src/tokens';

const ID = 'view-home';

const makePage = () => {
  const pageName = 'HOME';
  const pageContent = vUtil.el('main', [], ID);
  const pageTextContainer = vUtil.el('div', [cssClass.mainTextContent]);

  vUtil.loremPara(10, pageTextContainer);

  pageContent.appendChild(pageTextContainer);

  return { pageName, pageContent, id: ID }
}

export { makePage };