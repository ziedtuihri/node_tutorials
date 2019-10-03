// cannot return objects implicitly
// --------------------------------
const funcObj = () => ({name: 'zied tuihri'});
console.log(funcObj());

// cannot be used as constructor
// -----------------------------
// const Func = () => ({name: 'Medhat'});
// let f = new Func();

// Doesn't have prototype property
// -------------------------------
// const funcProperty = function() {};
// funcProperty.prototype.add = () => {};

// Cannot be affected by .call / .apply
// ------------------------------------

let adder = {
  base: 1,
  add: function(a) {
    let f = v => v + this.base;
    let b = {
      base: 2
    };
    return f.call(b, a);
  }
};
console.log(adder.add(4));

let testt = function() {
    return function() {
        return { tutorials: 'FastCode'};
    };
};

let test = () => ({ tutorials: 'FastCode'});

console.log(test());