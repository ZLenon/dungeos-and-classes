import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _força: EnergyType;
  static _warriorInstance = 0;
  constructor(nam: string) {
    super(nam);
    this._força = 'stamina';
    Warrior._warriorInstance += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._warriorInstance;
  }

  get energyType(): EnergyType {
    return this._força;
  }
}

export default Warrior;