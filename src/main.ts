let hello: string = "world";
//we can change the value only to the same type
// hello = 123;
// hello = "hello"

// the way of specifying types of the function
const getFullName = (name: string, lastName: string): string => {
  return name + " " + lastName;
};

// console.log(getFullName("Rustam",true))
console.log(getFullName("Rustam", "Kolumbayev"));

//Interfaces in TS help us to describe entities
interface User {
  name: string;
  age?: number;
}

const user: User = {
  name: "Rustam",
  age: 23,
};

const user2: User= {
  name: "Elon",
};
console.log(user2.name)