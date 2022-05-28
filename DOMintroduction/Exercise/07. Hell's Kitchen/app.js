function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let workers = document.getElementsByTagName('textarea')[0].value;
      console.log(workers);
      
   }
}