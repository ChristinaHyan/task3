let task3 = prompt('Please enter here a text of 5 symbols.');
let num = 0;

// 1st char

switch (task3.charAt(0)) {
    case 'a' : 
    case 'e':
    case 'u':
    case 'i':
    case 'o':
      console.log(num += 4);
      break;
    case 'z':
      console.log(num += 5);
      break;
    default:
      console.log(num -= 1);
      break;
}

// 2nd char

switch (task3.charAt(1)) {
    case 'a' : 
    case 'e':
    case 'u':
    case 'i':
    case 'o':
      console.log(num += 4);
      break;
    case 'z':
      console.log(num += 5);
      break;
    default:
      console.log(num -= 1);
      break;
  }

  // 3rd char

  switch (task3.charAt(2)) {
    case 'a' : 
    case 'e':
    case 'u':
    case 'i':
    case 'o':
      console.log(num += 4);
      break;
    case 'z':
      console.log(num += 5);
      break;
    default:
      console.log(num -= 1);
      break;
  }

  task3.length < 5 || task3.length > 5 ? alert('Make it 5 symbols please.') : alert(`The result is ${num}`);