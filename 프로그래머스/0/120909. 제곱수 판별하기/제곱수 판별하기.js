function solution(n) {
    return Math.sqrt(n).toString().includes('.') ? 2 : 1;
}