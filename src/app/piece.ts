export class Piece{
    public image: string
    protected moves : Array<Object>

    constructor(image){
        this.image = image
    }
}

export class Check extends Piece{
    moves = [
        {x:1, y:1},
        {x:1, y:-1},
        {x:-1, y:1},
        {x:-1, y:-1},
        {x:1, y:0},
        {x:-1, y:0},
        {x:0, y:1},
        {x:0, y:-1}
    ]
}
export class King extends Piece{
    moves = [
        {x:1, y:1},
        {x:1, y:-1},
        {x:-1, y:1},
        {x:-1, y:-1},
        {x:1, y:0},
        {x:-1, y:0},
        {x:0, y:1},
        {x:0, y:-1}
    ]
}
export class Bishop extends Piece{
    moves = [
        {x:1, y:1},
        {x:1, y:-1},
        {x:-1, y:1},
        {x:-1, y:-1},
    ]
}
export class Knight extends Piece{
    moves = [
        {x:1, y:2},
        {x:1, y:-2},
        {x:-1, y:2},
        {x:-1, y:-2},
        {x:2, y:1},
        {x:2, y:-1},
        {x:-2, y:1},
        {x:-2, y:-1}
    ]
}
export class Castle extends Piece{
    moves = [
        {x:1, y:0},
        {x:-1, y:0},
        {x:0, y:1},
        {x:0, y:-1},
    ]
}
export class Pawn extends Piece{
    moves = [
        {x:1, y:0},
        {x:1, y:1},
        {x:1, y:-1}
    ]
}