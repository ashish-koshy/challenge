var getSlope = (first, second) => {
    const numerator = (second[1] - first[1]);
    const denominator = (second[0] - first[0]);
    return denominator == 0 ? denominator : numerator/denominator
};

var maxPoints = function(points) {
    if (points.length < 2)
        return 0;
    
    let maxPoints = 0;
    let i = 0;
    while (i < points.length - 1) {
        let pairMaxPoints = 1;
        const firstPair = points[i];
        const secondPair = points[i + 1];
        const firstSlope = getSlope(firstPair, secondPair);
        for (let j = 0; j < points.length; j++) {
            const thirdPair = points[j];
            const secondSlope =  getSlope(secondPair, thirdPair);
            if (firstSlope === secondSlope)
                pairMaxPoints++;
        }
        if (pairMaxPoints > maxPoints)
            maxPoints = pairMaxPoints;
        i++;
    }

    return maxPoints;
};

console.log(maxPoints([[1,1],[2,2],[3,3]]));
console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]));
console.log(maxPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]));
console.log(maxPoints([[1,1],[1,2],[1,3],[1,4],[1,5]]));
