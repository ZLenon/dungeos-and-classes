import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _força: EnergyType;
  static _rangerInstance = 0;
  constructor(nam: string) {
    super(nam);
    this._força = 'stamina';
    Ranger._rangerInstance += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._rangerInstance;
  }

  get energyType(): EnergyType {
    return this._força;
  }
}

export default Ranger;