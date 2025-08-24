/**
[📖 나의 풀이]
- 직관적이고 이해하기 쉬운 코드
- 시간 복잡도: O(n × m) (includes()와 replaceAll() 각각 O(n)이므로)
- 소요시간: 23분
- 아쉬운 점
    - 불필요한 순회: 문자열에 없는 영단어도 체크
    - 매번 새로운 문자열 생성으로 인한 메모리 오버헤드
**/

function solution(s) {
    let answer = s;
    const numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    // 1. numArr를 순회하며 특정 영단어가 s에 있는지 확인한다.
    for(let i = 0; i < numArr.length; i++) {
        if(s.includes(numArr[i])) {
            // 2. 있다면 str.replace 활용해 해당 영단어를 숫자로 대체한다.
             answer = answer.replaceAll(numArr[i], i);
        }
    }
    
    return Number(answer);
}

/**
[📖 BF]
- reduce를 활용한 함수형 접근
- 시간 복잡도: O(n × m)
- 불변성 유지
**/

function solution3(s) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    return Number(
        words.reduce((acc, word, index) => 
            acc.replaceAll(word, index), s)
    );
}
