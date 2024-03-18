var formatPoints = (points) => points.map(item => `(${item[0]},${item[1]})`);

var getSlope = (first, second) => {
    const numerator = (second[1] - first[1]);
    const denominator = (second[0] - first[0]);
    return denominator === 0 ? null : (numerator/denominator);
};

var maxPoints = function(points) {
    if (points.length < 2)
        return points.length;
    
    let maxPoints = 0;
    let i = 0;

    while (i < points.length - 1) {
        let pairMaxPoints = 1;
        const firstPair = points[i];
        const secondPair = points[i + 1];
        const firstSlope = getSlope(firstPair, secondPair);

        for (let j = 0; j < points.length; j++) {
            const thirdPair = points[j];
            const secondSlope = getSlope(secondPair, thirdPair);
            if (firstSlope === secondSlope) {
                pairMaxPoints++;
                if (pairMaxPoints === points.length)
                    break;
            }
        }
        if (pairMaxPoints > maxPoints)
            maxPoints = pairMaxPoints;
        i += 2;
    }

    return maxPoints;
};

// console.log(maxPoints([[1,1],[2,2],[3,3]]));
// console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]));
// console.log(maxPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]));
// console.log(maxPoints([[1,1],[1,2],[1,3],[1,4],[1,5]]));
// console.log(maxPoints([[1,0],[0,0]]));
// console.log(maxPoints([[0,0]]));
// console.log(
//     maxPoints(
//         [
//             [7,3],[19,19],[-16,3],[13,17],[-18,1],[-18,-17],[13,-3],[3,7],[-11,12],[7,19],
//             [19,-12],[20,-18],[-16,-15],[-10,-15],[-16,-18],[-14,-1],[18,10],[-13,8],[7,-5],
//             [-4,-9],[-11,2],[-9,-9],[-5,-16],[10,14],[-3,4],[1,-20],[2,16],[0,14],[-14,5],
//             [15,-11],[3,11],[11,-10],[-1,-7],[16,7],[1,-11],[-8,-3],[1,-6],[19,7],[3,6],
//             [-1,-2],[7,-3],[-6,-8],[7,1],[-15,12],[-17,9],[19,-9],[1,0],[9,-10],[6,20],
//             [-12,-4],[-16,-17],[14,3],[0,-1],[-18,9],[-15,15],[-3,-15],[-5,20],[15,-14],
//             [9,-17],[10,-14],[-7,-11],[14,9],[1,-1],[15,12],[-5,-1],[-17,-5],[15,-2],
//             [-12,11],[19,-18],[8,7],[-5,-3],[-17,-1],[-18,13],[15,-3],[4,18],[-14,-15],
//             [15,8],[-18,-12],[-15,19],[-9,16],[-9,14],[-12,-14],[-2,-20],[-3,-13],[10,-7],
//             [-2,-10],[9,10],[-1,7],[-17,-6],[-15,20],[5,-17],[6,-6],[-11,-8]
//         ]
//     )
// );
console.log(
    maxPoints(
    [
        [3,3],
        [1,4],
        [1,1],
        [2,1],
        [2,2]
    ]
));
