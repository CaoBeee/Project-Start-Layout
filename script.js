var object = {
  username: "andrei",
  password: "supersecret",
};

var database = [
  {
    username: "andrei",
    password: "supersecret",
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!",
  },
  {
    username: "Sally",
    timeline: "Javascript is so cool!",
  },
  {
    username: "Mitch",
    timeline: "Javascript is pretty cool!",
  },
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

// function signIn(username, password) {
//   if (isUserValid(username, password)) {
//     console.log(newsFeed);
//   } else {
//     alert("Sorry, wrong username and password!");
//   }
// }

signIn(userNamePrompt, passwordPrompt);

//function declaration
function newFunction() {}

//function expression
var newFunction = function () {};

//expression
// 1 + 3;
// var a = 2;
// return true;

//calling or invoking a function
// alert();
// oneFunction(param1, param2);
// assign a variable
var a = true;

//function vs method
function thisIsAFunction() {}

var obj = {
  thisIsAMethod: function () {},
};

thisIsAFunction();
obj.thisIsAMethod();

var toDos = [
  "clean room!",
  "brush teeth!",
  "exercise!",
  "study javascript!",
  "eat healthy",
];

var toDosLength = toDos.length;

for (var i = 0; i < toDos.length; i++) {
  console.log(toDos[i]);
}

toDos.forEach(function (i) {
  console.log(i);
});

var counterOne = 10;
while (counterOne > 10) {
  console.log("while", counterOne);
  counterOne--;
}

var counterTwo = 10;
do {
  console.log("do while", counterTwo);
  counterTwo--;
} while (counterTwo > 10);
