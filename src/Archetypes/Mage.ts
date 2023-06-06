import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {  
  private _magia: EnergyType;
  static _mageInstance = 0;
  
  constructor(nam: string) {
    super(nam);
    this._magia = 'mana';
    Mage._mageInstance += 1;
  }
  
  public static createdArchetypeInstances(): number {
    return this._mageInstance;
  }

  public get energyType() : EnergyType {
    return this._magia;
  }
}

export default Mage;