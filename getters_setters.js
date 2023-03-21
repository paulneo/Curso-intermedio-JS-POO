function requiredParam(param) {
  throw new Error(param + ' es obligatorio'); // Este es el mensaje de error
}
function createStudent({
  name = requiredParam('name'), // 👈👈
  email = requiredParam('email'), // 👈👈
  age,
  approvedCourses = [],
  learningPaths = [],
  twitter,
  instagram,
  facebook,
} = {}) {
  const private = {
    _name: name,
  };
  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name() {
      return private._name;
    },

    set name(newName) {
      if (newName) {
        private._name = newName;
      } else {
        console.warn('Tu nombre no puede estar al menos un caracter');
      }
    },
  };

  Object.defineProperty(public, 'name', {
    configurable: false,
  });

  return public;
}

const juan = createStudent({
  name: 'Juan',
  email: 'Juan@gmail.com',
  age: 18,
});
