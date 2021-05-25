const statues = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};
console.log(statues.inProgress);

//Enum- reserved word to create enumerable
//values are incremented from zero
enum StatusEnum {
  NotStarted = "notStarted",
  InProgress = "inProgress",
  Done = "done",
}

interface Task {
  id: string;
  status: StatusEnum;
}

console.log(StatusEnum.InProgress);

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

notStartedStatus = StatusEnum.Done;

//we can use enum as a value and data type
