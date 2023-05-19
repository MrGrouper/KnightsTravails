
class Move{
    constructor(coord){
        this.coord = coord;
        this.children = [];
    }
    
}

class LocationTree{
    constructor(array){
        this.root = new Move(array[0])
    }
}

const root = new LocationTree([[1,1]]);
// console.log(start)
// const test = new Move([2,2])
// const test2 = new Move([3,3])
// start.root.children.push(test)
// test.children.push(test2)
// console.log(start)



function bfs(start, target){
    const visited = [];
    const que = [start];
    
    while (que.length > 0){
        const current = que.shift();
        if(current === null) continue;
        visited.push(current);
        console.log(current)
        let possibleMoves = possibleMovesFunc(current, 8, 8)
        let n = possibleMoves.length
        for(let i = 0; i<=n; i++){
            if (!visited.includes(possibleMoves[i])){
                que.push(possibleMoves[i])
            }
        }
        
        if(current[0] == target[0] && current[1] == target[1]) break;
    }
    return 
}

function possibleMovesFunc(coord, xMax, yMax){
    const xStart = coord[0];
    const yStart = coord[1];

    let moves=[];
    let newArr=[]

    moves[0] = [xStart + 2, yStart + 1]
    moves[1] = [xStart - 2, yStart + 1]
    moves[2] = [xStart - 2, yStart - 1]
    moves[3] = [xStart + 2, yStart - 1]
    moves[4] = [xStart + 1, yStart + 2]
    moves[5] = [xStart - 1, yStart + 2]
    moves[6] = [xStart - 1, yStart - 2]
    moves[7] = [xStart + 1, yStart - 2]

    for(let i = 0; i<moves.length; i++){
        if (moves[i][0]<=xMax && moves[i][1]<=yMax &&
            moves[i][0]>=1 && moves[i][1]>=1){
            newArr.push(moves[i])
        }
    }
  
   return newArr
}
    

    console.log(bfs([5,5],[8,8]))
  





    
