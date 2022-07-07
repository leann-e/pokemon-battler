function isEffectiveAgainst(rivalPokemon) {
  if (this.type === "water" && rivalPokemon.type === "fire") {
    return true;
  }
  if (this.type === "fire" && rivalPokemon.type === "grass") {
    return true;
  }
  if (this.type === "grass" && rivalPokemon.type === "water") {
    return true;
  }
  if (this.type === "normal") {
    return false;
  } else return false;
}

function isWeakTo(rivalPokemon) {
  if (this.type === "fire" && rivalPokemon.type === "water") {
    return true;
  }
  if (this.type === "grass" && rivalPokemon.type === "fire") {
    return true;
  }
  if (this.type === "water" && rivalPokemon.type === "grass") {
    return true;
  }
  if (this.type === "normal") {
    return false;
  } else return false;
}

function takeDamage(num) {
  this.hitPoints -= num;
}

function useMove() {
  console.log(`${this.name} used ${this.move}!`);
  return this.attackDamage;
}
function hasFainted() {
  return this.hitPoints === 0;
}

class CreatePokemon {
  constructor(name, type = "normal", hitPoints, attackDamage, move = "tackle") {
    this.name = name;
    this.hitPoints = hitPoints;
    this.type = type;
    this.attackDamage = attackDamage;
    this.move = move;
  }
}

CreatePokemon.prototype.isEffectiveAgainst = isEffectiveAgainst;
CreatePokemon.prototype.isWeakTo = isWeakTo;
CreatePokemon.prototype.takeDamage = takeDamage;
CreatePokemon.prototype.useMove = useMove;
CreatePokemon.prototype.hasFainted = hasFainted;

const Eevee = new CreatePokemon("Eevee", "normal", 55, 18, "headbutt");
const Flareon = new CreatePokemon("Flareon", "fire", 65, 20, "fireblast");
const Vaporeon = new CreatePokemon("Vaporeon", "water", 70, 19, "hydropump");
const Leafeon = new CreatePokemon("Leafeon", "grass", 65, 17, "gigadrain");

module.exports = CreatePokemon;
