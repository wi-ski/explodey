# Explodey

## What?

A utility that disallows accessing undefined properties on object.

## What?

Because sometimes its nice to not have to worry about undefined references on things like:
  * Constants
  * Business critical values
  * Stuff like that

## What not just use the classical "getter" - like: `someObject.get("propertyThatGetsCheckByHooks")` ?

Because I feel that style is better for a situation where the hooks underneath the `.get()` are cover business-y logic situations and I want something else... something less.

```javascript
const foo = explodey({
  a: true,
  b: true,
  c: true
});

foo.a #=> true
foo.z #=> throws Error!

otherFoo = { ...foo };

expect(otherFoo.baz).toBe(undefined);

JSON.stringify(foo) => '{ "a": "true, "b": true, "c": true}'

```

