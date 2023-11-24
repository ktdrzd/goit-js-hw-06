const input = document.getElementById("validation-input");
const expectedLength = input.getAttribute("data-length");

input.addEventListener("blur", function() {
  const value = input.value;
  input.classList.remove("valid", "invalid");

  if (value.length < expectedLength || value.length > expectedLength) {
    input.classList.add("invalid");
  } else {
    input.classList.add("valid");
  }
});

//const input = document.getElementById("validation-input");
//const length = input.getAttribute("data-length");
//
//input.addEventListener('blur', () => {
//    if (input.value.length === parseInt(length)) {
//        input.classList.remove('invalid');
//        input.classList.add('valid');
//    } else {
//        input.classList.remove('valid');
//        input.classList.add('invalid');
//    }
//})

//function onInputBlur(event) {
//    const userValue = event.currentTarget.value.length;
//    console.log(userValue);
//    const validLength = Number(inputEl.dataset.length);
//    console.log(validLength);
//    inputEl.classList.remove('valid', 'invalid');
//    if (userValue.length === minLength) {
//       inputEl.classList.add('valid');
//    } else {
//        inputEl.classList.add('invalid');
//    }
//}

//const inputEl = document.getElementById("valitadion-input");
//
//inputEl.addEventListener('input', onInputChange);
//inputEl.addEventListener('blur', onInputBlur);
//
//function onInputChange(event) {
//    console.log(event.currentTarget.value);
//}
//
//function onInputBlur(event) {
//    const userValue = event.currentTarget.value;
//    const minLength = 6;
//
//    inputEl.classList.remove('valid', 'invalid');
//
//   inputEl.classList.remove('valid', 'invalid');
//
//    if (userValue.length === minLength) {
//        inputEl.classList.add('valid');
//    } else {
//        inputEl.classList.add('invalid');
//    }
//}

