/* Functions as Values */

function handleTimeout() {
    console.log("Timeout occurred!");
}

const handleTimeoutAgain=()=>{
    console.log("Timeout occurred again!");
}

setTimeout(handleTimeout, 1000);
setTimeout(handleTimeoutAgain, 2000);
setTimeout(() => {
    console.log("Timeout occurred once more!");
}, 3000);


function greeter(greetFn){
    greetFn();
}
greeter(() => {
    console.log("Hello from the greeter function!");
});
