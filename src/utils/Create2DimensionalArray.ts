export const Create2DimensionalArray = <A>(array: A[] = [], count: number = 3): A[][] => {
  const lengthSubArray: number = array.length / count;

  let newArray: any[] = [];
  let start: number = 0;
  let end: number = lengthSubArray;

  for (let i = 0; i < count; i += 1) {
    newArray = [...newArray, array.slice(start, end)];
    start = end;
    end = start + lengthSubArray;
  }
  return newArray;
};

export default Create2DimensionalArray;
