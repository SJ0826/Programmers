/**
📝 나의 풀이
- for 문
- 시간 복잡도: O(N)
**/
function solution(n, t) {
    let answer = n;
    
    for(let i = 0; i < t; i++) {
        answer = answer * 2;
    }
    
    return answer;
}

/**
✅ BF
- ** 연산자
    - ES2016+ 
- 시간 복잡도: O(1)
**/
function solution(n, t) {
    return n * (2 ** t);
}
