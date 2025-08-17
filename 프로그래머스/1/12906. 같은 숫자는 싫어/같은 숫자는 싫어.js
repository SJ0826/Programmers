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