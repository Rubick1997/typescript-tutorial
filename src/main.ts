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
interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: UserInterface = {
  name: "Rustam",
  age: 23,
  getMessage() {
    return "Hello" + this.name;
  },
};

const user2: UserInterface = {
  name: "Elon",
  getMessage() {
    return "Hello" + this.name;
  },
};
console.log(user2.getMessage());

type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface User1Interface {
  name: ID;
  age?: number;
  getMessage(): string;
}
const popularTgs: PopularTag[] = ["dragon", "coffe"];

const dragonsTag:MaybePopularTag = "dragon"

let usename: string = "Rustam";
let pageName: string | number = "1"; //union operator or
let errorMessaage: string | null = null;
errorMessaage = "123";

let newUser: UserInterface | null = null;
