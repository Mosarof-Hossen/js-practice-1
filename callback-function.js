// const greet=(name,greeting,cb)=>{
//     console.log(`hi, ${name}`)
//     cb()
// }
// const say=(greet)=>{
//     console
// }

const arr = [10,21, 53, 63, 23, 63, 76, 86, 32];
// arr.forEach((ami)=>{
//     console.log(ami)
// })
arr.forEach((ami) => console.log(ami));

// map method // map এর কাজ হলে আপডেট করে দেওয়া যোগ করে দেওয়া
const m=arr.map((tmi)=> tmi+5); // map এর কাজ হলে আপডেট করে দেওয়া যোগ করে দেওয়া
console.log(m)

// filter method -filter multiple element
const adultStudent= arr.filter((ok)=>ok>=18)
console.log(adultStudent)

// find method -find a single element collect
const friend=arr.find((sai)=>sai==10)
console.log(friend)