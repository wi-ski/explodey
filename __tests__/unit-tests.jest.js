// @flow
"use strict";
const explodey = require("../index");

const attrs = {
  a: true,
  b: true,
  c: true
};

describe("Its property accessing should work as expected", () => {
  test(`It allows for accessing existing properties`, () => {
    const foo = explodey(attrs);
    expect(foo.a).toBe(true);
    expect(foo.b).toBe(true);
    expect(foo.c).toBe(true);
  });
  test(`It does not allow for accessing non-existing properties`, () => {
    const bar = explodey(attrs);
    expect(() => bar.x).toThrow();
  });
  test(`JSON.stringify works`, () => {
    const baz = explodey(attrs);
    expect(JSON.stringify(baz)).toBe('{"a":true,"b":true,"c":true}');
  });
  test(`Spread operators work`, () => {
    const biz = explodey(attrs);
    expect({ ...biz }).toEqual(attrs);
  });
  test(`Spread operators work`, () => {
    const nameForThing = explodey(attrs);
    const otherNameForThing = { ...nameForThing };

    expect(otherNameForThing).toEqual(attrs);
    expect(otherNameForThing.quux).toBe(undefined);
  });
  test(`Nesting explodeys works`, () => {
    const yyy = explodey({
      x: explodey(attrs),
      z: explodey(attrs)
    });
    const otherExplodey = { ...yyy };

    expect(yyy.x.a).toEqual(true);
    expect(otherExplodey.x.a).toEqual(true);
    expect(() => otherExplodey.x.quux).toThrow();
  });
});
