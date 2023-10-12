

const makeTransletion = document.querySelector('.form__save');
const form = document.querySelector('.form');
const firstInput = document.querySelector('.form__first_input');
const secondInput = document.querySelector('.form__second_input');
const firstValue = document.querySelector('.currency-select-first');
const secondValue = document.querySelector('.currency-select-second'); 



console.log(firstValue.value)

makeTransletion.addEventListener('click', (evt) => {
    evt.preventDefault();
    takeValies();
  });


  function takeValies(){
    fetch('https://open.er-api.com/v6/latest/USD')
            .then((response) => response.json())
            .then((data) =>  changeValies(data.rates))

  };

  function changeValies(data){
    secondInput.value  = firstInput.value * data[firstValue.value] * data[secondValue.value] ;
  };