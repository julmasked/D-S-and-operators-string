//'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



const displayMovt = function (movements) {
  containerMovements.innerHTML = '';
  
  movements.forEach(function (mvt, i) {
    const type  = mvt > 0 ? 'deposit' : 'withdrawal'
    
    const html = `
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} 
        ${type}</div>
        <div class="movements__value">${mvt}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html)

  })
} 

///movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayInBal = function (arrB) {
  const ttBal = arrB.reduce((acc, val) =>
    acc + val, 0);
  labelBalance.textContent = `${ttBal}€`
}

const disDepoUsd = function (depo) {
  const income = depo.filter(value => value > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${(income)}€`
}

const displayOutBal = function (mov) {
  const outBal = mov.filter(bal => bal < 0).reduce((acc, val) => acc + val, 0);
  labelSumOut.textContent = `${Math.abs(outBal)}€`;
};

const displayInterest = function (mvt) {
  const ttCash = mvt.movements
    .filter(val => val > 0)
    .map(val => (val * (mvt.interestRate / 100)))
    .filter((int , i, arr) => int >=1)
    .reduce((acc, val) => acc + val, 0);
  labelSumInterest.textContent = `${ttCash}€`
}

const creatUsername = function (user) {
  user.forEach(function (names) {
    names.userName = names.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
    //console.log(userName);
  });
}

creatUsername(accounts);
console.log(accounts);

///// creating the logging for each user ////////////
//event handler
let currentAcc;
btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  
  // fing the usenamer by going through the accout array(uses argm of the function creatUsername)

  currentAcc = accounts.find(names => names.userName === inputLoginUsername.value);
  console.log(currentAcc);

  if (currentAcc.pin === Number(inputLoginPin.value)) {
    // display UI and welcome msg
    labelWelcome.textContent = `Welcome back, ${currentAcc.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //clear input field
    inputLoginUsername.value = inputLoginPin.value = ' '
    inputLoginPin.blur();

    // calculate balance
    displayInBal(currentAcc.movements);

    //displat summary
    displayMovt(currentAcc.movements)
    disDepoUsd(currentAcc.movements)
    displayOutBal(currentAcc.movements);
    displayInterest(currentAcc);
  }
  
});





/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//////////////// LOOPING ARRAYS     /////////////////////////////////



// for (const mvt of movements) {
//   if (mvt > 0) {
//     console.log(`your deposit is ${mvt}`);
//   } else {
//      console.log(`you withdraw ${Math.abs(mvt)}`);
//   }
// }

////////////   FOR EACH ///////////

/* //const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function (mvt, i, array) {
  if (mvt > 0) {
    console.log(`movement ${i}: your deposit is ${mvt}`);
  } else {
    console.log(`movement ${i}: you withdraw ${Math.abs(mvt)}`);
  }
}); */

////// MAPS AND SET

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${value} : ${key}`);
});
 //////////// set

// SET doesnt have a key since it shows simgle value so it output value as key so pay attention🚨 */



/////////// MAP METHOD ON ARRAY   ////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const convTo =  movements.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movements);
console.log(convTo);

const msgDepo = movements.map ((money, i) => 
  `movement ${i + 1}: your ${money > 0 ? 'deposit is' : 'your withdraw '} ${ Math.abs(money) }` 
);
  
//console.log(msgDepo);

////////////////    the filter methode //////////

const deposits = movements.filter(function (movv) {
  return movv > 0;
});

console.log(movements);
console.log(deposits);

////////// THE REDUCE METHODE //////////





