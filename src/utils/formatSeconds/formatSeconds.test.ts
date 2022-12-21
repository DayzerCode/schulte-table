import "@testing-library/react";
import { formatSeconds } from "./formatSeconds";

describe('formatTimer util', () => {
   test('correct values', () => {
      expect(formatSeconds(-10)).toBe('00:00');
      expect(formatSeconds(0)).toBe('00:00');
      expect(formatSeconds(5)).toBe('00:05');
      expect(formatSeconds(305)).toBe('05:05');
      expect(formatSeconds(300)).toBe('05:00');
      expect(formatSeconds(610)).toBe('10:10');
      expect(formatSeconds(6010)).toBe('100:10');
   });

   test('incorrect values', () => {
      expect(formatSeconds(0)).not.toBe(0);
      expect(formatSeconds(5)).not.toBe('5');
   });
});