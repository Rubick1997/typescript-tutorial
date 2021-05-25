var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var someElement = document.querySelector(".foo");
console.log("someElement", someElement.value);
var newElement = document.querySelector(".loo");
newElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event", target.value);
});
var User3 = /** @class */ (function () {
    function User3(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    User3.prototype.changeUnchangableName = function () {
        this.unchangableName = "new Name";
    };
    User3.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    User3.maxAge = 50; //something that you get on the class itself
    return User3;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User3));
var user12 = new User3("Rustam", "Kolumbayev");
console.log(user12.getFullName);
var admin = new Admin("foo", "nice"); //admin can access everything what was accessible at the User3 and Admin
