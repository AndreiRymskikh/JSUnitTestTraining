import { test, expect } from 'vitest';
import {transformToNumber} from './numbers';

test('Should return number with string input', () => {
    const stringNumber = '2';

    const result = transformToNumber(stringNumber);

    expect(result).toBeTypeOf("number");
    expect(result).toBe(2);
});

test('Should yield NaN if invalid number is provided', () => {
    const stringNumber = 'invalid';

    const result = transformToNumber(stringNumber);

    expect(result).toBeNaN();
});