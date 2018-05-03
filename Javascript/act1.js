var elements = [3, 7, 9, 18, 24, 5, 7, 27, 32, 35, 42, 47];

function greaterThan18(elements) {
  var mas18 = 0
  for ( i = 0; i < elements.length; i++){
      if ( elements[i] > 18){
        mas18 = mas18 + elements[i];
      } else {
        console.log("Aquí irían los elementos menores que 18, pero no sé hacerlo")
      }
  }
  return mas18;
}

document.getElementById("A").innerHTML = greaterThan18(elements);


function greaterThan18Odd(elements) {
  return 0;
}

document.getElementById("B").innerHTML = greaterThan18Odd(elements);

function greaterThan18OddEvenPositions(elements) {
  return 0;
}

document.getElementById("C").innerHTML = greaterThan18OddEvenPositions(elements);
