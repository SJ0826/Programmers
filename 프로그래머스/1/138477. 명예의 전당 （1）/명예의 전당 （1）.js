function solution(k, score) {
    // - 매일 한명의 가수가 점수를 올린다.
    // - k일 다음 부터는 명예의 전달에서 배제되는 가수(점수)가 있다.
    // - 매일 명예의 전당의 최하위 점수를 발표한다.
    
    let result = []; // 최하위 점수 기록 배열
    
    // 1. 주어진 score의 순회한다.
    for(let i = 0; i < score.length; i++) {
        
        // 2. i번째까지 배열을 슬라이스, 정렬 후 k번째 수를 result에 추가한다.
        const dayScore = score.slice(0, i + 1).sort((a, b) => b - a);
        
        // 2-1. i가 k보다 작을 경우 가장 마지막 원소를 result에 추가한다.
        if(i < k) {
            result.push(dayScore[dayScore.length - 1])
        } else {
            result.push(dayScore[k - 1]);
        }
    }

    return result;
}