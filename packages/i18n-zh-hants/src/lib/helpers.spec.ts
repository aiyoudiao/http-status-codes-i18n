import { describe, it, expect } from 'vitest';
import { statusCodeToStatusTextMap } from './helpers';

describe('statusCodeToStatusTextMap', () => {
  it('should have correct status text for status code 200', () => {
    expect(statusCodeToStatusTextMap[200]).toBe('OK');
  });

  it('should have correct status text for status code 404', () => {
    expect(statusCodeToStatusTextMap[404]).toBe('Not Found');
  });

  it('should have correct status text for status code 500', () => {
    expect(statusCodeToStatusTextMap[500]).toBe('Internal Server Error');
  });

  it('should return undefined for unknown status code', () => {
    expect(statusCodeToStatusTextMap[999]).toBeUndefined();
  });
});
