var statues = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log(statues.inProgress);
//Enum- reserved word to create enumerable
//values are incremented from zero
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notStarted";
    StatusEnum["InProgress"] = "inProgress";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
console.log(StatusEnum.InProgress);
var notStartedStatus = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;
//we can use enum as a value and data type
