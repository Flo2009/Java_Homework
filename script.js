// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let moreEmployees = true;
//declare the variables for the array of objects
  let firstName="";
  let lastName="";
  let salary=0;
//declare the array
  let employeesArray =[];
  //while loop runs as long as moreEmployees is true
  while (moreEmployees){
//Prompts to enter employees
    let newEmployeeFirstName = window.prompt("Please Enter the employee's first name!");
    let newEmployeeLastName = window.prompt("Please enter the employee's last name!");
    let newEmployeeSalary = window.prompt("Please enter the employee's salary");
    // console.log(typeof newEmployeeSalary);
    //If nothing is entered or not the correct value return 
    if (!newEmployeeFirstName||!newEmployeeLastName||!newEmployeeSalary){
      alert("Please Enter a Value");
      return;
      }else if (isNaN(newEmployeeFirstName)===false||isNaN(newEmployeeLastName)===false){
      alert("Please Enter the first or last Name not a number!");
      return;
    }else if (isNaN(newEmployeeSalary)){
      alert("Please Enter a salary Number!");
      return;
    }
    //give the prompt inserts to the array variables
    firstName = newEmployeeFirstName;
    firstName=firstName.toUpperCase();
    lastName = newEmployeeLastName;
    lastName=lastName.toUpperCase();
    salary = parseFloat(newEmployeeSalary)    
    //add object to array
    employeesArray.push({firstName, lastName, salary});
    moreEmployees = window.confirm("Do you want to add more employees");

  }
  console.log(employeesArray);
  return employeesArray;
}

const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  let average = 0;
  let i=0;
  //Check that the Array is defined 
  if (typeof employeesArray == "undefined"){
    return;
  }
  else if (employeesArray.length===0){
    return;
  }
  //Loop through array with forEach function and add the salary together
  employeesArray.forEach((sal) =>{
    average=average+Number(sal.salary);
    i++
  });
  //Calculate the average and limit to two decimels
  average=(average/i).toFixed(2);
  console.log(`The average Salary is ${(average)}`)
  }

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //Check that the Array is defined 
  if (typeof employeesArray == "undefined"){
    return;
  }
  else if (employeesArray.length===0){
    return;
  } 
  //get a random number to display the employee
  let i = (Math.floor(Math.random() * employeesArray.length));
  // console.log(i);
  console.log(`The winner is ` + employeesArray[i].firstName + " " + employeesArray[i].lastName)
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
