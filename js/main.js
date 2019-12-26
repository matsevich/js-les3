task1.onclick = function () {
  let x = +prompt('Enter first number');
  let y = +prompt('Enter second number');
  let z = prompt('Enter math sign ("+", "-", "*", "/")');
  let result = 0;
  if (z === "+") result = x + y;
  else if (z === "-") result = x - y;
  else if (z === "*") result = x * y;
  else if (z === "/") result = x / y;
  else alert('Don`t know what you wont...');
  alert(result);
  while(confirm('Do you want to solve another example?')) {
    x = +prompt('Enter first number');
    y = +prompt('Enter second number');
    z = prompt('Enter math sign ("+", "-", "*", "/")');
    result = 0;
    if (z === "+") result = x + y;
    else if (z === "-") result = x - y;
    else if (z === "*") result = x * y;
    else if (z === "/") result = x / y;
    else alert('Don`t know what you wont...');
    alert(result);
  }
}
task2.onclick = function () {
  let x = prompt('Enter the number');
  let z = prompt('In how many digits you want move it?');
  alert(x.substring(z) + x.substring(0, z));
}
task3.onclick = function () {
  let days =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  alert(days[6]);
  let i = 0;
  while(confirm('Do you want to see the next day?')) {
  alert(days[i]);
  i++;
}
}
task5.onclick = function () {
  confirm('Choose your number form 0 to 100')
    let n = 0;
    n = 50;
    for(i = 0; i <= n; i++) {
    let a = prompt('Your number is  < '+n+',  > '+n+' or == '+n+'?');
    if(a === '<') n = Math.round(49 / 2); 
    else if(a === '>') n = Math.round((51/2)+51); 
    else alert('Your number is '+n+''); break;
    } 
    for(i = 0; i <= n; i++){
    a = prompt('Your number is  < '+n+',  > '+n+' or == '+n+'?');
    if(a === '<') n = Math.round(25 / 2); 
    else if(a === '>') n = Math.round((25/2)+25); 
    else alert('Your number is '+n+''); break;
    }
    for(i = 0; i <= n; i++){
      a = prompt('Your number is  < '+n+',  > '+n+' or == '+n+'?');
      if(a === '<') n = Math.round(13 / 2); 
      else if(a === '>') n = Math.round((13/2)+13); 
      else alert('Your number is '+n+''); break;
      }
    for(i = 0; i <= n; i++){
      a = prompt('Your number is  < '+n+',  > '+n+' or == '+n+'?');
      if(a === '<') n = Math.round(7 / 2); 
      else if(a === '>') n = Math.round((7/2)+7); 
      else alert('Your number is '+n+''); break;
      }
    for(i = 0; i <= n; i++){
      a = prompt('Your number is  < '+n+',  > '+n+' or == '+n+'?');
      if(a === '<') n = Math.round(4 / 2); 
      else if(a === '>') n = Math.round((4/2)+4); 
      else alert('Your number is '+n+''); break;
      }
    for(i = 0; i <= n; i++){
      a = prompt('Your number is  < '+n+',  > '+n+' or == '+n+'?');
      if(a === '<') n = Math.round(2 / 2); 
      else if(a === '>') n = Math.round((2/2)+2); 
      else alert('Your number is '+n+''); break;
      }
    for(i = 0; i <= n; i++){
      a = prompt('Your number is  < '+n+',  > '+n+' or == '+n+'?');
      if(a === '<')  alert('Your number is '+0+'');
      }
    
}

  


