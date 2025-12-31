/*Normal way of array destructuring*/
const userNameData = ["Pradeep","Saritha"];
const firstName = userNameData[0];
const lastName = userNameData[1];

console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);

/*Destructuring way of array destructuring*/
const[userFirstName,userLastName] = userNameData;

console.log(`User First Name: ${userFirstName}`);
console.log(`User Last Name: ${userLastName}`);

/*Object Destructuring*/
const userDetails = {
    uFirstName: "Pradeep",
    uLastName: "Saritha",
    uAge: 28
};

const {uFirstName:name1, uLastName:name2, uAge} = userDetails;

console.log(`User First Name: ${name1}`);
console.log(`User Last Name: ${name2}`);
console.log(`User Age: ${uAge}`);       
