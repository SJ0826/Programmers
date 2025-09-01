function solution(cards1, cards2, goal) {
    // 1. goal을 순환하며 각 턴의 맨 앞 원소(target)를 확인한다.
    
    for(let target = 0; target < goal.length; target++) {
        // 3. 없다면 바로 "No"를 반환한다.
        if(cards1[0] !== goal[target] && cards2[0] !== goal[target]) return "No";
        
        // 2. cards1 또는 cards2의 맨 앞 원소에서 target이 있다면, 해당 원소를 cards에서 제거한다.
        if(cards1[0] === goal[target]) cards1.shift();
        if(cards2[0] === goal[target]) cards2.shift();
        
       
        
    }
    // 4. goal의 배열이 끝까지 검색완료된다면, "Yes"를 반환한다.
    return "Yes";
}