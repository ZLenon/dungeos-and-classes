import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static _orcInstance = 0;

  constructor(nam: string, dex: number) {
    super(nam, dex);
    Orc._orcInstance += 1;
  }
  
  public get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._orcInstance;
  }
}

export default Orc;
