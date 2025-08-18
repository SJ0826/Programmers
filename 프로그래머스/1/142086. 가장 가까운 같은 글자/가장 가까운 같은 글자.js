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
                // 4. answer 배열에 확인한 숫자를 앞에서 부터 쌓는다. (unshift)
                answer.unshift(i - j);
                break;
            } 
            
            if(j === 0) {
                answer.unshift(-1);
            }
        }
    }

    return answer;
}