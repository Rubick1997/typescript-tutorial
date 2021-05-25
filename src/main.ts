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

const dragonsTag: MaybePopularTag = "dragon";

let usename: string = "Rustam";
let pageName: string | number = "1"; //union operator or
let errorMessaage: string | null = null;
errorMessaage = "123";

let newUser: UserInterface | null = null;

//when we do not return anything it is void (undefined and null)
const doSomething = (): any => {
  console.log("Do Something");
};

//any is not recommended and shoul be avoided since it against the idea of TS functionality and turns off it checks
let foo: any = 123;

//never is something that will never happen
const doSomething1 = (): never => {
  throw Error;
};

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;

//we cannot assign unknown directly in other type
let s2: string = vUnknown;

//type assertion means that we want to convert one type to another(with as)
let s3: string = vUnknown as string;

let pageNumber: string = "1";
let numericPageNumber: number = pageNumber as unknown as number;

const someElement = document.querySelector(".foo") as HTMLInputElement;
console.log("someElement", someElement.value);

const newElement = document.querySelector(".loo");

newElement.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log("event", target.value);
});
