function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let restaurants = [];
      let workers = JSON.parse(document.getElementsByTagName('textarea')[0].value);

      for (let worker of workers) {
         let splitted = worker.split(' - ');
         let restaurant = {};
         restaurant.name = splitted[0];
         let workers = [];

         let workersToAdd = splitted[1].split(', ');
         for (let w of workersToAdd) {
            let workerToAdd = {};
            workerToAdd.name = w.split(' ')[0];
            workerToAdd.salary = Number(w.split(' ')[1]);
            workers.push(workerToAdd);
         }
         restaurant.workers = workers;
         restaurant.workers.sort((w1, w2) => w2.salary - w1.salary);
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

      console.log(restaurants);

      for (let r of restaurants) {
         let avarage = 0;
         let sum = 0;
         r.best = r.workers[0].salary.toFixed(2);
         
         for (let i = 0; i < r.workers.length; i++) {
            sum += r.workers[i].salary;
         }
         avarage = sum / (r.workers.length);
         r.avarage = avarage.toFixed(2);
      }
      let bestAvarageSalary = Math.max(...restaurants.map(r => r.avarage));
      let bestRestaurant = restaurants.find(r => r.avarage == bestAvarageSalary)
      let pName = document.querySelector('#bestRestaurant p');
      pName.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avarage} Best Salary: ${bestRestaurant.best}`;
      let pWorkers = document.querySelector('#workers p');
      let bestRestaurantWorkers = '';
      for (w of bestRestaurant.workers) {
         bestRestaurantWorkers += `Name: ${w.name} With Salary: ${w.salary} `;
      }
      pWorkers.textContent = bestRestaurantWorkers;
   }
}