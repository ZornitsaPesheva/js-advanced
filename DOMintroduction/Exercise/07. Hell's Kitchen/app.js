function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let restaurants = [];
      let bestAvarageSalary = 0;
      let bestRestourantName = '';
      if (document.getElementsByTagName('textarea')[0].value != '') {
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

         avarageSalarySet = function(rest) {
            
            let sum = 0;
            for (let i = 0; i < rest.workers.length; i++) {
               sum += rest.workers[i].salary;
            }
            rest.avarage = (sum / (rest.workers.length)).toFixed(2);
            rest.workers.sort((w1, w2) => w2.salary - w1.salary);
            rest.best = rest.workers[0].salary.toFixed(2);

            if (Number(rest.avarage) > Number(bestAvarageSalary)) {
               bestAvarageSalary = rest.avarage;
               bestRestourantName = rest.name;
            }
         }


         if (restaurants.some(r => r.name == splitted[0])) {
            
            let restaurantToAddTo = restaurants.filter(r => r.name == splitted[0])[0];
            
            for (let w of restaurant.workers) {
               restaurantToAddTo.workers.push(w);
               
               avarageSalarySet(restaurantToAddTo);
            }
         }
         else {

            avarageSalarySet(restaurant);
            restaurants.push(restaurant);
         }
      }

      let bestRestaurant = restaurants.find(r => r.name == bestRestourantName)
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
}