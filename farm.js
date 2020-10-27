//   get_yield_for_plant,
//   get_yield_for_crop,
//   get_total_yield,

const corn = {
  name: "corn",
  yield: 3,
};

const pumpkin = {
  name: "pumpkin",
  yield: 4,
};

const input = {
  crop: corn,
  num_crops: 10,
};

const crops = [
  { crop: corn, num_crops: 5 },
  { crop: pumpkin, num_crops: 2 },
];

// Get yield for plant
const get_yield_for_plant = (plant) => {
  return plant.yield;
};

const get_yield_for_crop = (input) => {
  const numberOfCrops = input.num_crops;
  return corn.yield * numberOfCrops;
};

const get_total_yield = ({ crops }) => {
  let totalYield = 0;
  crops.forEach((crop) => {
    const cropYield = crop.crop.yield * crop.num_crops;
    totalYield += cropYield;
  });

  return totalYield;
};

module.exports = { get_yield_for_plant, get_yield_for_crop, get_total_yield };
