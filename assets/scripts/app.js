/*Function definition*/
function greetWithNormalFunction(){
    console.log("Hello from normal function in app.js");
}

/*Function call*/
greetWithNormalFunction();

/*Function definition*/
const greetWithArrowFunction = () => {
  console.log("Hello from arrow function in app.js");
};

/*Function call*/
greetWithArrowFunction();

/*Function with parameter*/
const getMultiplication=(number)=>{
  console.log((number)*2);
}
getMultiplication(8);


const getMultiplicationWithoutBrace=number=>{
  console.log((number)*2);
}
getMultiplicationWithoutBrace(8);

const printNameAndAge=(name,age)=>{
  console.log(name,age);
}
printNameAndAge('Pradeep',35);


const emptyParamFunc=()=>{
  console.log("emptyParamFunc is executed");
}
emptyParamFunc();
