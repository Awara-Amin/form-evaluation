// 1
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

// 4*b
let isValid = false;

// 6*a
let passwordsMatch = false;

// 5*a
function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  // console.log(isValid);
  // Style main message for an error
  // message.textContent = 'please fill out all fields';
  // message.style.color = 'red';
  // messageContainer.style.borderColor = 'red';

  // 6*b  119
  if(!isValid){ // this one means if the password is not valid (here it means if isValid is false)
    message.textContent = 'please fill out all fields';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    // 8*a
    return; // here we add this to stop the process if the form is not valid
  }
  // 6*c
  // Check to see if passwords match
  if (password1El.value === password2El.value) { // if the passwords match then we want passwordsMatch to be True
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    // 8*b here is the same if the password does not match stoped here
    return;

  }
  // 7*a in another case the form can be submitted
  // if form is valid and password match
  if(isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

// 9*
function storeFormData(){
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email:form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // 10* Do somthing with user Data
  console.log(user);
}


// 2*b
function processFormData(e){
  // 3*
  e.preventDefault();
  // console.log(e);

  //4* Validate Form
  validateForm();

  // 11* submit Data if Valid
  if(isValid && passwordsMatch) {
    storeFormData();
  }
}


// 2*a
// Event Listener
form.addEventListener('submit', processFormData);
