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
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Sort provinces
const sortedProvinces = [...provinces].sort((a, b) => a.localeCompare(b)); // Create a copy to prevent modifying the original array
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
products.forEach(product => console.log(product));

// Filter products with short names
const shortNamedProducts = products.filter(product => product.product.length <= 5);
console.log(shortNamedProducts);

// Calculate total price of products
const totalPrice = products
  .filter(product => {
    const price = String(product.price).trim();
    return price !== '';  //products where price is not empty or blank
  })
  .map(product => parseFloat(product.price));  // Convert string prices to float
console.log(totalPrice);

// Calculate price statistics
const priceStats = products.reduce((acc, product) => {
  const price = parseFloat(product.price);
  if (!isNaN(price)) {
    acc.max = Math.max(acc.max || -Infinity, price);
    acc.min = Math.min(acc.min || Infinity, price);
  }
  return acc;
}, { max: -Infinity, min: Infinity });
console.log(priceStats);

// Extract product entries excluding price and product name
const productEntries = products.reduce((acc, { ...rest }) => {
  Object.entries(rest).forEach(([key, value]) => {
    acc[key] = value;
  });
  return acc;
}, {});
console.log(productEntries);
