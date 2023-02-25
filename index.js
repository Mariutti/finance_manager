const monthNames = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];
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

class FinancialTransaction {
  description;
  value;

  constructor(description, value) {
    this.description = description;
    this.value = Number(value);
  }
}

class FinancialTransactionsManager {
  expensesList;
  earningsList;
  #totalEarnings = 0;
  #totalExpenses = 0;
  #finalBalance = 0;

  constructor(initialExpenses = [], initialEarnings = []) {
    this.expensesList = initialExpenses;
    this.earningsList = initialEarnings;

    this.createScreen();
  }

  createScreen() {
    if (this.expensesList > 0) {
      this.createHtmlListFromArray(this.expensesList, 'expenses-list');
    }
    if (this.earningsList > 0) {
      this.createHtmlListFromArray(this.earningsList, 'earnings-list');
    }

    this.updateIndicators();
  }

  addEarning(description, value) {
    const addedFinancialTransaction = new FinancialTransaction(
      description,
      value
    );
    this.earningsList.push(addedFinancialTransaction);
    this.updateScreen(addedFinancialTransaction, 'earnings-list');
    this.clearInputs();

    window.alert('A entrada foi adicionada!');
  }

  addExpense(description, value) {
    const addedFinancialTransaction = new FinancialTransaction(
      description,
      value
    );
    this.expensesList.push(addedFinancialTransaction);
    this.updateScreen(addedFinancialTransaction, 'expenses-list');
    this.clearInputs();

    window.alert('A despesa foi adicionada!');
  }

  updateScreen(newItem, htmlListId) {
    this.createListItem(newItem, htmlListId);
    this.updateIndicators();
  }

  updateIndicators() {
    this.#totalEarnings = this.earningsList.reduce(
      (accumulator, currentValue) =>
        (accumulator += Number(currentValue.value)),
      0
    );

    this.#totalExpenses = this.expensesList.reduce(
      (accumulator, currentValue) =>
        (accumulator += Number(currentValue.value)),
      0
    );

    this.#finalBalance = this.#totalEarnings - this.#totalExpenses;

    document.getElementById('final-balance').innerHTML = this.#finalBalance;
    document.getElementById('total-expenses').innerHTML = this.#totalExpenses;
    document.getElementById('total-earnings').innerHTML = this.#totalEarnings;
  }

  createHtmlListFromArray(objectsArray, listElementId) {
    for (var i = 0; i < objectsArray.length; i++) {
      this.createListItem(objectsArray[i], listElementId);
    }
  }

  createListItem(object, listElementId) {
    var li = document.createElement('li');
    li.innerText = `${object.description}: R$ ${object.value}`;

    document.getElementById(listElementId).appendChild(li);
  }

  clearInputs() {
    descriptionInput.value = '';
    valueInput.value = 0;
  }
}

const financialTransactionsManager = new FinancialTransactionsManager();

function addFinancialTransaction() {
  const earningRadioValueIsChecked =
    document.getElementById('earning-radio').checked;

  const isValidForm = descriptionInput.value.length > 0 && valueInput.value > 0;

  if (isValidForm) {
    if (earningRadioValueIsChecked) {
      financialTransactionsManager.addEarning(
        descriptionInput.value,
        valueInput.value
      );
    } else {
      financialTransactionsManager.addExpense(
        descriptionInput.value,
        valueInput.value
      );
    }
  } else {
    window.alert('O formulário está inválido!');
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

for (var i = 0; i < earningsList.length; i++) {
  var li = document.createElement('li');
  li.innerText = `${earningsList[i].description}: R$ ${earningsList[i].value}`;

  document.getElementById('earnings-list').appendChild(li);
}

for (var i = 0; i < expensesList.length; i++) {
  var li = document.createElement('li');
  li.innerText = `${expensesList[i].description}: R$ ${expensesList[i].value}`;

  document.getElementById('expenses-list').appendChild(li);
}
