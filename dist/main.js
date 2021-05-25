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
    age: 23
};
var user2 = {
    name: "Elon"
};
console.log(user2.name);
