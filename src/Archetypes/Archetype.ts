import { EnergyType } from '../Energy';

abstract class Archetype {
  private _cost: number;
  private _name: string;
  private _special: number;

  constructor(nam: string) {
    this._cost = 0;
    this._special = 0;
    this._name = nam;
  }
  
  public get cost() : number {
    return this._cost;
  }
  
  public get special() : number {
    return this._special;
  }
  
  public get name() : string {
    return this._name;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
  
  abstract get energyType(): EnergyType;
}

export default Archetype;