function solution(a, b, n) {
    let answer = 0;
    
    let currentBottles = n;
    // 1. 빈병 n이 a개 미만이 될때까지 반복
    while(currentBottles >= a) {
        // 2. 받는 병의 개수 계산
        let remainedBottles = currentBottles % a;
        let emptyBottles = Math.floor(currentBottles/a) *b;
        answer += emptyBottles;
        
        currentBottles = remainedBottles + emptyBottles;
    }
    
    return answer;
}