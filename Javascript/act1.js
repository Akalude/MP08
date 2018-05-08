var elements = [3, 7, 9, 18, 24, 5, 7, 27, 32, 35, 42, 47];

function greaterThan18(elements) {
  var mas18 = 0
  for ( i = 0; i < elements.length; i++){
      if ( elements[i] > 18){
        mas18 = mas18 + elements[i];
      }
  }
  return mas18;
}

document.getElementById("A").innerHTML = greaterThan18(elements);


function greaterThan18Odd(elements) {
  var mas18par = 0
  for ( i = 0; i < elements.length; i ++){
    if ( elements[i] > 18){
      if (elements[i] % 2 == 0){
      mas18par = mas18par + elements[i];
    }
  }
}
  return mas18par;
}

document.getElementById("B").innerHTML = greaterThan18Odd(elements);


function greaterThan18OddEvenPositions(elements) {
  var mas18par2 = 0
  for ( i = 0; i < elements.length; i ++){
    if ( elements[i] > 18){
      if (elements[i] % 2 == 0){
        if ( i % 2 == 1){
          mas18par2 = mas18par2 + elements[i];
        }
      }
    }
  }
  return mas18par2;
}

document.getElementById("C").innerHTML = greaterThan18OddEvenPositions(elements);

function multiplyall(elements) {
  var mas18par2x = 1
  for ( i = 0; i < elements.length; i ++){
    if ( elements[i] > 18){
      if (elements[i] % 2 == 0){
        if ( i % 2 == 0){
          mas18par2x = mas18par2x * elements[i];
        }
      }
    }
  }
  return mas18par2x;
}

document.getElementById("D").innerHTML = multiplyall(elements);
