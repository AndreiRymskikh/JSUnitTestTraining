import { test, expect } from 'vitest';
import {add} from './math';

test('Summarize all number values in an array', () => {
    //Arrange
    const numbers = [1, 2, 3];
    const expectedResult = numbers.reduce(
        (prevValue, currentValue) => prevValue + currentValue,
        0
    );

    //Act
    const result = add(numbers);

    //Assert
    expect(result).toBe(expectedResult);
});

test('Should yield NaN if at least one invalid number is provided', () => {
    const inputs = ['invalid', 2];

    const result = add(inputs);

    expect(result).toBeNaN();
});

test('Should yield correct sum if numeric string array is provided', () => {
    const inputs = ['1', '2', '3'];
    const expectedResult = inputs.reduce(
        (prevValue, currentValue) => +prevValue + +currentValue,
        0
    );

    const result = add(inputs);

    expect(result).toBe(expectedResult);
});