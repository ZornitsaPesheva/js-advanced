function solve() {
   let addButtons = document.querySelectorAll('.add-product');
   let textArea = document.querySelector('textarea');
   let total = 0;
   let list = [];
   function addProduct(e){
      let product = e.target.parentElement.parentElement;
      let name = product.querySelector('.product-title').textContent;
      let money = product.querySelector('.product-line-price').textContent;
      total += Number(money);
      if (!list.includes(name)) {
         list.push(name);
      }
      textArea.textContent += `Added ${name} for ${Number(money).toFixed(2)} to the cart.\n`;
   }

   function checkOut(e) {
      for (let button of addButtons) {
         button.removeEventListener('click', addProduct);
      }
      textArea.textContent += `You bought ${list.join(', ')} for ${total.toFixed(2)}.`;
      checkout.removeEventListener('click', checkOut);
   }

   for (let button of addButtons) {
      button.addEventListener('click', addProduct);
   }

   let checkout = document.querySelector('.checkout');
   checkout.addEventListener('click', checkOut);
}