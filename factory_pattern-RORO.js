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
  return {
    name,
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
  };
}

const juan = createStudent({
  name: 'Juan',
  email: 'Juan@gmail.com',
  age: 18,
});

console.log(juan);
