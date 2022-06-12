// https://github.com/ZahariCheyrekov/M05-JS-Advanced/blob/main/L08_Classes/Exercises/T06Company.js

class Company {
    constructor() {
        this.departments = new Map();
    }

    addEmployee(username, salary, position, department) {
        if (!username || !salary || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }

        let newEmployee = { username, salary, position, department };

        if (this.departments.has(department)) {
            this.departments.get(department).push(newEmployee);
        } else {
            this.departments.set(department, [newEmployee]);
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let totalSalary = (department) => {
            let totalSalary = department[1].reduce((acc, b) => { return acc += b.salary }, 0);
            let averageSalary = (totalSalary / department[1].length).toFixed(2);
            department.push(averageSalary);
            return averageSalary;
        };

        let bestDepartment = [...this.departments].sort((a, b) => totalSalary(b) - totalSalary(a))[0];
        let sortBySalaryAndName = bestDepartment[1].sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));

        let result = `Best Department is: ${bestDepartment.shift()}\n`;
        result += `Average salary: ${bestDepartment.pop()}\n`;
        sortBySalaryAndName.forEach(e => result += `${e.username} ${e.salary} ${e.position}\n`);

        return result.trim();
    }
}

let company = new Company();
company.addEmployee("Stanimir", 2000, "engineer", "Construction");
company.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
company.addEmployee("Slavi", 500, "dyer", "Construction");
company.addEmployee("Stan", 2000, "architect", "Construction");
company.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
company.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
company.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(company.bestDepartment());