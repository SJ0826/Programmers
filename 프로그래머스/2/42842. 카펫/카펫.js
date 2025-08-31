function solution(brown, yellow) {
    let answer = [0, 0];
    // 1. yellow가 나올 수 있는 [가로, 세로]를 구한다.
    // 1-1. 가로는 세로보다 크거나, 세로 길이와 같다.
    
    if(yellow === 1) return [3, 3];
    
    for(let rowOfYellow = yellow; rowOfYellow > 0; rowOfYellow--) {
        // 세로가 가로보다 클 경우 패스
        if(yellow / rowOfYellow > rowOfYellow) continue;
        
        let colOfYellow = 0;
        
        if(yellow % rowOfYellow === 0) {
            colOfYellow = yellow / rowOfYellow;
        } else {
            continue;
        }
        
        // 2. 구한 yellow [가로,세로]일때 나오는 brown타일의 개수가 주어진 brown과 같다면 정답
        if((rowOfYellow * 2) + (colOfYellow * 2) + 4 === brown) {
            answer = [rowOfYellow + 2, colOfYellow + 2];
        }
    }
    
    return answer;
}