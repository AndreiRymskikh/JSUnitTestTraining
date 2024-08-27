import { test, expect, describe } from 'vitest';
import {add} from './math';

describe('add() function tests', () => {
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

test('Should yield 0 if empty array is provided', () => {
    const inputs = [];

    const result = add(inputs);

    expect(result).toBe(0);
});

test('Should throw an error if no value passed into the function', () => {
    const resultFn = () => {
        add();
    }

    expect(resultFn).toThrow(/is not iterable/);
});

test('Should throw an error if multiple values passed instead of array into the function', () => {
    const num1 = 1;
    const num2 = 2;
    
    const resultFn = () => {
        add(num1, num2);
    }

    expect(resultFn).toThrow(/is not iterable/);
});
});