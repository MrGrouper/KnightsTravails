const start = [5,5]


class Move{
    constructor(x,y){
        this.x = x;
        this.y= y;
        this.children = [];
        this.parent = null;
    }
    
}


class LocationTree{
    constructor(x,y){
        this.root = new Move(x,y)
    }
}



console.log(printMoves(bfs([8,1], [1,8],8)))

function bfs(knightPos, target, n){

    if(knightPos[0] == target[0] && knightPos[1] == target[1])return knightPos

    let que = [];
    que.push(new Move(knightPos[0],knightPos[1]));
    const visited = Array(n).fill().map(()=>Array(n).fill(false))
    visited[knightPos[1]-1][knightPos[0]-1]=true;
    

    
    while (que.length > 0){
        let current = que.shift();      
        let possibleMoves = possibleMovesFunc(current.x, current.y, n)
        for(let i = 0; i<possibleMoves.length; i++){
            if (visited[possibleMoves[i].y-1][possibleMoves[i].x-1] === false){
                que.push(possibleMoves[i])
                if(current.x == target[0] && current.y == target[1]){
                    return current
                    
                }
                current.children.push(possibleMoves[i])
                possibleMoves[i].parent = current

            }
        }
        


      
        
    }
    return current
}

function printMoves(node){
    const result = [];
    result.push(node)
    function printMovesHelper(node){
        if(!node.parent)return null;

        result.unshift(node.parent)
        printMovesHelper(node.parent)
    
        return result
    }
    printMovesHelper(node)
    return result
}

function possibleMovesFunc(x,y, n){
  

    let moves=[];
    let newArr=[]

    moves[0] = new Move(x+2, y+1)
    moves[1] = new Move(x-2, y+1)
    moves[2] = new Move(x+2, y-1)
    moves[3] = new Move(x-2, y-1)
    moves[4] = new Move(x+1, y+2)
    moves[5] = new Move(x-1, y+2)
    moves[6] = new Move(x+1, y-2)
    moves[7] = new Move(x-1, y-2)

    for(let i = 0; i<moves.length; i++){
        if (moves[i].x<=n && moves[i].y<=n &&
            moves[i].x>=1 && moves[i].y>=1){
            newArr.push(moves[i])
        }
    }
   
   return newArr
}
    
  



