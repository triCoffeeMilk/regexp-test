console.log("RegExp test");

const str = `
010-1234-1234
example@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=shangchi
All that is gold does not glitter
황금이라고 다 반짝이진 않으며
Not all those who wander are lost
방랑자라고 다 길잃은 것은 아니다
The old that is strong does not wither
오래됐을지언정 강한 것은 시들지 않으며
Deep roots are not reached by the frost
깊은 뿌리에는 서리가 미치지 못한다
From the ashes a fire shall be woken
잿더미 속에서 불꽃이 깨어날 것이며
A light from the shadows shall spring
한 줄기 빛이 그림자들 사이에서 돌연 나타날지니
Renewed shall be blade that was broken
부러졌던 칼날은 다시 벼려지고
The crownless again shall be king
왕관없는 자 다시 왕이 되리라
abbcccdddd

http://localhost:1234
d`

var ex1 = new RegExp('i','gi');
var ex2 = /i/gi;

console.log(str.match(ex1));
console.log(str.match(ex2));

ex1 = /gold/gi;
console.log(ex2.test(str));
console.log(str.replace(ex2, 'AAA'));
console.log(str);

console.log(str.match(/the/));
console.log(str.match(/the/g));
console.log(str.match(/the/gi));

console.log(str.match(/\./gi));
console.log(str.match(/\.$/gi));
console.log(str.match(/\.$/gim));

console.log(str.match(/d$/g));
console.log(str.match(/d$/gm));

console.log(str.match(/^t/gim));

console.log(str.match(/.er/gim));
console.log(str.match(/s../g));

console.log(str.match(/shall|king/));

console.log(str.match(/https?/g));

console.log(str.match(/d{1}/));
console.log(str.match(/d{2}/g));
console.log(str.match(/d{2,}/g));
console.log(str.match(/d{2,3}/g));

console.log(str.match(/\w{2,3}/g)); // \w : 숫자 + 영어알파벳
console.log(str.match(/\b\w{2,3}\b/g)); // \b : 숫자나 영어알파벳이 아닌 문자

console.log(str.match(/[as]/g));
console.log(str.match(/[0-9]{1,}/g));
console.log(str.match(/[가-힣]{1,}/g));

console.log(str.match(/\bt\w{1,}/gi));
console.log(str.match(/\d{1,}/g));
console.log(str.match(/\s/g));
const tmpStr = `  the hello  world    !

`
console.log(tmpStr.match(/\s/g));
console.log(tmpStr.replace(/\s/g, ''));

console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));
