
# 정규표현식 (RegExp)

정규식, Regular Expression

## 역할

- 문자 검색
- 문자 대체
- 문자 추출

## 테스트 사이트

https://regexr.com/
https://regex101.com/
https://regexper.com/

## 정규식 생성

```js
// 생성자
new RegExp('표현', '옵션');
new RegExp('[a-z]', 'gi')

// 리터럴
/표현/옵션
/[a-z]/gi
```

## 예제 문자

```js
const str = `
010-1234-1234
example@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
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
`
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부(Boolean) 반환
exec | `정규식.exec(문자열)` | 일치하는 하나의 정보(Array) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체하여 새로운 문자열 반환
search | `문자열.search(정규식)` |	일치하는 문자열의 인덱스(Number) 반환
split	| `문자열.split(정규식)` |	일치하는 문자열을 분할하여 배열(Array)로 반환
toString | `생성자_정규식.toString()` |	생성자 함수 방식의 정규식을 리터럴 방식의 문자열(String)로 반환


## 플래그(옵션)

플래그 | 설명
-- | --
g | 일치하는 모든 문자
i | 영어 대소문자 구분하지 않음
m | 여러 줄 일치 (multiple line)
u |	유니코드
y |	lastIndex 속성으로 지정된 인덱스에서만 1회 일치

## 패턴(표현)

패턴 | 설명
-- | --
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a\|b | a 또는 b와 일치, 인덱스가 작은 것을 우선
ab? | b가 없거나 b와 일치
{n} |	n회 연속으로 반복되는 문자와 가능한 많이 일치
{n,} | n회 이상 연속 일치
{n1, n2} | n1 ~ n2회 연속 일치
[abc]	| a 또는 b 또는 c와 일치, 점(.)이나 별표(*) 같은 특수 문자는 []안에서 특수 문자가 아님, /\.[.]/
[a-z] | a부터 z 사이의 문자 구간에 일치 (영어 소문자)
[A-Z] | A부터 Z 사이의 문자 구간에 일치 (영어 대문자)
[0-9] | 0부터 9 사이의 문자 구간에 일치 (숫자)
[가-힣] | 가부터 힣 사이의 문자 구간에 일치 (한글)
\w | 63개 문자(Word, 영문 대소문자 52개 + 숫자 10개 + _)에 일치
\b | 63개 문자(영문 대소문자 52개 + 숫자 10개 + _)가 아닌 나머지 문자에 일치하는 경계(boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space, Tab 등)에 일치
ab(?=c) | 앞쪽 일치 (Lookahead)
(?<=c)ab | 뒤쪽 일치 (Lookbehind)