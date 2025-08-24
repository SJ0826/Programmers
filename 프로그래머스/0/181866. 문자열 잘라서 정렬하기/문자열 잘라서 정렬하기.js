function solution(myString) {
    let answer = myString.split("x");

    return answer.filter((str) => str !== '').sort();
}