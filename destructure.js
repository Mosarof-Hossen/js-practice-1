const arr = [21, 53, 64, 75, 23, 32,64,78,32];
const [arr1, arr2,,,arr5 ,...rest] = arr; // arr1 , arr2 এর পরে যদি মাঝে কিছু বাদ দিতে চাই তাইলে কমা দিতে হবে [arr1,arr2, , ,arr5]

console.log(arr1,arr2,arr5 ,rest)
//21,53,23 বাদে সব rest নামে array এর ভিতরে জাবি 

//object destructuring
const person={
    name:"Mosarof Hossen",
    age:23,
    address:{
        city:"Rajshahi",
        country:"Bangladesh"
    }
}
const {name,age,address, address:{city,country}}=person
console.log(name,age,address, city,country)