var hello = "world";
//we can change the value only to the same type
// hello = 123;
// hello = "hello"
// the way of specifying types of the function
var getFullName = function (name, lastName) {
    return name + " " + lastName;
};
// console.log(getFullName("Rustam",true))
console.log(getFullName("Rustam", "Kolumbayev"));
var user = {
    name: "Rustam",
    age: 23,
    getMessage: function () {
        return "Hello" + this.name;
    }
};
var user2 = {
    name: "Elon",
    getMessage: function () {
        return "Hello" + this.name;
    }
};
console.log(user2.getMessage());
var popularTgs = ["dragon", "coffe"];
var dragonsTag = "dragon";
var usename = "Rustam";
var pageName = "1"; //union operator or
var errorMessaage = null;
errorMessaage = "123";
var newUser = null;
//when we do not return anything it is void (undefined and null)
var doSomething = function () {
    console.log("Do Something");
};
//any is not recommended and shoul be avoided since it against the idea of TS functionality and turns off it checks
var foo = 123;
//never is something that will never happen
var doSomething1 = function () {
    throw Error;
};
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
//we cannot assign unknown directly in other type
var s2 = vUnknown;
//type assertion means that we want to convert one type to another(with as)
var s3 = vUnknown;
var pageNumber = "1";
var numericPageNumber = pageNumber;
