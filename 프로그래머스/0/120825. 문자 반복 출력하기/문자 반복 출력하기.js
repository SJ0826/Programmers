function solution(my_string, n) {
    var answer = [...my_string].map((string) => string.repeat(n));
    return answer.join('');
}