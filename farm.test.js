// schrijf één of meerdere tests voor een stukje functionaliteit
// draai de nieuwe tests en check dat ze falen (rood)
// schrijf code om alle tests te laten slagen (groen)
// verbeter de code zodat deze er netjes uit ziet (refactor)
// commit je code
// terug naar stap 1 met het volgende stukje functionaliteit


const {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
  } = require("./farm");
  
  describe("get_yield_for_plant", () => {
    const corn = {
      name: "corn",
      yield: 30,
    };
  
    test("Get yield for plant with no environment factors", () => {
      expect(get_yield_for_plant(corn)).toBe(30);
    });
  });
  
  describe("get_yield_for_crop", () => {
    test("Get yield for crop, simple", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const input = {
        crop: corn,
        num_crops: 10,
      };
      expect(get_yield_for_crop(input)).toBe(30);
    });
  });
  
  describe("get_total_yield", () => {
    test("Calculate total yield with multiple crops", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const pumpkin = {
        name: "pumpkin",
        yield: 4,
      };
      const crops = [
        { crop: corn, num_crops: 5 },
        { crop: pumpkin, num_crops: 2 },
      ];
      expect(get_total_yield({ crops })).toBe(23);
    });
  
    test("Calculate total yield with 0 amount", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const crops = [{ crop: corn, num_crops: 0 }];
      expect(get_total_yield({ crops })).toBe(0);
    });
  });
  