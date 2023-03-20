const numeritos = [0, 00, 402, 0, 40, 123, 041, 2012, 5012, 5102, 512055];
let num = 0;
for (let i = 0; i < numeritos.length; i++) {
  num = numeritos[i];
  console.log({ i, num });
}

const recursiva = (numbersArray) => {
  if (numbersArray.length !== 0) {
    const firstNum = numbersArray[0];
    console.log(firstNum);
    numbersArray.shift();
    recursiva(numbersArray);
  }
};

recursiva(numeritos);
