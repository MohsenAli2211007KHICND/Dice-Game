function score(dice) {
  let die1 = 0;
  let die2 = 0;
  let die3 = 0;
  let die4 = 0;
  let die5 = 0;
  let die6 = 0;

  let result = 0;

  //    condition
  dice.forEach(element => {
    if(element===1){die1++}else if(element===2){die2++}else if(element===3){die3++}
    else if(element===4){die4++}else if(element===5){die5++}else if(element===2){die6++}
  });

  //  3's pair
  if (die1>= 3) {
    result += 1000;
  }
  if (die2 >= 3) {
    result += 200;
  }
  if (die3 >= 3) {
    result += 300;
  }
  if (die4 >= 3) {
    result += 400;
  }
  if (die5 >= 3) {
    result += 500;
  }
  if (die6 >= 3) {
    result += 600;
  }

  //  1's pair
  if (die1 > 0 && die1 !==3) {
    result += 100*(die1-3);
  }
  if (die5 > 0 && die5 !==3) {
    result += 50*(die5-3);
  }
  return result;
}

let response = score([1,1,1,3,1]);
console.log(response);
