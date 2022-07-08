class CreatePokemon {
  constructor(name, hitPoints, attackDamage, move = "tackle") {
    this.name = name;
    this.hitPoints = hitPoints;
    this.type = "normal";
    this.attackDamage = attackDamage;
    this.move = move;
  }
  isEffectiveAgainst(rivalPokemon) {
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
    }
    return false;
  }

  isWeakTo(rivalPokemon) {
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

  takeDamage(num) {
    this.hitPoints -= num;
  }

  useMove() {
    console.log(`${this.name} used ${this.move}!`);
    return this.attackDamage;
  }
  hasFainted() {
    return this.hitPoints === 0;
  }
}

class FireType extends CreatePokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "fire";
  }
}

class WaterType extends CreatePokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "water";
  }
}

class GrassType extends CreatePokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "grass";
  }
}

class Charmander extends FireType {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.name = "Charmander";
    this.move = "ember";
  }
}

class Squirtle extends WaterType {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.name = "Squirtle";
    this.move = "water gun";
  }
}

class Bulbasaur extends GrassType {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.name = "Bulbasaur";
    this.move = "vine whip";
  }
}

class Rattata extends CreatePokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.name = "Rattata";
  }
}

// const Eevee = new CreatePokemon("Eevee", "normal", 55, 18, "headbutt");
// const Flareon = new CreatePokemon("Flareon", "fire", 65, 20, "fireblast");
// const Vaporeon = new CreatePokemon("Vaporeon", "water", 70, 19, "hydropump");
// const Leafeon = new CreatePokemon("Leafeon", "grass", 65, 17, "gigadrain");

class CreatePokeball {
  constructor(pokemon = "empty") {
    this.pokemon = pokemon;
  }
  isEmpty() {
    if (this.pokemon === "empty") {
      return true;
    } else return false;
  }
  throw(pokemon) {
    if (pokemon === undefined) {
      if (this.pokemon === "empty") {
        return "Pokeball is Empty!";
      } else console.log(`Go ${this.pokemon.name}!`);
      return this.pokemon;
    }
    if (this.pokemon === "empty") {
      this.pokemon = pokemon;
      console.log(`You caught ${pokemon.name}!`);
    } else console.log(`Pokeball already has a pokemon inside!`);
  }
  contains() {
    if (this.pokemon === "empty") {
      return "Empty...";
    } else return this.pokemon.name;
  }
}
class CreateTrainer {
  constructor(ball1, ball2, ball3, ball4, ball5, ball6) {
    this.ball1 = ball1;
    this.ball2 = ball2;
    this.ball3 = ball3;
    this.ball4 = ball4;
    this.ball5 = ball5;
    this.ball6 = ball6;
  }
}

module.exports = {
  CreatePokemon,
  FireType,
  WaterType,
  GrassType,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
  CreatePokeball,
  CreateTrainer,
};
