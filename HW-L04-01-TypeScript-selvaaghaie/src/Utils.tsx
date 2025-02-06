
export function mapArray<T, U>(
    items: T[],
    callback: (item: T) => U,
    filter?: (item: T) => boolean
  ): U[] {
    if (filter) {
      items = items.filter(filter);
    }
    return items.map(callback);
  }
  

  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = mapArray(numbers, (num) => num * num);
  console.log('Squared Numbers:', squaredNumbers);
  

  const strings = ['hello', 'world', 'typescript'];
  const stringLengths = mapArray(strings, (str) => str.length);
  console.log('String Lengths:', stringLengths);
  

  const filteredAndSquaredNumbers = mapArray(
    numbers,
    (num) => num * num,
    (num) => num > 2
  );
  console.log('Filtered and Squared Numbers:', filteredAndSquaredNumbers);