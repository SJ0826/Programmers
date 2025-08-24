function solution(s) {
    let answer = s;
    const numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    // 1. numArr를 순회하며 특정 영단어가 s에 있는지 확인한다.
    for(let i = 0; i < numArr.length; i++) {
        if(s.includes(numArr[i])) {
            // 2. 있다면 str.replace 활용해 해당 영단어를 숫자로 대체한다.
             answer = answer.replaceAll(numArr[i], i);
        }
    }
    
    return Number(answer);
}