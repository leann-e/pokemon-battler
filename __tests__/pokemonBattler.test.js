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
  Battle,
} = require("../pokemonBattler");

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
  test("CreateTrainer should have pokebelt property", () => {
    const testTrainer = new CreateTrainer();
    expect(testTrainer).toHaveProperty("pokebelt");
  });

  test("CreateTrainer should have name property", () => {
    const testTrainer = new CreateTrainer();
    expect(testTrainer).toHaveProperty("name");
  });

  test("CreateTrainer should have name property and a value", () => {
    const testTrainer = new CreateTrainer("Ash");
    expect(testTrainer).toHaveProperty("name", "Ash");
  });

  test("pokebelt will initialise with 6 pokeballs", () => {
    const testTrainer = new CreateTrainer("Ash");
    expect(testTrainer.pokebelt).toEqual([
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
    ]);
  });

  test("pokebelt will update with a passed pokemon", () => {
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const testTrainer = new CreateTrainer("Ash", Flareon);
    expect(testTrainer.pokebelt).toEqual([
      { pokemon: Flareon },
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
    ]);
  });

  test("pokebelt will update with a passed pokemon", () => {
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const Vaporeon = new WaterType("Vaporeon", 70, 19, "hydropump");
    const testTrainer = new CreateTrainer("Ash");
    expect(testTrainer.pokebelt).toEqual([
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
    ]);
    const testTrainer2 = new CreateTrainer(
      "Brock",
      Flareon,
      Vaporeon,
      Flareon,
      Vaporeon
    );
    expect(testTrainer2.pokebelt).toEqual([
      { pokemon: Flareon },
      { pokemon: Vaporeon },
      { pokemon: Flareon },
      { pokemon: Vaporeon },
      { pokemon: "empty" },
      { pokemon: "empty" },
    ]);
  });

  test("catch should update one empty pokeball with the passed pokemon", () => {
    //arrange
    const testTrainer = new CreateTrainer("Ash");
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    //act
    testTrainer.catch(Flareon);
    //assert
    expect(testTrainer.pokebelt).toEqual([
      { pokemon: Flareon },
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
    ]);
  });

  test("catch should update one empty pokeball with the passed pokemon", () => {
    //arrange
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const Vaporeon = new WaterType("Vaporeon", 70, 19, "hydropump");
    const testTrainer = new CreateTrainer("Ash", Flareon);
    //act
    testTrainer.catch(Vaporeon);
    //assert
    expect(testTrainer.pokebelt).toEqual([
      { pokemon: Flareon },
      { pokemon: Vaporeon },
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
      { pokemon: "empty" },
    ]);
  });

  test("catch should return a message when all pokeballs are full and leave the pokebelt unchanged", () => {
    //arrange
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const Vaporeon = new WaterType("Vaporeon", 70, 19, "hydropump");
    const testTrainer = new CreateTrainer(
      "Ash",
      Flareon,
      Vaporeon,
      Flareon,
      Flareon,
      Flareon,
      Flareon
    );
    //act
    testTrainer.catch(Vaporeon);
    //assert
    expect(testTrainer.pokebelt).toEqual([
      { pokemon: Flareon },
      { pokemon: Vaporeon },
      { pokemon: Flareon },
      { pokemon: Flareon },
      { pokemon: Flareon },
      { pokemon: Flareon },
    ]);
  });

  test("getPokemon should return the passed pokemon if it's in the pokebelt", () => {
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const testTrainer = new CreateTrainer("Ash", Flareon);
    expect(testTrainer.getPokemon(Flareon)).toEqual(Flareon);
  });

  test("getPokemon should return a message if passed pokemon is not in the pokebelt", () => {
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const Vaporeon = new WaterType("Vaporeon", 70, 19, "hydropump");
    const testTrainer = new CreateTrainer("Ash", Vaporeon);
    expect(testTrainer.getPokemon(Flareon)).toEqual("Pokemon not found!");
  });
});

describe(Battle, () => {
  test("Battle has trainer property", () => {
    const testBattle = new Battle();
    expect(testBattle).toHaveProperty("trainer1");
  });

  test("Battle has trainer property and a value", () => {
    const testBattle = new Battle("Ash");
    expect(testBattle).toHaveProperty("trainer1", "Ash");
  });

  test("Battle has pokemon property", () => {
    const testBattle = new Battle();
    expect(testBattle).toHaveProperty("pokemon1");
  });

  test("Battle has pokemon property and a value", () => {
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const testBattle = new Battle("Ash", "Brock", Flareon);
    expect(testBattle).toHaveProperty("pokemon1", Flareon);
  });

  // test("defending pokemon should lose the correct amount of health when hit by attacking pokemon", () => {
  //   const Flareon = new FireType("Flareon", 65, 20, "fireblast");
  //   const Vaporeon = new WaterType("Vaporeon", 70, 19, "hydropump");
  //   const testBattle = new Battle("Ash", "Brock", Flareon, Vaporeon)
  //   testBattle.fight()
  //   expect(Vaporeon.hitPoints).toEqual(50)
  // })

  // test("attacking pokemon should lose the correct amount of health when hit by defending pokemon", () => {
  //   const Flareon = new FireType("Flareon", 65, 20, "fireblast");
  //   const Vaporeon = new WaterType("Vaporeon", 70, 19, "hydropump");
  //   const testBattle = new Battle("Ash", "Brock", Flareon, Vaporeon)
  //   testBattle.fight()
  //   expect(Flareon.hitPoints).toEqual(46)
  // })

  test("fight should stop when one pokemon has 0 hitPoints", () => {
    const Flareon = new FireType("Flareon", 65, 20, "fireblast");
    const Vaporeon = new WaterType("Vaporeon", 70, 19, "hydropump");
    const testBattle = new Battle("Ash", "Brock", Flareon, Vaporeon);
    testBattle.fight();
    expect(Vaporeon.hasFainted()).toEqual(true);
  });
});
