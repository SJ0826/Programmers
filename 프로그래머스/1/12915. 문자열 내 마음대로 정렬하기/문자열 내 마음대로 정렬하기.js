function solution(strings, n) {
    return strings.sort((a, b) => {
        const firstStr = [...a][n];
        const secondStr = [...b][n];
        
        return firstStr.localeCompare(secondStr) || a.localeCompare(b);
    })
}