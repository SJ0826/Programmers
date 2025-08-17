function solution(t, p) {
    let answer = 0;
    const wordlength = p.length;
    
    for(let i =0; i <= t.length - wordlength; i++) {
        const word = t.slice(i, i + wordlength);

        if (Number(word) <= Number(p)) answer++;
    }
    
    return answer;
}