/*
    2주차 실습
*/
var name2 = 'huiju';
console.log(name2);

var isMan = 'true';
var isMan2 = true;
console.log(isMan);
console.log(isMan2);

var log = function(str) {
    console.log(str);
  };
log('hello');

var img = {};
img.width = 100;
img.height = 200;
console.log(img);

var arr = [1,2,3,4,5];
console.log(arr);
console.log(arr.length);
for (var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

console.log(1+1);
console.log(name2+'hello')

var me = {
    age: 11,
    name: 'huiju',
    isMan: false,
    sayHello: function () {
        console.log('hello');
    },
};

var article1 = {
    title: '제목1',
    url: "http://naver.com",
};

var articles = [article1]
console.log(articles)

var todos = ['운동'];
var todo = '게임';
todos.push(todo)
// console.log(todos)
todos.forEach(function(todo){
    console.log(todo);
})

var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
    return todo === updateTodo
});
console.log(updateIndex)

todos[updateIndex] = '공부';
console.log(todos);

var deleteTodo = '공부';
var newTodos = todos.filter(function(todo) {
    return todo !== deleteTodo
});
console.log(newTodos)