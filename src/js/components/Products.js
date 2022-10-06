import {select, templates} from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor (id, data){
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;
    thisProduct.renderInMenu();
  }

  renderInMenu(){
    const thisProduct = this;
    const generatedHTML = templates.menuProduct(thisProduct.data);
    
    const elementOne = utils.createDOMFromHTML(generatedHTML);
    
   
    const menuContainerHomePage = document.querySelector(select.containerOf.menu);
    

    menuContainerHomePage.appendChild(elementOne);
    
  }
}
console.log(Product);

export default Product;