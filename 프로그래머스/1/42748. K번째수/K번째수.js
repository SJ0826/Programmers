function solution(array, commands) {
    let answer = [];
    
    for(let index = 0; index < commands.length; index++) {
        const i = commands[index][0];
        const j = commands[index][1];
        const k = commands[index][2];
        
        answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
    }
    
    return answer;
}