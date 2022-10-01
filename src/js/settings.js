export const select = {
  templateOf: {
    menuProduct: '#template-menu-product',
  },
  containerOf: {
    menu: '#product-list',
    pages: '#pages',
  },
  nav: {
    links: '.navigation a',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  }
};

export const classNames = {

};

export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
};