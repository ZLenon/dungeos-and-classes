import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static _createInstance = 0;

  constructor(nam: string, dex: number) {
    super(nam, dex);
    Orc._createInstance += 1;
  }
  
  public get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createInstance;
  }
}

export default Orc;
