// Реализовать такие методы работы над массивами:

// 1. метод создает новый массив элементов, состоящий из элементов массива array за вычетом элементов массива itemsToExclude
const difference = (arr, itemsToExclude) => arr.filter(e => !~itemsToExclude.indexOf(e));
  
console.log('difference([2, 1, 5], [2, 3]) =>', difference([2, 1, 5], [2, 3]));
// => [1, 5]
  
// 2. метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
const groupBy = (arr, value) => arr.reduce((res, e) => {
    const name = e[value];
    res[name] 
        ? res[name].push(e) 
        : res[name] = [e];

    return res;
}, {});
  
console.log(
    "groupBy([{ gender: 'male', name: 'Fred'}, { gender: 'female', name: 'Jane'}, { gender: 'male', name: 'Max'}], 'gender')",
    groupBy([{ gender: 'male', name: 'Fred'}, { gender: 'female', name: 'Jane'}, { gender: 'male', name: 'Max'},], 'gender')
);

// => {
//    male: [{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}],
//    female: [{ gender: 'female', name: 'Jane'}]
// }
  
// 3. если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение
const flatten = (arr) => arr.reduce((res, e) => {
    Array.isArray(e)
        ? res = [...res, ...e]
        : res.push(e);

    return res;
}, []);

console.log('flatten([1, [2, [3, [4]], 5]] =>', flatten([1, [2, [3, [4]], 5]]));
// => [1, 2, [3, [4]], 5]
  
console.log('flatten([1, 2, 3, 4, 5]) =>', flatten([1, 2, 3, 4, 5]));
// => [1, 2, 3, 4, 5]
  
console.log('flatten([1, [2, 3], 4, 5]) =>', flatten([1, [2, 3], 4, 5]));
// => [1, 2, 3, 4, 5]
  
// 4. метод должен убрать все повторяющиеся элементы из массива
const uniq = (arr) => arr.reduce((res, e) => {
  if (!~res.indexOf(e)) res.push(e);

  return res;
}, [])
  
console.log('uniq([2, 1, 2]) =>', uniq([2, 1, 2]));
// => [2, 1]
  
// 5. метод должен собирать элементы массива в группы с заданным размером
const chunk = (arr, size) => arr.reduce ((res, e) => {
    res[res.length - 1].length === size
        ? res.push([e])
        : res[res.length - 1].push(e);

    return res;
}, [[]]);

console.log("chunk(['a', 'b', 'c', 'd'], 2) =>", chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]

console.log("chunk(['a', 'b', 'c', 'd'], 3) =>", chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]