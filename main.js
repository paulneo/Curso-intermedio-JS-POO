const Jean = {
  name: 'Jean',
  age: 22,
  approvedCourses: ['Curso 1'],
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

console.log(Object.keys(Jean)); // [name, age, approvedCourses, function()]
console.log(Object.getOwnPropertyNames(Jean)); // ['jean', 22, ['curso]]
console.log(Object.entries(Jean)); // [
//[ 'name', 'Jean' ],
//[ 'age', 22 ],
//[ 'approvedCourses', [ 'Curso 1' ] ],
//[ 'addCourse', [Function: addCourse] ]
// ]

console.log(Object.getOwnPropertyDescriptors(Jean));

Object.defineProperty(Jean, 'pruebaNASA', {
  value: 'Extraterrestes',
  enumerable: false, // no lista con Object.keys()
  writable: true,
  configurable: true,
});
Object.defineProperty(Jean, 'navigator', {
  value: 'Chrome',
  enumerable: true,
  writable: false, // no se puede modificar el value
  configurable: true,
});

Object.defineProperty(Jean, 'pruebaNASA', {
  value: 'Extraterrestes',
  enumerable: true,
  writable: true,
  configurable: false, // no se puede eliminar la propiedad
});

console.log(Jean);
console.log(Object.getOwnPropertyDescriptors(Jean));
console.log(Jean);

Object.seal(Jean); // No se puede borrar configurable = false
Object.freeze(Jean); // nose puede eliminar ni editar writable = false , configurable = false
