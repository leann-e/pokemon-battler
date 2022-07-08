const {
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
} = require("../pokemonBattler");

// const Flareon = new CreatePokemon("Flareon", "fire", 65, 20, "fireblast");
// const Vaporeon = new CreatePokemon("Vaporeon", "water", 70, 19, "hydropump");
// const Eevee = new CreatePokemon("Eevee", "normal", 55, 18, "headbutt");
// const Leafeon = new CreatePokemon("Leafeon", "grass", 65, 17, "gigadrain");

describe(CreatePokemon, () => {
  test("should return an object with the name property", () => {
    const newPokemon = new CreatePokemon();
    expect(newPokemon).toHaveProperty("name");
  });
  test("should return an object with the type property", () => {
    const newPokemon = new CreatePokemon();
    expect(newPokemon).toHaveProperty("type", "normal");
  });
  test("should return an object with the hitPoints property", () => {
    const newPokemon = new CreatePokemon();
    expect(newPokemon).toHaveProperty("hitPoints");
  });
  test("should return an object with the attackDamage property", () => {
    const newPokemon = new CreatePokemon();
    expect(newPokemon).toHaveProperty("attackDamage");
  });
  test("should return an object with the move property", () => {
    const newPokemon = new CreatePokemon();
    expect(newPokemon).toHaveProperty("move");
  });
  test("isEffectiveAgainst should return true when water against fire/leaf is against water/fire is against leaf", () => {
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const Vaporeon = new WaterType("Vaporeon", 70, 19, "hydropump");
    const Leafeon = new GrassType("Leafeon", 65, 17, "gigadrain");
    expect(Vaporeon.isEffectiveAgainst(Flareon)).toEqual(true);
    expect(Leafeon.isEffectiveAgainst(Vaporeon)).toEqual(true);
  });
  test("isEffectiveAgainst should return false when fire is against water/water is against leaf/leaf is against fire", () => {
    const Eevee = new CreatePokemon("Eevee", 55, 18, "headbutt");
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    expect(Eevee.isEffectiveAgainst(Flareon)).toEqual(false);
  });
  test("isWeakAgainst should return true when fire is against water/water is against leaf/leaf is against fire", () => {
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const Vaporeon = new WaterType("Vaporeon", 70, 19, "hydropump");
    const Leafeon = new GrassType("Leafeon", 65, 17, "gigadrain");
    expect(Flareon.isWeakTo(Vaporeon)).toEqual(true);
    expect(Vaporeon.isWeakTo(Leafeon)).toEqual(true);
  });
  test("isWeakAgainst should return false when water against fire/leaf is against water/fire is against leaf", () => {
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const Vaporeon = new WaterType("Vaporeon", 70, 19, "hydropump");
    const Leafeon = new GrassType("Leafeon", 65, 17, "gigadrain");
    expect(Vaporeon.isWeakTo(Flareon)).toEqual(false);
    expect(Leafeon.isWeakTo(Vaporeon)).toEqual(false);
  });
  test("takeDamage should lower the hitPoints by passed num", () => {
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    expect(Flareon.hitPoints).toEqual(65);
    Flareon.takeDamage(10);
    expect(Flareon.hitPoints).toEqual(55);
  });
  test("useMove returns attackDamage and a message", () => {
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const Eevee = new CreatePokemon("Eevee", 55, 18, "headbutt");
    expect(Flareon.useMove()).toEqual(20);
    expect(Eevee.useMove()).toEqual(18);
  });

  test("hasFainted should correct boolean when health is 0", () => {
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    Flareon.takeDamage(65);
    expect(Flareon.hasFainted()).toEqual(true);
  });

  test("Charmander should be a FireType and have a move called ember", () => {
    const testCharmander = new Charmander("Charmander", 68, 23, "flamethrower");
    expect(testCharmander).toEqual({
      attackDamage: 23,
      hitPoints: 68,
      move: "ember",
      name: "Charmander",
      type: "fire",
    });
  });

  test("Squirtle should be a WaterType and have a move called water gun", () => {
    const testSquirtle = new Squirtle("Squirtle", 68, 23, "surf");
    expect(testSquirtle).toEqual({
      attackDamage: 23,
      hitPoints: 68,
      move: "water gun",
      name: "Squirtle",
      type: "water",
    });
  });

  test("Bulbasaur should be a GrassType and have a move called vine whip", () => {
    const testBulbasaur = new Bulbasaur("Bulbasaur", 68, 23, "razor leaf");
    expect(testBulbasaur).toEqual({
      attackDamage: 23,
      hitPoints: 68,
      move: "vine whip",
      name: "Bulbasaur",
      type: "grass",
    });
  });

  test("Rattata should be a Pokemon", () => {
    const testRattata = new Rattata("Rattata", 50, 16);
    expect(testRattata).toEqual({
      attackDamage: 16,
      hitPoints: 50,
      move: "tackle",
      name: "Rattata",
      type: "normal",
    });
  });
});

describe(CreatePokeball, () => {
  test("CreatePokeball should have a pokemon property", () => {
    const newpokeball = new CreatePokeball();
    expect(newpokeball).toHaveProperty("pokemon");
  });
  test("CreatePokeball should have a pokemon property, which defaults to empty", () => {
    const newpokeball = new CreatePokeball();
    expect(newpokeball).toHaveProperty("pokemon", "empty");
  });
  test("isEmpty should return true if the pokeball is empty", () => {
    const testpokeball = new CreatePokeball();
    expect(testpokeball.isEmpty()).toEqual(true);
  });
  test("isEmpty should return false if the pokeball contains a pokemon", () => {
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const testpokeball = new CreatePokeball(Flareon);
    expect(testpokeball.isEmpty()).toEqual(false);
  });
  test("Throw should capture a passed pokemon if pokeball is empty", () => {
    //Arrange
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const testpokeball = new CreatePokeball();
    //Act
    testpokeball.throw(Flareon);
    //Assert
    expect(testpokeball.pokemon).toEqual(Flareon);
  });
  test("Throw should not capture a passed pokemon if pokeball contains a pokemon", () => {
    //Arrange
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const Vaporeon = new WaterType("Vaporeon", 70, 19, "hydropump");
    const testpokeball = new CreatePokeball(Flareon);
    //Act
    testpokeball.throw(Vaporeon);
    //Assert
    expect(testpokeball.pokemon).toEqual(Flareon);
  });
  test("Throw should return the stored pokemon if invoked with no argument", () => {
    //Arrange
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const testpokeball = new CreatePokeball(Flareon);
    //Assert
    expect(testpokeball.throw()).toEqual(Flareon);
  });
  test("Throw should return a message if pokeball is empty and invoked with no argument", () => {
    //Arrange
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const testpokeball = new CreatePokeball();
    //Assert
    expect(testpokeball.throw()).toEqual("Pokeball is Empty!");
  });
  test("Contains should return empty if no pokemon is inside the pokeball", () => {
    //Arrange
    const testpokeball = new CreatePokeball();
    //Assert
    expect(testpokeball.contains()).toEqual("Empty...");
  });
  test("Contains should return pokemon name if pokeball contains a pokemon", () => {
    //Arrange
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const testpokeball = new CreatePokeball(Flareon);
    //Assert
    expect(testpokeball.contains()).toEqual("Flareon");
  });
});

describe(CreateTrainer, () => {
  test("CreateTrainer should have multiple ball properties", () => {
    const testTrainer = new CreateTrainer();
    expect(testTrainer).toHaveProperty("ball1");
    expect(testTrainer).toHaveProperty("ball4");
    expect(testTrainer).toHaveProperty("ball6");
  });
});
