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