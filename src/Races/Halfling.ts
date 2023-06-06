import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _halflingInstance = 0;

  constructor(nam: string, dex: number) {
    super(nam, dex);
    Halfling._halflingInstance += 1;
  }
  
  public get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._halflingInstance;
  }
}

export default Halfling;
