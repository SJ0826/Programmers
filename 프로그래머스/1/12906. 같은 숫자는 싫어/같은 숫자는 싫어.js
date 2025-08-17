/**
[📖 나의 풀이]
- 큐 알고리즘 사용
- 시간 복잡도: O(n)
- 공부한 알고리즘을 사용해보고자한 풀이지만, 오히려 코드량이 늘고 풀이 시간을 많이 소요했음.
**/

class Queue {
    constructor(initialArray = []) {
        this.item = [...initialArray];
        this.front = 0;
        this.rear = initialArray.length;
    }
    
    push(item) {
        this.item.push(item);
        this.rear++;
    }
    
    pop() {
        if (this.isEmpty()) return undefined;
        return this.item[this.front++];
    }
    
    peek() {
        if (this.isEmpty()) return undefined;
        return this.item[this.front];
    }
    
    isEmpty() {
        return this.front >= this.rear;
    }
    
    size() {
        return this.rear - this.front;
    }
}

function solution(arr) {
    const queue = new Queue(arr);  // 큐에 배열 넣기
    const answer = [];
    
    let prev = queue.pop();  // 첫 번째 요소
    
    while (!queue.isEmpty()) {
        let current = queue.pop();  // 다음 요소
        
        if (prev !== current) {     // 이전과 다르면
            answer.push(prev);      // answer에 추가
        }
        // 같으면 그냥 넘어감 (연속 제거 효과)
        
        prev = current;             // 현재를 이전으로 업데이트
    }
    
    // 마지막 요소도 추가
    if (prev !== undefined) {
        answer.push(prev);
    }
    
    return answer;
}

/**
[📖 BF]
- 단순 순회
- 시간 복잡도: O(n)
**/

// 최종 추천 코드 1
function solution(arr) {
    if (arr.length === 0) return [];
    
    const answer = [arr[0]];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}

// 최종 추천 코드 2
function solution(arr) {
    return arr.filter((val, index) => val != arr[index + 1]);
}

/**
[✅ 정리]
- ⭐️ 모든 문제풀이에 스택/큐 자료구조를 구현해서 풀어야하는건 아님.
- 스택/큐 자료구조를 구현해서 사용할 경우
    - 연산 횟수 > 10만번
    - 메모리 제한 빡빡
    - 시뮬레이션 문제 (프린터, 프로세스 스케줄링 등)
    - 레벨별 BFS (트리 문제)

- 그냥 배열 사용할 경우
    - 단순 BFS/DFS
    - 연산 횟수 < 1만번
    - 일회성 처리
    - 코드 간결함 우선
**/
