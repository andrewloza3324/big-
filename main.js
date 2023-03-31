//function ask() {
//let result = prompt("Enter number");
//return result;
//}
//let result = Number(ask());
//console.log(result);

//function obj(width, heigth) {
//let rectangle = {
//first: width,
//second: heigth,
//};
//return rectangle;
//}

function info(name, age) {
  obj = {
    first: name,
    second: age,
  };
  return obj;
}

let result1 = info("andrew", 24);
let result2 = info("Vlad", 20);

function biggerAge(first, second) {
  if (first.second > second.second) {
    return first.first;
  } else {
    return second.first;
  }
}
console.log(biggerAge(result1, result2));
