/**
- 🕚 시간복잡도 
    : Map 생성 O(N) + photo 의 길이 (M) = O(N+M)
- ✅ Map이 Object보다 성능이 뛰어난 이유
    - 순수한 해시 테이블 구조로 설계됨
    - 프로토타입 체인을 거치지 않는다.
**/



function solution(name, yearning, photo) {
    let answer = [];
    
    // 1. name과 yearnging 의 값을 매칭 시켜 name(키)-yearning(값) Map 객체를 만든다.    
    let nameYearningMap = new Map();
    for(let i = 0; i < name.length; i++) {
        nameYearningMap.set(name[i], yearning[i]);
    }

    // 2. photo를 이중 순회하며 그리움 점수를 구한다.
    for(let i = 0; i < photo.length; i ++) {
        let sum = 0;
        for(const name of photo[i]) { // ⭐️ 각 photo[i] 길이 만큼 실행. 외부 루프와 내부 루프가 독립적이면 O(N^2)이 아니다.
            sum += (nameYearningMap.get(name) ?? 0);
        }
        answer.push(sum);
    }
    
    return answer;
}
    
