function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurants = [];
      let workers = JSON.parse(document.getElementsByTagName('textarea')[0].value);

      for (let worker of workers) {
         let splitted = worker.split(' - ');
         let restaurant = {};
         restaurant.name = splitted[0];
         restaurant.workers = splitted[1].split(', ');
         if (restaurants.some(r => r.name == splitted[0])) {
            let restaurantToAddTo = restaurants.filter(r => r.name == splitted[0])[0];
            for (let w of restaurant.workers) {
             restaurantToAddTo.workers.push(w);
            }
         }
         else {
            restaurants.push(restaurant);
         }
      }
      for (let r of restaurants) {
         let avarage = 0;
         let sum = 0;
         let best = 0;
         for (let i = 0; i < r.workers.length; i++) {
            let salary = Number(r.workers[i].split(' ')[1]);
            sum += salary;
            if (salary > best) {
               best = salary;
            }
         }
         avarage = sum / (r.workers.length);
         r.avarage = avarage.toFixed(2);
         r.best = best;
      }
      console.log(restaurants);
   }
}