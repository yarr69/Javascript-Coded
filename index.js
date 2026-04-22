// Function Kese Likha Hai?
// function add(a,b){
//   return a+b;
// }
// +++++++++++++++Or++++++++++++++++++
// const add = (a,b) => a+b;
// ForEach Ki katha Kahani!!
// const nums = [1,2,3];
// nums.forEach((num)=>{
//   console.log(num);
// });
// const arr = [1,2,3,4];
// let sum = 0;
// arr.forEach((num) => {
//   sum += num;
// });
// console.log(sum);
// const users = [
//   {
//     name : "yash",
//     age : 20
//   }, 
//   {
//   name : "Rahul",
//   age : 19
//   }];
//   users.forEach((user)=>{
//     console.log(user.name)
//   });
// const nums = [1,2,3];
// const result = nums.map((num) => {
//   return num*num;
// });
// console.log(result);
// const arr = [1,2,3];
// const result = arr.map(n => n*2);
// console.log(result)
// const names = ["yash", "SAGAR"];
// const result = names.map(n => n.toLowerCase());
// console.log(result)
// const users = [
//   {
//     name : "yash",
//     age : 20
//   },
//   {
//     name : "Abhiman",
//     age : 22
//   }];
//   const result = users.map(user => user.age);
//   console.log(result)
// const arr = [1,2,3,4];
// const newArr = arr.filter((n) =>{
//   return n%2 === 0;
// }) ;
// console.log(newArr)
// const users = [
//   {name: "Yash", age: 20},
//   {name: "Rahul", age: 17}
// ];
// const adults = users.filter(user => user.age >= 18);
// console.log(adults)
// const arr = [1,2,3,4,5];
// const sum = arr.reduce((acc,curr)=> acc+curr, 0);
// console.log(sum);
// const nums = [5,2,9,1];
// const max = nums.reduce((acc,curr)=> {
//   return curr > acc ? curr : acc;
// }nums[0]);
// console.log(max);
// const s = new Set([1,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,3]);
// console.log(s.size);
// const arr = [1,23,23,2,3,23,54,54];
// const unique = [...new Set(arr)];
// console.log(unique);
// const s = new Set();
// s.add(5);
// s.add(10);
// s.add(5);
// console.log(s);
// s.delete(5);
// console.log(s)
// const nums = [1, 2, 2, 3, 4, 4];
// const result = [...new Set(nums)].reduce((acc, curr) => acc + curr,0);
// console.log(result); 
const nums = [1,2,2,3,4,4,5];
const arr = [...new Set(nums)];
console.log(arr);
const newArr = arr.filter((n)=> n%2 === 0)
arr.reduce((acc,currVal)=> acc +currVal,0);
console.log(newArr);


