// schrijf één of meerdere tests voor een stukje functionaliteit
// draai de nieuwe tests en check dat ze falen (rood)
// schrijf code om alle tests te laten slagen (groen)
// verbeter de code zodat deze er netjes uit ziet (refactor)
// commit je code
// terug naar stap 1 met het volgende stukje functionaliteit

const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require("./farm");

const corn = {
  name: "corn",
  yield: 30,
  costs: 1,
  revenue: 3,

  factors: {
    sun: {
      low: -50,
      medium: 0,
      high: 50,
    },
    wind: {
      low: 0,
      medium: -40,
      high: -70,
    },
  },
};

const pumpkin = {
  name: "pumpkin",
  yield: 4,
  costs: 2,
  revenue: 5,

  factors: {
    sun: {
      low: -30,
      medium: 0,
      high: 30,
    },
    wind: {
      low: 0,
      medium: -20,
      high: -30,
    },
  },
};

describe("getYieldForPlant", () => {
  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

describe("getYieldForPlant with environment factors", () => {
  test("corn, sun:low", () => {
    const environmentFactors = {
      sun: "low",
    };

    expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
  });

  test("corn, sun:high", () => {
    const environmentFactors = {
      sun: "high",
    };

    expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
  });

  test("pumpkin, sun:medium, wind: low", () => {
    const environmentFactors = {
      sun: "medium",
      wind: "low",
    };

    expect(getYieldForPlant(pumpkin, environmentFactors)).toBe(4);
  });

  test("pumpkin, sun:high, wind: low", () => {
    const environmentFactors = {
      sun: "high",
      wind: "low",
    };

    expect(getYieldForPlant(pumpkin, environmentFactors)).toBe(5.2);
  });

  test("pumpkin, sun:low, wind: high", () => {
    const environmentFactors = {
      sun: "low",
      wind: "high",
    };

    expect(getYieldForPlant(pumpkin, environmentFactors)).toBe(1.9599999999999997);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const input = {
      crop: corn,
      num_crops: 10,
    };
    expect(getYieldForCrop(input)).toBe(300);
  });
});

describe("getYieldForCrop with environment", () => {
  test("corn, sun:low, wind: high", () => {
    const input = {
      crop: corn,
      num_crops: 10,
    };
    const environmentFactors = {
      sun: "low",
      wind: "high",
    };
    expect(getYieldForCrop(input, environmentFactors)).toBe(45);
  });

  test("pumpkin, sun:high", () => {
    const input = {
      crop: pumpkin,
      num_crops: 30,
    };
    const environmentFactors = {
      sun: "high",
    };
    expect(getYieldForCrop(input, environmentFactors)).toBe(156);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const crops = [
      { crop: corn, num_crops: 5 },
      { crop: pumpkin, num_crops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(158);
  });

  test("Calculate total yield with 0 amount", () => {
    const crops = [{ crop: corn, num_crops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });
});

describe("getCostsForCrop", () => {
  test("Get costs for crop corn", () => {
    const input = {
      crop: corn,
      num_crops: 20,
    };
    expect(getCostsForCrop(input)).toBe(20);
  });

  test("Get costs for crop pumpkin", () => {
    const input = {
      crop: pumpkin,
      num_crops: 40,
    };
    expect(getCostsForCrop(input)).toBe(80);
  });
});

describe("getRevenueForCrop", () => {
  test("Get revenue for crop Corn", () => {
    const input = {
      crop: corn,
      num_crops: 15,
    };
    expect(getRevenueForCrop(input)).toBe(1350);
  });

  test("Get revenue for crop Pumpkin", () => {
    const input = {
      crop: pumpkin,
      num_crops: 35,
    };
    expect(getRevenueForCrop(input)).toBe(700);
  });
});

describe("getProfitForCrop", () => {
  test("Get profit for crop Corn", () => {
    const input = {
      crop: corn,
      num_crops: 100,
    };
    expect(getProfitForCrop(input)).toBe(8900);
  });

  test("Get profit for crop Pumpkin", () => {
    const input = {
      crop: pumpkin,
      num_crops: 75,
    };
    expect(getProfitForCrop(input)).toBe(1350); // REMEMBER: COST IS PER PLANT, REVENUE IS PER KG
  });
});

describe("getProfitForCrop with environment factors", () => {
  test("Corn, sun:med, wind: med", () => {
    const input = {
      crop: corn,
      num_crops: 100,
    };

    const environmentFactors = {
      sun: "medium",
      wind: "medium",
    };

    expect(getProfitForCrop(input, environmentFactors)).toBe(5300);
  });

  test("Get profit for crop Pumpkin", () => {
    const input = {
      crop: pumpkin,
      num_crops: 75,
    };
    expect(getProfitForCrop(input)).toBe(1350); // REMEMBER: COST IS PER PLANT, REVENUE IS PER KG
  });
});

describe("getTotalProfit", () => {
  test("Get total profit version 1", () => {
    const crops = [
      { crop: corn, num_crops: 500 },
      { crop: pumpkin, num_crops: 250 },
    ];

    expect(getTotalProfit({ crops })).toBe(49000);
  });

  test("Get total profit version 2", () => {
    const crops = [
      { crop: corn, num_crops: 100 },
      { crop: pumpkin, num_crops: 50 },
    ];

    expect(getTotalProfit({ crops })).toBe(9800);
  });
});

describe("getTotalProfit with env. factors", () => {
  test("sun: high, wind: high", () => {
    const crops = [
      { crop: corn, num_crops: 500 },
      { crop: pumpkin, num_crops: 250 },
    ];

    const environmentFactors = {
      sun: "high",
      wind: "high",
    };

    expect(getTotalProfit({ crops }, environmentFactors)).toBe(23800);
  });

  test("sun: high, wind: med", () => {
    const crops = [
      { crop: corn, num_crops: 100 },
      { crop: pumpkin, num_crops: 50 },
    ];

    const environmentFactors = {
      sun: "high",
      wind: "low",
    };

    expect(getTotalProfit({ crops }, environmentFactors)).toBe(14600);
  });
});
