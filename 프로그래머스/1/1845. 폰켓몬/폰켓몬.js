function solution(nums) {
    // 1. nums의 중복을 제거한다.
    const uniqueTypes = new Set(nums);
    
    // 2. 선택 가능한 개수
    const selectCount = nums.length / 2;
    
    // 3. 종류 수와 선택 가능 수 중 작은 값
    return Math.min(uniqueTypes.size, selectCount);
}