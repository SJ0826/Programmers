// ------------------------------
// 📝 나의 풀이
// - 완전 탐색
// - 시간 복잡도: O(n^2)
// ------------------------------
function solution(numbers) {
    let answer = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j ++) {
            
            const acc = numbers[i] * numbers[j];
            if(acc > answer) {
                answer = acc;
            }
        }
    }
    
    return answer;
}

// ------------------------------
// ✅ BF
// - 정렬 활용
// - 시간 복잡도: O(n log n)
// ------------------------------
function solution(numbers) {
    const sorted = [...numbers].sort((a, b) => b - a);
    return sorted[0] * sorted[1];
}

// ------------------------------
// ✅ 정리
// - 배열에 제일 큰 두가지 숫자 찾는 방법 => 정렬 후 최대 2개 선택
// ------------------------------
