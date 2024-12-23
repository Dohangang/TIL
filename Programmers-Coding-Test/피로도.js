/*
문제 설명:
XX게임에는 피로도 시스템(0 이상의 정수로 표현합니다)이 있으며, 일정 피로도를 사용해서 던전을 탐험할 수 있습니다. 
이때, 각 던전마다 탐험을 시작하기 위해 필요한 "최소 필요 피로도"와 던전 탐험을 마쳤을 때 소모되는 "소모 피로도"가 있습니다. 
"최소 필요 피로도"는 해당 던전을 탐험하기 위해 가지고 있어야 하는 최소한의 피로도를 나타내며, 
"소모 피로도"는 던전을 탐험한 후 소모되는 피로도를 나타냅니다. 

예를 들어 "최소 필요 피로도"가 80, "소모 피로도"가 20인 던전을 탐험하기 위해서는 유저의 현재 남은 피로도는 80 이상 이어야 하며, 
던전을 탐험한 후에는 피로도 20이 소모됩니다.

이 게임에는 하루에 한 번씩 탐험할 수 있는 던전이 여러개 있는데, 한 유저가 오늘 이 던전들을 최대한 많이 탐험하려 합니다. 
유저의 현재 피로도 k와 각 던전별 "최소 필요 피로도", "소모 피로도"가 담긴 2차원 배열 dungeons 가 매개변수로 주어질 때, 
유저가 탐험할수 있는 최대 던전 수를 return 하도록 solution 함수를 완성해주세요.


제한사항:
📌 k는 1 이상 5,000 이하인 자연수입니다.
📌 dungeons의 세로(행) 길이(즉, 던전의 개수)는 1 이상 8 이하입니다.
      dungeons의 가로(열) 길이는 2 입니다.
      dungeons의 각 행은 각 던전의 ["최소 필요 피로도", "소모 피로도"] 입니다.
      "최소 필요 피로도"는 항상 "소모 피로도"보다 크거나 같습니다.
      "최소 필요 피로도"와 "소모 피로도"는 1 이상 1,000 이하인 자연수입니다.
      서로 다른 던전의 ["최소 필요 피로도", "소모 피로도"]가 서로 같을 수 있습니다.
*/

function solution(initialEnergy, dungeons) {
  const allOrders = generateOrders(dungeons, dungeons.length);
  let maxExplored = 0;

  for (let i = 0; i < allOrders.length; i++) {
    let currentEnergy = initialEnergy;
    let exploredCount = 0;

    const currentOrder = allOrders[i];
    for (let j = 0; j < currentOrder.length; j++) {
      const dungeon = currentOrder[j];
      const requiredEnergy = dungeon[0];
      const consumedEnergy = dungeon[1];

      if (currentEnergy >= requiredEnergy) {
        currentEnergy -= consumedEnergy;
        exploredCount++;
      } else {
        break;
      }
    }

    if (exploredCount > maxExplored) {
      maxExplored = exploredCount;
    }
  }

  return maxExplored;
}

function generateOrders(array, size) {
  if (size === 1) {
    return array.map(function (item) {
      return [item];
    });
  }

  const result = [];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const rest = array.slice(0, i).concat(array.slice(i + 1));
    const orders = generateOrders(rest, size - 1);

    for (let j = 0; j < orders.length; j++) {
      const newOrder = [current].concat(orders[j]);
      result.push(newOrder);
    }
  }

  return result;
}

// function solution(k, d) {
//   const N = d.length;
//   const visited = new Array(N).fill(0);
//   let ans = 0;

//   function dfs(k, cnt) {
//     ans = Math.max(cnt, ans);

//     for (let j = 0; j < N; j++) {
//       if (k >= d[j][0] && !visited[j]) {
//         visited[j] = 1;
//         dfs(k - d[j][1], cnt + 1);
//         visited[j] = 0;
//       }
//     }
//   }

//   dfs(k, 0);
//   return ans;
// }
