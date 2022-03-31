// console.log('03');

// var a = 1;
// var b = a;
// b = 2;
// console.log(a,b);

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a,b);

// var a = { x : 1};
// var b = a;
// b.x = 2;
// console.log(a,b);

// //call by value
// function byValue(count) {
//     count = count + 2;
// };

// var count = 3;
// byValue(count)
// console.log(count)

// //call by reference
// function byReference(count) {
//     count.push('2');
// }

// var count = ['1'];
// byReference(count);
// console.log(count);

// var isMan = false
// var gender = isMan ? '남자' : '여자';
// console.log(gender)

// function sum(x) {
//     var y = 1;
//     return x + y; 
// }

// alert('alert')

var number = prompt('숫자를 입력해주세요(1)');
var number2 = prompt('숫자를 입력해주세요(2)');
number = parseInt(number, 10); //10진수를 의미
number2 = parseInt(number2, 10); //10진수를 의미
console.log('숫자의 합은 ' + (number + number2));
// var isDelete = confirm('정말 삭제합니까?');
// if(isDelete) {
//     //...
// }

// var enc = encodeURIComponent('카카오');
// decodeURIComponent(enc);
// console.log(enc);

// isNaN('1');
// parseInt('12');
// parseInt('09', 10); //10진수를 의미

// function test() {
//     console.log('test()');
// }

// //1초 후 1번 실행
// var id = setTimeout(test, 1000);

// //1초마다 계속 실행
// var id = setInterval(test, 1000);

// function test() {
//     console.log('test()');
//     setTimeout(test, 1000);
// }

// clearTimeout(id);
// clearInterval(id);

// var nick = 'ohj'

// function test() {
//     var age = 30;
//     console.log(nick, age);
// }

// test();
// console.log(age);

// var name2 = 'global';
// function test() {
//     console/log(name2);
//     var name = 'local';
//     console.log(name2);
// }

// test2()
// function test2() {
//     console.log('test');
// }

// function a() {
//     console.log('test')
//     function b() {}
// }

// //y가 없는 경우
// function sum(x, y) {
//     if (!y) y = 1;
//     console.log(x + y);
//   }
//   sum(3);

// var name = 'FE';
// var age = 28;
// var play = function() {};
// var data = { company: 'kakao' };
// var fruits = ['사과', '바나나'];

// var text = 'abc def ghi jkl abc def';
// var testReg = /acc/;
// var result = testReg.test(text);
// console.log(result);

// var text = 'abc def ghi jkl abc def';
// var replaceReg = /def/;
// var result = text.replace(replaceReg, '가나다');
// console.log(result);

