const user={
    name:"Pradeep",
    age:36
};

console.log(user);


const userWithFunction={
    name:"Pradeep",
    age:36,
    greet(){
        console.log("Hello, I am "+this.name);
    }
};

console.log(userWithFunction.greet());
