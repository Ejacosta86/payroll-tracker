// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let newEmpolyees = []
let firstName;
let lastName;
let salary;


// Collect employee data
const collectEmployees = function() {
  let addEmployee = true;

  while (addEmployee){
    firstName = prompt("first name")
    lastName = prompt("last name");
    salary = prompt("salary");
    
    if (isNaN(salary)){
      salary = 0;
    } else {
      salary = Number(salary);
    } 
      
    const newEmpolyee = {
      firstName: firstName, 
      lastName:lastName, 
      salary:salary 
    };
      
    newEmpolyees.push(newEmpolyee);

  const continueAdding = confirm("continue adding employees?");
  if (continueAdding === false){
    addEmployee = false;
  }
}

const sortName = newEmpolyees.sort((a,b) => a.lastName - b.lastName)

  return sortName;
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  const totalEmployees = employeesArray.length
  
  for(let i = 0; i < employeesArray.length; i++){
    totalSalary = totalSalary + employeesArray[i].salary
  }

  console.log(`The average total salary between our ${totalEmployees} employees is ${totalSalary / totalEmployees}`)
  
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * (employeesArray.length - 1));
  const randomEmployee = employeesArray[randomIndex];

  console.log(`congratulations you are the winner ${randomEmployee.firstName}`);
 
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
