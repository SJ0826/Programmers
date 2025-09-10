function solution(name, yearning, photo) {
    let answer = [];
    
    // 1. name과 yearnging 의 값을 매칭 시켜 name(키)-yearning(값) Set 객체를 만든다.    
    let nameYearningMap = new Map();
    for(let i = 0; i < name.length; i++) {
        nameYearningMap.set(name[i], yearning[i]);
    }

    // 2. photo를 이중 순회하며 그리움 점수를 구한다.
    for(let i = 0; i < photo.length; i ++) {
        let sum = 0;
        for(const name of photo[i]) {
            sum += (nameYearningMap.get(name) ?? 0);
        }
        answer.push(sum);
    }
    
    return answer;
}