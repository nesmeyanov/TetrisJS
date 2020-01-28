export default class Game {
	score = 0;
	lines = 0;
	level = 0;
	playfield = [
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],а
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	];
	activePiece = {
		x:0,
		y:0,
		get blocks (){
			return this.rotations[this.rotationIndex];
		},
		rotationIndex: 0,
		rotations: [
			[
				[0,1,0],
				[1,1,1],
				[0,0,0]
			],
			[
				[0,1,0],
				[0,1,1],
				[0,1,0]
			],
			[
				[0,0,0],
				[1,1,1],
				[0,1,0]
			],
			[
				[0,1,0],
				[1,1,0],
				[0,1,0]
			]
		]
	};




// methods
	movePieceLeft() {
		this.activePiece.x -=1;

		if (this.hasCollision()){
			this.activePiece.x +=1;
		}
	}

	movePieceRight() {
		this.activePiece.x +=1;
		
		if (this.hasCollision()){
			this.activePiece.x -=1;
		}
	}

	movePieceDown() {
		this.activePiece.y +=1;

		if (this.hasCollision()){
			this.activePiece.y -=1;
			this.lockPiece();
		}
	}

		rotatePiece(){
				this.activePiece.rotationIndex = this.activePiece.rotationIndex < 3 ? this.activePiece.rotationIndex + 1 : 3;
				console.log(this.hasCollision());
			if (this.hasCollision()){
				this.activePiece.rotationIndex = this.activePiece.rotationIndex > 0 ? this.activePiece.rotationIndex - 1 : 3;
			}

				return this.activePiece.blocks;
		}



	hasCollision (){

		const { y: pieceY, x: pieceX, blocks } = this.activePiece;

		for (let y = 0; y < blocks.length; y++) {
			// const element = this.activePiece.blocks[y];
			for (let x = 0; x < blocks[y].length; x++) {
				if (
					blocks[y][x] &&
					((this.playfield[pieceY + y] === undefined || this.playfield[pieceY + y][pieceX + x] === undefined) ||
					this.playfield[pieceY + y][pieceX + x])
				){
					return true;
				}
				// this.playfield[pieceY + y][pieceX + x] = blocks[y][x];
				
			}
		}

		return false;
	}

	lockPiece() {
		const { y: pieceY, x: pieceX, blocks } = this.activePiece;


		for (let y = 0; y < blocks.length; y++) {
			// const element = this.activePiece.blocks[y];
			for (let x = 0; x < blocks[y].length; x++) {
				if (blocks[y][x]){
				this.playfield[pieceY + y][pieceX + x] = blocks[y][x];
				}
			}
		}
	}
}