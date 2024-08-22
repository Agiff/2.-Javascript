const users = [
  {
    email: "john.doe@example.com",
    password: "asd",
    firstName: "John",
    lastName: "Doe",
    age: 29,
    hobby: "Reading",
    address: {
      street: "123 Maple Street",
      city: "Springfield",
      state: "IL",
      zip: "62704"
    }
  },
  {
    email: "jane.smith@example.com",
    password: "MyPassword@2024",
    firstName: "Jane",
    lastName: "Smith",
    age: 34,
    hobby: "Hiking",
    address: {
      street: "456 Oak Avenue",
      city: "Austin",
      state: "TX",
      zip: "73301"
    }
  },
  {
    email: "michael.brown@example.com",
    password: "Brownie#789",
    firstName: "Michael",
    lastName: "Brown",
    age: 41,
    hobby: "Photography",
    address: {
      street: "789 Pine Road",
      city: "Seattle",
      state: "WA",
      zip: "98101"
    }
  }
];

const loginForm = document.querySelector('#login-form');
const emailInput = loginForm.querySelector('#login-email');
const passwordInput = loginForm.querySelector('#login-password');

// Ver 1

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const emailInputValue = emailInput.value;
  const passwordInputValue = passwordInput.value;

  const userFound = users.find((user) => user.email === emailInputValue);

  if (!userFound) {
    alert('Email or Password is invalid');
    return
  }

  if (userFound.password !== passwordInputValue) {
    alert('Email or Password is invalid');
    return
  }

  window.location.href = 'dashboard.html';
})

// Ver 2

// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault();
  
//   const emailInputValue = emailInput.value;
//   const passwordInputValue = passwordInput.value;

//   const userFound = users.find((user) => user.email === emailInputValue);

//   if (userFound && userFound.password === passwordInputValue) {
//     alert('Login Success');
//   } else {
//     alert('Email or Password is invalid');
//   }
// })