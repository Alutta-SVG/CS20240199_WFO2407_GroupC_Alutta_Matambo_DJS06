// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

provinces.forEach((province, index)=> {
  console.log(`The ${index + 1} province is ${province}`);
});

const UpperCaseProvinces = provinces.map(province => province.toUpperCase());
provinces.toUpperCase(();
console.log(UpperCaseProvinces));

const nameLengths = name.map(name => name.Length);
console.log(nameLengths);

const sortedProvinces = provinces.sort((a,b)=>
a.localeCompare(b));
console.log(sortedProvinces);

const nonCapeProvinces = provinces.filter(provinces =>
  provinces !== 'Western Cape');
  console.log(nonCapeProvinces);

const hasS = names.map(name => name.includes('S'));
console.log(hasS);

const provinceMapping = names.reduce((obj, name, index)
=> {
  obj[name] = provinces[index];
  return obj;
  }, {});
  console.log(provinceMapping);

  