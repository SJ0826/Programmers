function solution(n) {
    let answer = 0;
    const maxNum = Math.floor(n/2);
    
    for(let i = 1; i <= maxNum; i++) {
        if(n % i === 0) answer++;
    }
    return answer + 1;
}