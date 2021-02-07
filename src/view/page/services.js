import * as vUtil from '../util';
import { cssClass } from '/src/tokens';
import * as Nav from '../nav';

//! ADD MULTIPLE TABS

const ID = 'view-services';
const pageName = 'SERVICES';

const SERVICES = {
  monsters: [
    {
      title: 'Kentucky Fried Gryphon',
      cost: '35gp',
      description: 'Those pesky bird-brains mauling your livestock? We turn that overgrown rooster into a 32-piece meal! Our expert team uses tried-and-true methods to take these beasts out of the sky. You won\'t even hear a squawk!',
    },
    {
      title: 'Basilisk Beheading',
      cost: '100gp',
      description: 'When it comes to dangerous creatures like this, do NOT attempt your own extermination! Remember--"More than 6 legs? Call a professional!" Our Grandpappy taught us those words, and they\'re as true today as they were then. Don\'t think you have to live with all those poor petrified souls cluttering your front yard, either—we\'ll find a nice statue garden for the victims at no extra charge!',
    },
    {
      title: 'Skeleton Burial',
      cost: '5gp per skull',
      description: 'Look, you don\'t need to tell us WHY you were down in that ancient tomb, or WHY you "borrowed" that precious skull-shaped ruby from the pedestal in front of the sarcophogus. That\'s not important now. What\'s important is dealing with the dozens of skeletons currently tearing your town apart trying to reclaim what\'s rightfully theirs! With our help, you can keep your ill-gotten riches, and sleep easy!',
    },
  ],
  reclamation: [
    {
      title: 'blah',
      cost: '5gp',
      description: 'test test test testeaojfoeiaj foieja foijae fojae fojfaeo jfa eojf aoejf aejf aoej faeoj foaje foaejfojaefoaejf oejfo eajof jaof jaejf eafj aeofj aeojf oea',
    },
    {
      title: 'blah',
      cost: '125gp',
      description: 'test test test testeaojfoeiaj foieja foijae fojae fojfaeo jfa eojf aoejf aejf aoej faeoj foaje foaejfojaefoaejf oejfo eajof jaof jaejf eafj aeofj aeojf oea',
    },
  ],
  murder: [
    {
      title: 'eajoifjae',
      cost: '300gp',
      description: 'Look, you don\'t need to tell us WHY you were down in that ancient tomb, or WHY you "borrowed" that precious skull-shaped ruby from the pedestal in front of the sarcophogus. That\'s not important now. What',
    },
    {
      title: 'blah',
      cost: '5gp',
      description: 'test test test testeaojfoeiaj foieja foijae fojae fojfaeo jfa eojf aoejf aejf aoej faeoj foaje foaejfojaefoaejf oejfo eajof jaof jaejf eafj aeofj aeojf oea',
    },
    {
      title: 'blah',
      cost: '125gp',
      description: 'test test test testeaojfoeiaj foieja foijae fojae fojfaeo jfa eojf aoejf aejf aoej faeoj foaje foaejfojaefoaejf oejfo eajof jaof jaejf eafj aeofj aeojf oea',
    },
  ],
};

const CONTENT = {
  header: 'Who Do You Need Us To Kill?',
};

const makePage = () => {
  const pageContent = vUtil.el('main', [], ID);
  const pageTextContainer = vUtil.el('div', [cssClass.mainTextContent]);

  pageTextContainer.appendChild(vUtil.elWithContent('h1', CONTENT.header));
  
  vUtil.loremPara(1, pageTextContainer);

  pageTextContainer.appendChild(makeServiceTab(SERVICES.monsters));

  pageContent.appendChild(pageTextContainer);

  return { pageName, pageContent, id: ID };
};

const makeServiceTab = (svcCategory) => {
  const svcContainer = vUtil.el('div');
  svcCategory.forEach((item) => {
    svcContainer.appendChild(
      makeServiceItem(item.title, item.cost, item.description)
    );
  });
  return svcContainer;
};

const makeServiceItem = (title, cost, description) => {
  // main containers (for interior vertical line style)
  const item = vUtil.el('div', ['svc-item']);
  const itemContainer = vUtil.el('div', ['svc-item-container']);

  // top elements (title, cost)
  const top = vUtil.el('div', ['svc-item-top']);
  const titleElm = vUtil.elWithContent('div', title, ['svc-item-title']);
  const costElm = vUtil.elWithContent('div', cost, ['svc-item-cost']);
  top.appendChild(titleElm);
  top.appendChild(costElm);

  // bottom element (description)
  const bottom = vUtil.elWithContent('div', description, ['svc-item-description']);

  itemContainer.appendChild(top);
  itemContainer.appendChild(bottom);

  item.appendChild(itemContainer);
  return item;
};

export { makePage };