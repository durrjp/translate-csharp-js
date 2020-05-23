function main() {
  // Put your code here
  const Roll = () => {
    const dieValue = Math.floor(Math.random() * 6) + 1 
    return dieValue 
  }
  console.log("Let's roll some dice, baby!");
  console.log("---------------------------");
  const dieImage = (dieValue) => {
    switch (dieValue) {
      case 1:
        var dieString = "\u2680";
        return dieString;
      case 2:
        var dieString = "\u2681";
        return dieString;
      case 3:
        var dieString = "\u2682";
        return dieString;
      case 4:
        var dieString = "\u2683";
        return dieString;
      case 5:
        var dieString = "\u2684";
        return dieString;
      case 6:
        var dieString = "\u2685";
        return dieString;
    }
  }
  for (let i = 0; i < 10; i++) {
    const die1Number = Roll();
    const die2Number = Roll();
    const die1 = dieImage(die1Number)
    const die2 = dieImage(die2Number)
    let message = `${die1} + ${die2} == ${die1 + die2}`;
    if (die1 === die2)
    {
        message += " DOUBLES!";
    }

    console.log(message);
    
  }


}

main();