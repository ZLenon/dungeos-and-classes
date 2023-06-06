import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static _elfInstance = 0;

  constructor(nam: string, dex: number) {
    super(nam, dex);
    Elf._elfInstance += 1;
  }
  
  public get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._elfInstance;
  }
}

export default Elf;
