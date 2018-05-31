"use strict";

const buildExplodey = function(_namespace, _obj = {}) {
  let namespace;
  let obj = Object.assign({}, _obj);
  if (arguments.length === 1) {
    if (typeof _namespace === "object") {
      namespace = "No Name Space Provided";
      obj = Object.assign({}, _namespace);
    }
  }
  const handler = {
    get(target, property, receiver) {
      if (property in target) {
        // see: https://github.com/tvcutsem/harmony-reflect/issues/38
        return Reflect.get(target, property, receiver);
      }
      if (property === "toJSON" || property === "toString") {
        return () => target;
      }
      throw new Error(
        `${JSON.stringify(namespace)} prop: [${String(
          property
        )}] is not defined. I just saved you one headache. JSON for target: ${JSON.stringify(
          target
        )}`
      );
    }
  };

  return new Proxy(obj, handler);
};

module.exports = buildExplodey;
