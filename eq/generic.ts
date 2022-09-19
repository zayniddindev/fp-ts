/********************Simple**************************/

// function pickObjectKeys(obj: any, keys: any) {
//   let result: any = {};
//   for (const key of keys) {
//     result[key] = obj[key];
//   }
//   return result;
// }

// const language = {
//   name: 'TS',
//   age: 8,
//   ext: ['ts', 'tsx'],
// };

// const ageAndExt = pickObjectKeys(language, ['age', 'ext']);

// console.log(ageAndExt);

/********************Complex**************************/

function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]) {
  let result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

const language = {
  name: 'TS',
  age: 8,
  ext: ['ts', 'tsx'],
};

const ageAndExt = pickObjectKeys(language, ['age', 'ext']);
