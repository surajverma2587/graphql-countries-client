export const get = (nestedObj = {}, tree = [], defaultValue = '') =>
  Array.isArray(tree) ? tree.reduce(
    (obj, key) => (obj && obj[key] ? obj[key] : defaultValue),
    nestedObj,
  ) : {};