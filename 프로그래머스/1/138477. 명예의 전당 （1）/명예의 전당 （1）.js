/**
 [나의 풀이]
 ⏰ 소요시간: 15분
 🕚 시간 복잡도: O(n² log n)
 ➡️ 변수명 명확하게 하기: dayScore -> hallOfFrame
**/
function solution(k, score) {
    // - 매일 한명의 가수가 점수를 올린다.
    // - k일 다음 부터는 명예의 전달에서 배제되는 가수(점수)가 있다.
    // - 매일 명예의 전당의 최하위 점수를 발표한다.
    
    let result = []; // 최하위 점수 기록 배열
    
    // 1. 주어진 score의 순회한다.
    for(let i = 0; i < score.length; i++) { // 🕚 n 번 실행
        
        // 2. i번째까지 배열을 슬라이스, 정렬 후 k번째 수를 result에 추가한다.
        const dayScore = score.slice(0, i + 1).sort((a, b) => b - a); // 🕚 slice -> O(i), sort() => O(ilogi)
        
        // 2-1. i가 k보다 작을 경우 가장 마지막 원소를 result에 추가한다.
        if(i < k) {
            result.push(dayScore[dayScore.length - 1])
        } else {
            result.push(dayScore[k - 1]);
        }
    }

    return result;
}


/**
 [Best Practice]
 ⏰ 소요시간: 15분
 🕚 시간 복잡도: O(n² log n)
 ➡️ 효율적인 정렬: 매번 전체 정렬 대신 정렬된 상태를 유지
 ➡️ 메모리 최적화: 필요한 k개 점수만 보관
 ➡️ 이진 탐색 활용: 삽입 위치를 빠르게 찾음
**/
// 파일 경로: /src/algorithms/hallOfFame.js

function solution(k, score) {
    const result = [];
    const hallOfFame = []; // 명예의 전당 (내림차순 정렬 유지)
    
    for (let day = 0; day < score.length; day++) {
        const todayScore = score[day];
        
        // 명예의 전당에 오늘 점수 추가 (정렬된 상태 유지)
        insertSorted(hallOfFame, todayScore);
        
        // k일 이후부터는 상위 k명만 유지
        if (hallOfFame.length > k) {
            hallOfFame.pop(); // 최하위 점수 제거
        }
        
        // 최하위 점수 발표
        result.push(hallOfFame[hallOfFame.length - 1]);
    }
    
    return result;
}

// 정렬된 배열에 값을 올바른 위치에 삽입하는 헬퍼 함수
function insertSorted(arr, value) {
    let left = 0;
    let right = arr.length;
    
    // 이진 탐색으로 삽입 위치 찾기
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] > value) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    arr.splice(left, 0, value);
}

// 테스트 케이스
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); 
// 예상 결과: [10, 10, 10, 20, 20, 100, 100]

// 사용 예시:
// const k = 3; // 명예의 전당 크기
// const scores = [10, 100, 20, 150, 1, 100, 200];
// const dailyMinScores = solution(k, scores);
// console.log('매일 최하위 점수:', dailyMinScores);
