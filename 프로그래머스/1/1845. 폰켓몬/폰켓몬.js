// [📝 나의 풀이]
function solution(nums) {
    // 1. nums의 중복을 제거한다.
    const uniqueTypes = new Set(nums);
    
    // 2. 선택 가능한 개수
    const selectCount = nums.length / 2;
    
    // 3. 종류 수와 선택 가능 수 중 작은 값
    return Math.min(uniqueTypes.size, selectCount);
}

// 케이스 1: 종류가 선택 가능 수보다 많은 경우
function case1() {
    const nums = [1, 2, 3, 4, 5, 6]; // 6마리, 6종류
    const selectCount = nums.length / 2; // 3마리만 선택 가능
    const uniqueTypes = new Set(nums).size; // 6종류
    
    console.log("선택 가능:", selectCount, "종류 수:", uniqueTypes);
    console.log("결과:", Math.min(uniqueTypes, selectCount)); // 3
    // 6종류가 있어도 3마리만 선택할 수 있으므로 최대 3종류
}

// 케이스 2: 종류가 선택 가능 수보다 적은 경우  
function case2() {
    const nums = [1, 1, 1, 1, 1, 1]; // 6마리, 1종류
    const selectCount = nums.length / 2; // 3마리 선택 가능
    const uniqueTypes = new Set(nums).size; // 1종류만
    
    console.log("선택 가능:", selectCount, "종류 수:", uniqueTypes);
    console.log("결과:", Math.min(uniqueTypes, selectCount)); // 1
    // 3마리를 선택할 수 있어도 1종류밖에 없음
}

/**
[✅ 정리]
- 해시
- 시간 복잡도
    - set -> O(N)
    - 나눗셈 연산, Math.min -> O(1)
    - 총 O(N)
- ⭐️ 문제 패턴 인식
    - 중복 제거
    - 고유한 개수
    - 서로 다른 종류
    - 유니크한 값들
    - distinct values
    ➡️ Set 사용
- Set 핵심 메서드
    - mySet.add(value)
    - mySet.has(value)
    - mySet.delete(value)
    - mySet.size;
    - mySet.clear();
**/
