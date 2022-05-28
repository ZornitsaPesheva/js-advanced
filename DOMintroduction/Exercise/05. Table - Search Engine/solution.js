function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField').value;
      let allTr = Array.from(document.querySelectorAll('tr'));
      for (let tr of allTr){
         console.log(tr.textContent);
      }
      console.log(input);
   }
}