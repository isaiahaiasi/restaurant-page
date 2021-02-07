import * as vUtil from '../util';
import { cssClass } from '/src/tokens';

const ID = 'view-home';

const CONTENT = {
  header: 'All your slaying needs—for a song!',
  subHeader: 'Quick. Professional. Entertaining!',
}

const makePage = () => {
  const pageName = 'HOME';
  const pageContent = vUtil.el('main', [], ID);
  const pageTextContainer = vUtil.el('div', [cssClass.mainTextContent]);

  pageTextContainer.appendChild(getHero());
  
  pageTextContainer.appendChild(
    vUtil.elWithContent('h1', CONTENT.header)
  );

  vUtil.loremPara(1, pageTextContainer);
  
  pageTextContainer.appendChild(
    vUtil.elWithContent('h2', CONTENT.subHeader)
  );
  
  vUtil.loremPara(8, pageTextContainer);

  pageContent.appendChild(pageTextContainer);

  return { pageName, pageContent, id: ID };
};

const getHero = () => {
  const hero =  vUtil.el('div', [cssClass.hero]);
  hero.textContent = '(some cool dragon ink, kinda in the style of the typeface)';
  return hero;
};

export { makePage };