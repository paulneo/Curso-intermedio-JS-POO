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
    readName() {
      return private._name;
    },
    changeName(newName) {
      private._name = newName;
    },
  };

  Object.defineProperty(public, 'readName', {
    configurable: false,
    writable: false,
  });
  Object.defineProperty(public, 'changeName', {
    configurable: false,
    writable: false,
  });

  //  Object.defineProperties(public, {
  //    readName: {
  //      configurable: false,
  //      writable: false,
  //    },
  //    changeName: {
  //      configurable: false,
  //      writable: false,
  //    },
  //  });

  return public;
}

const juan = createStudent({
  name: 'Juan',
  email: 'Juan@gmail.com',
  age: 18,
});

console.log(juan);
console.log(juan.readName());
