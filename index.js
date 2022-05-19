// Defining constants 
const INCREMENT = 'INCREMENT' 
const DECREMENT = 'DECREMENT' 

// state
const initialCounterState = {
    count : 0
}
const initialUserState = {
    users : [
        {name : "Redux"},
    ]
}




// Action -- object - type, payload
// INCREMENT COUNTER
const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
};

// DECREMENT COUNTER
const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
};



const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
};

