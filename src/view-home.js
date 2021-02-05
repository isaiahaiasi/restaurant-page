import * as vUtil from './view-util';

const makePage = () => {
  const pageName = 'HOME';
  const pageContent = vUtil.el('div');
  
  //! Placeholder
  for (let i = 0; i < 10; i++) {
    const p = vUtil.el('p');
    const lorem = vUtil.lorem(100);
    p.textContent = lorem;
    pageContent.appendChild(p);
  }

  return { pageName, pageContent }
}

export { makePage };