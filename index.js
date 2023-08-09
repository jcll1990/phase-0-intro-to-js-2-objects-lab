// Write your solution in this file!
let employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newemployee = { ...employee };
  
    newemployee[key] = value;
  
    return newemployee;
  }


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
    let clone = { ...employee };
    delete clone[key];
    return clone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}