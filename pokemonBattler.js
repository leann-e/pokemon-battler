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
    return this.hitPoints <= 0;
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
  constructor(
    name,
    pokemon1,
    pokemon2,
    pokemon3,
    pokemon4,
    pokemon5,
    pokemon6
  ) {
    this.name = name;
    this.pokebelt = [
      new CreatePokeball(pokemon1),
      new CreatePokeball(pokemon2),
      new CreatePokeball(pokemon3),
      new CreatePokeball(pokemon4),
      new CreatePokeball(pokemon5),
      new CreatePokeball(pokemon6),
    ];
  }

  catch(pokemon) {
    for (let i = 0; i < this.pokebelt.length; i++) {
      if (this.pokebelt[i].pokemon === "empty") {
        this.pokebelt[i].throw(pokemon);
        return this.pokebelt;
      }
    }
    console.log(`No empty pokeballs!`);
  }

  getPokemon(pokemon) {
    for (let i = 0; i < this.pokebelt.length; i++) {
      if (this.pokebelt[i].pokemon === pokemon) {
        this.pokebelt[i].throw(pokemon);
        return this.pokebelt[i].pokemon;
      }
      return "Pokemon not found!";
    }
  }
}

class Battle {
  constructor(trainer1, trainer2, pokemon1, pokemon2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }

  fight() {
    for (
      let i = 0;
      this.pokemon2.hitPoints > 0 && this.pokemon1.hitPoints > 0;
      i++
    ) {
      this.pokemon2.takeDamage(this.pokemon1.attackDamage);
      if (this.pokemon2.hasFainted()) {
        return this.pokemon2.hasFainted();
      }
      this.pokemon1.takeDamage(this.pokemon2.attackDamage);
      if (this.pokemon1.hasFainted()) {
        return this.pokemon1.hasFainted();
      }
    }
  }
}
const Flareon = new FireType("Flareon", 65, 20, "fireblast");
const pokeball = new CreatePokeball();
console.log(pokeball.throw(Flareon));

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
  Battle,
};
