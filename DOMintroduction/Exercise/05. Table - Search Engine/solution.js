function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField').value;
      let allTr = Array.from(document.querySelectorAll('tr'));
      for (let tr of allTr){
         if (tr.textContent.includes(input)){
            tr.classList.add('select');
         }
      }
   }
}