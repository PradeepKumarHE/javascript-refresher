/*Function definition*/
function greet(){
    console.log("Hello from app.js");
}

/*Function call*/
greet();

/*Function with parameters*/
function greetUser(username,message){
  console.log(`Hello ${username}, ${message}`);
}

greetUser("Pradeep","Welcome to JavaScript Learning");

/*Function with default parameters*/
function greetUserWithDefaultParameter(username,message="Welcome to JavaScript Learning"){
  console.log(`Hello ${username}, ${message}`);
}

greetUserWithDefaultParameter("Pradeep");

/*Function with default parameters*/
function greetUserWithDefaultParameterOverride(username,message="Welcome to JavaScript Learning"){
  console.log(`Hello ${username}, ${message}`);
}

greetUserWithDefaultParameterOverride("Pradeep","Have a great day ahead!");



/*Function with default parameters*/
function addTwoNumbers(a,b){
 return a+b;
}

let sum=addTwoNumbers(5,10);
console.log(`Sum is : ${sum}`);
