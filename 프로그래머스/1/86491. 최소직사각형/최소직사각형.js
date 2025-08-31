/**
 [나의 풀이]
 ⏰ 소요시간: 15분
 🕚 시간 복잡도: O(n)
     - forEach:O(n)
     - 입력크기가 상수이면 sort도 상수 -> O(2log2) = O(1)
     - for문 -> O(n)
     - 총: O(n) + O(n) = O(n)
 ⭐️ 원본 배열을 수정하지말고, 새로운 배열로 다루자 
**/

function solution(sizes) {
    // - 가로X세로 길이를 곱했을 경우, 가장 큰 값을 반환한다.
    
    let answer = 0;
    
    // 1. sizes의 모든 원소를 내림차순으로 정렬한다.
    sizes.forEach((size) => size.sort((a, b) => a - b));
    
    // 2. 원소의 각 0번째/1번쨰 최댓값을 구해서 지갑의 크기를 구한다.
    let maxRowSize = 0;
    let maxColSize = 0;
    
    for(const size of sizes) {
        const rowSize = size[0];
        const colSize = size[1];
        if(rowSize > maxRowSize) maxRowSize = rowSize;
        if(colSize > maxColSize) maxColSize = colSize;
    }
    
    return maxRowSize*maxColSize;
}
