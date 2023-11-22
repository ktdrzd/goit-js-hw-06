const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = {};
  for (const element of event.target.elements) {
    if (element.name) {
      formData[element.name] = element.value;
    }
  }

  const allFieldsFilled = Object.values(formData).every(value => value.trim() !== '');

  if (allFieldsFilled) {
    console.log(formData);
    event.target.reset();
  } else {
    alert('Please fill in all fields.');
  }
}