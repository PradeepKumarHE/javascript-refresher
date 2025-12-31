const hobbies=["Sports","Coding","Agriculture"];
console.log(hobbies);
console.log(hobbies[0]);

hobbies.push("Reading");
console.log(hobbies);

const copiedHobbies=[...hobbies];
console.log(copiedHobbies);

const editedHobbies=hobbies.map((hobby)=>{
    return hobby+"!";
});
console.log("editedHobbies ---> "+editedHobbies);

const editedHobbiesAsObject=hobbies.map((hobby)=>({name:hobby}));
console.log(editedHobbiesAsObject);


hobbies.splice(1,1);
console.log(hobbies);

const toArray=(...args)=>{
    return args;
};

console.log(toArray(1,2,3,4,5));
