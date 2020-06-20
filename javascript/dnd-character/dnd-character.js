/**
 * @param {number} score
 */
export function abilityModifier(score) {
  if (score < 3) {
    throw new Error('Ability scores must be at least 3');
  }

  if (score > 18) {
    throw new Error('Ability scores can be at most 18');
  }

  return Math.floor((score - 10) / 2);
}

export class Character {
  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = abilityModifier(this.constitution) + 10;
  }

  static rollAbility() {
    return new Array(4)
      .fill(null)
      .map(_ => Math.floor(Math.random() * 5) + 1)
      .sort()
      .slice(1)
      .reduce((partialSum, num) => partialSum + num, 0);
  }
}
