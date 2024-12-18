export interface GameObject {
    x: number;
    y: number;
    width: number;
    height: number;
  }
  
  export interface GameState {
    dino: GameObject;
    obstacles: GameObject[];
    score: number;
    gameOver: boolean;
    isJumping: boolean;
    speed: number;
  }
  
  