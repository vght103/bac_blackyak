// let a = 221;
// let b = a -5;
// a = 4;
// console.log(b, a);

// const a = 221;
// let b = a - 5;
// a = 4;
// console.log(b, a)

// var / let 은 변수
// const 는 상수 - 변하지 않는 수

// var 보다는 let 을 사용한다.



// 첫 사용은 거의 무조건 const 를 사용한다.
// let / var 는 내가 필요하기 전까지 쓰지 않는다.

// string = 텍스트 " 따옴표를 붙인다"

// const what = "Sean"

// console.log(what);

// 스트링 " " 안에 숫자를 넣으면, 이건 넘버가 아니라 텍스트이다.


// Boolean - true or false

// const wht = true;

// Number 
// const wat = 777;

// float -소수점이 있는 숫자
// const wat = 55.1; 


// 어레이 [      ]

// const monday = "Mon"
// const tue = "Tue"
// const wed = "Wed"
// const thu = "Thu"
// const fri = "Fri"

// console.log(monday, tue, wed, thu, fri);

// const something = "Something"

// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", something];

// console.log(daysOfWeek)


// 오브젝트

// const seanInfo = {
//   name: "Sean",
//   age: "32",
//   gender: "Male",
//   isHandsome: true,
//   favMovies: ["oldboy", "Harry Poter", "LOTR"],
//   favFood: [
//     {
//     name: "Kimchi",
//     fatty: false,
//   },
//   {
//     name: "Macdonald burger", 
//     fatty: false
//   }
// ]
// };

// seanInfo.gender = "female"

// console.log(seanInfo);


// 데이터를 정렬하느 방법은 2가지다. 하나는 Array , 하나는 오브젝트다.



// let a = 221;
// let b = a-5;
// a= 4;
// console.log(b,a)


// const lowellInfo = {
//   name: "Lowell",
//   age: 28,
//   height: "172cm",
//   favFood: [
//     "Japanes Food",
//     "pork",
//     "beef",
//     "spicy food"
//   ]
// };

// console.log(lowellInfo.favFood[3])



// const DAN = {
//   married: "No",
//   girlfreind: "Yes",
//   age: 35,
//   job: "Programmer"
// }

// console.log(DAN)

// 규칙 :  펑션 이름  ()
// function sayHello() {
//   console.log('Hello!');
// }

// sayHello();

// function sayHello(name, age) {
//   console.log('Hello!', name, "you are", age, "years old");
// }

// sayHello("Chunghyeon", "32");

// function sayBye(name, place) {
//   console.log('Bye', name, "I have to go", place, "See you tomorrow!")
// }

// sayBye("Lowell", "home.")


// 새로운 스트링 방식  ``
// console.log 대신에 return
// function sayHello(name, age) {
//   return(`Hello ${name} you are ${age} years old`);
// }

// const greetSean = sayHello("Sean", 32)
// console.log(greetSean)

const calculator = {
  plus: function(a, b) {
    return a + b;
  }
}
const plus = calculator.plus(5, 5)
console.log(plus);

const calculator = {
  plus: function(a, b) {
    return a + b;
  }
}

const plus 