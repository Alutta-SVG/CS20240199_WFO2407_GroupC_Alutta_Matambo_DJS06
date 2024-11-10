
// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Print provinces with their index
provinces.forEach((province, index) => {
  console.log(`The ${index + 1} province is ${province}`);
});

// Convert provinces to uppercase
const UpperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(UpperCaseProvinces);

// Get lengths of names
const nameLengths = names.map(name => name.length); // Fixed 'name' to 'names' and 'Length' to 'length'
console.log(nameLengths);

// Sort provinces
const sortedProvinces = provinces.sort((a, b) => a.localeCompare(b));
console.log(sortedProvinces);

// Filter out 'Western Cape'
const nonCapeProvinces = provinces.filter(province => province !== 'Western Cape');
console.log(nonCapeProvinces);

// Check if names contain 'S'
const hasS = names.map(name => name.includes('S'));
console.log(hasS);

// Map names to provinces
const provinceMapping = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(provinceMapping);

// Print products
products.forEach(product => console.log(product)); // Fixed console,log to console.log

// Filter products with short names
const shortNamedProducts = products.filter(product => product.product.length <= 5);
console.log(shortNamedProducts);

// Calculate total price of products
const totalPrice = products
  .filter(product => product.price !== '' && product.price !== "") 
  .map(product => Number(product.price));
console.log(totalPrice);

// Calculate price statistics
const priceStats = products.reduce((acc, product) => {
  const price = typeof product.price === 'string' ? parseFloat(product.price) : product.price;
  if (!isNaN(price)) {
    acc.max = Math.max(acc.max || -Infinity, price);
    acc.min = Math.min(acc.min || Infinity, price);
  }
  return acc;
}, { max: -Infinity, min: Infinity }); // Fixed the initialization object
console.log(priceStats);

// Extract product entries excluding price and product name
const productEntries = products.reduce((acc, { product, price, ...rest }) => { // Using destructuring
  Object.entries(rest).forEach(([key, value]) => {
    acc[key] = value;
  });
  return acc;
}, {});
console.log(productEntries);