// spread মানে ছরায় ছিটেয়ে দেয়ায়
// rest and spread operator


// rest operator practice (এই function এর ভিতরে অনেক গুলো মান আস্তে পারে ৩,৫৪,২,২১,৪৩,৪২)
const rPractice=(a,b, ...rest)=> {
    const maxNumber= Math.max(...rest)
    return maxNumber
}
console.log(rPractice(3,6,2,7,3,54,))

// Math.max এর কাজ হচ্ছে সব থেকে বড় সংখ্যা  কে দেখাবে
// max==>> মানে সব থেকে বড় সংখ্যা min মানে সব থেকে ছোট সংখ্যা 
// spread মানে ছরাই ছিটিয়ে দেয়া (...(je kuno word use kora jabi) )

const w= [43,565,223,556,321,]
const v=[...w] //spread operator use kora hoyca
v.push(656)
v

console.log(v)
console.log(w)
 
