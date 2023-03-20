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

const isObject = (subject) => {
  return typeof subject == 'object';
};

const isArray = (subject) => {
  return Array.isArray(subject);
};

const deepCopy = (subject) => {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyisObject = isObject(subject[key]);

    if (keyisObject) {
      copySubject[key] = Object.freeze(deepCopy(subject[key]));
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
};

const obj2 = deepCopy(obj1);

obj2.c.d = '222222';
obj2.b = 'ddd';
obj2.c.f = 'dddd';

console.log(obj2);

function deepFreeze(obj) {
  if (typeof obj !== 'object') return obj;

  Object.freeze(obj);

  for (let key in obj) {
    deepFreeze(obj[key]);
  }
  return obj;
}

deepFreeze(obj1);

obj1.c.d = 'DDDDD';
console.log(obj1);
