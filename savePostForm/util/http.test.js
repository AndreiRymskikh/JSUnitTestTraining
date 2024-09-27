import { it, vi, expect } from 'vitest';
import { sendDataRequest } from './http';
import { HttpError } from './errors';

const testResponseData = { testKey: 'testData' };
//replacement for the global fetch() fn
const testFetch = vi.fn((url, options) => {
    return new Promise((resolve, reject) => {
        if(typeof options.body !== 'string') {
            return reject('Not a string');
        }
        const testResponse = {
            ok: true,
            json() {
                return new Promise((resolve, reject) => {
                    resolve(testResponseData);
                });
            }
        };
        resolve(testResponse);
    });
});

vi.stubGlobal('fetch', testFetch);

it('should return any available response data', () => {
    const testData = {key: 'testData'};

    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it('should convert the provided data to JSON before sending the request', async () => {
    const testData = {key: 'testData'};
    let errorMessage; 

    try {
        await sendDataRequest(testData);
    }
    catch (error) {
        errorMessage = error;
    }

    expect(errorMessage).not.toBe('Not a string');
});

it('should throw an HttpError in case of non-ok responses', async () => {
    testFetch.mockImplementationOnce((url, options) => {
        return new Promise((resolve, reject) => {
            const testResponse = {
                ok: false,
                json() {
                    return new Promise((resolve, reject) => {
                        resolve(testResponseData);
                    });
                }
            };
            resolve(testResponse);
        });
    });
    const testData = {key: 'testData'};
    

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
