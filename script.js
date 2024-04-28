// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let newEmpolyees = []
let firstName;
let lastName;
let salary;
//when the user clicks on the add employees an alert will appear to add the information.
addEmployeesBtn.onclick = function () {
//add information first, last and salary
firstName = prompt("first name")
lastName = prompt("last name");
salary = prompt(salary);
  if (isNaN(salary)){
    salary = 0;
  } else {
    salary = Number(salary);
  }
}

// Collect employee data
const collectEmployees = function() {
const newEmpolyee = {
  firstName: firstName, 
  lastName:lastName, 
  salary:salary 
};

 // TODO: Get user input to create and return an array of employee objects
  newEmpolyees.push(newEmpolyee);
 
  return newEmpolyees;
}

//read readme again
//convert salary to a number
//study while loop
//use while loop to calualte average



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // console.log("=>",employeesArray);
  let index = 0;
  let totalSalary = 0;
  const totalEmployees = employeesArray.length
  // const averageSalary = 0;
  while ( index <= employeesArray.length> 0) {
  //  totalSalary = totalSalary + employeesArray[index]["salary"]
    console.log(employeesArray[index]);
    index++
    }




  return totalSalary / totalEmployees;
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
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
