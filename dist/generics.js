//T is default name for generic
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
//Generics allow us provide different data types
var user3 = {
    name: "Jack",
    data: {
        meta: "foo"
    },
    meta: "cafe"
};
var user5 = {
    name: "Elon",
    data: ["paypal", "spaceX"],
    meta: 12321
};
var result = addId(user3);
console.log("result", result);
