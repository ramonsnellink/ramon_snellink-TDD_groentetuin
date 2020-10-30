// Get yield for plant
const getYieldForPlant = (plant, environmentFactors) => {
  if (!environmentFactors) {
    // no wind or sun
    return plant.yield;
  } else if (!environmentFactors.wind) {
    // no wind
    const plantFactorSun = plant.factors.sun[environmentFactors.sun];
    return plant.yield * (1 + plantFactorSun / 100);
  } else if (!environmentFactors.sun) {
    // no sun
    const plantFactorWind = plant.factors.wind[environmentFactors.wind];
    return plant.yield * (1 + plantFactorWind / 100);
  } else if (environmentFactors.wind && environmentFactors.sun) {
    // sun & wind
    const plantFactorSun = plant.factors.sun[environmentFactors.sun];
    const plantFactorWind = plant.factors.wind[environmentFactors.wind];

    return plant.yield * (1 + plantFactorWind / 100) * (1 + plantFactorSun / 100);
  }
};

const getYieldForCrop = (input, environmentFactors) => {
  // Yield * number of crops
  return Math.round(getYieldForPlant(input.crop, environmentFactors) * input.num_crops);
};

const getTotalYield = ({ crops }, environmentFactors) => {
  let totalYield = 0;
  crops.forEach((crop) => {
    totalYield += getYieldForCrop(crop, environmentFactors);
  });
  return totalYield;
};

const getCostsForCrop = (input) => {
  return input.crop.costs * input.num_crops; // Costs per crop * number of crops
};

const getRevenueForCrop = (input, environmentFactors) => {
  return input.crop.revenue * getYieldForCrop(input, environmentFactors); // Total revenue
};

const getProfitForCrop = (input, environmentFactors) => {
  return getRevenueForCrop(input, environmentFactors) - getCostsForCrop(input, environmentFactors);
};

const getTotalProfit = ({ crops }, environmentFactors) => {
  let totalProfit = 0;
  crops.forEach((crop) => {
    totalProfit += getProfitForCrop(crop, environmentFactors);
  });
  return totalProfit;
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
