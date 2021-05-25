//T is default name for generic


const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface User2Interface<T,V> {
  name: string;
  data:T
  meta:V
}
//Generics allow us provide different data types
const user3:User2Interface<{meta:string},string> = {
  name: "Jack",
  data:{
      meta:"foo"
  },
  meta:"cafe"
};

const user5: User2Interface<string[],number> = {
    name:"Elon",
    data:["paypal","spaceX"],
    meta:12321
}

const result = addId<User2Interface<{meta:string},string>>(user3);
console.log("result", result);
