import Energy from './Energy';
import getRandomInt from './utils';
import Race, { Elf } from './Races';
import Fighter from './Fighter/Fighter';
import Archetype, { Mage } from './Archetypes';

class Character implements Fighter {
  private _race: Race;
  private _name: string;
  private _energy: Energy;
  private _defense: number;
  private _strength: number;
  private _dexterity: number;
  private _lifePoints: number;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special?(enemy: Fighter): void {
    this._dexterity += this._strength - enemy.defense;
  }

  levelUp(): void {
    this._defense += Math.floor(Math.random() * 10) + 1;
    this._strength += Math.floor(Math.random() * 10) + 1;
    this._dexterity += Math.floor(Math.random() * 10) + 1;   
    this._maxLifePoints += Math.floor(Math.random() * 10) + 1;
    this._energy.amount = 10;
    this._maxLifePoints = this._maxLifePoints > this.race.maxLifePoints 
      ? this.race.maxLifePoints : this._maxLifePoints;
    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(atkPts: number): number {
    const dmg = atkPts - this._defense;
    this._lifePoints = dmg > 0 ? this._lifePoints - dmg : this._lifePoints;
    this._lifePoints = this._lifePoints <= 0 ? -1 : this._lifePoints;
    return this._lifePoints;
  }
  
  public get race(): Race {
    return this._race;
  }
  
  public get archetype(): Archetype {
    return this._archetype;
  }
  
  public get lifePoints(): number {
    return this._lifePoints;
  }
  
  public get strength(): number {
    return this._strength;
  }
  
  public get defense(): number {
    return this._defense;
  }
  
  public get dexterity(): number {
    return this._dexterity;
  }
  
  public get energy(): Energy { // Verificar depois
    return { ...this._energy };
  }
}

export default Character;