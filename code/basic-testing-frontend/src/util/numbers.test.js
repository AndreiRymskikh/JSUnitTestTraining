import { test, expect, describe } from 'vitest';
import {transformToNumber} from './numbers';

describe('transformToNumber() method tests', () => {
test('Should return number with string input', () => {
    const stringNumber = '2';

    const result = transformToNumber(stringNumber);

    expect(result).toBeTypeOf("number");
    expect(result).toBe(+stringNumber);
});

test('Should yield NaN if invalid number is provided', () => {
    const stringNumber = 'invalid';
    const obj = {};

    const result = transformToNumber(stringNumber);
    const result1 = transformToNumber(obj);

    expect(result).toBeNaN();
    expect(result1).toBeNaN();
});
});