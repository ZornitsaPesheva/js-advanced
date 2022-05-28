function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restourants = [];
      let workers = JSON.parse(document.getElementsByTagName('textarea')[0].value.replace(' \g', ''));

      for (let worker of workers) {
         console.log(worker);
         
      }
   }
}