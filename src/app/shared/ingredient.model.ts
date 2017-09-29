//export class Ingredient {
//  public name: string;
//  public amount: number;
//
//  constructor(name: string, amount: number){
//    this.name = name;
//    this.amount = amount;
//  }
//}
//you can remove both the public variable names and this. and use the method below

export class Ingredient {
  constructor(public name: string, public amount: number){
  }
}
