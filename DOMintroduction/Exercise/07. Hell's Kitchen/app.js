function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restourants = [];
      let workers = JSON.parse(document.getElementsByTagName('textarea')[0].value);

      for (let worker of workers) {
         let splitted = worker.split(' - ');
         let restourant = {};
         restourant.name = splitted[0];
         restourant.workers = splitted[1];
         restourants.push(restourant);
      }
      console.log(restourants);
   }
}