import { it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

it('should throw an error when empty string is provided', () => {
    const testInput = '';

    const validationFn = () => validateNotEmpty(testInput);

    expect(validationFn).toThrow();
});

it('should throw an error when blank string is provided', () => {
    const testInput = ' ';

    const validationFn = () => validateNotEmpty(testInput);

    expect(validationFn).toThrow();
});

it('should throw a custom error message when blank string is provided', () => {
    const testInput = ' ';
    const testErrorMessage = 'Test';

    const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

    expect(validationFn).toThrow(testErrorMessage);
});