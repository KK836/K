const allTrucks = [2, 5, 7, 10];

const initialCapacity = 0;
const allTonnage = allTrucks.reduce((totalCapacity, currrentCapacity) => {
  totalCapacity = totalCapacity + currrentCapacity;

  return totalCapacity;
}, initialCapacity);

console.log(allTonnage);
