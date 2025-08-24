function solution(my_string) {
    let answer = [];
    
    // 1. 숫자만 걸러낸다.
    for(const str of my_string) {
        const target = Number(str);
        if(target || target === 0) {
           answer.push(target); 
        }
    }
    
    // 2. 오름차순 정렬
    return answer.sort((a, b) => a - b);
}