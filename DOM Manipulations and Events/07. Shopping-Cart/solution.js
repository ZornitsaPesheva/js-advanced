function solve() {
   let addButtons = document.querySelectorAll('button');
   function addProduct(e){
      console.log('add the product');

      let product = e.target.parentElement.parentElement;
      let name = product.querySelector('.product-title').textContent;
      let money = product.querySelector('.product-line-price').textContent;
      let textArea = document.querySelector('textarea');
      textArea.textContent += `Added ${name} for ${money} to the cart.\n`;
    //  e.target.removeEventListener('click', addProduct);
   }
   for (let button of addButtons) {
      button.addEventListener('click', addProduct);
   }
}