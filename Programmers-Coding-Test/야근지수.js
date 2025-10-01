/*
문제 설명:
회사원 Demi는 가끔은 야근을 하는데요, 야근을 하면 야근 피로도가 쌓입니다. 
야근 피로도는 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값입니다. 
Demi는 N시간 동안 야근 피로도를 최소화하도록 일할 겁니다.Demi가 1시간 동안 작업량 1만큼을 처리할 수 있다고 할 때, 
퇴근까지 남은 N 시간과 각 일에 대한 작업량 works에 대해 야근 피로도를 최소화한 값을 리턴하는 함수 solution을 완성해주세요.

입출력 예

works	n	result
[4, 3, 3]	4	12
[2, 1, 2]	1	6
[1,1]	3	0

제한사항:
📌 works는 길이 1 이상, 20,000 이하인 배열입니다.
📌 works의 원소는 50000 이하인 자연수입니다.
📌 n은 1,000,000 이하인 자연수입니다.
*/

const solution = (n, works) => {
  let total = works.reduce((a, b) => a + b, 0);
  if (total <= n) return 0;

  while (n > 0) {
    works.sort((a, b) => b - a);
    works[0] -= 1;
    n--;
  }
  return works.map((a) => a * a).reduce((a, b) => a + b);
};

// class MaxHeap {
//   constructor() {
//     this.heap = [];
//   }

//   push(value) {
//     this.heap.push(value);
//     this._heapifyUp();
//   }

//   pop() {
//     if (this.size() === 0) return 0;
//     const max = this.heap[0];
//     const end = this.heap.pop();
//     if (this.size() > 0) {
//       this.heap[0] = end;
//       this._heapifyDown();
//     }
//     return max;
//   }

//   size() {
//     return this.heap.length;
//   }

//   _heapifyUp() {
//     let idx = this.size() - 1;
//     const element = this.heap[idx];
//     while (idx > 0) {
//       let parentIdx = Math.floor((idx - 1) / 2);
//       let parent = this.heap[parentIdx];
//       if (element <= parent) break;
//       this.heap[parentIdx] = element;
//       this.heap[idx] = parent;
//       idx = parentIdx;
//     }
//   }

//   _heapifyDown() {
//     let idx = 0;
//     const length = this.size();
//     const element = this.heap[0];

//     while (true) {
//       let leftIdx = 2 * idx + 1;
//       let rightIdx = 2 * idx + 2;
//       let left, right;
//       let swap = null;

//       if (leftIdx < length) {
//         left = this.heap[leftIdx];
//         if (left > element) swap = leftIdx;
//       }
//       if (rightIdx < length) {
//         right = this.heap[rightIdx];
//         if (
//           (swap === null && right > element) ||
//           (swap !== null && right > left)
//         ) {
//           swap = rightIdx;
//         }
//       }
//       if (swap === null) break;
//       this.heap[idx] = this.heap[swap];
//       this.heap[swap] = element;
//       idx = swap;
//     }
//   }
// }

// function solution(n, works) {
//   const total = works.reduce((a, b) => a + b, 0);
//   if (total <= n) return 0;

//   const heap = new MaxHeap();
//   for (let w of works) heap.push(w);

//   for (let i = 0; i < n; i++) {
//     let max = heap.pop();
//     heap.push(max - 1);
//   }

//   return heap.heap.reduce((sum, w) => sum + w * w, 0);
// }
