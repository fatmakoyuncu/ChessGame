export class Piece{
    public image: string
    public moves : Move[]

    constructor(image){
        this.image = image
    }
}

export interface Move{
    x: number
    y: number
    null: boolean
    move: boolean
    take: boolean
    eatPiece: boolean
    repeat: number
}

export class Check extends Piece{
    // image = "assets/images/check.png";
    moves = [
        {x:1, y:1,null:false, move: false, take:false, eatPiece:true, repeat:1},
        {x:1, y:-1,null:false, move: false, take:false, eatPiece:true, repeat:1},
        {x:1, y:0,null:false, move: false, take:false, eatPiece:true, repeat:1},
        {x:0, y:1,null:false, move: false, take:false, eatPiece:true, repeat:1},
        {x:0, y:-1,null:false, move: false, take:false, eatPiece:true, repeat:1},
        {x:-1, y:0,null:false, move: false, take:false, eatPiece:true, repeat:1},
        {x:-1, y:1,null:false, move: false, take:false, eatPiece:true, repeat:1},
        {x:-1, y:-1,null:false, move: false, take:false, eatPiece:true, repeat:1}
    ]
}
export class King extends Piece{
    // image = "assets/images/king.png";
    moves = [
        {x:1, y:1,null:false, move: false, take:false, eatPiece:true, repeat:8},
        {x:1, y:-1,null:false, move: false, take:false, eatPiece:true, repeat:8},
        {x:1, y:0,null:false, move: false, take:false, eatPiece:true, repeat:8},
        {x:0, y:1,null:false, move: false, take:false, eatPiece:true, repeat:8},
        {x:0, y:-1,null:false, move: false, take:false, eatPiece:true, repeat:8}
    ]
}
export class Bishop extends Piece{
    // image = "assets/images/bishop.png";
    moves = [
        
        {x:1, y:-1,null:false, move: false, take:false, eatPiece:true, repeat:8},
        {x:1, y:1,null:false, move: false, take:false, eatPiece:true, repeat:8},
        {x:-1, y:1,null:false, move: false, take:false, eatPiece:true, repeat:8},
        {x:-1, y:-1,null:false, move: false, take:false, eatPiece:true, repeat:8}
        
        
    ]
}
export class Knight extends Piece{
    // image = "assets/images/knight.png";
    moves = [
        // {x:1, y:2},
        {x:2, y:1,null:false, move: false, take:false, eatPiece:true, repeat:1},
        {x:2, y:-1,null:false, move: false, take:false, eatPiece:true, repeat:1},
        {x:1, y:2,null:false, move: false, take:false, eatPiece:true, repeat:1},
        {x:1, y:-2,null:false, move: false, take:false, eatPiece:true, repeat:1},
        {x:-2, y:1,null:false, move: false, take:false, eatPiece:true, repeat:1},
        {x:-2, y:-1,null:false, move: false, take:false, eatPiece:true, repeat:1},
        {x:-1, y:2,null:false, move: false, take:false, eatPiece:true, repeat:1},
        {x:-1, y:-2,null:false, move: false, take:false, eatPiece:true, repeat:1}
        
    ]
}
export class Castle extends Piece{
    // image = "assets/images/castle.png";
    moves = [
        {x:1, y:0,null:false, move: false, take:false, eatPiece:true, repeat:8},
        {x:0, y:1,null:false, move: false, take:false, eatPiece:true, repeat:8},
        {x:-1, y:0,null:false, move: false, take:false, eatPiece:true, repeat:8},
        {x:0, y:-1,null:false, move: false, take:false, eatPiece:true, repeat:8}
    ]
}
export class Pawn extends Piece{
    // image = "assets/images/pawn.png";
    moves = [
        {x:1, y:0,null:false, move: true, take:false, eatPiece:false, repeat:1},
        {x:2, y:0,null:false, move: false, take:false, eatPiece:false, repeat:1}

        //piyon capraz da gıdıyo, oraları ayarla, çaprazlarda tas yeme=take
    ]
}
export class Pawn2 extends Piece{
    // image = "assets/images/pawn.png";
    moves = [
        {x:-1, y:0,null:false, move: true, take:false, eatPiece:false, repeat:1},
        {x:-2, y:0,null:false, move: false, take:false, eatPiece:false, repeat:1}
    ]
}