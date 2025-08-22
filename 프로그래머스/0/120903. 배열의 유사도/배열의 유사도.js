function solution(s1, s2) {
    let answer = 0;
    
    if(!s1.length || !s2.length) return 0;
    
    for(let i = 0; i <= s1.length; i++) {
        
        if (s2.includes(s1[i])) answer++;
    }
    
    return answer;
}