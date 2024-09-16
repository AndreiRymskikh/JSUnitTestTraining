import {it, expect} from 'vitest';
import writeData from './io';

it('should execute the writeFile method', () => {
    const testData = 'Test';
    const testFile = 'test.txt'

    expect(writeData(testData, testFile)).resolves.toBeUndefined();
});