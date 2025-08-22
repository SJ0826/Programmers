/**
[📖 나의 풀이]
- 그리디(Greedy) + 시뮬레이션 알고리즘 사용
- 시간 복잡도: O(n + m) (n은 음식 종류 수, m은 총 음식 개수)
- 소요시간: 25분
- 아쉬운 점
    - for...in의 부적절한 사용: 배열에 for...in을 사용하면 인덱스가 문자열로 반환
    - 불필요한 조건: food[foodIndex] / 2 < 1 대신 food[foodIndex] < 2 가 더 직관적
    - 변수명 foodIndex 보다는 i가 일반적
**/

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

/**
[📖 BF]
- 그리디 + 문자열 조작 최적화
- 시간 복잡도: O(n + m) (n은 음식 종류 수, m은 총 음식 개수)
- 소요시간: 25분
- 배울 점
    - String.repeat() 활용: 같은 문자를 여러 번 반복
    - 적절한 반복문
        - 배열 인덱스가 필요하면 for(let i = 0; i < arr.length; i++) 
        - 값만 필요하면 for ...of
        - 인덱스와 값이 모두 필요하면 forEach
    - 스프레드 연산자: [...string]으로 문자열을 배열로 반환
**/

function solution(food) {
    let left = "";

for (let i = 1; i <food.length; i++) {
    const count = Math.floor(food[i] / 2);
    left += i.toString().repeat(count);
}

return left + "0" + left.split("").reverse().join("");
}

/**
[✅ 암기]
- 문자열 뒤집기
    1. str.split("").reverse().join("") 
    2. [...str].reverse().join("")
- ⭐️ 문자 반복. 반복문 대신 repeat하면 O(1) 연산 사용
    "a".repeat(3) 
- Math.floor로 몫 구하기
     Math.floor(5 / 2)  
**/

