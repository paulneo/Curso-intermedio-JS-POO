const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
  editA() {
    this.a = 'Abcd';
  },
};

// Lo convertimos en String y el resultado lo asignamos en un variable:
const stringifiedComplexObj = JSON.stringify(obj1);
// Lo convertimos a objeto y lo asignamos al nuevo objeto:
const obj2 = JSON.parse(stringifiedComplexObj);

console.log(obj1);
console.log(obj2);

// Si hacemos modificaciones en un de los objetos...
obj2.c.d = 'nested object';
obj2.c.e = 'nested object';
// El objeto original no se vería afectado
console.log(obj1);
console.log(obj2);
