function solution(food) {
    let order = [];
    
    // 조건1. 칼로리가 낮은 음식 먼저
    
    // 1. 배열 인덱스 순서 거꾸로 반복
    for(const foodIndex in food) {
    
        // 2. 2로 나눴을때 2보다 작으면 패스
        if (food[foodIndex] / 2 < 1) continue;
        
        // 3. 2로 나눴을때 2보다 크면 몫만큼 push
        const count = Math.floor(food[foodIndex] / 2);
        
        for(let i = 0; i < count; i++) {
            order.push(foodIndex);
        }
    }
    
    // 4. order를 문자열로 변환
    return order.join("") + "0" + order.reverse().join("");
}