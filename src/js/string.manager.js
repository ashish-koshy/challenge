const join = (key) => (arg) => (Array.isArray(arg) && arg?.length) ? arg.join(key || '') : arg;
const reverse = (arg) => (Array.isArray(arg) && arg?.length) ? arg.reverse() : arg;
const split = (arg) => (typeof arg === 'string') ? arg.split('') : arg;

const compose = 
  (...functions) => input => functions.reduceRight(
    (previousValue, currentFunction) => currentFunction(previousValue),
    input
  );

class StringManager {
  reverse (input, key = '.') {
    console.log(compose(join(key), reverse, split)(input));
  };
};

module.exports = StringManager;