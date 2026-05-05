// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

/* Unit Tests for Phone Number Function */

test('My phone number valid', () => {
  expect(isPhoneNumber('(619) 317-9104')).toBe(true);
});

test('My phone number valid, diff format', () => {
  expect(isPhoneNumber('317-9104')).toBe(true);
});

test('invalid phone number, 8 digits', () => {
  expect(isPhoneNumber('12341234')).toBe(false);
});

test('invalid phone number, spaced out', () => {
  expect(isPhoneNumber('6 1 9 3 1 7 9 1 0 4')).toBe(false);
});

/* Unit Tests for Email Function */

test('My email valid', () => {
  expect(isEmail('r4le@ucsd.edu')).toBe(true);
});

test('random email valid', () => {
  expect(isEmail('email_test@google.io')).toBe(true);
});

test('My email invalid', () => {
  expect(isEmail('ryan.le@personal.com')).toBe(false);
});

test('Random Email Invalid', () => {
  expect(isEmail('hello.me@youtube.video')).toBe(false);
});

/* Unit Tests for Strong Password Function */

test('Valid Password, 4 characters w/ numbers and underscore', () => {
  expect(isStrongPassword('a12_')).toBe(true);
});

test('Valid Password, 15 letters', () => {
  expect(isStrongPassword('abcdefghijklmno')).toBe(true);
});

test('Invalid Password, not beginning with letter', () => {
  expect(isStrongPassword('2bc_')).toBe(false);
});

test('Invalid Password, 3 character edge case', () => {
  expect(isStrongPassword('eee')).toBe(false);
});

test('Invalid Password, 16 character edge case', () => {
  expect(isStrongPassword('abcdefghijklmnop')).toBe(false);
});

/* Unit Tests for Dates */

test('Valid Date, today', () => {
  expect(isDate('05/05/2026')).toBe(true);
});

test('Valid Date, today, other format', () => {
  expect(isDate('5/5/2026')).toBe(true);
});

test('Invalid Date format, year wrong', () => {
  expect(isDate('5/5/26')).toBe(false);
});

test('Invalid Date format, month wrong', () => {
  expect(isDate('555/5/2026')).toBe(false);
});

/* Unit Tests for Hex Codes */

test('Valid Hex, 3 characters', () => {
  expect(isHexColor('#ABC')).toBe(true);
});

test('Valid Hex, 6 characters', () => {
  expect(isHexColor('#ab0fcc')).toBe(true);
});

test('Invalid Hex, 2 characters', () => {
  expect(isHexColor('#ab')).toBe(false);
});

test('Invalid Hex, 7 characters', () => {
  expect(isHexColor('#abc0def')).toBe(false);
});

