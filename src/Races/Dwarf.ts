import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _createInstance = 0;

  constructor(nam: string, dex: number) {
    super(nam, dex);
    Dwarf._createInstance += 1;
  }
  
  public get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createInstance;
  }
}

export default Dwarf;
