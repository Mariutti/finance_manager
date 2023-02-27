// deixar o modal ligado para testes
// var modal = document.querySelector('.modal');
// modal.style.display = 'block';

const expenseDescription = document.querySelector('#description-input');
const numberOfParticipants = document.querySelector('#partNumb-input');
const expenseValue = document.querySelector('#value-input');

class GroupExpense {
  title;
  #numberOfParticipants;
  partialValue;
  amount;
  #totalGroupExpenses = 0;

  constructor(title, numberOfParticipants, amount) {
    this.title = title;
    this.#numberOfParticipants = numberOfParticipants;
    this.partialValue = amount / numberOfParticipants;
    this.amount = Number(amount);
  }
}

class GroupExpensesManager {
  groupExpenseList;

  constructor(initialGroupExpenseList = []) {
    this.groupExpenseList = initialGroupExpenseList;
    this.createScreen();
  }

  createScreen() {
    this.createHtmlListFromArray(this.groupExpenseList, '#groupExpenses-list');
  }

  addGroupExpenses(title, numberOfParticipants, amount) {
    const addedGroupExpense = new GroupExpense(
      title,
      numberOfParticipants,
      amount
    );
    this.groupExpenseList.push(addedGroupExpense);
    this.updateScreen(addedGroupExpense, '#groupExpenses-list');
    this.clearInputs();
  }

  updateScreen(newItem, selector) {
    this.createListItem(newItem, selector);
    // this.updateIndicators();
  }

    // updateIndicators() {
    //   this.#totalGroupExpenses = this.groupExpenseList.reduce(
    //     (accumulator, currentValue) =>
    //       (accumulator += Number(currentValue.value)),
    //     0
    //   );}

  createHtmlListFromArray(objectsArray, selector) {
    objectsArray.forEach(element => {
      this.createListItem(element, selector);
      console.log('teste')
    });
  }

  createListItem(object, selector) {
    var li = document.createElement('li');
    li.innerText = `${object.title}: R$ ${object.partialValue}`;

    document.querySelector(selector).appendChild(li);
  }

  clearInputs() {
    expenseDescription.value = '';
    expenseValue.value = 0;
    numberOfParticipants.value = 0;
  }
}


function addGroupExpenses() {
    const groupExpensesManager = new GroupExpensesManager();
  const expenseDescription = document.querySelector('#description-input').value;
  const numberOfParticipants = document.querySelector('#partNumb-input').value;
  const expenseValue = document.querySelector('#value-input').value;

  console.log('click');
  groupExpensesManager.addGroupExpenses(
    expenseDescription,
    numberOfParticipants,
    expenseValue
  );
}
