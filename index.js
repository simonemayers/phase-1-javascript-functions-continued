// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

//Monday Function 
function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

//Function inside of a function
function wrapAdjective(str = "*"){
    return function(param = "special"){
        return `You are ${str}${param}${str}!`
    }
}