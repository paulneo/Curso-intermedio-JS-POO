function requiredParam(param) {
  throw new Error(param + ' es obligatorio');
}

function LearningPath({ name = requiredParam('name'), courses = [] }) {
  this.name = name;
  this.courses = courses;

  // const private = {
  //   "_name": name,
  //   "_courses": courses,
  // };

  // const public = {
  //   get name() {
  //     return private["_name"];
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private["_name"] = newName;
  //     } else {
  //       console.warn("Tu nombre debe tener al menos 1 caracter");
  //     }
  //   },
  //   get courses() {
  //     return private["_courses"];
  //   },
  // };

  // return public;
}

function Student({
  name = requiredParam('name'),
  email = requiredParam('email'),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = {
    _learningPaths: [],
  };

  Object.defineProperty(Student.prototype, 'learningPaths', {
    get() {
      return private._learningPaths;
    },
    set(newLP) {
      if (newLP instanceof LearningPath) {
        private._learningPaths.push(newLP);
      } else {
        console.warn(
          'Alguno de los LPs no es una instancia del prototipo LearningPaths'
        );
      }
    },
    configurable: false,
  });

  if (isArray(learningPaths)) {
    this._learningPaths = [];

    for (index in learningPaths) {
      this.learningPaths = learningPaths[index];
    }
  }
}

// Student.prototype.learningPaths = function
const escuelaWeb = new LearningPath({ name: 'Escuela de WebDev' });
const escuelaData = new LearningPath({ name: 'Escuela de Data Science' });
const juan = new Student({
  email: 'juanito@frijoles.co',
  name: 'Juanito',
  learningPaths: [escuelaWeb, escuelaData],
});
