CreatePokemon = require("../pokemonBattler");

const Flareon = new CreatePokemon("Flareon", "fire", 65, 20, "fireblast");
const Vaporeon = new CreatePokemon("Vaporeon", "water", 70, 19, "hydropump");
const Eevee = new CreatePokemon("Eevee", "normal", 55, 18, "headbutt");
const Leafeon = new CreatePokemon("Leafeon", "grass", 65, 17, "gigadrain");

describe(CreatePokemon, () => {
  test("Type should default to normal", () => {
    expect(new CreatePokemon("Eevee", "normal", 55, 18, "headbutt")).toEqual({
      name: "Eevee",
      hitPoints: 55,
      type: "normal",
      attackDamage: 18,
      move: "headbutt",
    });
  });
  test("isEffectiveAgainst should return the correct boolean", () => {
    expect(Vaporeon.isEffectiveAgainst(Flareon)).toEqual(true);
    expect(Eevee.isEffectiveAgainst(Flareon)).toEqual(false);
    expect(Leafeon.isEffectiveAgainst(Vaporeon)).toEqual(true);
  });
  test("isWeakAgainst should return the correct boolean", () => {
    expect(Flareon.isWeakTo(Vaporeon)).toEqual(true);
    expect(Flareon.isWeakTo(Eevee)).toEqual(false);
    expect(Vaporeon.isWeakTo(Leafeon)).toEqual(true);
  });
  test("takeDamage should lower the hitPoints by passed num", () => {
    expect(Flareon.hitPoints).toEqual(65);
    Flareon.takeDamage(10);
    expect(Flareon.hitPoints).toEqual(55);
  });
  test("useMove returns attackDamage and a message", () => {
    expect(Flareon.useMove()).toEqual(20);
    expect(Eevee.useMove()).toEqual(18);
  });
});
