
export function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
    return items.map(item => item[key]).filter((value): value is T[K] => value !== undefined);
  }
  

  const users = [
    { name: 'Ali', age: 25 },
    { name: 'Babak', age: 32 },
    { name: 'Sara', age: 35 }
  ];
  
  const userNames = pluck(users, 'name');
  console.log(userNames);

  const products = [
    { name: 'Book', price: 100 },
    { name: 'Pen', price: 10 },
    { name: 'Ruler', price: 15 }
  ];
  
  const productPrices = pluck(products, 'price');
  console.log(productPrices); 
