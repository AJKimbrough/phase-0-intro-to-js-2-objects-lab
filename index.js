// Write your solution in this file!
const employee = {
    name: "AJ",
    streetAddress: "3427 Cedar Springs rd Dallas, TX",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmpl = {...employee}
    delete newEmpl[key]
    return newEmpl

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}



//console.log(employee)
//console.log(updateEmployeeWithKeyAndValue(employee, "Years", "2"))
//console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "Position", "Software Engineer"))
console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"))