var empty = {}; //리터럴 형태로 객체 생성
var point = {  //객체와 프로퍼티, 프로퍼티 값
  x:0,
  y:0,
};
var point1 = {  //다른 객체의 프로퍼티 접근
  x:point.x,
  y:point.y,
};
var book = {
  "main title": "JavaScript", //
  "sub-title": "subtitleJ",
  "author":{
    firstname:"Lim",
    surname:"woochan",
  }
};
console.log(point);
console.log(point1.x);
console.log(book["main title"]);
console.log(book["sub-title"]);
console.log(book.author);
console.log(book.author.firstname);
console.log(book.name);

delete book["main title"];
console.log(book["main title"]);

console.log(book.hasOwnProperty("author"));
