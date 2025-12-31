/*Spread Operator Example for Arrays */
const hobbies=["Software Development","Cricket"];
const newHobby="Natural farming";
const mergedHobbies=[...hobbies,newHobby];
console.log(mergedHobbies);

/*Spread Operator Example for Objects*/
const user={name:"Pradeep",age:36};
const updatedUser={...user,age:37,city:"Malavalli"};
console.log(updatedUser);
