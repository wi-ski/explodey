// @flow
"use strict";
const explodey = require("../index");

describe("Its property accessing should work as expected", () => {
  test(`It allows for accessing existing properties`, async done => {
    const foo = explodey({
      a: true,
      b: true,
      c: true
    });
    expect(foo.a).toBe(true);
    expect(foo.b).toBe(true);
    expect(foo.c).toBe(true);
  });
  test(`It does not allow for accessing non-existing properties`, async done => {
    const accessSomeProperty = (someProp, someObj) => () => someObj.someProp;
    const bar = explodey({
      a: true,
      b: true,
      c: true
    });
    expect(accessSomeProperty("a", bar)).toThrow();
    expect(accessSomeProperty("b", bar)).toThrow();
    expect(accessSomeProperty("c", bar)).toThrow();
  });
});
