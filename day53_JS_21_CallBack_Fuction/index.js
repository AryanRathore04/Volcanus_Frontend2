// Callback Fuction

const sum = () => {
  let a = 10;
  let b = 20;
  console.log(`sum of ${a} and ${b} = ${a + b} `);

  const multiply = () => {
    let c = 20;

    console.log(`Multiplication of a+b  ${(a + b) * c}`);

    return (a + b) * c;
  }; 
  multiply();
};


