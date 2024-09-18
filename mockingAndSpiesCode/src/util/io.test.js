import {it, expect, vi} from 'vitest';
import writeData from './io';
import { promises as fs } from 'fs';

vi.mock('fs');

it('should execute the writeFile method', () => {
    const testData = 'Test';
    const testFile = 'test.txt'

    writeData(testData, testFile);

    expect(fs.writeFile).toBeCalled();
});