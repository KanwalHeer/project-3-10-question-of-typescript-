//                    ::::10 Question project:::::
//
//QUESTION # 01:
//Write a TypeScript function to check if a given number is prime or not.
//SOLUTION:
function PrimeNumbers(numbers: number): boolean {
    if (numbers < 2) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(numbers); i++) {
        if (numbers % i === 0) {
            return false;
        }
    }
    
    return true;
}
const testNumber = 17; 
if (PrimeNumbers(testNumber)) {
    console.log(`${testNumber} is a prime number.`);
} else {
    console.log(`${testNumber} is not a prime number.`);
}

//QUESTION: # 02...........
//Implement a TypeScript function to reverse a string.
//SOLUTION..................
function ReverseString(aString:string):string{
    return aString.split('').reverse().join('')
    //split is use for brack the string into array,reverse is use for reverse the arry of string and join is use 
    //for to join again the string.
    }
    const perameter1 = "Hello"
    const parameter2 = "heer"
    const parameter3 = "school"
    const reversion1 = ReverseString(perameter1)
    console.log(reversion1)
    const reversion2 = ReverseString(parameter2)
    console.log(reversion2)
    const reversion3 = ReverseString(parameter3)
    console.log(reversion3)
//QUESTION # 03............
// Create a TypeScript function to find the factorial of a number recursively.
//SOLUTION::::::::
function factorial(num1:number):number {
    if (num1 ===0 || num1 === 0) {
        return 1;
    }else{
        return num1 * factorial(num1 -1)
    }
}
const Number1 = 2 // output should be 2!=2*1 = 2 ;
const factorialNumber1 = factorial(Number1)
console.log(factorialNumber1)

const Number2 = 5 // output should be 5!=5*4*3*2*1  = 120;
const factorialNumber2 = factorial(Number2)
console.log(factorialNumber2)

const Number3 = 4 // output should be 4!=4*3*2*1 =  24
const factorialNumber3 = factorial(Number3)
console.log(factorialNumber3)

const Number4 = 7 // output should be 7!=7*6*5*4*3*2*1 = 5040 
const factorialNumber4 = factorial(Number4)
console.log(factorialNumber4)

//QUESTION # 04 :
//Write a TypeScript function to check if a string is a palindrome.
function palinsdrom(strings:string[]):void {
    for(const str of strings ){
        const cleanString = str.toLowerCase().replace(/[\W_]g/,'');
        if (cleanString === cleanString.split('').reverse().join('')) {
            console.log(`${str} of palinsdrom`)
        }
    }
}
const polinString = ["heer","heelo","wolrd","kanwal","radar","level","kevek"]
palinsdrom(polinString)
//2nd Example:
function isPalisdrom(str:string):boolean {
    const cleanStr = str.toLowerCase().replace(/[\W_]g/,'')
     return  cleanStr === cleanStr.split('').reverse().join('')

}
const string1 = "bilawal"
const string2 = "level"
console.log(isPalisdrom(string1))
console.log(isPalisdrom(string2))

//3rd Example:
function thePalinsdrom(theString:string[]):void {
    for(const thestr of theString){
        const theCleanStrinf = thestr.toLowerCase().replace(/[\W_]g/,'')
        if(theCleanStrinf === theCleanStrinf.split('').reverse().join('')){
          console.log(`${thestr} is palinsdrom`)  
        }
    }
}
const words1 = ["level","radar","ammma","bikib"]
thePalinsdrom(words1)
const words2 = ["kanwal","bilo","brother"]
thePalinsdrom(words2)

//QUESTION # 05:
//Implement a TypeScript function to find the sum of all elements in an array.

const arrays:string[] = ["kanwal","bilawal","fiza","bahadur"]
function printArry() {
    for (let index = 0; index < arrays.length; index++) {
        const names = arrays[index];
        console.log(names)
    }
}
const arrayName =printArry()

//QUESTION # 06:
//Create a TypeScript function to remove duplicate elements from an array.
  let allArrays:number[]=[2,1,4,5,6,3,2,7,6,5,4,8,9]
   let uniqueAray:number[]=[]
   allArrays.forEach((numbers)=>{
    if (!uniqueAray.includes(numbers)) {
        uniqueAray.push(numbers)
    }
   })
   console.log(uniqueAray)
   //other example:
   let allArrays1:string[]=["kanwal","heer","abiha","ali","ali","heer"]
   let uniqueAray1:string[]=[]
   allArrays1.forEach((Names)=>{
    if (!uniqueAray1.includes(Names)) {
        uniqueAray1.push(Names)
    }
   })
   console.log(uniqueAray1)

   //QUESTION # 07 
   //Write a TypeScript function to sort an array of numbers in ascending order.
   let assendingArray:number[]=[3,5,2,1,6,7,8,4,3]
   function assendingOrder() {
    const result = assendingArray.sort()
    console.log(assendingArray)
   }
   assendingOrder()
 //second example:
 let assendingArray1:number[]=[3,5,2,1,6,7,8,4,3]
 assendingArray1.sort()
 console.log(assendingArray1)

 //QUESTION # 08:
 //Implement a TypeScript function to merge two sorted arrays into one sorted array.
 let arr1:number[]=[1,3,5,4,7]
 let arr2:number[]=[6,2,9,8,10]
 let sortedArry:number[]=[...arr1,...arr2].sort((a , b)=>a-b)
 console.log(sortedArry)

 //other example:
 function sortedArray(arr3:number[],arr4:number[]):number[] {
    return [...arr3,...arr4].sort((a ,b)=>a-b)
 }
 let arr3:number[]=[1,3,5,4,7]
 let arr4:number[]=[6,2,9,8,10]
 const mergeSortedArry =sortedArray(arr3,arr4)
 console.log(`sorted merge arrays are \n ${mergeSortedArry}`)
   
   //QUESTION # 09:
   //Create a TypeScript class representing a todo item with properties like id, title, and completed status.
   class todo {
    private   id:number  = 123;
    private   title:string  = "defult";
    protected completed:boolean = true

    constructor(id:number,title:string,completed:boolean){
        this.id = id
        this.title = title
        this.completed =completed
    }
    getId():number{
       return   this.id
    }
    gettitle():string{
        return   this.title
     }
    settitle(title:string):void{
        this.title = title
    }
    isCompleted():boolean{
       return  this.completed
    }
    setCompleted(completed:boolean):void{
         this.completed = completed
    }
   }
   const todoList = new todo(1234,"shoping",false)
   console.log(todoList)
   console.log(todoList.getId())
   console.log(todoList.gettitle())
   console.log(todoList.isCompleted())
   todoList.setCompleted(true)
   console.log(todoList.isCompleted())
   
//QUESTION # 10:
//find maximum and minimum number of array:
//solution:
     
function minAndMax(arr:number[]):{max:number,mini:number}{
if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let max = arr[0]
    let mini = arr[0]
    for(const num of arr){
        if (num > max) {
            max = num
        }
        if (num < mini) {
            mini = num
        }
       
    }
    return {max ,mini}
}
const anArray:number[] = [3,2,4,5,6,7,9,8]

const result = minAndMax(anArray)
console.log("maximum is ",result.max)
console.log(`minimum is `,result.mini)

//                       *************************