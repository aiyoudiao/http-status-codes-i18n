import { describe, it, expect } from 'vitest';
import { statusCodeToStatusText } from './helpers';

describe('statusCodeToStatusText', () => {
  it('should have correct status text for status code 200', () => {
    expect(statusCodeToStatusText[200]).toBe('OK');
  });

  it('should have correct status text for status code 404', () => {
    expect(statusCodeToStatusText[404]).toBe('Not Found');
  });

  it('should have correct status text for status code 500', () => {
    expect(statusCodeToStatusText[500]).toBe('Internal Server Error');
  });

  it('should return undefined for unknown status code', () => {
    expect(statusCodeToStatusText[999]).toBeUndefined();
  });
});
