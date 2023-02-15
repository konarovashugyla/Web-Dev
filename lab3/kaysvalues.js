
function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; // 650
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) ); // 650

//task2
let user = {
    name: 'John',
    age: 30
  };

  function count(obj) {
    return Object.keys(obj).length;
  }
  
  alert( count(user) ); 