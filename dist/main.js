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
