/**
[📖 나의 풀이]
- 시간: 38분 43초
- 완전 탐색
- 시간 복잡도: O(n^2)
- 개선 포인트
    - ⭐️ 불필요한 문자열 복사. 문자열도 인덱스형식으로 접근가능함 s[i]
    - 뒤에서 앞으로 도는 unshift방식 -> 직관성 떨어짐.
    - 앞에서부터 순회하면서 "이전에 본 위치"를 기록하는 게 더 깔끔함.
**/
function solution(s) {
    let answer = [];
    // 1. 문자열을 배열로 정의한다.
    const array = [...s];
       
    // 1-1. 배열의 길이만큼 반복한다.
    for(let i = s.length -1; i >= 0; i--) {
        // 2. 배열의 가장 뒷자리를 뽑는다.
        const rear = array[i];
        
        // 2-1. 첫번째 문자열은 무조건 -1
        if(i === 0) {
            answer.unshift(-1);
            break;
        }
        
        // 3. 나머지 배열에 동일한 문자가 있는지 찾고 있다면 인덱스를 이용해 숫자를 구한다.
        for(let j = i - 1; j >=0; j--) {
            if(array[j] === rear) {
                // 4. 같은 문자가 있을경우 인덱스의 차를 answer에 추가한다. (unshift)
                answer.unshift(i - j);
                break;
            } 
            
            // 4-1. 같은 문자가 없다면 -1. (unshift)
            if(j === 0) {
                answer.unshift(-1);
            }
        }
    }

    return answer;
}

/**
[📖 BF]
- 완전 탐색
- 시간 복잡도: **O(n)**
- 개선 포인트
    - 각 문자의 이전 위치를 Map (또는 객체)로 기록
    - 필요한 건 앞에 있던 모든 정보가 아니라, 가장 마지막 위치 하나 => 기록으로 전환
**/
function solution(s) {
    let answer = [];
    let lastIndex = {};   // 각 문자의 마지막 등장 위치 기록

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (lastIndex[char] === undefined) {
            answer.push(-1);  // 처음 등장 → -1
        } else {
            answer.push(i - lastIndex[char]); // 이전 위치와의 거리
        }

        lastIndex[char] = i;  // 현재 인덱스로 갱신
    }

    return answer;
}

/**
[✅ 정리]
- 완전 탐색이 가능한 문제가 나오면 기록으로 해결가능한 문제인지 의심하기 (완전 탐색 -> 기록 최적화)
- 마지막 위치 기록 -> 거리 계산
**/
