// Your code here


const createEmployeeRecord = function(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }

}

const createEmployeeRecords = function(array){
    return array.map(employee => {
        // let createTimeInEvent = function(employee){
        //     employee.timeInEvents
        // }
        
        return createEmployeeRecord(employee)

    })

}


const findEmployeeByFirstName = function(array, name){
    return array.find(element =>{
        return element.firstName === name
    })

}