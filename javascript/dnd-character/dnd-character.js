//@ts-check

/**
 * @param {number} score
 * @returns {number}
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
    /** @type {number} */
    this.strength = Character.rollAbility();
    /** @type {number} */
    this.dexterity = Character.rollAbility();
    /** @type {number} */
    this.constitution = Character.rollAbility();
    /** @type {number} */
    this.intelligence = Character.rollAbility();
    /** @type {number} */
    this.wisdom = Character.rollAbility();
    /** @type {number} */
    this.charisma = Character.rollAbility();
    /** @type {number} */
    this.hitpoints = abilityModifier(this.constitution) + 10;
  }

  static rollAbility() {
    return Array.from({length: 4})
      .fill(null)
      .map(_ => Math.floor(Math.random() * 5) + 1)
      .sort()
      .slice(1)
      .reduce((partialSum, num) => partialSum + num, 0);
  }
}
