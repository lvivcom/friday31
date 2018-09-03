function square_equation() {
  var a = document.sq.sq_a.value;
  var b = document.sq.sq_b.value;
  var c = document.sq.sq_c.value;
  var ans = document.getElementById("ansver");

  var d = b * b - 4 * a * c;
  if ( d < 0 ) {
    string = "пара комплексно-сопряженных корней<br>x<sub>1</sub> = (";
    string += - b / ( 2 * a );
    string += ", ";
    string += Math.sqrt( -d ) / ( 2 * a );
    string += "), x<sub>2</sub> = (";
    string += - b / ( 2 * a);
    string += ", ";
    string += - Math.sqrt( -d ) / ( 2 * a );
    string += ").";
  } else {
      if ( d == 0 ) {
        string = "два одинаковых вещественных корня:<br>x<sub>1</sub> = x<sub>2</sub> = ";
        string += -b / ( 2 * a );
        string += ".";
      } else {
        string = "два различных вещественных корня:<br>x<sub>1</sub> = ";
        string += -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
        string += ", x<sub>2</sub> = ";
        string += -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
        string += ".";
      }
  }
  ans.innerHTML = string;
}





//const ansver = prompt('who are you?');
//const nextansver  = prompt('You really ' + ansver + '? Write yes or no');
//if (nextansver == 'yes') {alert('Ok ' + ansver + ' yo is submitted' );} 
//else if (nextansver == 'no') {alert('Sorry but you must write you name. Try again.' );}
//return (ansver)













// const productName = 'iPhone X';
// alert(productName);

// productName = 'Nokia 3200';
// alert(productName);


// const userName = prompt('Enter your name');
// const greetings = userName + ', hello!';

// alert(greetings);

// const userAge = parseFloat(prompt('Enter your age'));
// alert(userAge);
// // const nextAge = userAge + 1;
// const nextAge = addOne(userAge);
// alert(nextAge);

// function addOne(val) {
//     const result = val + 1;
//     return result;
// }

// // Should increase price by 10%
// function calPrice(price) {
//     const result = price * 1.1;
//     return result;
// }

// const oldPrice = parseFloat(prompt('Enter price'));
// const newPrice = calPrice(oldPrice);
// alert(newPrice);

//0000000000000000000000000000000000000000
//function checkAge(age) {
//    if (age >= 18 && age < 100) {
//        return 'You are adult';
//    } else if (age > 100) {
 //       return 'You are middle age';
//    } else {
//        return 'You are kid';
 //   }
//}

//const userAge = parseInt(prompt('Enter your age'));
//const message = checkAge(userAge);
//alert(message);
//000000000000000000000000000000000000000000

//const a = parseFloat(prompt('Enter A'));

//function solveQuadr(a, b, c) {
//    return 'X1 = ' + x1 + ' X2 = ' + x2;
//}

//const result solveQuadr(a,b,c);
//alert(result);

//const ansver = prompt('who are you?');
//const nextansver  = prompt('You really ' + ansver + '? write 1 if yes or 2 no');
//function checkAnsver(nextansver) {
//if (message == 1) 
//{return 'Congratulation ' + ansver + ' you is submitted';}
//else {return 'You are kid';}}

//alert(checkAnsver);
//const nextansver  = prompt('You really ' + ansver + '? write 1 if yes or 2 no');



