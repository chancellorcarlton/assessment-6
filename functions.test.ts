const {shuffleArray} = require('./utils')

const testArr = [1,2,3,4];

describe('shuffleArray should', () => {
    test('shuffleArray returns an array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true);
    });

    test('returned array is sam length as arguement send in', () => {
        expect(shuffleArray(testArr)).toHaveLength(4);
    });

    test('contain identical items as the array passed in', () => {
        expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr));
    });

    test('make sure items have been shuffled', () => {
        let result = shuffleArray(testArr);
        expect(result.join()).not.toEqual(testArr.join());
    });
});