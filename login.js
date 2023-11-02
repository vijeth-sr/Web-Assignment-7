$(() => {
  const validateEmail = (email) => {
      const regex = /^[^\s@]+@northeastern\.edu$/;
      return regex.test(email);
  };

  const validateUsername = (username) => {
      const regex = /^[^\W_]{3,}$/;
      return regex.test(username);
  };

  const validatePassword = (password) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return regex.test(password);
  };

  const validateConfirmPassword = (password, confirmPassword) => {
      return password === confirmPassword;
  };

  const enableLoginButton = () => {
      const email = $('#email').val();
      const username = $('#username').val();
      const password = $('#password').val();
      const confirmPassword = $('#confirmPassword').val();
      if (validateEmail(email) && validateUsername(username) && validatePassword(password) && validateConfirmPassword(password, confirmPassword)) {
          $('#loginButton').prop('disabled', false);
      } else {
          $('#loginButton').prop('disabled', true);
      }
  };

  $('#email').on('input', () => {
      const email = $('#email').val();
      if (!validateEmail(email)) {
          $('#email').next('.error-message').text('Please enter a valid Northeastern email address.');
      } else {
          $('#email').next('.error-message').text('');
      }
      enableLoginButton();
  });

  $('#username').on('input', () => {
      const username = $('#username').val();
      if (!validateUsername(username)) {
          $('#username').next('.error-message').text('Username must be at least 3 characters long and not contain special characters or spaces.');
      } else {
          $('#username').next('.error-message').text('');
      }
      enableLoginButton();
  });

  $('#password').on('input', () => {
      const password = $('#password').val();
      if (!validatePassword(password)) {
          $('#password').next('.error-message').text('Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.');
      } else {
          $('#password').next('.error-message').text('');
      }
      enableLoginButton();
  });

  $('#confirmPassword').on('input', () => {
      const password = $('#password').val();
      const confirmPassword = $('#confirmPassword').val();
      if (!validateConfirmPassword(password, confirmPassword)) {
          $('#confirmPassword').next('.error-message').text('Passwords do not match.');
      } else {
          $('#confirmPassword').next('.error-message').text('');
      }
      enableLoginButton();
  });

  $('#loginForm').submit((event) => {
      event.preventDefault();
     
      alert('Logged in successfully!');
  });

  $('#loginForm').submit((event) => {
    event.preventDefault();
    // Add logic to handle login here

    // If login is successful, redirect to calculator.html
    window.location.href = 'calculator.html';
});

});



 

