import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('counts Mondays', () => {
  assert.equal(api.countWeekday('2024-01-01', '2024-01-31', 1), 5);
});
test('counts Sunday in one week', () => {
  assert.equal(api.countWeekday('2024-06-03', '2024-06-09', 0), 1);
});
test('includes endpoints', () => {
  assert.equal(api.countWeekday('2024-01-01', '2024-01-01', 1), 1);
});
test('returns zero when no weekday matches', () => {
  assert.equal(api.countWeekday('2024-01-01', '2024-01-02', 0), 0);
});
test('counts leap interval', () => {
  assert.equal(api.countWeekday('2024-02-29', '2024-02-29', 4), 1);
});
test('rejects invalid weekday', () => {
  assert.throws(() => api.countWeekday('2024-01-01', '2024-01-02', 7), RangeError);
});
