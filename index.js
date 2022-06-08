// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const pi = 3.14159;

//TODO: ADD redeclarable variable
var radius = 22;

//TODO: ADD re-assignable but not redeclarable variable
let age = 26;

// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const num1 = 28;

//TODO: Create a redeclarable variable with a boolean value
var isAdult = true;

//TODO: Create a re-assignable variable with a string value
let firstName = 'Bonface';
let lastName = 'Masira';

// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
let fullName = firstName + ' ' + lastName;
//printValue("FullName: " + fullName)

//TODO: Interpolate string (`${}`)
let otherName = `Name: ${firstName} ${lastName}`;
//printValue(otherName)

//TODO: Convert to uppercase


//TODO: Convert to lowercase


//TODO: Index a specific character


//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality


//TODO: strict inequality


//TODO: equality


//TODO: inequality


//TODO: greater than


//TODO: less than


//TODO: greater or equal to


//TODO: less or equal to



// 5.0 CONTROL FLOW
// TODO: if-else statement
const wheels = 8;
if (wheels>4) {
    printValue("This is a truck.")
} else if (wheels === 4){
    printValue('This is a car.')
} else if (wheels === 3) {
    printValue('This is a tuktuk.')
} else if (wheels === 2) {
    printValue('This is a bike')
} else {
    printValue('This is not an automobile.')
}

//TODO: switch-case






