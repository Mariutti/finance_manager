const valueInput = document.getElementById('value-input');
const descriptionInput = document.getElementById('description-input');

var mesAtual = 'janeiro';
var entradas = 8000;

var saidas = 400;
var saldo = 1000;

var earningsList = [
  {
    description: 'Salário',
    value: 4000,
  },
  {
    description: 'Freela',
    value: 400,
  },
];

var expensesList = [
  {
    description: 'Alimentação',
    value: 650,
  },
  {
    description: 'PSN',
    value: 40,
  },
  {
    description: 'Energia',
    value: 500,
  },
];

// Mês
document.getElementById('month').innerHTML = mesAtual;

// Entradas
document.getElementById('total-earnings').innerHTML = entradas;

// Saídas
document.getElementById('total-expenses').innerHTML = saidas;

// Saldo
document.getElementById('final-balance').innerHTML = saldo;

function addFinancialMovement() {
  const earningRadioValueIsChecked =
    document.getElementById('earning-radio').checked;

  if (earningRadioValueIsChecked) {
    addEarning();
  } else {
    addExpense();
  }
}

function addExpense() {
  const newExpense = {
    description: descriptionInput.value,
    value: valueInput.value,
  };
  expensesList.push(newExpense);

  var li = document.createElement('li');
  li.innerText = `${newExpense.description}: R$ ${newExpense.value}`;

  document.getElementById('expenses-list').appendChild(li);
}

function addEarning() {
  const newExpense = {
    description: descriptionInput.value,
    value: valueInput.value,
  };
  expensesList.push(newExpense);

  var li = document.createElement('li');
  li.innerText = `${newExpense.description}: R$ ${newExpense.value}`;

  document.getElementById('earnings-list').appendChild(li);
}

function createLists(array, listId) {
  for (let item of array) {
    var li = document.createElement('li');
    li.innerText = `${item.description}: R$ ${item.value}`;
    document.getElementById(`${listId}`).appendChild(li);
  }
}

createLists(earningsList, 'earnings-list');

createLists(expensesList, 'expenses-list');
