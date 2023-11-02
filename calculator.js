$(() => {
  const validateNumber = (number, element) => {
      if (number.trim() === '') {
          element.next('.error-message').text('This field cannot be empty.');
          return false;
      } else if (isNaN(number)) {
          element.next('.error-message').text('Please enter a valid number.');
          return false;
      } else if (!isFinite(number)) {
          element.next('.error-message').text('Number is not finite.');
          return false;
      } else {
          element.next('.error-message').text('');
          return true;
      }
  };

  const performOperation = (operation) => {
      const number1 = $('#number1').val();
      const number2 = $('#number2').val();
      const isValidNumber1 = validateNumber(number1, $('#number1'));
      const isValidNumber2 = validateNumber(number2, $('#number2'));

      if (isValidNumber1 && isValidNumber2) {
          let result;
          switch (operation) {
              case 'add':
                  result = parseFloat(number1) + parseFloat(number2);
                  break;
              case 'subtract':
                  result = parseFloat(number1) - parseFloat(number2);
                  break;
              case 'multiply':
                  result = parseFloat(number1) * parseFloat(number2);
                  break;
              case 'divide':
                  if (parseFloat(number2) !== 0) {
                      result = parseFloat(number1) / parseFloat(number2);
                  } else {
                      $('#result').val('Cannot divide by zero');
                      return;
                  }
                  break;
              default:
                  result = 'Invalid Operation';
          }
          $('#result').val(result);
      }
  };

  $('#addButton').click(() => performOperation('add'));
  $('#subtractButton').click(() => performOperation('subtract'));
  $('#multiplyButton').click(() => performOperation('multiply'));
  $('#divideButton').click(() => performOperation('divide'));
});
