import {it, expect, vi} from 'vitest';
import writeData from './io';
import { promises as fs } from 'fs';

vi.mock('fs');
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1]
            }
        }
    };
});

it('should execute the writeFile method', () => {
    const testData = 'Test';
    const testFile = 'test.txt'

    writeData(testData, testFile);

    expect(fs.writeFile).toBeCalledWith(testFile, testData);
});

it('should return a promise wich resolves to no values if called correctly', () => {
    const testData = 'Test';
    const testFile = 'test.txt'

    return expect(writeData(testData, testFile)).resolves.toBeUndefined();
});