// Mosh's solution
const priceRanges = [
  { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
  { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
  { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
];

const restaurants = [{ averagePerPerson: 5 }];

// Herri's solution
// const priceRanges = [new PriceRange(1), new PriceRange(2), new PriceRange(3)];

// console.log(priceRanges);

// function PriceRange(level) {
//   if (level === 1) {
//     this.priceName = 'Inexpensive';
//     this.displayedName = '$';
//     this.minPrice = 1;
//     this.maxPrice = 4;
//   }

//   if (level === 2) {
//     this.priceName = 'Moderate';
//     this.displayedName = '$$';
//     this.minPrice = 5;
//     this.maxPrice = 7;
//   }

//   if (level === 3) {
//     this.priceName = 'Pricey';
//     this.displayedName = '$$$';
//     this.minPrice = 8;
//     this.maxPrice = 10;
//   }
// }
