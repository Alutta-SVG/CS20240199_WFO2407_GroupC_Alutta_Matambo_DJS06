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

  products.forEach(products =>  console,log(products));

  const shortNamedProducts = products.filter(products =>
    products.product.length <= 5);
    console.log(shortNamedProducts);
  
    const totalPrice = products 
    .filter(products => products.price !== ''&&products.price !=="")
    .map(products => Number(products.price))
    console.log(totalPrice);

    const priceStats = products.reduce((acc, products) =>{
      const price = typeof products.price === 'string'?
      parseFloat(products.price) : products.price;
      if (!isNaN(price)) {
        acc.max = Math.max( acc.max || -Infinity, price);
        acc.min = Math.min(acc.min || Infinity, price);
      }

      return acc;
      {max: -Infinity, min:infinity };
      console.log(priceStats);
      const productEntries = Object.entries(products).reduce((acc,[key, value]) =>{
        if (key !== 'price' && key !== 'product') {
          acc[key] = value;
          }
          return acc;
          }, {});
          console.log(productEntries);
      } )
  