/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
 arr.map((v)=>{
    if (v.profession==='developer') {
      console.log(v);
    }
    return ;
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((v)=>{
    if (v.profession==='developer') {
      console.log(v);
    }
  })
}

function addData(name, age, profession) {
  //Write your code here, just console.log
  const myObj = {
    id: arr.length,
    name: name,
    age: age,
    profession, profession
  };
  arr.push(myObj);
  console.log(arr);
}

addData("susan", "20", "intern");

function removeAdmin() {
  //Write your code here, just console.log
  const newArr = arr.filter(v=>v.profession!=="admin");
  console.log(newArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const myArr = [
    {id: 5, name: "Kushal", age: "21", profession: "sde"},
    {id: 6, name: "Saikat", age: "22", profession: "teacher"},
    {id: 7, name: "Riya", age: "20", profession: "student"}
  ];
  const newArr = arr.concat(myArr);
  console.log(newArr);
}
