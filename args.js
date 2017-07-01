// function var3(){
// }
// let var1 = function(){
//
// };
// let var2 = ()=> Math.pow(2);
//
//
// function sum(){
//   // console.log(arguments);
//   let arr=Array.from(arguments);
//   return arr.reduce(function(accumulator,value){
//     return (accumulator + value);
//   });
// }
// function sum2(...args){
//   // console.log(arguments);
//   // let arr=Array.from(arguments);
//   return args.reduce(function(accumulator,value){
//     return (accumulator + value);
//   });
// }

// simple myBind with no args
Function.prototype.myBind = function (ctx) {
  return () => this.apply(ctx);
};


Function.prototype.myBind = function (ctx) {
  let firstArg = Array.from(arguments);
  firstArg= firstArg.slice(1,firstArg.length);
  console.log(firstArg);
  let that = this;
  return function () {
    let secArg = Array.from(arguments);
    console.log(secArg);
    return that.apply(ctx, firstArg.concat(secArg));
  };
};


class Cat {
  constructor(name) {
    this.name = name;
  }

  meow() {
    console.log(`${this.name} says meow!`);
  }
}

// const curie = new Cat("Curie");
// setTimeout(curie.meow.myBind(curie), 1000);
//
// function curriedSum(num) {
//   if (typeof numArgs !== 'undefined') {
//     if (typeof numbers !== 'undefined') {
//       numbers.push(num);
//       if (numArgs === numbers.length) {
//         return numbers.reduce((acc, num) => acc + num);
//       } else {
//         return curriedSum;
//       }
//     } else {
//       let numbers = [num];
//       return curriedSum;
//     }
//   } else {
//     let numArgs = num;
//     return curriedSum;
//   }
// }

function curriedSum(numArgs) {
  let newList = [];
  function newSum(num) {
    newList.push(num);
    if (newList.length === numArgs) {
      return newList.reduce((acc, n) => acc + n);
    } else {
      return newSum;
    }
  }
  return newSum;
}



Function.prototype.curry = function(numArgs){
  let newList = [];
  let newFunc = (...args) => {
    newList.push(...args);
    if (newList.length >= numArgs) {
      // return this.apply(this,newList);
      return this(...newList);
    } else {
      return newFunc;
    }
  };
  return (newFunc);
};




// myBind with arguments
Function.prototype.myBind = function (ctx, ...bindArgs) {
  console.log(bindArgs);
  return (...callArgs) => {
    console.log(callArgs);
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};



Function.prototype.inheritsFrom = function (parent){
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

  // Surrogate.prototype = parent.prototype;
  // child.prototype = new Surrogate();
  // child.prototype.constructor = child;



function MovingObject (){}



function Ship(name,shipClass){
  this.name = name;
  this.ship_class = shipClass;
}
  Ship.inheritsFrom(MovingObject);
  Ship.prototype.firelazors = function(powerLevel){

  };

function Asteroid(){}


class Vehicle {
  constructor(name, stuff){
    
  }
}


class Car extends Vehicle {

  constructor(name, stuff){

  }


}
