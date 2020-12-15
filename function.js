// function doSomething() {
//     console.log(" Hello World");
// }

// // doSomething();
// doSomething();

// function square(num) {
//     console.log(num * num);
//   }
// function area(width, length) {
//     console.log(width * length);
//   }

//   square(10);
//   square(3);
//   square(91);

//   area(12,14);

//   function isEven(num) {
//       if(num % 2 === 0) {
//         console.log("${num} Number is even");
//       } else
//         console.log(num + " Number is not even");
//   }

//   isEven(8);

function kebabToSnake(string) {
    return string.replace(/-/g,'_');
  }

  var string = "hello-world-";
    

 string = kebabToSnake(string);
 console.log(string);