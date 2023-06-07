interface SimpleFighter {
  lifePoints: number;
  strength: number;

  attack(enemy: SimpleFighter): void;
  receiveDamage(atkPts: number): number;
  
}

export default SimpleFighter;