import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _magia: EnergyType;
  static _necromancerInstance = 0;

  constructor(nam: string) {
    super(nam);
    this._magia = 'mana';
    Necromancer._necromancerInstance += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._necromancerInstance;
  }

  public get energyType() : EnergyType {
    return this._magia;
  }
}

export default Necromancer;