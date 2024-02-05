// // // // // //  const arr = ["hello","world"]
// // // // // //  console.log(arr);
// // // // // //  arr.push("sumeet")
// // // // // //  console.log(arr);
// // // // // // arr.unshift("hi")
// // // // // // console.log(arr);
// // // // // //    let arr2 = arr;
// // // // // //    console.log(arr2)
// // // // // // arr2[0] = "bye"
// // // // // // console.log(arr2)
// // // // // // console.log(arr)
// // // // // // const arr3 = [...arr2]
// // // // // // console.log(arr3)
// // // // // // arr3.pop()
// // // // // // console.log(arr3)
// // // // // // console.log(arr2)
 
// // // // // let rand = Math.random()
// // // // // let first,second,third;
// // // // // if(rand<0.33){
// // // // //     first = "soft"
// // // // //     second = "tech"
// // // // //     third = "solution"

// // // // // }
// // // // //     else if(rand<0.66 && rand>0.33){

// // // // //     first = "hard"
// // // // //     second = "code"
// // // // //     third = "hub"

// // // // // }
// // // // // else{
// // // // //     first = "mid"
// // // // //     second = "inout"
// // // // //     third = "firm"


// // // // // }
// // // // // console.log(`${first} ${second} ${third}`)



// // // // const store = {
// // // //     name : "sumeet" ,
// // // //     mobile_no : 8824883591 ,
// // // //        marks :  813
// // // // }
// // // // console.log(store)

// // // // 1.
// // // let str = "string" + 4
// // // console.log(str)
// // // console.log(typeof str)

// // // const obj = {
// // //     WORD : "MEANING" ,
// // //     data : "information about something" ,
// // //     computer : "electronic device " ,
// // //     javascript : "coding language for website dev" , 
// // //     HTML : "Hyper text markup language " ,
// // //     CSS :"cascading style sheet"
// // // }
// // // console.log(obj)

// // let age = prompt("enter your age :");
// // if (age>9 && age<21){
// //     console.log("the age is between 10 and 20")
// // }
// // else{
// //     console.log("the age is not between 10 and 20")

// // }
  
// let num = 24;
// let num2 = 19;
// if(num%2==0){
//     console.log("number is divisible by 2")
// }
// else if (num2%3==0){
//     console.log("number is divisible by 3")
// }
// else{
//     console.log("number is not divisibe by 2 or 3 ")
// }

let age = prompt("Enter your Age :");
if(age < 5){
    console.log("you are a kid ")
}
else if(age > 18 ){
    console.log("yes you can drive ")
}
else if(age <=  18){
    console.log("You can not drive ")
}
else {
    console.log("please enter a valid age ")
}
