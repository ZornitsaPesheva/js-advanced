function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let allTr = Array.from(document.querySelectorAll('tr'));
      console.log(allTr);

      for (let tr of allTr){
         console.log(tr.textContent);
      }
   }
}